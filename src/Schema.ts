import {
  allPass,
  Dictionary,
  pipe,
  not,
  propIs,
  propSatisfies,
  all,
  anyPass,
  has,
  clone,
  length,
  equals,
  values,
} from 'ramda';
import { Direction } from './Comparable';
import { DocumentType, isDocumentType } from './FileType';
import { getCurrentISOString } from './DateTime';
import * as IO from 'fp-ts/lib/IO';
import {
  isArray,
  isDictionary,
  isNotNil,
  isRegExp,
  isString,
  propSatisfiesIfExists,
} from './Types';

export interface Property {
  property: string;
  pattern: RegExp;
}

export interface Predicate {
  value: RegExp;
  properties?: Property[];
}

export type PathSegment = RegExp | Predicate;

export type Path = PathSegment[];

export type FilePath = [RegExp] | [RegExp, RegExp];

export type MergeType = 'header' | 'table';

export interface GettableOptions {
  merge_type?: MergeType[];
  direction?: Direction;
  key?: RegExp;
}

export interface Gettable {
  file: FilePath;
  attribute: Path;
  options?: GettableOptions;
}

export type Gettables = Dictionary<Gettable>;

export interface Schema {
  id: string;
  name: string;
  gettables: Gettables;
  files: FilePath[];
  file_type: DocumentType;
  created_at: string;
  updated_at: string;
}

export type SchemaBase = Omit<Schema, 'created_at' | 'updated_at'>;

/**
 * ```haskell
 * isProperty :: a -> bool
 * ```
 */
export const isProperty = (a: unknown): a is Property =>
  allPass([propIs(String, 'property'), propIs(RegExp, 'pattern')])(a);

/**
 * ```haskell
 * isPredicate :: a -> bool
 * ```
 */
export const isPredicate = (a: unknown): a is Predicate =>
  allPass([
    isNotNil,
    propIs(RegExp, 'value'),
    anyPass([
      pipe(has('properties'), not),
      propSatisfies(allPass([isArray, all(isProperty)]), 'properties'),
    ]),
  ])(a);

/**
 * ```haskell
 * isPathSegment :: a -> bool
 * ```
 */
export const isPathSegment = (a: unknown): a is PathSegment =>
  anyPass([isRegExp, isPredicate])(a);

/**
 * ```haskell
 * isPath :: a -> bool
 * ```
 */
export const isPath = (a: unknown): a is Path =>
  allPass([isArray, all(isPathSegment)])(a);

/**
 * ```haskell
 * isFilePath :: a -> bool
 * ```
 */
export const isFilePath = (a: unknown): a is FilePath =>
  allPass([
    isArray,
    all(isRegExp),
    pipe(length, anyPass([equals(1), equals(2)])),
  ])(a);

/**
 * ```haskell
 * isFilePathArray :: a -> bool
 * ```
 */
export const isFilePathArray = (a: unknown): a is FilePath[] =>
  allPass([isArray, all(isFilePath)])(a);

/**
 * ```haskell
 * isMergeType :: a -> bool
 * ```
 */
export const isMergeType = (a: unknown): a is MergeType =>
  anyPass([isString, equals('header'), equals('table')])(a);

/**
 * ```haskell
 * isMergeTypeArray :: a -> bool
 * ```
 */
export const isMergeTypeArray = (a: unknown): a is MergeType[] =>
  allPass([isArray, all(isMergeType)])(a);

/**
 * ```haskell
 * isDirection :: a -> bool
 * ```
 */
export const isDirection = (a: unknown): a is Direction =>
  anyPass([isString, equals('row'), equals('column')])(a);

/**
 * ```haskell
 * isGettableOptions :: a -> bool
 * ```
 */
export const isGettableOptions = (a: unknown): a is GettableOptions =>
  allPass([
    propSatisfiesIfExists(isMergeTypeArray, 'merge_type'),
    propSatisfiesIfExists(isDirection, 'direction'),
    propSatisfiesIfExists(isRegExp, 'key'),
  ])(a);

/**
 * ```haskell
 * isGettable :: a -> bool
 * ```
 */
export const isGettable = (a: unknown): a is Gettable =>
  allPass([
    propSatisfies(isFilePath, 'file'),
    propSatisfies(isPath, 'attribute'),
    propSatisfiesIfExists(isGettableOptions, 'options'),
  ])(a);

/**
 * ```haskell
 * isGettables :: a -> bool
 * ```
 */
export const isGettables = (a: unknown): a is Gettables =>
  allPass([isDictionary, pipe(values, all(isGettable))])(a);

/**
 * ```haskell
 * isSchemaBase :: a -> bool
 * ```
 */
export const isSchemaBase = (a: unknown): a is SchemaBase =>
  allPass([
    isDictionary,
    propIs(String, 'id'),
    propIs(String, 'name'),
    propSatisfies(isGettables, 'gettables'),
    propSatisfies(isFilePathArray, 'files'),
    propSatisfies(isDocumentType, 'file_type'),
  ])(a);

/**
 * ```haskell
 * isSchema :: a -> bool
 * ```
 */
export const isSchema = (a: unknown): a is Schema =>
  allPass([
    isSchemaBase,
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

/**
 * ```haskell
 * makeSchema :: SchemaBase -> IO Schema
 * ```
 */
export const makeSchema: (schemaBase: SchemaBase) => IO.IO<Schema> = (
  schemaBase: SchemaBase
) => (): Schema => {
  const timestamp = getCurrentISOString();
  return {
    ...clone(schemaBase),
    created_at: timestamp,
    updated_at: timestamp,
  };
};
