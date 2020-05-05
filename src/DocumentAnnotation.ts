import {
  getTextFromWords,
  isWordArray,
  Page,
  Word,
  WordsById,
} from './TextAnnotation';
import * as RIO from './fp-ts/ReaderIO';
import * as O from 'fp-ts/lib/Option';
import {
  addIndex,
  all,
  allPass,
  anyPass,
  assoc,
  Dictionary,
  evolve,
  filter,
  has,
  head,
  ifElse,
  is,
  map,
  not,
  pick,
  pipe,
  prop,
  propIs,
  propSatisfies,
  reduce,
  reject,
  unnest,
  values,
} from 'ramda';
import {
  getXs,
  getYs,
  hasHeaderColumn,
  hasHeaderRow,
  hasRowsOrColumns,
  intersects,
  containedBy,
  isPoly,
  LabeledBoundingBox,
  Poly,
  splitByXs,
  splitByYs,
  getChildlessBoundingBoxes,
} from './Vertex';
import * as IO from 'fp-ts/lib/IO';
import * as R from 'fp-ts/lib/Reader';
import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';
import { sequenceReaderIO } from './fp-ts/ReaderIO';
import { BoundingBoxes } from './TableAnnotation';

export interface Node {
  id: string;
  label: string;
  boundingPoly: Poly;
}

export interface Cell extends Node {
  words: Word[];
  text: string;
}

export interface TableCell extends Cell {
  rowHeader: Cell;
  columnHeader: Cell;
}

export type TableCellById = Dictionary<TableCell>;

export interface Table extends Node {
  rowHeaders: Cell[];
  columnHeaders: Cell[];
  intersectHeader: Cell;
  mergedRowHeader: Cell;
  mergedColumnHeader: Cell;
  cellById: TableCellById;
}

export type TableBase = Omit<Table, 'id' | 'label' | 'boundingPoly'>;

export type Leaf = Cell | Table;

export interface Branch extends Node {
  parent?: Branch;
  children?: Children;
}

export type Child = Branch | Leaf;

export type Children = Dictionary<Child>;

export type Tree = Children;

export type TreeByPage = Tree[];

export interface DocumentAnnotation {
  id: string;
  file: string;
  treeByPage: TreeByPage;
  created_at: string;
  updated_at: string;
}

export type DocumentAnnotationBase = Pick<
  DocumentAnnotation,
  'file' | 'treeByPage'
>;

export type TextCell = Pick<Cell, 'text'>;

export type TextTableCell = TextCell & {
  rowHeader: TextCell;
  columnHeader: TextCell;
};

/**
 * ```haskell
 * isNode :: a -> bool
 * ```
 */
export const isNode = (a: unknown): a is Node =>
  allPass([
    is(Object),
    propIs(String, 'id'),
    propIs(String, 'label'),
    propSatisfies(isPoly, 'boundingPoly'),
  ])(a);

/**
 * ```haskell
 * isCell :: a -> bool
 * ```
 */
export const isCell = (a: unknown): a is Cell =>
  allPass([
    isNode,
    propSatisfies(isWordArray, 'words'),
    propIs(String, 'text'),
  ])(a);

/**
 * ```haskell
 * isCellArray :: a -> bool
 * ```
 */
export const isCellArray = (a: unknown): a is Cell[] =>
  allPass([is(Array), all(isCell)])(a);

/**
 * ```haskell
 * isTableCell :: a -> bool
 * ```
 */
export const isTableCell = (a: unknown): a is TableCell =>
  allPass([
    isCell,
    propSatisfies(isCell, 'rowHeader'),
    propSatisfies(isCell, 'columnHeader'),
  ])(a);

/**
 * ```haskell
 * isTableCellById :: a -> bool
 * ```
 */
export const isTableCellById = (a: unknown): a is TableCellById =>
  allPass([is(Object), pipe(values, all(isTableCell))])(a);

/**
 * ```haskell
 * doesNotHave :: String -> Reader Object bool
 * ```
 */
const doesNotHave: (
  property: string
) => R.Reader<Dictionary<unknown>, boolean> = (property) =>
  pipe(has(property), not);

/**
 * ```haskell
 * isTable :: a -> bool
 * ```
 */
export const isTable = (a: unknown): a is Table =>
  allPass([
    isNode,
    propSatisfies(isCellArray, 'rowHeaders'),
    propSatisfies(isCellArray, 'columnHeaders'),
    propSatisfies(isCell, 'intersectHeader'),
    propSatisfies(isCell, 'mergedRowHeader'),
    propSatisfies(isCell, 'mergedColumnHeader'),
    propSatisfies(isTableCellById, 'cellById'),
  ])(a);

