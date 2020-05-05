import chai from 'chai';
import * as D from '../../../src/DocumentAnnotation';
import {
  getHeaderColumns,
  getHeaderRows,
  getLabeledBoundingBox,
  getPage,
  getTableCell,
} from './Sample';
import * as IO from 'fp-ts/lib/IO';
import chaiLike from 'chai-like';
import { apply, map, pipe, values } from 'ramda';

chai.use(chaiLike);
const { expect } = chai;

describe('DocumentAnnotation', function () {
  describe('#makeTable()', function () {
    let makeTable: IO.IO<D.Table>;

    before(function () {
      const labeledBoundingBox = getLabeledBoundingBox();
      const page = getPage();
      makeTable = D.makeTable(labeledBoundingBox)(page);
    });

    it('should return the correct column headers', function () {
      const table = makeTable();
      const actualColumnHeaders = map(D.toTextCell, table.columnHeaders);

      const expectedColumnHeaders = map(D.makeTextCell, getHeaderColumns());

      expect(actualColumnHeaders).to.be.like(expectedColumnHeaders);
    });

    it('should return the correct row headers', function () {
      const table = makeTable();
      const actualRowHeaders = map(D.toTextCell, table.rowHeaders);

      const expectedRowHeaders = map(D.makeTextCell, getHeaderRows());

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

      const expectedTableCells = map(apply(getTableCell), [
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
});
