import { getSchema } from './Comparable/Sample';
import { isSchema } from '../../src/Schema';
import chai from 'chai';
import fc from 'fast-check';

const { expect } = chai;

describe('Schema', function () {
  describe('#isSchema()', function () {
    it('should return false when given an invalid schema object', function () {
      fc.assert(
        fc.property(fc.anything(), (object) => {
          expect(object).to.not.satisfy(isSchema);
        })
      );
    });

    it('should return true when given a schema object', function () {
      const schema = getSchema();
      expect(schema).to.satisfy(isSchema);
    });
  });
});