/**
 * ```haskell
 * isLeaf :: a -> bool
 * ```
 */
export const isLeaf = (a: unknown): a is Leaf => anyPass([isCell, isTable])(a);

/**
 * ```haskell
 * isBranch :: a -> bool
 * ```
 */
export const isBranch = (a: unknown): a is Branch =>
  anyPass([
    isNode,
    anyPass([doesNotHave('parent'), propSatisfies(isBranch, 'parent')]),
    anyPass([
      doesNotHave('children'),
      propSatisfies(
        allPass([is(Object), pipe(values, all(anyPass([isBranch, isLeaf])))]),
        'children'
      ),
    ]),
  ])(a);

/**
 * ```haskell
 * isChild :: a -> bool
 * ```
 */
export const isChild = (a: unknown): a is Child =>
  anyPass([isBranch, isLeaf])(a);

/**
 * ```haskell
 * isChildren :: a -> bool
 * ```
 */
export const isChildren = (a: unknown): a is Children =>
  allPass([is(Object), pipe(values, all(isChild))])(a);

/**
 * ```haskell
 * makeNode :: LabeledBoundingBox -> IO Node
 * ```
 */
export const makeNode: (boundingBox: LabeledBoundingBox) => IO.IO<Node> = ({
  boundingPoly,
  label,
}) => (): Node => ({
  id: getRandomId(),
  label,
  boundingPoly,
});

/**
 * ```haskell
 * makeCell :: LabeledBoundingBox -> ReaderIO Page Cell
 * ```
 */
export const makeCell: (
  boundingBox: LabeledBoundingBox
) => RIO.ReaderIO<Page, Cell> = (boundingBox) => (page): IO.IO<Cell> => {
  const words: Word[] = pipe(
    prop('wordsById'),
    values as (wordsById: WordsById) => Word[],
    filter(pipe(prop('boundingPoly'), containedBy(boundingBox.boundingPoly)))
  )(page);
  const text = getTextFromWords(words);

  return (): Cell => ({
    ...makeNode(boundingBox)(),
    words,
    text,
  });
};

/**
 * ```haskell
 * makeTableCell :: (Cell, Cell) -> LabeledBoundingBox -> ReaderIO Page TableCell
 * ```
 */
export const makeTableCell: (
  rowHeader: Cell,
  columnHeader: Cell
) => (boundingBox: LabeledBoundingBox) => RIO.ReaderIO<Page, TableCell> = (
  rowHeader,
  columnHeader
) =>
  pipe(
    makeCell,
    RIO.map((cell: Cell) => ({
      ...cell,
      rowHeader,
      columnHeader,
    }))
  );

/**
 * ```haskell
 * fromTableBase :: TableBase -> ReaderIO LabeledBoundingBox Table
 * ```
 */
export const fromTableBase: (
  tableBase: TableBase
) => RIO.ReaderIO<LabeledBoundingBox, Table> = (tableBase) =>
  pipe(
    makeNode,
    IO.map(
      (node: Node): Table => ({
        ...node,
        ...tableBase,
      })
    )
  );

/**
 * ```haskell
 * labelPoly :: LabeledBoundingBox -> Reader Poly LabeledBoundingBox
 * ```
 */
const labelPoly: (
  boundingBox: LabeledBoundingBox
) => R.Reader<Poly, LabeledBoundingBox> = (boundingBox) => (
  poly
): LabeledBoundingBox => ({
  ...boundingBox,
  boundingPoly: poly,
});

/**
 * ```haskell
 * mapIndexed :: ((T, Int) -> U) -> Reader [T] [U]
 * ```
 */
const mapIndexed: <T, U>(
  fn: (item: T, index: number) => U
) => R.Reader<T[], U[]> = <T, U>(fn: (item: T, index: number) => U) => (
  list: T[]
): U[] => addIndex<T, U>(map)(fn, list);

/**
 * ```haskell
 * makeTable :: LabeledBoundingBox -> ReaderIO Page Table
 * ```
 */
