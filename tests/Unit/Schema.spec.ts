import * as Arb from '../../src/Schema/Arbitraries';
import * as S from '../../src/Schema';
import chai from 'chai';
import chaiString from 'chai-string';
import fc from 'fast-check';

chai.use(chaiString);
chai.config.truncateThreshold = 0;
const { expect } = chai;

describe('Schema', function () {
  this.timeout(10000);

  describe('#isMatcher()', function () {
    it('should return false when given a non matcher object', function () {
      fc.assert(
        fc.property(Arb.nonMatcherObject(), (object) => {
          const result = S.isMatcher(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return false when given an invalid matcher object', function () {
      fc.assert(
        fc.property(Arb.invalidMatcherObject(), (object) => {
          const result = S.isMatcher(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return true when given a matcher object', function () {
      fc.assert(
        fc.property(Arb.matcher(), (matcher) => {
          const result = S.isMatcher(matcher);
          expect(result).to.be.true;
        })
      );
    });
  });

  describe('#isGettable()', function () {
    it('should return false when given a non gettable object', function () {
      fc.assert(
        fc.property(Arb.nonGettableObject(), (object) => {
          const result = S.isGettable(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return false when given an invalid gettable object', function () {
      fc.assert(
        fc.property(Arb.invalidGettableObject(), (object) => {
          const result = S.isGettable(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return true when given a gettable object', function () {
      fc.assert(
        fc.property(Arb.gettable(), (gettable) => {
          const result = S.isGettable(gettable);
          expect(result).to.be.true;
        })
      );
    });
  });

  describe('#isSchema()', function () {
    it('should return false when given a non schema object', function () {
      fc.assert(
        fc.property(Arb.nonSchemaObject(), (object) => {
          const result = S.isSchema(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return false when given an invalid schema object', function () {
      fc.assert(
        fc.property(Arb.invalidSchemaObject(), (object) => {
          const result = S.isSchema(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return true when given a schema object', function () {
      fc.assert(
        fc.property(Arb.schema(), (schema) => {
          const result = S.isSchema(schema);
          expect(result).to.be.true;
        })
      );
    });
  });

  describe('#isVersionedSchema()', function () {
    it('should return true when given a valid versioned schema object', function () {
      fc.assert(
        fc.property(Arb.versionedSchema(), (versionSchema) => {
          const result = S.isVersionedSchema(versionSchema);
          expect(result).to.be.true;
        })
      );
    });

    it('should return false when given a schema', function () {
      fc.assert(
        fc.property(Arb.schema(), (schema) => {
          const result = S.isVersionedSchema(schema);
          expect(result).to.be.false;
        })
      );
    });
  });

  describe('#makeSchema()', function () {
    it('should return a schema with the given gettables', function () {
      fc.assert(
        fc.property(Arb.gettables(), (gettables) => {
          const schema = S.makeSchema(gettables);
          expect(schema).to.include({ gettables });
        })
      );
    });
  });
});
