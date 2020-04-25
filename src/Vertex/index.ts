import {
  all,
  allPass,
  anyPass,
  aperture,
  applySpec,
  clone,
  concat,
  converge,
  filter,
  find,
  head,
  identity,
  is,
  last,
  map,
  max,
  mergeDeepRight,
  mergeLeft,
  min,
  nth,
  pipe,
  prop,
  propIs,
  propSatisfies,
  sort,
  subtract,
  uniq,
} from 'ramda';
import * as R from 'fp-ts/lib/Reader';
import * as RE from 'fp-ts/lib/ReaderEither';
import * as E from 'fp-ts/lib/Either';

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

export type WithHeaderRow<A extends BoundingBox> = A & {
  headerRow: Poly;
};

export type WithHeaderColumn<A extends BoundingBox> = A & {
  headerColumn: Poly;
};

export type WithHeader<A extends BoundingBox> =
  | WithHeaderRow<A>
  | WithHeaderColumn<A>;

export interface LabeledBoundingBox extends BoundingBox {
  id: string;
  label: string;
}

export interface Corners {
  start: Vertex;
  end: Vertex;
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
 * makeVertex :: (Int, Int) -> Vertex
 * ```
 */
export const makeVertex = (x: number, y: number): Vertex => ({ x, y });

/**
 * ```haskell
 * makeVertex :: (Int, Int, Int, Int) -> Line
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
 * getTopLeftVertex :: (Int, Int, Int, Int) -> Vertex
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
 * getTopRightVertex :: (Int, Int, Int, Int) -> Vertex
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
 * getBottomLeftVertex :: (Int, Int, Int, Int) -> Vertex
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
 * getBottomRightVertex :: (Int, Int, Int, Int) -> Vertex
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
 * makePoly :: (Int, Int, Int, Int) -> Poly
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
 * getCornersFromPoly :: Poly -> Corners
 * ```
 */
export const getCornersFromPoly: (poly: Poly) => Corners = applySpec({
  start: head,
  end: last,
});

/**
 * ```haskell
 * makeRows :: Corners -> Reader [Int] [Line]
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
 * makeColumns :: Corners -> Reader [Int] [Line]
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
 * makeBoundingBox :: (Poly, [Int], [Int]) -> BoundingBox
 * ```
 */
export const makeBoundingBox = (
  boundingPoly: Poly,
  ys: number[],
  xs: number[]
): BoundingBox => {
  const corners = getCornersFromPoly(boundingPoly);

  return {
    boundingPoly,
    rows: makeRows(corners)(ys),
    columns: makeColumns(corners)(xs),
  };
};

/**
 * ```haskell
 * getY :: Line -> Int
 * ```
 */
export const getY: (line: Line) => number = pipe(head, prop<'y', number>('y'));

/**
 * ```haskell
 * getX :: Line -> Int
 * ```
 */
export const getX: (line: Line) => number = pipe(head, prop<'x', number>('x'));

/**
 * ```haskell
 * getYs :: [Line] -> [Int]
 * ```
 */
export const getYs: (lines: Line[]) => number[] = map(getY);

/**
 * ```haskell
 * getXs :: [Line] -> [Int]
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
 * makeLabeledBoundingBox :: (String, String, Poly, [Int], [Int]) -> LabeledBoundingBox
 * ```
 */
export const makeLabeledBoundingBox = (
  id: string,
  label: string,
  boundingPoly: Poly,
  ys: number[],
  xs: number[]
): LabeledBoundingBox => {
  const corners = getCornersFromPoly(boundingPoly);

  return {
    id,
    label,
    boundingPoly,
    rows: makeRows(corners)(ys),
    columns: makeColumns(corners)(xs),
  };
};

/**
 * ```haskell
 * append :: BoundingBox -> ([Int], [Int]) -> BoundingBox
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
 * withHeaderRow :: Int -> ReaderEither BoundingBox BoundingBox (WithHeaderRow BoundingBox)
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
 * withHeaderColumn :: Int -> ReaderEither BoundingBox BoundingBox (WithHeaderColumn BoundingBox)
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
 * widthOf :: Poly -> Int
 * ```
 */
export const widthOf: (poly: Poly) => number = converge(subtract, [
  pipe(getTopRight, prop('x')),
  pipe(getTopLeft, prop('x')),
]);

/**
 * ```haskell
 * heightOf :: Poly -> Int
 * ```
 */
export const heightOf: (poly: Poly) => number = converge(subtract, [
  pipe(getBottomLeft, prop('y')),
  pipe(getTopLeft, prop('y')),
]);

/**
 * ```haskell
 * lengthOf :: Line -> Int
 * ```
 */
export const lengthOf: (line: Line) => number = ([
  { x: x0, y: y0 },
  { x: x1, y: y1 },
]) => Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 1));
