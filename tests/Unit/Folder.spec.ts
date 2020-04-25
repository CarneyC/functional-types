import chai from 'chai';
import fc from 'fast-check';
import * as Arb from '../../src/Folder/Arbitraries';
import { make, isFolder } from '../../src/Folder';

const { expect } = chai;

describe('Folder', function () {
  describe('#isFolder()', function () {
    it('should return false when given a non folder object', function () {
      fc.assert(
        fc.property(Arb.nonFolderObject(), (object) => {
          const result = isFolder(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return false when given an invalid folder object', function () {
      fc.assert(
        fc.property(Arb.invalidFolderObject(), (object) => {
          const result = isFolder(object);
          expect(result).to.be.false;
        })
      );
    });

    it('should return true when given a folder object', function () {
      fc.assert(
        fc.property(Arb.folder(), (folder) => {
          const result = isFolder(folder);
          expect(result).to.be.true;
        })
      );
    });
  });

  describe('#make()', function () {
    it('should return a folder with the given name', function () {
      fc.assert(
        fc.property(fc.string(), (name) => {
          const folder = make(name)();
          expect(folder).to.include({ name });
        })
      );
    });
  });
});