export const makeTable: (
  boundingBox: LabeledBoundingBox
) => RIO.ReaderIO<Page, Table> = (boundingBox) => (page: Page) => (): Table => {
  const label = labelPoly(boundingBox);

  const ys = getYs(boundingBox.rows);
  const xs = getXs(boundingBox.columns);

  const rows = splitByYs(ys)(boundingBox.boundingPoly);
  const headerRow = hasHeaderRow(boundingBox)
    ? boundingBox.headerRow
    : head(rows);

  const columns = splitByXs(xs)(boundingBox.boundingPoly);
  const headerColumn = hasHeaderColumn(boundingBox)
    ? boundingBox.headerColumn
    : head(columns);

  const intersectHeader = pipe(
    intersects(headerRow),
    O.getOrElse(() =>
      hasHeaderRow(boundingBox) || !hasHeaderColumn(boundingBox)
        ? headerRow
        : headerColumn
    ),
    label,
    makeCell
  )(headerColumn)(page)();

  const mergedRowHeader: Cell = pipe(label, makeCell)(headerColumn)(page)();
  const mergedColumnHeader: Cell = pipe(label, makeCell)(headerRow)(page)();

  const rowHeaders: Cell[] = pipe(
    splitByYs(ys),
    reject(containedBy(headerRow)),
    map(pipe(label, makeCell)),
    sequenceReaderIO
  )(headerColumn)(page)();
  const columnHeaders: Cell[] = pipe(
    splitByXs(xs),
    reject(containedBy(headerColumn)),
    map(pipe(label, makeCell)),
    sequenceReaderIO
  )(headerRow)(page)();

  const getRowHeader: (row: number) => Cell = (row) => rowHeaders[row];
  const getColumnHeader: (column: number) => Cell = (column) =>
    columnHeaders[column];

  const cellById: TableCellById = pipe(
    reject(containedBy(headerRow)),
    mapIndexed((poly: Poly, row: number): RIO.ReaderIO<Page, TableCell>[] =>
      pipe(
        splitByXs(xs),
        reject(containedBy(headerColumn)),
        mapIndexed(
          (poly: Poly, column: number): RIO.ReaderIO<Page, TableCell> =>
            pipe(
              label,
              makeTableCell(getRowHeader(row), getColumnHeader(column))
            )(poly)
        )
      )(poly)
    ),
    unnest,
    sequenceReaderIO,
    RIO.map(
      reduce(
        (acc: TableCellById, cell: TableCell) => assoc(cell.id, cell, acc),
        {}
      )
    )
  )(rows)(page)();

  return fromTableBase({
    rowHeaders,
    columnHeaders,
    mergedRowHeader,
    mergedColumnHeader,
    intersectHeader,
    cellById,
  })(boundingBox)();
};

/**
 * ```haskell
 * makeLeaf :: LabeledBoundingBox -> ReaderIO Page Leaf
 * ```
 */
export const makeLeaf: (
  boundingBox: LabeledBoundingBox
) => RIO.ReaderIO<Page, Leaf> = ifElse(hasRowsOrColumns, makeTable, makeCell);

/**
 * ```haskell
 * makeTree :: BoundingBoxes -> ReaderIO Page Tree
 * ```
 */
export const makeTree: (
  boundingBoxes: BoundingBoxes
) => RIO.ReaderIO<Page, Tree> = pipe(
  values,
  getChildlessBoundingBoxes,
  map(makeLeaf),
  RIO.sequenceReaderIO,
  RIO.map(
    reduce<Child, Children>(
      (acc: Children, child: Child) => assoc(child.id, child, acc),
      {}
    )
  )
);

/**
 * ```haskell
 * make :: DocumentAnnotationBase -> IO DocumentAnnotation
 * ```
 */
export const make: (
  annotation: DocumentAnnotationBase
) => IO.IO<DocumentAnnotation> = ({
  file,
  treeByPage,
}) => (): DocumentAnnotation => {
  const timestamp = getCurrentISOString();
  return {
    id: getRandomId(),
    file,
    treeByPage,
    created_at: timestamp,
    updated_at: timestamp,
  };
};

/**
 * ```haskell
 * makeTextCell :: String -> TextCell
 * ```
 */
export const makeTextCell: (text: string) => TextCell = (text) => ({ text });

/**
 * ```haskell
 * makeTextTableCell :: (String, String, String) -> TextTableCell
 * ```
 */
export const makeTextTableCell: (
  text: string,
  rowHeader: string,
  columnHeader: string
) => TextTableCell = (text, rowHeader, columnHeader) => ({
  ...makeTextCell(text),
  rowHeader: makeTextCell(rowHeader),
  columnHeader: makeTextCell(columnHeader),
});

/**
 * ```haskell
 * toTextCell: Cell -> TextCell
 * ```
 */
export const toTextCell: (cell: Cell) => TextCell = pick(['text']);

/**
 * ```haskell
 * toTextTableCell: TableCell -> TextTableCell
 * ```
 */
export const toTextTableCell: (tableCell: TableCell) => TextTableCell = pipe(
  evolve({
    rowHeader: toTextCell,
    columnHeader: toTextCell,
  }),
  pick(['text', 'rowHeader', 'columnHeader'])
);