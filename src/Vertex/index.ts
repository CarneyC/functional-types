import {
  all,
  allPass,
  anyPass,
  aperture,
  applySpec,
  clone,
  concat,
  converge,
  divide,
  filter,
  find,
  head,
  identity,
  is,
  isEmpty,
  last,
  map,
  max,
  mergeDeepRight,
  mergeLeft,
  min,
  multiply,
  not,
  nth,
  pipe,
  prop,
  propIs,
  propSatisfies,
  sort,
  subtract,
  uniq,
  lte,
  reduce,
  reject,
  propEq,
  tail,
} from 'ramda';
import * as R from 'fp-ts/lib/Reader';
import * as RE from 'fp-ts/lib/ReaderEither';
import * as E from 'fp-ts/lib/Either';
import * as O from 'fp-ts/lib/Option';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';

export interface Vertex {
  x: number;
  y: number;
}

export type Line = [Vertex, Vertex];

/**
 * [TopLeft, TopRight, BottomLeft, BottomRight]
 */
export type Poly = [Vertex, Vertex, Vertex, Vertex];

export interface BoundingBox {
  boundingPoly: Poly;
  rows: Line[];
  columns: Line[];
}

export type WithRows<A extends BoundingBox> = A & {
  rows: NonEmptyArray<Line>;
};

export type WithColumns<A extends BoundingBox> = A & {
  columns: NonEmptyArray<Line>;
};

export type WithHeaderRow<A extends BoundingBox> = A & {
  headerRow: Poly;
};

export type WithHeaderColumn<A extends BoundingBox> = A & {
  headerColumn: Poly;
};

export type WithHeader<A extends BoundingBox> =
  | WithHeaderRow<A>
  | WithHeaderColumn<A>;

export type WithHeaders<A extends BoundingBox> = WithHeaderRow<A> &
  WithHeaderColumn<A>;

export interface LabeledBoundingBox extends BoundingBox {
  id: string;
  label: string;
}

export interface Corners {
  start: Vertex;
  end: Vertex;
}

