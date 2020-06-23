import { getTextAnnotation } from './Sample';
import { isTextAnnotation } from '../../../src/TextAnnotation';
import chai from 'chai';
import chaiLike from 'chai-like';

chai.use(chaiLike);
const { expect } = chai;

describe('TextAnnotation', function () {
  describe('#isTextAnnotation()', function () {
    it('should return true when given a TextAnnotation', function () {
      const textAnnotation = getTextAnnotation();
      expect(textAnnotation).to.satisfy(isTextAnnotation);
    });
  });
});
