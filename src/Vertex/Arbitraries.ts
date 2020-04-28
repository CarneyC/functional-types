import fc, { Arbitrary } from 'fast-check';
import {
  BoundingBox,
  getCornersFromPoly,
  makeBoundingBox,
  makePoly,
  Poly,
  toRectangle,
  Vertex,
} from './index';
import { apply } from 'ramda';

const number = (): Arbitrary<number> => fc.double(1);

export const vertex = (): Arbitrary<Vertex> =>
  fc.record({
    x: number(),
    y: number(),
  });

export const poly = (): Arbitrary<Poly> =>
  fc.array(number(), 4, 4).map(apply(makePoly));

export const separates = (): Arbitrary<[Poly, Poly]> =>
  fc.tuple(poly(), poly()).filter(([p0, p1]) => {
    const r0 = toRectangle(p0);
    const r1 = toRectangle(p1);
    return r0.y1 < r1.y0 || r0.y0 > r1.y1 || r0.x1 < r1.x0 || r0.x0 > r1.x1;
  });

export const overlaps = (): Arbitrary<[Poly, Poly]> =>
  fc.tuple(poly(), poly()).filter(([p0, p1]) => {
    const r0 = toRectangle(p0);
    const r1 = toRectangle(p1);
    return r0.y1 >= r1.y0 && r0.y0 <= r1.y1 && r0.x1 >= r1.x0 && r0.x0 <= r1.x1;
  });

export const boundingBox = (): Arbitrary<BoundingBox> =>
  poly()
    .chain((poly) => {
      const { start, end } = getCornersFromPoly(poly);
      return fc.record({
        poly: fc.constantFrom(poly),
        ys: fc.array(fc.double(start.y, end.y)),
        xs: fc.array(fc.double(start.x, end.x)),
      });
    })
    .map(({ poly, ys, xs }) => makeBoundingBox(poly, ys, xs));

export const withHeaderArguments = (): Arbitrary<{
  boundingBox: BoundingBox;
  withHeaderRowVertex: Vertex;
  withHeaderColumnVertex: Vertex;
}> =>
  boundingBox().chain((boundingBox) => {
    const { start, end } = getCornersFromPoly(boundingBox.boundingPoly);
    return fc.record({
      boundingBox: fc.constantFrom(boundingBox),
      withHeaderRowVertex: fc.record({
        x: number(),
        y: fc.double(start.y, end.y),
      }),
      withHeaderColumnVertex: fc.record({
        x: fc.double(start.x, end.x),
        y: number(),
      }),
    });
  });