export interface Rectangle {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

/**
 * ```haskell
 * isVertex :: a -> bool
 * ```
 */
export const isVertex = (a: unknown): a is Vertex =>
  allPass([propIs(Number, 'x'), propIs(Number, 'y')])(a);

/**
 * ```haskell
 * isLine :: a -> bool
 * ```
 */
export const isLine = (a: unknown): a is Line =>
  allPass([
    is(Array),
    (a: unknown[]): boolean => a.length === 2,
    all(isVertex),
  ])(a);

/**
 * ```haskell
 * isPoly :: a -> bool
 * ```
 */
export const isPoly = (a: unknown): a is Poly =>
  allPass([
    is(Array),
    (a: unknown[]): boolean => a.length === 4,
    all(isVertex),
  ])(a);

/**
 * ```haskell
 * isLineArray :: a -> bool
 * ```
 */
const isLineArray = (a: unknown): a is Line[] =>
  allPass([is(Array), all(isLine)])(a);

/**
 * ```haskell
 * isNonEmptyLineArray :: a -> bool
 * ```
 */
const isNonEmptyLineArray = (a: unknown): a is NonEmptyArray<Line> =>
  allPass([isLineArray, pipe(isEmpty, not)])(a);

/**
 * ```haskell
 * isBoundingBox :: a -> bool
 * ```
 */
export const isBoundingBox = (a: unknown): a is BoundingBox =>
  allPass([
    propSatisfies(isPoly, 'boundingPoly'),
    propSatisfies(isLineArray, 'rows'),
    propSatisfies(isLineArray, 'columns'),
  ])(a);

/**
 * ```haskell
 * hasRows :: a -> bool
 * ```
 */
export const hasRows = <A extends BoundingBox>(a: A): a is WithRows<A> =>
  propSatisfies(isNonEmptyLineArray, 'rows')(a);

/**
 * ```haskell
 * hasColumns :: a -> bool
 * ```
 */
export const hasColumns = <A extends BoundingBox>(a: A): a is WithColumns<A> =>
  propSatisfies(isNonEmptyLineArray, 'columns')(a);

/**
 * ```haskell
 * hasRowsOrColumns :: a -> bool
 * ```
 */
export const hasRowsOrColumns = <A extends BoundingBox>(
  a: A
): a is WithRows<A> | WithColumns<A> => anyPass([hasRows, hasColumns])(a);

/**
 * ```haskell
 * hasHeaderRow :: a -> bool
 * ```
 */
export const hasHeaderRow = <A extends BoundingBox>(
  a: A
): a is WithHeaderRow<A> => propSatisfies(isPoly, 'headerRow')(a);

/**
 * ```haskell
 * hasHeaderColumn :: a -> bool
 * ```
 */
export const hasHeaderColumn = <A extends BoundingBox>(
  a: A
): a is WithHeaderColumn<A> => propSatisfies(isPoly, 'headerColumn')(a);

/**
 * ```haskell
 * hasHeader :: a -> bool
 * ```
 */
export const hasHeader = <A extends BoundingBox>(a: A): a is WithHeader<A> =>
  anyPass([hasHeaderRow, hasHeaderColumn])(a);

/**
 * ```haskell
 * hasHeaders :: a -> bool
 * ```
 */
export const hasHeaders = <A extends BoundingBox>(a: A): a is WithHeaders<A> =>
  allPass([hasHeaderRow, hasHeaderColumn])(a);

/**
 * ```haskell
 * makeVertex :: (Float, Float) -> Vertex
 * ```
 */
export const makeVertex = (x: number, y: number): Vertex => ({ x, y });

/**
 * ```haskell
 * makeVertex :: (Float, Float, Float, Float) -> Line
 * ```
 */
export const makeLine = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Line => [makeVertex(x0, y0), makeVertex(x1, y1)];

/**
 * ```haskell
 * getTopLeftVertex :: (Float, Float, Float, Float) -> Vertex
 * ```
 */
const getTopLeftVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(min(x0, x1), min(y0, y1));

/**
 * ```haskell
 * getTopRightVertex :: (Float, Float, Float, Float) -> Vertex
 * ```
 */
const getTopRightVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(max(x0, x1), min(y0, y1));

/**
 * ```haskell
 * getBottomLeftVertex :: (Float, Float, Float, Float) -> Vertex
 * ```
 */
const getBottomLeftVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(min(x0, x1), max(y0, y1));

/**
 * ```haskell
 * getBottomRightVertex :: (Float, Float, Float, Float) -> Vertex
 * ```
 */
const getBottomRightVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(max(x0, x1), max(y0, y1));

/**
 * ```haskell
 * makePoly :: (Float, Float, Float, Float) -> Poly
 * ```
 */
export const makePoly: (
  x0: number,
  y0: number,
  x1: number,
  y1: number
) => Poly = (...coords): Poly => [
  getTopLeftVertex(...coords),
  getTopRightVertex(...coords),
  getBottomLeftVertex(...coords),
  getBottomRightVertex(...coords),
];

/**
 * ```haskell
 * sortPoly :: Poly -> Poly
 * ```
 */
export const sortPoly: (poly: Poly) => Poly = ([topLeft, topRight, bottom]) => {
  const x0 = min(topLeft.x, topRight.x);
  const x1 = max(topLeft.x, topRight.x);
  const y0 = min(topLeft.y, bottom.y);
  const y1 = max(topLeft.y, bottom.y);
  return makePoly(x0, y0, x1, y1);
};

/**
 * ```haskell
 * getCornersFromPoly :: Poly -> Corners
 * ```
 */
export const getCornersFromPoly: (poly: Poly) => Corners = applySpec({
  start: head,
  end: last,
}) as R.Reader<Poly, Corners>;

/**
 * ```haskell
 * makeRows :: Corners -> Reader [Float] [Line]
 * ```
 */
const makeRows: (corners: Corners) => R.Reader<number[], Line[]> = ({
  start,
  end,
}: Corners) =>
  pipe(
    filter((y) => start.y < y && end.y > y),
    uniq,
    sort(subtract),
    map((y) => makeLine(start.x, y, end.x, y))
  );

/**
 * ```haskell
 * makeColumns :: Corners -> Reader [Float] [Line]
 * ```
 */
const makeColumns: (corners: Corners) => R.Reader<number[], Line[]> = ({
  start,
  end,
}: Corners) =>
  pipe(
    filter((x) => start.x < x && end.x > x),
    uniq,
    sort(subtract),
    map((x) => makeLine(x, start.y, x, end.y))
  );

/**
 * ```haskell
 * makeBoundingBox :: (Poly, [Float], [Float]) -> BoundingBox
 * ```
 */
export const makeBoundingBox = (
  poly: Poly,
  ys: number[],
  xs: number[]
): BoundingBox => {
  const corners = getCornersFromPoly(poly);

  return {
    boundingPoly: poly,
    rows: makeRows(corners)(ys),
    columns: makeColumns(corners)(xs),
  };
};

/**
 * ```haskell
 * getY :: Line -> Float
 * ```
 */
export const getY: (line: Line) => number = pipe(head, prop<'y', number>('y'));

/**
 * ```haskell
 * getX :: Line -> Float
 * ```
 */
export const getX: (line: Line) => number = pipe(head, prop<'x', number>('x'));

/**
 * ```haskell
 * getYs :: [Line] -> [Float]
 * ```
 */
export const getYs: (lines: Line[]) => number[] = map(getY);

/**
 * ```haskell
 * getXs :: [Line] -> [Float]
 * ```
 */
export const getXs: (lines: Line[]) => number[] = map(getX);

/**
 * ```haskell
 * isLabeledBoundingBox :: a -> bool
 * ```
 */
export const isLabeledBoundingBox = (a: unknown): a is LabeledBoundingBox =>
  allPass([isBoundingBox, propIs(String, 'id'), propIs(String, 'label')])(a);

/**
 * ```haskell
 * makeLabeledBoundingBox :: (String, String, Poly, [Float], [Float]) -> LabeledBoundingBox
 * ```
 */
export const makeLabeledBoundingBox = (
  id: string,
  label: string,
  poly: Poly,
  ys: number[],
  xs: number[]
): LabeledBoundingBox => {
  const corners = getCornersFromPoly(poly);

  return {
    id,
    label,
    boundingPoly: poly,
    rows: makeRows(corners)(ys),
    columns: makeColumns(corners)(xs),
  };
};

/**
 * ```haskell
 * append :: BoundingBox -> ([Float], [Float]) -> BoundingBox
 * ```
 */
export const append = <A extends BoundingBox>(boundingBox: A) => (
  xs: number[],
  ys: number[]
): A => {
  const corners = getCornersFromPoly(boundingBox.boundingPoly);

  return mergeDeepRight<A, Pick<A, 'rows' | 'columns'>>(boundingBox, {
    rows: pipe(getYs, concat(ys), makeRows(corners))(boundingBox.rows),
    columns: pipe(getXs, concat(xs), makeColumns(corners))(boundingBox.columns),
  }) as A;
};

/**
 * ```haskell
 * getTopLeft :: Poly -> Vertex
 * ```
 */
export const getTopLeft: (poly: Poly) => Vertex = nth(0);

/**
 * ```haskell
 * getTopRight :: Poly -> Vertex
 * ```
 */
export const getTopRight: (poly: Poly) => Vertex = nth(1);

/**
 * ```haskell
 * getBottomLeft :: Poly -> Vertex
 * ```
 */
export const getBottomLeft: (poly: Poly) => Vertex = nth(2);

/**
 * ```haskell
 * getBottomRight :: Poly -> Vertex
 * ```
 */
export const getBottomRight: (poly: Poly) => Vertex = nth(3);

/**
 * ```haskell
 * withHeaderRow :: Float -> ReaderEither BoundingBox BoundingBox (WithHeaderRow BoundingBox)
 * ```
 */
export const withHeaderRow: <A extends BoundingBox>(
  y: number
) => RE.ReaderEither<A, A, WithHeaderRow<A>> = (y) => <A extends BoundingBox>(
  boundingBox: A
): E.Either<A, WithHeaderRow<A>> => {
  const [topLeft, topRight, bottomLeft] = boundingBox.boundingPoly;
  /**
   * ```haskell
   * Out of bound
   * ```
   */
  if (y < topLeft.y || y > bottomLeft.y) {
    return E.left(clone(boundingBox));
  }

  const ys = [topLeft.y, ...getYs(boundingBox.rows), bottomLeft.y];
  const ranges = aperture(2, ys);

  const x0 = topLeft.x;
  const x1 = topRight.x;

  const [y0, y1] = find(
    ([top, bottom]: [number, number]) => top <= y && y <= bottom
  )(ranges);

  return pipe(
    mergeLeft({
      headerRow: makePoly(x0, y0, x1, y1),
    }),
    E.right
  )(boundingBox) as E.Right<WithHeaderRow<A>>;
};

/**
 * ```haskell
 * withHeaderColumn :: Float -> ReaderEither BoundingBox BoundingBox (WithHeaderColumn BoundingBox)
 * ```
 */
export const withHeaderColumn: <A extends BoundingBox>(
  x: number
) => RE.ReaderEither<A, A, WithHeaderColumn<A>> = (x: number) => <
  A extends BoundingBox
>(
  boundingBox: A
): E.Either<A, WithHeaderColumn<A>> => {
  const [topLeft, topRight, bottomLeft] = boundingBox.boundingPoly;
  /**
   * ```haskell
   * Out of bound
   * ```
   */
  if (x < topLeft.x || x > topRight.x) return E.left(clone(boundingBox));

  const xs = [topLeft.x, ...getXs(boundingBox.columns), topRight.x];
  const ranges = aperture(2, xs);

  const y0 = topLeft.y;
  const y1 = bottomLeft.y;
  const [x0, x1] = find(
    ([left, right]: [number, number]) => left <= x && x <= right
  )(ranges);

  return pipe(
    mergeLeft({
      headerColumn: makePoly(x0, y0, x1, y1),
    }),
    E.right
  )(boundingBox) as E.Right<WithHeaderColumn<A>>;
};

/**
 * ```haskell
 * withHeader :: Vertex -> ReaderEither BoundingBox (WithHeader BoundingBox) BoundingBox
 * ```
 */
export const withHeader: <A extends BoundingBox>(
  vertex: Vertex
) => RE.ReaderEither<A, A, WithHeader<A>> = (vertex) => <A extends BoundingBox>(
  boundingBox: A
): E.Either<A, WithHeader<A>> =>
  pipe(
    withHeaderRow<A>(vertex.y),
    E.getOrElse(identity),
    withHeaderColumn(vertex.x),
    E.orElse(E.fromPredicate(hasHeader, identity))
  )(boundingBox);

/**
 * ```haskell
 * widthOf :: Poly -> Float
 * ```
 */
export const widthOf: (poly: Poly) => number = converge(subtract, [
  pipe(getTopRight, prop('x')),
  pipe(getTopLeft, prop('x')),
]);

/**
 * ```haskell
 * heightOf :: Poly -> Float
 * ```
 */
export const heightOf: (poly: Poly) => number = converge(subtract, [
  pipe(getBottomLeft, prop('y')),
  pipe(getTopLeft, prop('y')),
]);

/**
 * ```haskell
 * areaOf :: Poly -> Float
 * ```
 */
export const areaOf: (poly: Poly) => number = converge(multiply, [
  widthOf,
  heightOf,
]);

/**
 * ```haskell
 * lengthOf :: Line -> Float
 * ```
 */
export const lengthOf: (line: Line) => number = ([
  { x: x0, y: y0 },
  { x: x1, y: y1 },
]) => Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 1));

