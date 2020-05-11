import chai from 'chai';
import * as C from '../../../src/Comparable';
import * as Sample from './Sample';
import * as R from 'fp-ts/lib/Reader';
import { keys, test as regExpTest } from 'ramda';
import { getComparable, getISINs, getShareClasses, keysOf } from './Sample';
import chaiLike from 'chai-like';

chai.use(chaiLike);
const { expect } = chai;

describe('Comparable', function () {
  describe('#fromTable()', function () {
    let fromTable: R.Reader<C.FormatTableOptions, C.Comparable>;

    describe('When the Table is split by columns', function () {
      before(function () {
        const table = Sample.getTableByColumns();
        fromTable = C.fromTable(table);
      });

      it('should return a comparable with keys matching its header when no key predicate is given', function () {
        const comparable = fromTable({
          splitBy: 'column',
        });

        const actualKeys = keys(comparable);
        const expectedKeys = getShareClasses();

        expect(actualKeys).to.have.members(expectedKeys);
      });

      it('should return a comparable with keys matching its the key predicate', function () {
        const comparable = fromTable({
          key: regExpTest(/^ISIN/),
          splitBy: 'column',
        });

        const actualKeys = keysOf(comparable);
        const expectedKeys = getISINs();

        expect(actualKeys).to.have.members(expectedKeys);
      });

      it('should contain the original key as value of its intersect header', function () {
        const actualComparable = fromTable({
          key: regExpTest(/^ISIN/),
          splitBy: 'column',
        });

        const expectedComparable = getComparable();
        expect(actualComparable).to.be.like(expectedComparable);
      });
    });

    describe('When the Table is split by rows', function () {
      before(function () {
        const table = Sample.getTableByRows();
        fromTable = C.fromTable(table);
      });

      it('should return a comparable with keys matching its header when no key predicate is given', function () {
        const comparable = fromTable({
          splitBy: 'row',
        });

        const actualKeys = keysOf(comparable);

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

      it('should return a comparable with keys matching its the key predicate', function () {
        const comparable = fromTable({
          key: regExpTest(/^Annualised/),
          splitBy: 'row',
        });

        const actualKeys = keysOf(comparable);
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
});
