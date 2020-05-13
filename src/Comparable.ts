import * as R from 'fp-ts/lib/Reader';
import * as O from 'fp-ts/lib/Option';
import * as RE from 'fp-ts/lib/ReaderEither';
import * as E from 'fp-ts/lib/Either';
import * as D from './DocumentAnnotation';
import * as RIO from './fp-ts/ReaderIO';
import {
  __,
  all,
  allPass,
  any,
  anyPass,
  applySpec,
  applyTo,
  assoc,
  assocPath,
  clone,
  defaultTo,
  Dictionary,
  dissoc,
  equals,
  evolve,
  F,
  filter,
  find,
  groupBy,
  has,
  head,
  ifElse,
  includes,
  invertObj,
  is,
  isEmpty,
  isNil,
  keys,
  last,
  map,
  mapObjIndexed,
  mergeAll,
  mergeDeepRight,
  not,
  path,
  pathSatisfies,
  pipe,
  prop,
  propIs,
  propSatisfies,
  reduce,
  reject,
  test as regExpTest,
  toPairs,
  unless,
  values,
  when,
} from 'ramda';
import { isPoly, Poly, unionOf } from './Vertex';
import { sequenceS } from 'fp-ts/lib/Apply';
import * as S from './Schema';
import { PathSegment } from './Schema';
import { getFileNameFromId } from './Folder';
import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';

export type Direction = 'column' | 'row';
export type Predicate = (value: string) => boolean;
export type Mapping = Dictionary<string>;

export interface Metadata {
  bounding_poly?: Poly;
}

export interface Leaf {
  value: string;
  metadata?: Metadata;
}

export interface Tree {
  [index: string]: Node;
}

export type TreeByFile = Dictionary<Tree>;

export type Node = Tree | Leaf;

export interface Comparable {
  id: string;
  schema_id: string;
  files: string[];
  attributes: Tree;
  created_at: string;
  updated_at: string;
}

export type TreeView = Dictionary<TreeView | string>;

export interface Partitions {
  branchByLabel: Dictionary<D.Branch>;
  tableByLabel: Dictionary<D.TableByName>;
  cellByLabel: Dictionary<D.CellByName>;
}

export interface FromTableOptions {
  key?: Predicate;
  mergeKey?: boolean;
  splitBy: Direction;
}

export interface FromLeafOptions extends FromTableOptions {
  predicate: Predicate;
}

export type FromBranchOptions = FromLeafOptions[];

interface PartitionedGettables {
  annotation: D.DocumentAnnotation;
  gettables: S.Gettables;
}

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
 * isNotNil :: a -> bool
 * ```
 */
export const isNotNil: (a: unknown) => boolean = pipe(isNil, not);

/**
 * ```haskell
 * isMetadata :: a -> bool
 * ```
 */
export const isMetadata = (a: unknown): a is Metadata =>
  allPass([is(Object), propSatisfiesIfExists(isPoly, 'bounding_poly')])(a);

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
 * isTree :: a -> bool
 * ```
 */
