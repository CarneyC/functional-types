import chai from 'chai';
import fc from 'fast-check';
import * as Arb from '../../src/Vertex/Arbitraries';
import {
  BoundingBox,
  contains,
  makePoly,
  withHeader,
  WithHeaderColumn,
  WithHeaderRow,
} from '../../src/Vertex';
import * as E from 'fp-ts/lib/Either';
import { identity } from 'ramda';

const { expect } = chai;
chai.config.truncateThreshold = 0;

describe('Vertex', function () {
  describe('#withHeader()', function () {
    it('should return a new Object', function () {
      fc.assert(
        fc.property(Arb.vertex(), Arb.boundingBox(), (vertex, boundingBox) => {
          const result = withHeader(vertex)(boundingBox);
          const actualBoundingBox = E.getOrElse(identity)(result);
          expect(actualBoundingBox).to.not.equal(boundingBox);
        })
      );
    });

    it('should return a new BoundingBox with the original BoundingBox properties', function () {
      fc.assert(
        fc.property(Arb.vertex(), Arb.boundingBox(), (vertex, boundingBox) => {
          const result = withHeader(vertex)(boundingBox);
          const actualBoundingBox = E.getOrElse(identity)(result);

          expect(actualBoundingBox).to.deep.include(boundingBox);
        })
      );
    });

    it('should return a new BoundingBox WithHeaderRow when the given vertex within the y boundaries of the BoundingBox', function () {
      fc.assert(
        fc.property(
          Arb.withHeaderArguments(),
          ({ boundingBox, withHeaderRowVertex: vertex }) => {
            const result = withHeader(vertex)(boundingBox);
            const actualBoundingBox = (result as E.Right<
              WithHeaderRow<BoundingBox>
            >).right;

            expect(actualBoundingBox).to.have.property('headerRow');
          }
        )
      );
    });

    it('should return a new BoundingBox WithHeaderColumn when the given within the x boundaries of the BoundingBox', function () {
      fc.assert(
        fc.property(
          Arb.withHeaderArguments(),
          ({ boundingBox, withHeaderColumnVertex: vertex }) => {
            const result = withHeader(vertex)(boundingBox);
            const actualBoundingBox = (result as E.Right<
              WithHeaderColumn<BoundingBox>
            >).right;

            expect(actualBoundingBox).to.have.property('headerColumn');
          }
        )
      );
    });
  });

  describe('#contains()', function () {
    it('should return 0 if there are not overlaps between two Poly', function () {
      fc.assert(
        fc.property(Arb.nonIntersectingPolygons(), ([p0, p1]) => {
          const actualArea = contains(p0)(p1);
          expect(actualArea).to.be.equal(0);
        }),
        {
          examples: [[[makePoly(0, 0, 0.3, 0.3), makePoly(0.5, 0.5, 1, 1)]]],
        }
      );
    });

    it('should return 1 if given two identical polygons', function () {
      fc.assert(
        fc.property(Arb.poly(), (poly) => {
          const actualArea = contains(poly)(poly);
          expect(actualArea).to.be.equal(1);
        })
      );
    });
  });
});
