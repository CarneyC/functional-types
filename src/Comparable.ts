import * as R from 'fp-ts/lib/Reader';
import * as O from 'fp-ts/lib/Option';
import * as D from './DocumentAnnotation';
import {
  __,
  all,
  allPass,
  any,
  anyPass,
  assoc,
  assocPath,
  Dictionary,
  equals,
  evolve,
  F,
  filter,
  find,
  has,
  head,
  ifElse,
  invertObj,
  is,
  isEmpty,
  isNil,
  keys,
  map,
  mapObjIndexed,
  mergeDeepRight,
  not,
  pipe,
  prop,
  propIs,
  propSatisfies,
  reduce,
  reject,
  unless,
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

export type Comparable = Dictionary<Comparable> | Node;

export type Type = 'cell' | 'table';

export interface Partitions {
  branchByLabel: Dictionary<D.Branch>;
  tableByLabel: Dictionary<D.TableByName>;
  cellByLabel: Dictionary<D.CellByName>;
}

export interface FormatTableOptions {
  key?: Predicate;
  mergeKey?: boolean;
  splitBy: Direction;
}

export interface FormatLeafOptions extends FormatTableOptions {
  predicate: Predicate;
}

export type FormatBranchOptions = FormatLeafOptions[];

/**
 * ```haskell
 * propSatisfiesIfExists :: (Pred, String) -> Reader a bool
 * ```
 */
const propSatisfiesIfExists: (
  predicate: (a: unknown) => boolean,
  name: string
) => R.Reader<unknown, boolean> = (pred, name) =>
  anyPass([pipe(has(name), not), propSatisfies(pred, name)]);

/**
 * ```haskell
 * isMetadata :: a -> bool
 * ```
 */
export const isMetadata = (a: unknown): a is Metadata =>
  allPass([is(Object), propSatisfiesIfExists(isPoly, 'boundingPoly')])(a);

/**
 * ```haskell
 * isLeaf :: a -> bool
 * ```
 */
export const isLeaf = (a: unknown): a is Leaf =>
  allPass([
    is(Object),
    propIs(String, 'value'),
    propSatisfiesIfExists(isMetadata, 'metadata'),
  ])(a);

/**
 * ```haskell
 * isNode :: a -> bool
 * ```
 */
export const isNode = (a: unknown): a is Node =>
  allPass([is(Object), pipe(values, all(isLeaf))])(a);

/**
 * ```haskell
 * isComparable :: a -> bool
 * ```
 */
export function isComparable(a: unknown): a is Comparable {
  return anyPass([
    isNode,
    pipe(values, allPass([is(Array), all(isComparable)])),
  ])(a);
}

/**
 * ```haskell
 * getPathFromDirection :: Direction -> Reader TableCell [String]
 * ```
 */
const getPathFromDirection: (
  direction: Direction
) => R.Reader<D.TableCell, string[]> = (direction) => (cell): string[] =>
  direction === 'row'
    ? [cell.rowHeader.text, cell.columnHeader.text]
    : [cell.columnHeader.text, cell.rowHeader.text];

/**
 * ```haskell
 * getPolyFromCell :: Cell -> Poly
 * ```
 */
const getPolyFromCell: (cell: D.Cell) => Poly = pipe(
  prop('words'),
  map(prop('boundingPoly')),
  unionOf
);

/**
 * ```haskell
 * fromTableCell :: TableCell -> Node
 * ```
 */
const fromTableCell: (tableCell: D.TableCell) => Leaf = (tableCell) => {
  const leaf = {
    value: tableCell.text,
  };
  const poly = getPolyFromCell(tableCell);
  return poly ? assocPath(['metadata', 'boundingPoly'], poly, leaf) : leaf;
};

/**
 * ```haskell
 * makeLeaf :: String -> Leaf
 * ```
 */
export const makeLeaf: (value: string) => Leaf = (value) => ({
  value,
});

/**
 * ```haskell
 * unnest :: Comparable -> Comparable
 * ```
 */
export const unnest: (comparable: Comparable) => Comparable = unless(
  isEmpty,
  pipe(values, head)
);

/**
 * ```haskell
 * splitTable :: Table -> Reader Direction Comparable
 * ```
 */
export const splitTable: (
  table: D.Table
) => R.Reader<FormatTableOptions, Comparable> = (table) => ({
  splitBy: direction,
  mergeKey,
}): Comparable => {
  const getPath = getPathFromDirection(direction);
  return pipe(
    prop('cellById'),
    values as (cells: D.TableCellById) => D.TableCell[],
    reduce(
      (acc: Comparable, cell: D.TableCell): Comparable =>
        assocPath(getPath(cell), fromTableCell(cell), acc),
      {} as Comparable
    ),
    mapObjIndexed((comparable: Comparable, key) =>
      mergeKey
        ? unnest(comparable)
        : assoc(table.intersectHeader.text, makeLeaf(key), comparable)
    )
  )(table);
};

/**
 * ```haskell
 * getKeyFromPredicate :: Node -> Reader Predicate (Option String)
 * ```
 */
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

/**
 * ```haskell
 * getKeysFromPredicate :: Comparable -> Reader Predicate String
 * ```
 */
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

/**
 * ```haskell
 * setKeys :: Comparable -> Reader Predicate Comparable
 * ```
 */
export const setKeys: (
  comparable: Dictionary<Node>
) => R.Reader<FormatTableOptions, Dictionary<Node>> = (comparable) =>
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

/**
 * ```haskell
 * fromTable :: Table -> Reader FormatTableOptions Comparable
 * ```
 */
export const fromTable: (
  table: D.Table
) => R.Reader<FormatTableOptions, Comparable> = pipe(
  splitTable,
  R.chain(setKeys)
);

/**
 * ```haskell
 * getLabelFromNode :: Node -> String
 * ```
 */
const getLabelFromNode: (node: D.Node) => string = (node) => node.label;

/**
 * ```haskell
 * getTypeFromNode :: Leaf -> String
 * ```
 */
const getTypeFromNode: (node: D.Node) => string = (node) => {
  if (D.isTable(node)) {
    return 'tableByLabel';
  } else if (D.isCell(node)) {
    return 'cellByLabel';
  } else {
    return 'branchByLabel';
  }
};

/**
 * ```haskell
 * matchMergeOptions :: Table -> Reader FormatBranchOptions Bool
 * ```
 */
const matchMergeOptions: (
  table: D.Table
) => R.Reader<FormatBranchOptions, boolean> = (table) =>
  ifElse(
    isEmpty,
    F,
    any((options: FormatLeafOptions) =>
      options.predicate(table.mergedColumnHeader.text)
    )
  );

/**
 * ```haskell
 * getPathFromTree :: Tree -> Reader FormatBranchOptions [String]
 * ```
 */
const getPathFromTree: (
  tree: D.Tree
) => R.Reader<FormatBranchOptions, string[]> = (tree) => (
  options
): string[] => {
  const path = [getTypeFromNode(tree), getLabelFromNode(tree)];
  if (D.isTable(tree) && matchMergeOptions(tree)(options)) {
    return [...path, tree.mergedColumnHeader.text];
  } else if (D.isLeaf(tree)) {
    return [...path, D.getKeyFromLeaf(tree)];
  } else {
    return path;
  }
};

/**
 * ```haskell
 * partition :: Descendant -> Reader FormatBranchOptions Format DescendantByLabel
 * ```
 */
export const partition: (
  branch: D.Branch
) => R.Reader<FormatBranchOptions, Partitions> = (branch) => (
  options
): Partitions => {
  const mergeOptions = filter(
    (options: FormatLeafOptions) => options.mergeKey === true,
    options
  );
  return reduce<D.Tree, Partitions>(
    (partition, child) =>
      assocPath(getPathFromTree(child)(mergeOptions), child, partition),
    { branchByLabel: {}, cellByLabel: {}, tableByLabel: {} } as Partitions,
    branch.children
  );
};

/**
 * ```haskell
 * getTableOptions :: String -> Reader FormatBranchOptions (Option FormatTableOptions)
 * ```
 */
export const getTableOptions: (
  key: string
) => R.Reader<FormatBranchOptions, O.Option<FormatTableOptions>> = (key) =>
  pipe(
    find<FormatLeafOptions>((options) => options.predicate(key)),
    O.fromPredicate<FormatLeafOptions>(pipe(isNil, not))
  );

/**
 * ```haskell
 * fromTableByName :: TableByName -> Reader FormatBranchOptions Comparable
 * ```
 */
export const fromTableByName: (
  tables: D.TableByName
) => R.Reader<FormatBranchOptions, Comparable> = pipe(
  mapObjIndexed<
    D.Table,
    R.Reader<FormatBranchOptions, O.Option<Comparable>>,
    string
  >((table, key) => pipe(getTableOptions(key), O.map(fromTable(table)))),
  sequenceS(R.reader),
  R.map(
    pipe(
      mapObjIndexed<O.Option<Comparable>, Comparable | false>(
        O.getOrElse<Comparable | false>(() => false)
      ),
      reject<Comparable | false>(equals(false)) as R.Reader<
        Dictionary<Comparable | false>,
        Comparable
      >
    )
  )
);

/**
 * ```haskell
 * fromCell :: Cell -> Node
 * ```
 */
export const fromCell: (cell: D.Cell) => Leaf = (cell) => ({
  value: cell.text,
  metadata: {
    boundingPoly: getPolyFromCell(cell),
  },
});

/**
 * ```haskell
 * fromCellByName :: CellByName -> Reader FormatBranchOptions Node
 * ```
 */
export const fromCellByName: (
  cells: D.CellByName
) => R.Reader<FormatBranchOptions, Comparable> = (cells) => (): Comparable =>
  mapObjIndexed(fromCell, cells);

/**
 * ```haskell
 * fromBranch :: Branch -> Reader FormatBranchOptions Comparable
 * ```
 */
export function fromBranch(
  branch: D.Branch
): R.Reader<FormatBranchOptions, Comparable> {
  return pipe(
    partition,
    R.chain(
      pipe(
        reject(isEmpty),
        evolve({
          branchByLabel: pipe(mapObjIndexed(fromBranch), sequenceS(R.reader)),
          cellByLabel: pipe(mapObjIndexed(fromCellByName), sequenceS(R.reader)),
          tableByLabel: pipe(
            mapObjIndexed(fromTableByName),
            sequenceS(R.reader)
          ),
        }),
        sequenceS(R.reader)
      )
    ),
    R.map<Dictionary<Comparable>, Dictionary<Comparable>>(
      pipe(
        values as R.Reader<Dictionary<Comparable>, Comparable[]>,
        reduce<Comparable, Dictionary<Comparable>>(mergeDeepRight, {})
      )
    )
  )(branch);
}

/**
 * ```haskell
 * fromForest :: Forest -> Reader FormatBranchOptions Comparable
 * ```
 */
export const fromForest: (
  forest: D.Forest
) => R.Reader<FormatBranchOptions, Comparable> = pipe(
  mapObjIndexed(fromBranch),
  sequenceS(R.reader)
);
