import fc from 'fast-check';
import chai from 'chai';
import * as Arb from '../../src/Serialize/Arbitraries';
import { deserialize, serialize } from '../../src/Serialize';
import * as E from 'fp-ts/lib/Either';

const { expect } = chai;

describe('Serialize', function () {
  describe('#serialize() / #deserialize()', function () {
    it('should return object that is deserializable into the same object', function () {
      fc.assert(
        fc.property(Arb.serializable(), (expectedObject) => {
          const serialized = serialize(expectedObject);
          const actualObject = deserialize(serialized);

          expect(actualObject).to.deep.equal(E.right(expectedObject));
        })
      );
    });
  });
});