export function isTree(a: unknown): a is Tree {
  return pipe(values, allPass([is(Array), all(anyPass([isTree, isLeaf]))]))(a);
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
  return poly ? assocPath(['metadata', 'bounding_poly'], poly, leaf) : leaf;
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
 * unnest :: Tree -> Tree
 * ```
 */
export const unnest: (tree: Tree) => Tree = unless<Tree, Tree>(
  isEmpty,
  pipe(values as R.Reader<Tree, Tree[]>, head as R.Reader<Tree[], Tree>)
);

/**
 * ```haskell
 * splitTable :: Table -> Reader Direction Tree
 * ```
 */
export const splitTable: (
  table: D.Table
) => R.Reader<FromTableOptions, Tree> = (table) => ({
  splitBy: direction,
  mergeKey,
}): Tree => {
  const getPath = getPathFromDirection(direction);
  return pipe(
    prop('cellById'),
    values as (cells: D.TableCellById) => D.TableCell[],
    reduce((acc: Tree, cell: D.TableCell): Tree => {
      const path = getPath(cell);
      const table = fromTableCell(cell);
      return assocPath(path, table, acc);
    }, {} as Tree),
    mapObjIndexed((tree: Tree, key) =>
      mergeKey
        ? unnest(tree)
        : assoc(table.intersectHeader.text, makeLeaf(key), tree)
    )
  )(table);
};

/**
 * ```haskell
 * findKeyFromPredicate :: Tree -> Reader Predicate (Option String)
 * ```
 */
export const findKeyFromPredicate: (
  tree: Tree
) => R.Reader<Predicate, O.Option<string>> = (tree) => (
  pred
): O.Option<string> =>
  pipe(keys, find(pred), O.fromPredicate<string>(isNotNil))(tree);

/**
 * ```haskell
 * getKeyFromPredicate :: Tree -> Reader Predicate (Option String)
 * ```
 */
export const getKeyFromPredicate: (
  tree: Tree
) => R.Reader<Predicate, O.Option<string>> = (tree) =>
  pipe(
    filter(isLeaf) as R.Reader<Tree, Dictionary<Leaf>>,
    findKeyFromPredicate,
    R.map(O.map<string, string>(pipe(prop(__, tree), prop('value'))))
  )(tree);

/**
 * ```haskell
 * getKeysFromPredicate :: Tree -> Reader Predicate String
 * ```
 */
export const getKeysFromPredicate: (
  tree: Tree
) => R.Reader<Predicate, Mapping> = pipe(
  mapObjIndexed((node: Tree, key: string) =>
    pipe(getKeyFromPredicate, R.map(O.getOrElse(() => key)))(node)
  ),
  sequenceS(R.reader)
);

/**
 * ```haskell
 * setKeys :: Tree -> Reader PredicateStr Tree
 * ```
 */
export const setKeys: (tree: Tree) => R.Reader<FromTableOptions, Tree> = (
  tree
) =>
  pipe(
    pipe(
      getKeysFromPredicate,
      R.local(({ key: pred }: FromTableOptions) => pred || F)
    ),
    R.map(
      pipe(
        invertObj,
        mapObjIndexed((nodeKey: string) => tree[nodeKey])
      )
    )
  )(tree);

/**
 * ```haskell
 * fromTable :: Table -> Reader FromTableOptions Tree
 * ```
 */
export const fromTable: (
  table: D.Table
) => R.Reader<FromTableOptions, Tree> = pipe(splitTable, R.chain(setKeys));

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
 * matchMergeOptions :: Table -> Reader FromBranchOptions Bool
 * ```
 */
const matchMergeOptions: (
  table: D.Table
) => R.Reader<FromBranchOptions, boolean> = (table) =>
  ifElse(
    isEmpty,
    F,
    any((options: FromLeafOptions) =>
      options.predicate(table.mergedColumnHeader.text)
    )
  );

/**
 * ```haskell
 * getPathFromTree :: Tree -> Reader FromBranchOptions [String]
 * ```
 */
const getPathFromTree: (
  tree: D.Tree
) => R.Reader<FromBranchOptions, string[]> = (tree) => (options): string[] => {
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
 * partition :: Descendant -> Reader FromBranchOptions Format DescendantByLabel
 * ```
 */
export const partition: (
  branch: D.Branch
) => R.Reader<FromBranchOptions, Partitions> = (branch) => (
  options
): Partitions => {
  const mergeOptions = filter(
    (options: FromLeafOptions) => options.mergeKey === true,
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
 * getTableOptions :: String -> Reader FromBranchOptions (Option FromTableOptions)
 * ```
 */
export const getTableOptions: (
  key: string
) => R.Reader<FromBranchOptions, O.Option<FromTableOptions>> = (key) =>
  pipe(
    find<FromLeafOptions>((options) => options.predicate(key)),
    O.fromPredicate<FromLeafOptions>(isNotNil)
  );

/**
 * ```haskell
 * fromTableByName :: TableByName -> Reader FromBranchOptions Tree
 * ```
 */
export const fromTableByName: (
  tables: D.TableByName
) => R.Reader<FromBranchOptions, Tree> = pipe(
  mapObjIndexed<D.Table, R.Reader<FromBranchOptions, O.Option<Tree>>, string>(
    (table, key) => pipe(getTableOptions(key), O.map(fromTable(table)))
  ),
  sequenceS(R.reader),
  R.map(
    pipe(
      mapObjIndexed<O.Option<Tree>, Tree | false>(
        O.getOrElse<Tree | false>(() => false)
      ),
      reject<Tree | false>(equals(false)) as R.Reader<
        Dictionary<Tree | false>,
        Tree
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
    bounding_poly: getPolyFromCell(cell),
  },
});

/**
 * ```haskell
 * fromCellByName :: CellByName -> Reader FromBranchOptions Node
 * ```
 */
export const fromCellByName: (
  cells: D.CellByName
) => R.Reader<FromBranchOptions, Tree> = (cells) => (): Tree =>
  mapObjIndexed(fromCell, cells);

/**
 * ```haskell
 * fromBranch :: Branch -> Reader FromBranchOptions Tree
 * ```
 */
export function fromBranch(
  branch: D.Branch
): R.Reader<FromBranchOptions, Tree> {
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
    R.map<Dictionary<Tree>, Dictionary<Tree>>(
      pipe(
        values as R.Reader<Dictionary<Tree>, Tree[]>,
        reduce<Tree, Dictionary<Tree>>(mergeDeepRight, {})
      )
    )
  )(branch);
}

/**
 * ```haskell
 * fromForestByLabel :: ForestByLabel -> Reader FromBranchOptions Tree
 * ```
 */
export const fromForestByLabel: (
  forest: D.ForestByLabel
) => R.Reader<FromBranchOptions, Tree> = pipe(
  mapObjIndexed(fromBranch),
  sequenceS(R.reader)
);

/**
 * ```haskell
 * fromForest :: Forest -> Reader FromBranchOptions Tree
 * ```
 */
export const fromForest: (
  forest: D.Forest
) => R.Reader<FromBranchOptions, Tree> = pipe(D.mergeForest, fromForestByLabel);

/**
 * ```haskell
 * fromForestByPage :: ForestByPage -> Reader FromBranchOptions Tree
 * ```
 */
export const fromForestByPage: (
  forestByPage: D.ForestByPage
) => R.Reader<FromBranchOptions, Tree> = pipe(
  D.mergeForestByPage,
  fromForestByLabel
);

/**
 * ```haskell
 * view :: Tree -> TreeView
 * ```
 */
export function view(tree: Tree): TreeView {
  return ifElse(isLeaf, prop('value'), mapObjIndexed(view))(tree);
}

/**
 * ```haskell
 * getPredicateFromGettable :: Gettable -> Predicate
 * ```
 */
const getPredicateFromGettable: (gettable: S.Gettable) => Predicate = pipe(
  prop('attribute'),
  last,
  ifElse(isNil, F, regExpTest)
);

/**
 * ```haskell
 * getKeyPredicateFromGettable :: Gettable -> Predicate
 * ```
 */
const getKeyPredicateFromGettable: (
  gettable: S.Gettable
) => Predicate | undefined = pipe(
  path<RegExp>(['options', 'key']),
  unless(isNil, regExpTest)
);

/**
 * ```haskell
 * getMergeKeyFromGettable :: Gettable -> Bool
 * ```
 */
const getMergeKeyFromGettable: (
  gettable: S.Gettable
) => boolean = pathSatisfies(allPass([is(Array), includes('header')]), [
  'options',
  'merge_type',
]);

/**
 * ```haskell
 * getSplitByFromGettable :: Gettable -> Direction
 * ```
 */
const getDirectionFromGettable: (gettable: S.Gettable) => Direction = pipe(
  path<Direction>(['options', 'direction']),
  defaultTo<Direction>('row')
);

/**
 * ```haskell
 * getLeafOptionsFromGettable :: Gettable -> FromLeafOptions
 * ```
 */
export const getLeafOptionsFromGettable: (
  gettable: S.Gettable
) => FromLeafOptions = applySpec({
  predicate: getPredicateFromGettable,
  key: getKeyPredicateFromGettable,
  mergeKey: getMergeKeyFromGettable,
  splitBy: getDirectionFromGettable,
});

/**
 * ```haskell
 * getBranchOptionsFromGettables :: Gettables -> FromBranchOptions
 * ```
 */
export const getBranchOptionsFromGettables: (
  gettables: S.Gettables
) => FromBranchOptions = pipe(
  values as R.Reader<S.Gettables, S.Gettable[]>,
  map(getLeafOptionsFromGettable)
);

/**
 * ```haskell
 * getPredicateFromPathSegment :: PathSegment -> Predicate
 * ```
 */
export const getPredicateFromPathSegment: (
  segment: PathSegment
) => Predicate = pipe(when(S.isPredicate, prop('value')), regExpTest);

/**
 * ```haskell
 * satisfyPredicate :: Node -> Reader Predicate Bool
 * ```
 */
const satisfyPredicate: (node: Node) => R.Reader<Predicate, boolean> = pipe(
  RE.fromPredicate(isTree, () => false),
  RE.chain(pipe(findKeyFromPredicate, R.map(E.fromOption(() => false)))),
  R.map(E.isRight)
);

/**
 * ```haskell
 * satisfyProperties :: Tree -> Reader [Property] Bool
 * ```
 */
export const satisfyProperties: (
  node: Node
) => R.Reader<S.Property[], boolean> = (node) =>
  all(({ property, pattern }) =>
    propSatisfies(
      allPass([
        isNotNil,
        R.compose(satisfyPredicate)(applyTo(regExpTest(pattern))),
      ]),
      property
    )(node)
  );

/**
 * ```haskell
 * applyPath :: Tree -> Reader Path (Option Tree)
 * ```
 */
export const applyPath: (node: Node) => R.Reader<S.Path, O.Option<Node>> = (
  node
) => (path): O.Option<Node> => {
  if (isEmpty(path)) return O.some(node);

  const [segment, ...pathSegments] = path;
  const predicate = getPredicateFromPathSegment(segment);

  if (isLeaf(node)) {
    return isEmpty(pathSegments) && predicate(node.value)
      ? O.some(node)
      : O.none;
  }

  const key = findKeyFromPredicate(node)(predicate);
  if (O.isNone(key)) return O.none;

  const child = node[key.value];
  if (S.isPredicate(segment) && !satisfyProperties(child)(segment.properties)) {
    return O.none;
  }

  return applyPath(child)(pathSegments);
};

/**
 * ```haskell
 * applyGettables :: ForestByLabel -> Reader Gettables Tree
 * ```
 */
export const applyGettables: (
  forest: D.ForestByLabel
) => R.Reader<S.Gettables, Tree> = pipe(
  pipe(fromForestByLabel, R.local(getBranchOptionsFromGettables)),
  R.map<Tree, R.Reader<S.Gettable, O.Option<Node>>>(
    pipe(applyPath, R.local<S.Gettable, S.Path>(prop('attribute')))
  ),
  R.chain(
    mapObjIndexed as (
      fa: R.Reader<S.Gettable, O.Option<Node>>
    ) => R.Reader<S.Gettables, Dictionary<O.Option<Node>>>
  ),
  R.map(filter(O.isSome)),
  R.map(mapObjIndexed((some: O.Some<Node>) => some.value))
);

/**
 * ```haskell
 * findNamesSatisfyingFilePath :: [String] -> Reader FilePath [String]
 * ```
 */
const findNamesSatisfyingFilePath: (
  files: string[]
) => R.Reader<S.FilePath, string[]> = (files) => ([
  path,
  ...others
]): string[] => {
  return isEmpty(others) ? filter(regExpTest(path), files) : [];
};

/**
 * ```haskell
 * partitionGettables :: [DocumentAnnotation] -> Reader Gettables (Dictionary Gettables)
 * ```
 */
export const partitionGettables: (
  annotations: D.DocumentAnnotation[]
) => R.Reader<S.Gettables, Dictionary<PartitionedGettables>> = (
  annotations
) => {
  const annotationByFile: Record<string, D.DocumentAnnotation> = pipe(
    groupBy(pipe(prop('file'), getFileNameFromId)),
    mapObjIndexed<D.DocumentAnnotation[], D.DocumentAnnotation>(head)
  )(annotations);

  const files: string[] = keys(annotationByFile);

  return pipe(
    toPairs as R.Reader<S.Gettables, [string, S.Gettable][]>,
    reduce<[string, S.Gettable], Dictionary<S.Gettables>>(
      (acc, [property, gettable]) => {
        return pipe(
          prop('file'),
          findNamesSatisfyingFilePath(files),
          reduce<string, Dictionary<S.Gettables>>(
            (acc, filename) =>
              assocPath([filename, property], clone(gettable), acc),
            acc
          )
        )(gettable);
      },
      {}
    ),
    dissoc(''),
    mapObjIndexed<S.Gettables[], S.Gettables>(mergeAll),
    mapObjIndexed<S.Gettables, PartitionedGettables>((gettables, file) => ({
      annotation: prop(file, annotationByFile),
      gettables,
    }))
  );
};

/**
 * ```haskell
 * applySchema :: [DocumentAnnotation] -> Reader Schema Tree
 * ```
 */
export const applySchema: (
  annotations: D.DocumentAnnotation[]
) => R.Reader<S.Schema, TreeByFile> = pipe(
  pipe(
    partitionGettables,
    R.local(prop('gettables') as R.Reader<S.Schema, S.Gettables>)
  ),
  R.map(
    mapObjIndexed<PartitionedGettables, Tree>(({ annotation, gettables }) =>
      pipe(
        prop('forestByPage'),
        D.mergeForestByPage,
        applyGettables
      )(annotation)(gettables)
    )
  )
);

/**
 * ```haskell
 * makeComparables :: (Tree, String) -> ReaderIO Schema Comparable
 * ```
 */
export const makeComparable: (
  tree: Tree,
  file: string
) => RIO.ReaderIO<S.Schema, Comparable> = (tree, file) => (
  schema
) => (): Comparable => {
  const timestamp = getCurrentISOString();
  return {
    id: getRandomId(),
    schema_id: schema.id,
    files: [file],
    attributes: clone(tree),
    created_at: timestamp,
    updated_at: timestamp,
  };
};

/**
 * ```haskell
 * makeComparables :: [DocumentAnnotation] -> ReaderIO Schema [Comparable]
 * ```
 */
export const makeComparables: (
  annotations: D.DocumentAnnotation[]
) => RIO.ReaderIO<S.Schema, Comparable[]> = pipe(
  applySchema,
  R.chain(
    pipe(
      mapObjIndexed<Tree, RIO.ReaderIO<S.Schema, Comparable>>((tree, file) =>
        makeComparable(tree, file)
      ),
      values,
      RIO.sequenceReaderIO
    )
  )
);
