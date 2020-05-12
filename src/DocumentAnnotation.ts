import {
  getTextFromWords,
  isWordArray,
  Page,
  Word,
  WordsById,
} from './TextAnnotation';
import * as RIO from './fp-ts/ReaderIO';
import * as O from 'fp-ts/lib/Option';
import * as A from 'fp-ts/lib/Array';
import {
  addIndex,
  all,
  allPass,
  anyPass,
  append,
  assoc,
  concat,
  Dictionary,
  eqBy,
  evolve,
  filter,
  has,
  head,
  ifElse,
  is,
  isEmpty,
  join,
  map,
  mergeAll,
  not,
  path,
  pick,
  pipe,
  prop,
  propIs,
  propSatisfies,
  reduce,
  reject,
  uniq,
  unnest,
  values,
  zip,
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
  unions,
} from './Vertex';
import * as IO from 'fp-ts/lib/IO';
import * as R from 'fp-ts/lib/Reader';
import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';
import { sequenceReaderIO } from './fp-ts/ReaderIO';
import { BoundingBoxes, TableAnnotation } from './TableAnnotation';
import { TextAnnotation } from './TextAnnotation';
import { sequenceS } from 'fp-ts/lib/Apply';

export interface Node {
  id: string;
  label: string;
  boundingPoly: Poly;
}

export interface Cell extends Node {
  words: Word[];
  text: string;
}

export type CellByName = Dictionary<Cell>;

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

export type TableByName = Dictionary<Table>;

export type TableBase = Omit<Table, 'id' | 'label' | 'boundingPoly'>;

export type Leaf = Cell | Table;

export interface Branch extends Node {
  parent?: Branch;
  children: Tree[];
}

export interface Descendant extends Branch {
  children: Leaf[];
}

export type Tree = Branch | Leaf;

export type Forest = Dictionary<Tree>;

export type ForestByPage = Forest[];

export type ForestByLabel = Dictionary<Branch>;

export interface DocumentAnnotation {
  id: string;
  file: string;
  forestByPage: ForestByPage;
  created_at: string;
  updated_at: string;
}

export type DocumentAnnotationBase = Pick<
  DocumentAnnotation,
  'file' | 'forestByPage'
>;

export type TextCell = Pick<Cell, 'text'>;

export type TextTableCell = TextCell & {
  rowHeader: TextCell;
  columnHeader: TextCell;
};

/**
 * ```haskell
 * isLeaf :: a -> bool
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
  allPass([
    isNode,
    anyPass([doesNotHave('parent'), propSatisfies(isBranch, 'parent')]),
    has('children'),
    propSatisfies(
      allPass([is(Array), all(anyPass([isBranch, isLeaf]))]),
      'children'
    ),
  ])(a);

/**
 * ```haskell
 * isTree :: a -> bool
 * ```
 */
export const isTree = (a: unknown): a is Tree => anyPass([isBranch, isLeaf])(a);

/**
 * ```haskell
 * isForest :: a -> bool
 * ```
 */
export const isForest = (a: unknown): a is Forest =>
  allPass([is(Object), pipe(values, all(isTree))])(a);

/**
 * ```haskell
 * isForestByPage :: a -> bool
 * ```
 */
export const isForestByPage = (a: unknown): a is ForestByPage =>
  allPass([is(Array), all(isForest)])(a);

/**
 * ```haskell
 * isDocumentAnnotation :: a -> bool
 * ```
 */
