import * as S from './index';
import { Direction } from '../Comparable';
import { DocumentType, isDocumentType } from '../FileType';
import {
  isDirection,
  isMergeTypeArray,
  isSchemaOptions,
  MergeType,
} from '../Schema';
import * as Deserialized from '../Schema';
import {
  isArray,
  isArraySatisfying,
  isBoolean,
  isDictionary,
  isNat,
  isNotNil,
  propSatisfiesIfExists,
} from '../Types';
import * as E from 'fp-ts/lib/Either';
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

export interface Replacement {
  pattern: string;
  value: string;
}

export interface Replacements {
  keys?: Replacement[];
  values?: Replacement[];
}

export interface Filters {
  keys?: string[];
  values?: string[];
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

export interface Multiply {
  pattern: string;
  scale: number;
}

export interface GettableOptions {
  merge_type?: MergeType[];
  direction?: Direction;
  key?: string;
  replacements?: Replacements;
  unnest?: number;
  lifts?: string[];
  rejects?: Filters;
  filters?: Filters;
  end?: string;
  multiplies?: Multiply[];
  dividend?: boolean;
}

export interface Gettable {
  file: FilePath;
  attribute: Path;
  options?: GettableOptions;
}

export type Gettables = Dictionary<Gettable>;

export interface SchemaOptions {
  merge?: boolean;
}

export interface Schema {
  id: string;
  name: string;
  gettables: Gettables;
  files: FilePath[];
  file_type: DocumentType;
  options?: SchemaOptions;
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
 * isFilters :: a -> bool
 * ```
 */
export const isFilters = (a: unknown): a is Filters =>
  allPass([
    isDictionary,
    propSatisfiesIfExists(isArraySatisfying(S.isRegExp), 'keys'),
    propSatisfiesIfExists(isArraySatisfying(S.isRegExp), 'values'),
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
 * isMultiply :: a -> bool
 * ```
 */
export const isMultiply = (a: unknown): a is Multiply =>
  anyPass([isDictionary, propIs(String, 'pattern'), propIs(Number, 'scale')])(
    a
  );

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
    propSatisfiesIfExists(isArraySatisfying(S.isRegExp), 'lifts'),
    propSatisfiesIfExists(isFilters, 'rejects'),
    propSatisfiesIfExists(isFilters, 'filters'),
    propSatisfiesIfExists(S.isRegExp, 'end'),
    propSatisfiesIfExists(isArraySatisfying(isMultiply), 'multiplies'),
    propSatisfiesIfExists(isBoolean, 'dividend'),
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
    propSatisfiesIfExists(isSchemaOptions, 'options'),
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
export function serialize(serializable: Deserialized.Schema): Schema;
export function serialize(serializable: Deserialized.SchemaBase): SchemaBase;

export function serialize(
  serializable: Deserialized.Schema | Deserialized.SchemaBase
): Schema | SchemaBase {
  return (S.serialize(
    (serializable as unknown) as S.Serializable
  ) as unknown) as Schema;
}

/**
 * ```haskell
 * deserialize :: Schema -> SerializableSchema
 * ```
 */
export function deserialize(
  deserializable: SchemaBase
): E.Either<Error, Deserialized.SchemaBase>;

export function deserialize(
  deserializable: Schema
): E.Either<Error, Deserialized.Schema>;

export function deserialize(
  deserializable: Schema | SchemaBase
): E.Either<Error, Deserialized.Schema | Deserialized.SchemaBase> {
  return pipe(
    S.deserialize,
    E.chain(
      E.fromPredicate(
        isSchema(deserializable)
          ? Deserialized.isSchema
          : Deserialized.isSchemaBase,
        () => new Error('Object is not a schema.')
      )
    )
  )((deserializable as unknown) as S.Deserializable);
}
