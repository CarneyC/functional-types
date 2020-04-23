import {
  all,
  allPass,
  applySpec,
  clone,
  head,
  is,
  last,
  max,
  mergeDeepRight,
  min,
  pipe,
  prop,
  propEq,
  propIs,
  propSatisfies,
} from 'ramda';

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

export interface LabeledBoundingBox extends BoundingBox {
  id: string;
  label: string;
}

interface Corners {
  start: Vertex;
  end: Vertex;
}

// isVertex :: a -> bool
export const isVertex = (a: unknown): a is Vertex =>
  allPass([propIs(Number, 'x'), propIs(Number, 'y')])(a);

// isLine :: a -> bool
export const isLine = (a: unknown): a is Line =>
  allPass([is(Array), propEq(2, 'length'), all(isVertex)])(a);

// isPoly :: a -> bool
export const isPoly = (a: unknown): a is Poly =>
  allPass([is(Array), all(isVertex)])(a);

// isLineArray :: a -> bool
const isLineArray = (a: unknown): a is Line[] =>
  allPass([is(Array), all(isLine)])(a);

// isBoundingBox :: a -> bool
export const isBoundingBox = (a: unknown): a is BoundingBox =>
  allPass([
    propSatisfies(isPoly, 'boundingPoly'),
    propSatisfies(isLineArray, 'rows'),
    propSatisfies(isLineArray, 'columns'),
  ])(a);

// makeVertex :: (Int, Int) -> Vertex
export const makeVertex = (x: number, y: number): Vertex => ({ x, y });

// makeVertex :: (Int, Int, Int, Int) -> Line
export const makeLine = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Line => [makeVertex(x0, y0), makeVertex(x1, y1)];

// getTopLeftVertex :: (Int, Int, Int, Int) -> Vertex
const getTopLeftVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(min(x0, x1), min(y0, y1));

// getTopRightVertex :: (Int, Int, Int, Int) -> Vertex
const getTopRightVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(max(x0, x1), min(y0, y1));

// getBottomLeftVertex :: (Int, Int, Int, Int) -> Vertex
const getBottomLeftVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(min(x0, x1), max(y0, y1));

// getBottomRightVertex :: (Int, Int, Int, Int) -> Vertex
const getBottomRightVertex = (
  x0: number,
  y0: number,
  x1: number,
  y1: number
): Vertex => makeVertex(max(x0, x1), max(y0, y1));

// makePoly :: (Int, Int, Int, Int) -> Poly
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

// getCornersFromPoly :: Poly -> Corners
const getCornersFromPoly: (poly: Poly) => Corners = applySpec({
  start: head,
  end: last,
});

// makeRows :: Corners -> [Line]
const makeRows = ({ start, end }: Corners) => (ys: number[]): Line[] =>
  ys.map((y) => makeLine(start.x, y, end.x, y));

// makeColumns :: Corners -> [Line]
const makeColumns = ({ start, end }: Corners) => (xs: number[]): Line[] =>
  xs.map((x) => makeLine(x, start.y, x, end.y));

// makeBoundingBox :: (Poly, [Int], [Int]) -> BoundingBox
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

// getY :: Line -> Int
export const getY: (line: Line) => number = pipe(head, prop<'y', number>('y'));

// getX :: Line -> Int
export const getX: (line: Line) => number = pipe(head, prop<'x', number>('x'));

// isLabeledBoundingBox :: a -> bool
export const isLabeledBoundingBox = (a: unknown): a is LabeledBoundingBox =>
  allPass([isBoundingBox, propIs(String, 'id'), propIs(String, 'label')])(a);

// makeLabeledBoundingBox :: (String, String, Poly, [Int], [Int]) -> LabeledBoundingBox
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

// append :: ([Int], [Int]) -> BoundingBox
export const append = <A extends BoundingBox>(boundingBox: A) => (
  xs: number[],
  ys: number[]
): A => {
  const corners = getCornersFromPoly(boundingBox.boundingPoly);

  return mergeDeepRight<A, Pick<A, 'rows' | 'columns'>>(boundingBox, {
    rows: [...clone(boundingBox.rows), ...makeRows(corners)(ys)],
    columns: [...clone(boundingBox.columns), ...makeColumns(corners)(xs)],
  }) as A;
};