/**
 * ```haskell
 * toRectangle :: Poly -> Rectangle
 * ```
 */
export const toRectangle: (poly: Poly) => Rectangle = ([
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
]) => ({
  x0: topLeft.x,
  y0: topRight.y,
  x1: bottomRight.x,
  y1: bottomLeft.y,
});

/**
 * ```haskell
 * toPoly :: Rectangle -> Poly
 * ```
 */
export const toPoly: (rect: Rectangle) => Poly = ({ x0, y0, x1, y1 }) =>
  makePoly(x0, y0, x1, y1);

/**
 * ```haskell
 * intersects :: Poly -> Reader Poly (Option Poly)
 * ```
 */
export const intersects: (poly: Poly) => R.Reader<Poly, O.Option<Poly>> = (
  p0: Poly
) => (p1: Poly): O.Option<Poly> => {
  const r0 = toRectangle(p0);
  const r1 = toRectangle(p1);
  const x0 = max(r0.x0, r1.x0);
  const y0 = max(r0.y0, r1.y0);
  const x1 = min(r0.x1, r1.x1);
  const y1 = min(r0.y1, r1.y1);
  return x1 < x0 || y1 < y0
    ? O.none
    : O.some(
        toPoly({
          x0,
          y0,
          x1,
          y1,
        })
      );
};

