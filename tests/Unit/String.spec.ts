import chai from 'chai';

import { getRandomId } from '../../src/String';

const { expect } = chai;

describe('String', function() {
  describe('#getRandomId()', function() {
    it('should return a random string', function() {
      const randomIds = [];
      for (let i = 0; i < 100; i++) {
        const latestId = getRandomId();
        expect(randomIds).to.not.include(latestId);
        randomIds.push(latestId);
      }
    });
  });
});
