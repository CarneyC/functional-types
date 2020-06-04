import { isFile, isFilesByType } from '../../src/Folder';
import * as Arb from '../../src/Folder/Arbitraries';
import chai from 'chai';
import fc from 'fast-check';

const { expect } = chai;

describe('File', function () {
  describe('#isFile()', function () {
    it('should return false when given a non file object', function () {
      fc.assert(
        fc.property(fc.anything(), (object) => {
          const result = isFile(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return true when given a file object', function () {
      fc.assert(
        fc.property(Arb.file(), (file) => {
          const result = isFile(file);
          expect(result).to.be.true;
        })
      );
    });
  });

  describe('#isFilesByType()', function () {
    it('should return false when given a non filesByType object', function () {
      fc.assert(
        fc.property(fc.anything(), (object) => {
          const result = isFilesByType(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return true when given a filesByType object', function () {
      fc.assert(
        fc.property(Arb.filesByType(), (filesByType) => {
          const result = isFilesByType(filesByType);
          expect(result).to.be.true;
        })
      );
    });
  });
});