/**
 * ```haskell
 * unions :: Poly -> Reader Poly Poly
 * ```
 */
export const unions: (poly: Poly) => R.Reader<Poly, Poly> = (p0: Poly) => (
  p1: Poly
): Poly => {
  const r0 = toRectangle(p0);
  const r1 = toRectangle(p1);
  const x0 = min(r0.x0, r1.x0);
  const y0 = min(r0.y0, r1.y0);
  const x1 = max(r0.x1, r1.x1);
  const y1 = max(r0.y1, r1.y1);
  return toPoly({
    x0,
    y0,
    x1,
    y1,
  });
};

/**
 * ```haskell
 * unionOf :: [Poly] -> Poly
 * ```
 */
export const unionOf: (polygons: Poly[]) => Poly = converge(
  reduce((acc: Poly, value: Poly) => unions(acc)(value)),
  [head, tail]
);

/**
 * ```haskell
 * ratioContainedBy :: Poly -> Reader Poly Float
 * ```
 */
export const ratioContainedBy: (poly: Poly) => R.Reader<Poly, number> = (
  p0: Poly
) =>
  converge(divide, [
    pipe(
      intersects(p0),
      O.fold(() => 0, areaOf)
    ),
    areaOf,
  ]);

/**
 * ```haskell
 * ratioContaining :: Poly -> Reader Poly Float
 * ```
 */
