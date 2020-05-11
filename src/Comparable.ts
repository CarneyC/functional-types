import * as R from 'fp-ts/lib/Reader';
import * as O from 'fp-ts/lib/Option';
import { Table, TableCell, TableCellById } from './DocumentAnnotation';
import {
  __,
  all,
  allPass,
  anyPass,
  assoc,
  assocPath,
  Dictionary,
  F,
  find,
  has,
  invertObj,
  is,
  isNil,
  keys,
  map,
  mapObjIndexed,
  not,
  pipe,
  prop,
  propIs,
  propSatisfies,
  reduce,
  values,
} from 'ramda';
import { isPoly, Poly, unionOf } from './Vertex';
import { sequenceS } from 'fp-ts/lib/Apply';

export type Direction = 'column' | 'row';
export type Predicate = (value: string) => boolean;

export interface Metadata {
  boundingPoly?: Poly;
}

export type Mapping = Dictionary<string>;

export interface Leaf {
  value: string;
  metadata?: Metadata;
}

export type Node = Dictionary<Leaf>;

export type Comparable = Dictionary<Comparable | Node>;

export interface FormatTableOptions {
  key?: Predicate;
  splitBy: Direction;
}

// propSatisfiesIfExists :: (Pred, String) -> Reader a bool
const propSatisfiesIfExists: (
  predicate: (a: unknown) => boolean,
  name: string
) => R.Reader<unknown, boolean> = (pred, name) =>
  anyPass([pipe(has(name), not), propSatisfies(pred, name)]);

// isMetadata :: a -> bool
export const isMetadata = (a: unknown): a is Metadata =>
  allPass([is(Object), propSatisfiesIfExists(isPoly, 'boundingPoly')])(a);

// isLeaf :: a -> bool
export const isLeaf = (a: unknown): a is Leaf =>
  allPass([
    is(Object),
    propIs(String, 'value'),
    propSatisfiesIfExists(isMetadata, 'metadata'),
  ])(a);

// isNode :: a -> bool
export const isNode = (a: unknown): a is Node =>
  allPass([is(Object), pipe(values, all(isLeaf))])(a);

// getPathFromDirection :: Direction -> Reader TableCell [String]
const getPathFromDirection: (
  direction: Direction
) => R.Reader<TableCell, string[]> = (direction) => (cell): string[] =>
  direction === 'row'
    ? [cell.rowHeader.text, cell.columnHeader.text]
    : [cell.columnHeader.text, cell.rowHeader.text];

// getPolyFromTableCell :: TableCell -> Poly
const getPolyFromTableCell: (cell: TableCell) => Poly = pipe(
  prop('words'),
  map(prop('boundingPoly')),
  unionOf
);

// fromTableCell :: TableCell -> Node
const fromTableCell: (tableCell: TableCell) => Leaf = (tableCell) => {
  const leaf = {
    value: tableCell.text,
  };
  const poly = getPolyFromTableCell(tableCell);
  return poly ? assocPath(['metadata', 'boundingPoly'], poly, leaf) : leaf;
};

// makeLeaf :: String -> Leaf
export const makeLeaf: (value: string) => Leaf = (value) => ({
  value,
});

// splitTable :: Table -> Reader Direction Comparable
export const splitTable: (
  table: Table
) => R.Reader<FormatTableOptions, Comparable> = (table) => ({
  splitBy: direction,
}): Comparable => {
  const getPath = getPathFromDirection(direction);
  return pipe(
    prop('cellById'),
    values as (cells: TableCellById) => TableCell[],
    reduce(
      (acc: Comparable, cell: TableCell): Comparable =>
        assocPath(getPath(cell), fromTableCell(cell), acc),
      {} as Comparable
    ),
    mapObjIndexed((comparable, key) =>
      assoc(table.intersectHeader.text, makeLeaf(key), comparable)
    )
  )(table);
};

// getKeyFromPredicate :: Node -> Reader Predicate (Option String)
export const getKeyFromPredicate: (
  node: Node
) => R.Reader<Predicate, O.Option<string>> = (node) => (
  pred
): O.Option<string> =>
  pipe(
    keys,
    find(pred),
    O.fromPredicate(pipe(isNil, not)),
    O.map(pipe(prop(__, node), prop('value')))
  )(node);

// getKeysFromPredicate :: Comparable -> Reader Predicate String
export const getKeysFromPredicate: (
  comparable: Comparable
) => R.Reader<Predicate, Mapping> = pipe(
  mapObjIndexed((node: Comparable | Node, key: string) => {
    return isNode(node)
      ? pipe(getKeyFromPredicate, R.map(O.getOrElse(() => key)))(node)
      : (): string => key;
  }),
  sequenceS(R.reader)
);

// setKeys :: Comparable -> Reader Predicate Comparable
export const setKeys: (
  comparable: Comparable
) => R.Reader<FormatTableOptions, Comparable> = (comparable) =>
  pipe(
    pipe(
      getKeysFromPredicate,
      R.local(({ key: pred }: FormatTableOptions) => pred || F)
    ),
    R.map(
      pipe(
        invertObj,
        mapObjIndexed((nodeKey: string) => comparable[nodeKey])
      )
    )
  )(comparable);

// fromTable :: Table -> Reader FormatTableOptions Something
export const fromTable: (
  table: Table
) => R.Reader<FormatTableOptions, Comparable> = pipe(
  splitTable,
  R.chain(setKeys)
);
