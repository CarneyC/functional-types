import {
  pipe,
  allPass,
  propIs,
  is,
  propSatisfies,
  all,
  values,
  clone,
  Dictionary,
} from 'ramda';
import { getRandomId } from '../String';

export type Type =
  | 'pdf'
  | 'excel'
  | 'json'
  | 'pdf-region'
  | 'excel-sheet'
  | 'json-child';

export interface Matcher {
  regex: string;
  name: string;
  timestamp_capture_group: number;
}

export interface FileMatcher extends Matcher {
  child?: FileMatcher;
  type: Type;
}

export interface Gettable {
  file: FileMatcher;
  attributes: Matcher[];
}

export type Gettables = Dictionary<Gettable>;

export interface Schema {
  id: string;
  gettables: Gettables;
  created_at: Date;
  updated_at: Date;
}

export interface VersionedSchema extends Schema {
  schema_id: string;
}

/**
 * ```haskell
 * isMatcher -> bool
 * ```
 */
export const isMatcher = (a: unknown): a is Matcher =>
  allPass([
    is(Object),
    propIs(String, 'regex'),
    propIs(String, 'name'),
    propIs(Number, 'timestamp_capture_group'),
  ])(a);

/**
 * ```haskell
 * isGettable -> bool
 * ```
 */
export const isGettable = (a: unknown): a is Gettable =>
  allPass([
    is(Object),
    propSatisfies(isMatcher, 'file'),
    propSatisfies(all(isMatcher), 'attributes'),
  ])(a);

/**
 * ```haskell
 * isGettables -> bool
 * ```
 */
export const isGettables = (a: unknown): a is Gettables =>
  allPass([is(Object), pipe(values, all(isGettable))])(a);

/**
 * ```haskell
 * isSchema -> bool
 * ```
 */
export const isSchema = (a: unknown): a is Schema =>
  allPass([
    is(Object),
    propIs(String, 'id'),
    propSatisfies(isGettables, 'gettables'),
  ])(a);

/**
 * ```haskell
 * makeSchema :: Gettables -> Schema
 * ```
 */
export const makeSchema: (gettables: Gettables) => Schema = (gettables) => {
  const date = new Date();
  return {
    id: getRandomId(),
    gettables,
    created_at: date,
    updated_at: date,
  };
};

/**
 * ```haskell
 * toVersionedSchema :: Schema -> VersionedSchema
 * ```
 */
export const toVersionedSchema: (schema: Schema) => VersionedSchema = (
  schema
) => ({
  ...clone(schema),
  schema_id: schema.id,
  id: getRandomId(),
});

/**
 * ```haskell
 * isVersionedSchema :: a -> bool
 * ```
 */
export const isVersionedSchema = (a: unknown): a is VersionedSchema =>
  allPass([isSchema, propIs(String, 'schema_id')])(a);
