import { Deserializable, deserialize, serialize } from '../../../src/Serialize';
import * as Arb from '../../../src/Serialize/Arbitraries';
import * as S from '../../../src/Serialize/Schema';
import chai from 'chai';
import chaiLike from 'chai-like';
import fc from 'fast-check';
import * as E from 'fp-ts/lib/Either';
import { isRight } from 'fp-ts/lib/Either';

chai.use(chaiLike);
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

  describe('#deserialize()', function () {
    it('should not deserialize a boolean', function () {
      fc.assert(
        fc.property(fc.boolean(), (expectedBoolean) => {
          const actualBoolean = deserialize(expectedBoolean);

          expect(actualBoolean).to.deep.equal(E.right(expectedBoolean));
        })
      );
    });

    it('should not deserialize a boolean in a object', function () {
      fc.assert(
        fc.property(
          fc.object({
            values: [fc.boolean()],
          }),
          (expectedObject) => {
            const result = deserialize(
              (expectedObject as unknown) as Deserializable
            );

            const actualObject = isRight(result) ? result.right : result.left;

            expect(actualObject).to.deep.equal(expectedObject);
          }
        )
      );
    });
  });

  describe('Schema', function () {
    describe('#deserialize()', function () {
      it('should be able to deserialize a serialized schema instance', function () {
        const expectedSchema: S.Schema = {
          id: 'bond_facsheet_english',
          name: 'Bond Facsheet (English)',
          gettables: {},
          files: [],
          file_type: 'pdf',
          created_at: 'created_at',
          updated_at: 'updated_at',
        };

        const actualSchema = S.deserialize(expectedSchema);
        expect(actualSchema).to.be.like({
          right: expectedSchema,
        });
      });
    });
  });
});