export const ratioContaining: (poly: Poly) => R.Reader<Poly, number> = (
  p0: Poly
) => (p1: Poly): number => ratioContainedBy(p1)(p0);

/**
 * ```haskell
 * containedBy :: Poly -> Reader Poly bool
 * ```
 */
export const containedBy: (
  poly: Poly,
  threshold?: number
) => R.Reader<Poly, boolean> = (poly, threshold = 0.9) =>
  pipe(ratioContainedBy, R.map(lte(threshold)))(poly);

/**
 * ```haskell
 * contains :: Poly -> Reader Poly bool
 * ```
 */
export const contains: (
  poly: Poly,
  threshold?: number
) => R.Reader<Poly, boolean> = (poly, threshold = 0.9) =>
  pipe(ratioContaining, R.map(lte(threshold)))(poly);

/**
 * ```haskell
 * splitByYs :: [number] -> Reader Poly [Poly]
 * ```
 */
export const splitByYs: (ys: number[]) => R.Reader<Poly, Poly[]> = (ys) => (
  poly
): Poly[] => {
  const { x0, y0, x1, y1 } = toRectangle(poly);
  return pipe(
    (ys: number[]) => [y0, ...ys, y1],
    sort(subtract),
    aperture(2),
    map(([y0, y1]) => makePoly(x0, y0, x1, y1))
  )(ys);
};

/**
 * ```haskell
 * splitByXs :: [number] -> Reader Poly [Poly]
 * ```
 */
export const splitByXs: (xs: number[]) => R.Reader<Poly, Poly[]> = (xs) => (
  poly
): Poly[] => {
  const { x0, y0, x1, y1 } = toRectangle(poly);
  return pipe(
    (xs: number[]) => [x0, ...xs, x1],
    sort(subtract),
    aperture(2),
    map(([x0, x1]) => makePoly(x0, y0, x1, y1))
  )(xs);
};

/**
 * ```haskell
 * getChildlessBoundingBoxes :: [BoundingBox] -> [BoundingBox]
 * ```
 */
export const getChildlessBoundingBoxes: (
  boundingBoxes: LabeledBoundingBox[]
) => LabeledBoundingBox[] = (boundingBoxes: LabeledBoundingBox[]) =>
  reduce(
    (acc, boundingBox) =>
      reject(
        allPass([
          pipe(propEq('id', boundingBox.id), not),
          propSatisfies(contains(boundingBox.boundingPoly), 'boundingPoly'),
        ]),
        acc
      ),
    clone(boundingBoxes),
    boundingBoxes
  );