export const isDocumentAnnotation = (a: unknown): a is DocumentAnnotation =>
  allPass([
    is(Object),
    propIs(String, 'file'),
    propSatisfies(isForestByPage, 'forestByPage'),
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

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
const fromTableBase: (
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
 * equalById :: LabelBoundingBox -> Reader LabelBoundingBox bool
 * ```
 */
const equalById: (
  boundingBox: LabeledBoundingBox
) => R.Reader<LabeledBoundingBox, boolean> = eqBy(prop('id'));

/**
 * ```haskell
 * makeTrees :: ([LabeledBoundingBox], Int) -> ReaderIO Page Tree
 * ```
 */
const makeTrees: (
  boundingBoxes: LabeledBoundingBox[],
  children?: Tree[]
) => RIO.ReaderIO<Page, Tree[]> = (boundingBoxes, children: Tree[] = []) => (
  page
) => (): Tree[] => {
  const siblingBoxes = getChildlessBoundingBoxes(boundingBoxes);
  const parentBoxes = reject(
    anyPass(map(equalById, siblingBoxes)),
    boundingBoxes
  );

  const isOrphan: (child: Tree) => boolean = pipe(
    prop('boundingPoly'),
    anyPass(map(pipe(prop('boundingPoly'), containedBy), siblingBoxes)),
    not
  );

  const { orphans, descendants } = reduce(
    (acc: { orphans: Tree[]; descendants: Tree[] }, child) => {
      const key = isOrphan(child) ? 'orphans' : 'descendants';
      return {
        ...acc,
        [key]: append(child, acc[key]),
      };
    },
    { orphans: [], descendants: [] },
    children
  );

  const siblings = isEmpty(children)
    ? pipe(map(makeLeaf), RIO.sequenceReaderIO)(siblingBoxes)(page)()
    : pipe(
        map(
          (sibling: LabeledBoundingBox): Branch => ({
            ...makeNode(sibling)(),
            children: filter(
              propSatisfies(containedBy(sibling.boundingPoly), 'boundingPoly'),
              descendants
            ),
          })
        ),
        concat(orphans)
      )(siblingBoxes);

  return isEmpty(parentBoxes)
    ? siblings
    : makeTrees(parentBoxes, siblings)(page)();
};

/**
 * ```haskell
 * makeForest :: BoundingBoxes -> ReaderIO Page Forest
 * ```
 */
export const makeForest: (
  boundingBoxes: BoundingBoxes
) => RIO.ReaderIO<Page, Forest> = pipe(
  values,
  makeTrees,
  RIO.map(reduce((acc: Forest, child: Tree) => assoc(child.id, child, acc), {}))
);

/**
 * ```haskell
 * fromDocumentBase :: DocumentAnnotationBase -> IO DocumentAnnotation
 * ```
 */
const fromDocumentBase: (
  annotation: DocumentAnnotationBase
) => IO.IO<DocumentAnnotation> = ({
  file,
  forestByPage,
}) => (): DocumentAnnotation => {
  const timestamp = getCurrentISOString();
  return {
    id: getRandomId(),
    file,
    forestByPage: forestByPage,
    created_at: timestamp,
    updated_at: timestamp,
  };
};

type Tuple = [BoundingBoxes, Page];

/**
 * ```haskell
 * makeForestByPage :: TableAnnotation -> ReaderIO TextAnnotation ForestByPage
 * ```
 */
export const makeForestByPage: (
  tableAnnotation: TableAnnotation
) => RIO.ReaderIO<TextAnnotation, ForestByPage> = (tableAnnotation) => (
  textAnnotation
): IO.IO<ForestByPage> => {
  const tuple: Tuple[] = zip(
    tableAnnotation.boundingBoxesByPage,
    textAnnotation.pages
  );

  return pipe(
    map<Tuple, IO.IO<Forest>>(
      ([boundingBoxes, page]): IO.IO<Forest> => makeForest(boundingBoxes)(page)
    ),
    A.array.sequence(IO.io)
  )(tuple);
};

/**
 * ```haskell
 * getFileNameIO :: TableAnnotation -> ReaderIO TextAnnotation String
 * ```
 */
const getFileNameIO: (
  tableAnnotation: TableAnnotation
) => RIO.ReaderIO<TextAnnotation, string> = (tableAnnotation) => (
  textAnnotation: TextAnnotation
) => (): string =>
  pipe(uniq, join(','))([tableAnnotation.file, textAnnotation.file]);

/**
 * ```haskell
 * make :: TableAnnotation -> ReaderIO TextAnnotation DocumentAnnotation
 * ```
 */
export const make: (
  tableAnnotation: TableAnnotation
) => RIO.ReaderIO<TextAnnotation, DocumentAnnotation> = pipe(
  sequenceS(R.reader)({
    file: getFileNameIO,
    forestByPage: makeForestByPage,
  }),
  sequenceS(R.reader),
  R.map(sequenceS(IO.io)),
  RIO.chainIOK(fromDocumentBase)
);

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
 * toTextTableCell :: TableCell -> TextTableCell
 * ```
 */
export const toTextTableCell: (tableCell: TableCell) => TextTableCell = pipe(
  evolve({
    rowHeader: toTextCell,
    columnHeader: toTextCell,
  }),
  pick(['text', 'rowHeader', 'columnHeader'])
);

/**
 * getKeyFromLeaf :: Leaf -> String
 */
export const getKeyFromLeaf: (leaf: Leaf) => string = ifElse(
  isTable,
  path(['intersectHeader', 'text']),
  prop('text')
);

/**
 * mergeForest :: Forest -> ForestByLabel
 */
export const mergeForest: (forest: Forest) => ForestByLabel = pipe(
  values as R.Reader<Forest, Tree[]>,
  reduce<Tree, Dictionary<Branch>>((acc, newTree: Tree) => {
    const { label } = newTree;

    const oldTree = acc[label];
    const accChildren = oldTree?.children || [];
    const newChildren = isLeaf(newTree) ? [newTree] : newTree.children;

    const id = oldTree ? `${oldTree.id},${newTree.id}` : newTree.id;
    const boundingPoly = oldTree
      ? unions(oldTree.boundingPoly)(newTree.boundingPoly)
      : newTree.boundingPoly;
    const children = concat(accChildren, newChildren);

    const tree = { id, label, boundingPoly, children };
    return assoc(label, tree, acc);
  }, {})
);

/**
 * mergeForestByPage :: ForestByPage -> ForestByLabel
 */
export const mergeForestByPage: (
  forestByPage: ForestByPage
) => ForestByLabel = pipe(mergeAll, mergeForest);
