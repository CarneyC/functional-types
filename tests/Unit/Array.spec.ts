import chai from 'chai';
import fc from 'fast-check';
import { arrays } from '../../src/Array/Arbitraries';
import { includesAll } from '../../src/Array';

const { expect } = chai;

describe('Array', function () {
  describe('#includesAll()', function () {
    it('should return true when the all elements in the first array is included in the second array', function () {
      fc.assert(
        fc.property(arrays(), ({ array, subArray }) => {
          const includesSubArray = includesAll(subArray);
          expect(array).to.satisfy(includesSubArray);
        })
      );
    });

    it('should return false when the some elements in the first array is not included in the second array', function () {
      fc.assert(
        fc.property(arrays(), ({ array, subArray }) => {
          const includesArray = includesAll(array);
          expect(subArray).to.not.satisfy(includesArray);
        })
      );
    });
  });
});
