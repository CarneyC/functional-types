import {
  all,
  allPass,
  applySpec,
  concat,
  filter,
  head,
  is,
  last,
  map,
  max,
  mergeDeepRight,
  min,
  pipe,
  prop,
  propIs,
  propSatisfies,
  sort,
  uniq,
} from 'ramda';
import * as R from 'fp-ts/lib/Reader';

export interface Vertex {
  x: number;
  y: number;
}

export type Line = [Vertex, Vertex];

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

export interface LabeledBoundingBox extends BoundingBox {
  id: string;
  label: string;
}

interface Corners {
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
): a is WithHeaderRow<A> => propSatisfies(isPoly, 'headerColumn')(a);

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
const getCornersFromPoly: (poly: Poly) => Corners = applySpec({
  start: head,
  end: last,
});

/**
 * ```haskell
 * diff :: (number, number) -> number
 * ```
 */
const diff: (a: number, b: number) => number = (a, b) => a - b;

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
    sort(diff),
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
    sort(diff),
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
 * append :: ([Int], [Int]) -> BoundingBox
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
