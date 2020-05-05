import { getTextFromWords, Page, Word, WordsById } from './TextAnnotation';
import * as E from 'fp-ts/lib/Either';
import * as RIO from './fp-ts/ReaderIO';
import {
  addIndex,
  assoc,
  Dictionary,
  filter,
  head,
  identity,
  map,
  pipe,
  prop,
  reduce,
  unnest,
  values,
} from 'ramda';
import {
  getXs,
  getYs,
  hasHeaderColumn,
  hasHeaderRow,
  hasRowsOrColumns,
  isContainedBy,
  LabeledBoundingBox,
  Poly,
  splitByXs,
  splitByYs,
} from './Vertex';
import * as IO from 'fp-ts/lib/IO';
import * as R from 'fp-ts/lib/Reader';
import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';
import { sequenceReaderIO } from './fp-ts/ReaderIO';

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
  parent?: string;
  rowHeaders: Cell[];
  columnHeaders: Cell[];
  mergedRowHeader: Cell;
  mergedColumnHeader: Cell;
  cellById: TableCellById;
}

export type TableBase = Omit<Table, 'id' | 'label' | 'boundingPoly'>;

export type Leaf = Cell | Table;

export interface Branch extends Node {
  parent?: Branch;
  children?: Dictionary<Branch | Leaf>;
}

export type Tree = Dictionary<Branch>;

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

// makeNode :: LabeledBoundingBox -> IO Node
export const makeNode: (boundingBox: LabeledBoundingBox) => IO.IO<Node> = ({
  boundingPoly,
  label,
}) => (): Node => ({
  id: getRandomId(),
  label,
  boundingPoly,
});

// makeCell :: LabeledBoundingBox -> ReaderIO Page Cell
export const makeCell: (
  boundingBox: LabeledBoundingBox
) => RIO.ReaderIO<Page, Cell> = (boundingBox) => (page): IO.IO<Cell> => {
  const words: Word[] = pipe(
    prop('wordsById'),
    values as (wordsById: WordsById) => Word[],
    filter(pipe(prop('boundingPoly'), isContainedBy(boundingBox.boundingPoly)))
  )(page);
  const text = getTextFromWords(words);

  return (): Cell => ({
    ...makeNode(boundingBox)(),
    words,
    text,
  });
};

// makeTableCell :: (Cell, Cell) -> LabeledBoundingBox -> ReaderIO Page TableCell
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

// fromTableBase :: TableBase -> ReaderIO LabeledBoundingBox Table
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

// labelPoly :: LabeledBoundingBox -> Reader Poly LabeledBoundingBox
const labelPoly: (
  boundingBox: LabeledBoundingBox
) => R.Reader<Poly, LabeledBoundingBox> = (boundingBox) => (
  poly
): LabeledBoundingBox => ({
  ...boundingBox,
  boundingPoly: poly,
});

const mapIndexed: <T, U>(
  fn: (item: T, index: number) => U
) => R.Reader<T[], U[]> = <T, U>(fn: (item: T, index: number) => U) => (
  list: T[]
): U[] => addIndex<T, U>(map)(fn, list);

// makeTable :: LabeledBoundingBox -> ReaderIO Page Table
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

  const mergedRowHeader: Cell = pipe(label, makeCell)(headerColumn)(page)();
  const mergedColumnHeader: Cell = pipe(label, makeCell)(headerRow)(page)();

  const rowHeaders: Cell[] = pipe(
    splitByYs(ys),
    map(pipe(label, makeCell)),
    sequenceReaderIO
  )(headerColumn)(page)();
  const columnHeaders: Cell[] = pipe(
    splitByXs(xs),
    map(pipe(label, makeCell)),
    sequenceReaderIO
  )(headerRow)(page)();

  const getRowHeader: (row: number) => Cell = (row) => rowHeaders[row];
  const getColumnHeader: (column: number) => Cell = (column) =>
    columnHeaders[column];

  const cellById: TableCellById = pipe(
    mapIndexed((poly: Poly, row: number): RIO.ReaderIO<Page, TableCell>[] =>
      pipe(
        splitByXs(xs),
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
    cellById,
  })(boundingBox)();
};

// makeLeaf :: LabeledBoundingBox -> Reader Page (IO Leaf)
export const makeLeaf: (
  boundingBox: LabeledBoundingBox
) => RIO.ReaderIO<Page, Leaf> = pipe(
  E.fromPredicate(
    hasRowsOrColumns,
    identity as (boundingBox: LabeledBoundingBox) => LabeledBoundingBox
  ),
  E.fold<LabeledBoundingBox, LabeledBoundingBox, RIO.ReaderIO<Page, Leaf>>(
    makeCell,
    makeTable
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
