import chai from 'chai';
import * as D from '../../../src/DocumentAnnotation';
import * as Sample from './Sample';
import * as IO from 'fp-ts/lib/IO';
import * as RIO from '../../../src/fp-ts/ReaderIO';
import chaiLike from 'chai-like';
import { all, apply, map, pipe, values } from 'ramda';
import { LabeledBoundingBox } from '../../../src/Vertex';
import { BoundingBoxes } from '../../../src/TableAnnotation';
import { getTableAnnotation, getTextAnnotation } from './Sample';

chai.use(chaiLike);
const { expect } = chai;

describe('DocumentAnnotation', function () {
  describe('#makeTable()', function () {
    let makeTable: IO.IO<D.Table>;

    before(function () {
      const labeledBoundingBox = Sample.getTableBoundingBox();
      const page = Sample.getPage();
      makeTable = D.makeTable(labeledBoundingBox)(page);
    });

    it('should return the correct column headers', function () {
      const table = makeTable();
      const actualColumnHeaders = map(D.toTextCell, table.columnHeaders);

      const expectedColumnHeaders = map(
        D.makeTextCell,
        Sample.getHeaderColumns()
      );

      expect(actualColumnHeaders).to.be.like(expectedColumnHeaders);
    });

    it('should return the correct row headers', function () {
      const table = makeTable();
      const actualRowHeaders = map(D.toTextCell, table.rowHeaders);

      const expectedRowHeaders = map(D.makeTextCell, Sample.getHeaderRows());

      expect(actualRowHeaders).to.be.like(expectedRowHeaders);
    });

    it('should return the correct intersect header', function () {
      const table = makeTable();
      const actualRowHeaders = D.toTextCell(table.intersectHeader);

      const expectedRowHeaders = D.makeTextCell('Top 10 Holdings');

      expect(actualRowHeaders).to.be.like(expectedRowHeaders);
    });

    it('should return TableCells with the correct headers and body', function () {
      const table = makeTable();
      const actualTableCells = pipe(
        values,
        map(D.toTextTableCell)
      )(table.cellById);

      const expectedTableCells = map(apply(Sample.getTableCell), [
        ['UNITED STATES', 0, 0],
        ['10.5', 0, 1],
        ['OTHERS', 1, 0],
        ['6.4', 1, 1],
        ['UNITED STATES', 2, 0],
        ['6.1', 2, 1],
        ['UNITED STATES', 3, 0],
        ['5.0', 3, 1],
        ['UNITED STATES', 4, 0],
        ['4.9', 4, 1],
        ['UNITED STATES', 5, 0],
        ['4.9', 5, 1],
        ['INDONESIA', 6, 0],
        ['4.1', 6, 1],
        ['BRAZIL', 7, 0],
        ['', 7, 1],
        ['UNITED STATES', 8, 0],
        ['3.7', 8, 1],
        ['UNITED STATES', 9, 0],
        ['3.5', 9, 1],
        ['', 10, 0],
        ['53.1', 10, 1],
      ]);

      expect(actualTableCells).to.have.deep.members(expectedTableCells);
    });
  });

  describe('#makeLeaf()', function () {
    let makeLeaf: RIO.ReaderIO<LabeledBoundingBox, D.Leaf>;

    before(function () {
      const page = Sample.getPage();
      makeLeaf = (boundingBox: LabeledBoundingBox): IO.IO<D.Leaf> =>
        D.makeLeaf(boundingBox)(page);
    });

    it('should return a Cell when the given boundingBox does not contain rows or columns', function () {
      const boundingBox = Sample.getTitleBoundingBox();
      const leaf = makeLeaf(boundingBox)();

      expect(leaf).to.satisfy(D.isCell);
    });

    it('should return a Table when the given boundingBox contain rows and columns', function () {
      const boundingBox = Sample.getTableBoundingBox();
      const leaf = makeLeaf(boundingBox)();

      expect(leaf).to.satisfy(D.isTable);
    });
  });

  describe('#makeForest()', function () {
    let makeTree: RIO.ReaderIO<BoundingBoxes, D.Forest>;

    before(function () {
      const page = Sample.getPage();
      makeTree = (boundingBoxes: BoundingBoxes): IO.IO<D.Forest> =>
        D.makeForest(boundingBoxes)(page);
    });

    it('should return only leafs when given boundingBoxes with no overlaps', function () {
      const boundingBoxes = Sample.getChildlessBoundingBoxes();
      const tree = makeTree(boundingBoxes)();
      const children = values(tree);

      expect(children).to.satisfy(all(D.isLeaf)).and.not.be.empty;
    });

    it('should return only branches when given boundingBoxes with no orphaned boxes', function () {
      const boundingBoxes = Sample.getNestedBoundingBoxes();
      const tree = makeTree(boundingBoxes)();
      const children = values(tree);

      expect(children).to.satisfy(all(D.isBranch)).and.not.be.empty;
    });

    it('should return a branch with its containing Cell and Table', function () {
      const boundingBoxes = Sample.getNestedBoundingBoxes();
      const tree = makeTree(boundingBoxes)();

      const actualChildren = values(tree);
      const expectedChildren = [
        {
          label: 'group',
          children: [
            {
              label: 'table',
            },
            {
              label: 'title',
            },
          ],
        },
      ];

      expect(actualChildren).to.be.like(expectedChildren);
    });
  });

  describe('#make()', function () {
    it('should return a DocumentAnnotation', function () {
      const tableAnnotation = getTableAnnotation();
      const textAnnotation = getTextAnnotation();

      const result = D.make(tableAnnotation)(textAnnotation)();

      expect(result).to.satisfy(D.isDocumentAnnotation);
    });
  });
});
