import chai from 'chai';
import * as D from '../../../src/DocumentAnnotation';
import {
  getLabeledBoundingBox,
  getPage,
  getTextsFromCells,
  makeTexts,
} from './Sample';
import * as IO from 'fp-ts/lib/IO';
import chaiLike from 'chai-like';

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
      const actualColumnHeaders = getTextsFromCells(table.columnHeaders);

      const expectedColumnHeaders = makeTexts(['Country/Location', '%']);

      expect(actualColumnHeaders).to.be.like(expectedColumnHeaders);
    });

    it('should return the correct row headers', function () {
      const table = makeTable();
      const actualRowHeaders = getTextsFromCells(table.rowHeaders);

      const expectedRowHeaders = makeTexts([
        'US TREASURY N/B FIX 1.750% 30.09.19',
        'ALLIANZ EMERGING MARKETS BOND FUND',
        'US TREASURY N/B FIX 1.750% 31.07.24',
        'US TREASURY N/B FIX 3.500% 15.05.20',
        'US TREASURY N/B FIX 2.875% 30.11.23',
        'US TREASURY N/B FIX 3.625% 15.02.21',
        'INDONESIA GOVERNMENT FR61 FIX 7.000%\n15.05.22',
        'NOTA DO TESOURO NACIONAL NTNE FIX\n10.000% 01.01.21',
        'US TREASURY N/B FIX 2.000% 31.07.20',
        'US TREASURY N/B FIX 2.375% 31.01.23',
        'Total',
      ]);

      expect(actualRowHeaders).to.be.like(expectedRowHeaders);
    });
  });
});
