import {
  allPass,
  Dictionary,
  isNil,
  pipe,
  not,
  propIs,
  propSatisfies,
  is,
  all,
  anyPass,
  has,
  clone,
} from 'ramda';
import { Direction } from './Comparable';
import { DocumentType } from './FileType';
import { getCurrentISOString } from './DateTime';
import * as IO from 'fp-ts/lib/IO';

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
    pipe(isNil, not),
    propIs(RegExp, 'value'),
    anyPass([
      pipe(has('properties'), not),
      propSatisfies(allPass([is(Array), all(isProperty)]), 'properties'),
    ]),
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
