import * as C from './Comparable';
import { DocumentType, isDocumentType } from './FileType';
import {
  isDictionary,
  isNumber,
  isPairSatisfying,
  isString,
  isStringArray,
  Pair,
} from './Types';
import { allPass, anyPass, flip, includes, propIs, propSatisfies } from 'ramda';

export type Severity = 'error' | 'warning';

export interface Leaf {
  label: string;
  severity: Severity;
  details: string;
  value: Pair<string>;
  order: Pair<number>;
  metadata: C.Metadata;
}

export type Node = C.Node<Leaf>;

export type Tree = C.Tree<Leaf>;

export interface Comparison
  extends Omit<C.Comparable<Leaf>, 'files' | 'schema_id' | 'file_type'> {
  files: Pair<string[]>;
  schema_id: Pair<string>;
  file_type: Pair<DocumentType>;
}

/**
 * ```haskell
 * isSeverity :: a -> bool
 * ```
 */
export const isSeverity = (a: unknown): a is Severity =>
  allPass([isString, flip(includes)(['error', 'warning'])])(a);

/**
 * ```haskell
 * isLeaf :: a -> bool
 * ```
 */
export const isLeaf = (a: unknown): a is Leaf =>
  allPass([
    isDictionary,
    propIs(String, 'label'),
    propSatisfies(isSeverity, 'severity'),
    propIs(String, 'details'),
    propSatisfies(isPairSatisfying(isString), 'value'),
    propSatisfies(isPairSatisfying(isNumber), 'order'),
    propSatisfies(C.isMetadata, 'metadata'),
  ])(a);

/**
 * ```haskell
 * isTree :: a -> bool
 * ```
 */
export const isTree = (a: unknown): a is Tree => C.isTreeSatisfying(isLeaf)(a);

/**
 * ```haskell
 * isNode :: a -> bool
 * ```
 */
export const isNode = (a: unknown): a is Node =>
  anyPass([C.isTreeSatisfying(isLeaf), isLeaf])(a);

/**
 * ```haskell
 * isComparison :: a -> bool
 * ```
 */
export function isComparison(a: unknown): a is Comparison {
  return allPass([
    isDictionary,
    propIs(String, 'id'),
    propIs(isPairSatisfying(isString), 'schema_id'),
    propSatisfies(isPairSatisfying(isStringArray), 'files'),
    propSatisfies(isPairSatisfying(isDocumentType), 'file_type'),
    propSatisfies(C.isTreeSatisfying(isLeaf), 'attributes'),
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);
}
