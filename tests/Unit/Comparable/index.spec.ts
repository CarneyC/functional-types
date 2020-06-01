import chai from 'chai';
import * as C from '../../../src/Comparable';
import * as Sample from './Sample';
import * as R from 'fp-ts/lib/Reader';
import { keys, pipe, prop, test as regExpTest } from 'ramda';
import chaiLike from 'chai-like';
import chaiThings from 'chai-things';
import { DocumentAnnotation } from '../../../src/DocumentAnnotation';

chai.use(chaiLike);
chai.use(chaiThings);
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

        expect(actualKeys).to.include.members(expectedKeys);
      });

      it('should return a tree with keys matching its the key predicate', function () {
        const tree = fromTable({
          key: regExpTest(/^ISIN/),
          splitBy: 'column',
        });

        const actualKeys = Sample.keysOf(tree);
        const expectedKeys = Sample.getISINs();

        expect(actualKeys).to.include.members(expectedKeys);
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

        expect(actualKeys).to.include.members(expectedKeys);
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

        expect(actualKeys).to.include.members(expectedKeys);
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
            },
          },
        };

        expect(actualTree).to.be.like(expectedTree);
      });

      it('should return a nested tree with table matching the predicates', function () {
        const actualTree = fromBranch([
          {
            predicate: regExpTest(/^Currency Allocation/),
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
            'Currency Allocation (%)': {
              USD: C.makeLeaf('97.7'),
            },
            'Credit Rating Allocation (%)': {
              BB: C.makeLeaf('11.3'),
            },
          },
          split_cell: {
            title: {
              'Statistics Summary': C.makeLeaf('Statistics Summary'),
            },
          },
        };

        expect(actualTree).to.be.like(expectedTree);
      });
    });
  });

  describe('#fromForest()', function () {
    it('should return a Tree when no format options is provided', function () {
      const forest = Sample.getForestByLabel();
      const result = C.fromForest(forest)([]);

      expect(result).to.satisfy(C.isTree);
    });

    it('should return a Tree when some format options is provided', function () {
      const forest = Sample.getForestByLabel();
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
      const forest = Sample.getForestByLabel();
      const leafOptions = C.getLeafOptionsFromGettable(gettable);

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
      const forest = Sample.getForestByLabel();
      const getNodeFromGettable = pipe(
        pipe(
          C.fromForestByLabel,
          R.local(pipe(C.getLeafOptionsFromGettable, (value) => [value]))
        ),
        R.chain(pipe(C.applyPath, R.local(prop('attribute'))))
      )(forest);

      const gettable = Sample.getGettable();

      const actualNode = getNodeFromGettable(gettable);
      const expectedNode = Sample.getComparableNode();

      expect(actualNode).to.be.like({
        value: {
          'NAV-NAV (%)': expectedNode,
        },
      });
    });
  });

  describe('#applyGettables()', function () {
    it('should return a Tree with appropriate table values.', function () {
      const gettables = Sample.getGettables();
      const forest = Sample.getForestByLabel();

      const actualTree = pipe(
        C.applyGettables,
        R.chain(C.postProcessTree)
      )(forest)(gettables);

      const expectedTree = Sample.getFlatComparableTree();

      expect(actualTree).to.be.like(expectedTree);
    });
  });

  describe('#translateNode()', function () {
    it('should return a node with all children translated.', function () {
      const replacements = Sample.getReplacements();
      const node = Sample.getTranslationNode();

      const actualNode = C.translateNode(node)(replacements);

      const expectedNode = {
        nav: {
          '1_year': {
            value: '6.31',
          },
          '3_years': {
            value: '7.39',
          },
          '5_years': {
            value: '13.23',
          },
        },
      };

      expect(actualNode).to.be.like(expectedNode);
    });
  });

  describe('With DocumentAnnotations', function () {
    let annotation: DocumentAnnotation;

    before(function () {
      annotation = Sample.getDocumentAnnotation();
    });

    describe('#applySchema()', function () {
      it('should return a Tree with appropriate table values split by files.', function () {
        const schema = Sample.getSchema();
        const annotations = [annotation];

        const actualTreeByFile = C.applySchema(annotations)(schema);

        const expectedTreeByFile = {
          'hk_allianz_flexi_asia_bond_am_factsheet_en_201908.pdf': Sample.getFlatComparableTree(),
        };

        expect(actualTreeByFile).to.be.like(expectedTreeByFile);
      });
    });

    describe('#makeComparables()', function () {
      it('should contains a Comparable with appropriate table values.', function () {
        const schema = Sample.getSchema();
        const annotations = [annotation];

        const actualComparables = C.makeComparables(annotations)(schema)();

        const expectedComparable = {
          schema_id: 'generic_factsheet_en',
          files: ['hk_allianz_flexi_asia_bond_am_factsheet_en_201908.pdf'],
          attributes: Sample.getFlatComparableTree(),
        };

        expect(actualComparables)
          .to.be.an('array')
          .that.contains.something.like(expectedComparable);
      });
    });
  });
});
