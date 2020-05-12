import chai from 'chai';
import * as C from '../../../src/Comparable';
import * as Sample from './Sample';
import * as R from 'fp-ts/lib/Reader';
import { keys, pipe, prop, test as regExpTest } from 'ramda';
import chaiLike from 'chai-like';
import { getLeafOptionsFromGettable } from '../../../src/Comparable';
import { mergeForestByPage } from '../../../src/DocumentAnnotation';

chai.use(chaiLike);
const { expect } = chai;

describe('Comparable', function () {
  describe('#fromTable()', function () {
    let fromTable: R.Reader<C.FromTableOptions, C.Tree>;

    describe('When the Table is split by columns', function () {
      before(function () {
        const table = Sample.getTableByColumns();
        fromTable = C.fromTable(table);
      });

      it('should return a tree with keys matching its header when no key predicate is given', function () {
        const tree = fromTable({
          splitBy: 'column',
        });

        const actualKeys = keys(tree);
        const expectedKeys = Sample.getShareClasses();

        expect(actualKeys).to.have.members(expectedKeys);
      });

      it('should return a tree with keys matching its the key predicate', function () {
        const tree = fromTable({
          key: regExpTest(/^ISIN/),
          splitBy: 'column',
        });

        const actualKeys = Sample.keysOf(tree);
        const expectedKeys = Sample.getISINs();

        expect(actualKeys).to.have.members(expectedKeys);
      });

      it('should contain the original key as value of its intersect header', function () {
        const actualTree = fromTable({
          key: regExpTest(/^ISIN/),
          splitBy: 'column',
        });

        const expectedTree = Sample.getTree();
        expect(actualTree).to.be.like(expectedTree);
      });
    });

    describe('When the Table is split by rows', function () {
      before(function () {
        const table = Sample.getTableByRows();
        fromTable = C.fromTable(table);
      });

      it('should return a tree with keys matching its header when no key predicate is given', function () {
        const tree = fromTable({
          splitBy: 'row',
        });

        const actualKeys = Sample.keysOf(tree);

        const expectedKeys = [
          'USD',
          'HKD',
          'H2-AUD',
          'H2-CAD',
          'H2-RMB',
          'H2-NZD',
          'H2-EUR',
          'H2-GBP',
          'H2-SGD',
        ];

        expect(actualKeys).to.have.members(expectedKeys);
      });

      it('should return a tree with keys matching its the key predicate', function () {
        const tree = fromTable({
          key: regExpTest(/^Annualised/),
          splitBy: 'row',
        });

        const actualKeys = Sample.keysOf(tree);
        const expectedKeys = [
          '4.94%',
          '4.87%',
          '4.41%',
          '4.33%',
          '5.63%',
          '4.38%',
          '1.23%',
          '3.22%',
          '4.56%',
        ];

        expect(actualKeys).to.have.members(expectedKeys);
      });
    });
  });

  describe('#fromBranch()', function () {
    let fromBranch: R.Reader<C.FromBranchOptions, C.Tree>;

    describe('With Single Level Branch', function () {
      before(function () {
        const descendant = Sample.getDescendant();
        fromBranch = C.fromBranch(descendant);
      });

      it('should return a tree with labels and tables matching the provided predicate', function () {
        const actualTree = fromBranch([
          {
            predicate: regExpTest(/^Share Class/),
            key: regExpTest(/^ISIN/),
            splitBy: 'column',
          },
        ]);

        const expectedTree = {
          title: {
            'Fund Details': {
              value: 'Fund Details',
            },
          },
          table: {
            'Share Class': Sample.getTree(),
          },
        };

        expect(actualTree).to.be.like(expectedTree);
      });

      it('should return a tree with only cell properties when no tables matches the predicate', function () {
        const actualTree = fromBranch([
          {
            predicate: regExpTest(/^Dividend/),
            key: regExpTest(/^ISIN/),
            splitBy: 'column',
          },
        ]);

        const expectedTree = {
          title: {
            'Fund Details': {
              value: 'Fund Details',
            },
          },
          table: {},
        };

        expect(actualTree).to.be.like(expectedTree);
      });

      it('should return a tree with only cell properties when no predicate has been provided', function () {
        const actualTree = fromBranch([]);

        const expectedTree = {
          title: {
            'Fund Details': {
              value: 'Fund Details',
            },
          },
          table: {},
        };

        expect(actualTree).to.be.like(expectedTree);
      });
    });

    describe('With Nested Branch', function () {
      before(function () {
        const branch = Sample.getBranch();
        fromBranch = C.fromBranch(branch);
      });

      it('should return a nested tree with child matching the nested branch', function () {
        const actualTree = fromBranch([]);

        const expectedTree = {
          split_cell: {
            title: {
              'Statistics Summary': {
                value: 'Statistics Summary',
              },
              'Dividend History?': {
                value: 'Dividend History?',
              },
            },
          },
        };

        expect(actualTree).to.be.like(expectedTree);
      });

      it('should return a nested tree with table matching the predicates', function () {
        const actualTree = fromBranch([
          {
            predicate: regExpTest(/^Sector Allocation \(%\)/),
            splitBy: 'row',
            mergeKey: true,
          },
          {
            predicate: regExpTest(/^Credit Rating/),
            splitBy: 'row',
            mergeKey: true,
          },
        ]);

        const expectedTree = {
          bar_chart: {
            'Sector Allocation (%)': {
              CORPORATE: C.makeLeaf('10.0'),
            },
            'Credit Rating Allocation (%)': {
              AAA: C.makeLeaf('61.9'),
            },
          },
          split_cell: {
            title: {
              'Statistics Summary': C.makeLeaf('Statistics Summary'),
              'Dividend History?': C.makeLeaf('Dividend History?'),
            },
          },
        };

        expect(actualTree).to.be.like(expectedTree);
      });
    });
  });

  describe('#fromForest()', function () {
    it('should return a Tree when no format options is provided', function () {
      const forest = Sample.getComplexForest();
      const result = C.fromForest(forest)([]);

      expect(result).to.satisfy(C.isTree);
    });

    it('should return a Tree when some format options is provided', function () {
      const forest = Sample.getComplexForest();
      const result = C.fromForest(forest)([
        {
          predicate: regExpTest(/Sector Allocation/),
          mergeKey: true,
          splitBy: 'row',
        },
        {
          predicate: regExpTest(/Credit Rating/),
          mergeKey: true,
          splitBy: 'row',
        },
        {
          predicate: regExpTest(/Country\/Location Allocation/),
          mergeKey: true,
          splitBy: 'row',
        },
        {
          predicate: regExpTest(/Top 10 Holdings/),
          splitBy: 'row',
        },
      ]);

      expect(result).to.satisfy(C.isTree);
    });
  });

  describe('#getLeafOptionsFromGettable()', function () {
    it('should return a LeafOptions which when provided to fromForest retrieve the appropriate Tree', function () {
      const gettable = Sample.getGettable();
      const forest = Sample.getCompleteForest();
      const leafOptions = getLeafOptionsFromGettable(gettable);

      const actualTree = C.fromForest(forest)([leafOptions]);
      const expectedTree = {
        performance: {
          table: {
            'Cumulative Returns': {},
          },
        },
      };

      expect(actualTree).to.be.like(expectedTree);
    });
  });

  describe('#applyPath()', function () {
    it('should return the Node at the end of the Path', function () {
      const gettable = Sample.getGettable();
      const forest = Sample.getCompleteForest();

      const actualNode = pipe(
        pipe(
          C.fromForest,
          R.local(pipe(getLeafOptionsFromGettable, (value) => [value]))
        ),
        R.chain(pipe(C.applyPath, R.local(prop('attribute'))))
      )(forest)(gettable);

      const expectedNode = Sample.getComparableNode();

      expect(actualNode).to.be.like({
        value: expectedNode,
      });
    });
  });

  describe('#applyGettables()', function () {
    it('should return a Tree with appropriate table values.', function () {
      const gettables = Sample.getGettables();
      const forestByPage = Sample.getCompleteForestByPage();

      const actualTree = pipe(
        mergeForestByPage,
        C.applyGettables
      )(forestByPage)(gettables);

      const expectedTree = Sample.getFlatComparableTree();

      expect(actualTree).to.be.like(expectedTree);
    });
  });
});
