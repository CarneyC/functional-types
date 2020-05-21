import { Direction } from '../Comparable';
import {
  all,
  allPass,
  anyPass,
  Dictionary,
  equals,
  length,
  pipe,
  propIs,
  propSatisfies,
  values,
} from 'ramda';
import * as E from 'fp-ts/lib/Either';
import { DocumentType, isDocumentType } from '../FileType';
import { isDirection, isMergeTypeArray, MergeType } from '../Schema';
import * as S from './index';
import * as Deserialized from '../Schema';
import {
  isArray,
  isDictionary,
  isNat,
  isNotNil,
  propSatisfiesIfExists,
} from '../Types';

export interface Replacement {
  pattern: string;
  value: string;
}

export interface Replacements {
  keys?: Replacement[];
  values?: Replacement[];
}

export interface Property {
  property: string;
  pattern: string;
}

export interface Predicate {
  value: string;
  properties?: Property[];
}

export type PathSegment = string | Predicate;

export type Path = PathSegment[];

export type FilePath = [string];

export interface GettableOptions {
  merge_type?: MergeType[];
  direction?: Direction;
  key?: string;
  replacements?: Replacements;
  unnest?: number;
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
 * isReplacement :: a -> bool
 * ```
 */
export const isReplacement = (a: unknown): a is Replacement =>
  allPass([
    isDictionary,
    propSatisfies(S.isRegExp, 'pattern'),
    propIs(String, 'value'),
  ])(a);

/**
 * ```haskell
 * isReplacements :: a -> bool
 * ```
 */
export const isReplacements = (a: unknown): a is Replacements =>
  allPass([
    isDictionary,
    propSatisfiesIfExists(allPass([isArray, all(isReplacement)]), 'keys'),
    propSatisfiesIfExists(allPass([isArray, all(isReplacement)]), 'values'),
  ])(a);

/**
 * ```haskell
 * isProperty :: a -> bool
 * ```
 */
export const isProperty = (a: unknown): a is Property =>
  allPass([propIs(String, 'property'), propSatisfies(S.isRegExp, 'pattern')])(
    a
  );

/**
 * ```haskell
 * isPredicate :: a -> bool
 * ```
 */
export const isPredicate = (a: unknown): a is Predicate =>
  allPass([
    isNotNil,
    propSatisfies(S.isRegExp, 'value'),
    propSatisfiesIfExists(allPass([isArray, all(isProperty)]), 'properties'),
  ])(a);

/**
 * ```haskell
 * isPathSegment :: a -> bool
 * ```
 */
export const isPathSegment = (a: unknown): a is PathSegment =>
  anyPass([S.isRegExp, isPredicate])(a);

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
  allPass([isArray, all(S.isRegExp), pipe(length, equals(1))])(a);

/**
 * ```haskell
 * isFilePathArray :: a -> bool
 * ```
 */
export const isFilePathArray = (a: unknown): a is FilePath[] =>
  allPass([isArray, all(isFilePath)])(a);

/**
 * ```haskell
 * isGettableOptions :: a -> bool
 * ```
 */
export const isGettableOptions = (a: unknown): a is GettableOptions =>
  allPass([
    propSatisfiesIfExists(isMergeTypeArray, 'merge_type'),
    propSatisfiesIfExists(isDirection, 'direction'),
    propSatisfiesIfExists(S.isRegExp, 'key'),
    propSatisfiesIfExists(isReplacements, 'replacements'),
    propSatisfiesIfExists(isNat, 'unnest'),
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
 * serialize :: SerializableSchema -> Schema
 * ```
 */
export const serialize: (serializable: Deserialized.Schema) => Schema = (
  serializable
) =>
  (S.serialize(
    (serializable as unknown) as S.Serializable
  ) as unknown) as Schema;

/**
 * ```haskell
 * deserialize :: Schema -> SerializableSchema
 * ```
 */
export const deserialize: (
  deserializable: Schema
) => E.Either<Error, Deserialized.Schema> = (deserializable) =>
  pipe(
    S.deserialize,
    E.chain(
      E.fromPredicate(
        Deserialized.isSchema,
        () => new Error('Object is not a schema.')
      )
    )
  )((deserializable as unknown) as S.Deserializable);
