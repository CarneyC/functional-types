import { getUnixTimestamp, getCurrentUnixTimestamp } from '../../src/DateTime';
import chai from 'chai';
import chaiDatetime from 'chai-datetime';
import fc from 'fast-check';

chai.use(chaiDatetime);
const { expect } = chai;

describe('DateTime', function () {
  describe('#getUnixTimestamp()', function () {
    it('should return a Date parsable value', function () {
      fc.assert(
        fc.property(fc.date(), (date) => {
          const timestamp = getUnixTimestamp(date);
          const parsedDate = new Date(timestamp);
          expect(parsedDate).to.equalDate(date);
        })
      );
    });
  });

  describe('#getCurrentUnixTimestamp()', function () {
    it('should return a current Date within reasonable margin of error', function () {
      const beforeExecution = new Date();
      const timestamp = getCurrentUnixTimestamp();
      const afterExecution = new Date();
      const parsedDate = new Date(timestamp);
      expect(parsedDate).to.be.withinDate(beforeExecution, afterExecution);
    });
  });
});
