import { isRegExp } from './index';
import * as S from './index';
import * as Deserialized from '../ComparableSchema';
import { isArraySatisfying, isPairSatisfying, Pair } from '../Types';
import * as E from 'fp-ts/lib/Either';
import { allPass, anyPass, pipe, propIs } from 'ramda';

export type SchemaPath = string | [string];

export interface ComparableSchema extends Pair<SchemaPath> {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export type ComparableSchemaBase = Omit<
  ComparableSchema,
  'id' | 'created_at' | 'updated_at'
>;

/**
 * ```haskell
 * isRegExpArray :: a -> bool
 * ```
 */
const isRegExpArray = isArraySatisfying(isRegExp);

/**
 * ```haskell
 * isSchemaPath :: a -> bool
 * ```
 */
export const isSchemaPath = (a: unknown): a is SchemaPath =>
  anyPass([isRegExp, isRegExpArray])(a);

/**
 * ```haskell
 * isComparableSchemaBase :: a -> bool
 * ```
 */
export const isComparableSchemaBase = (a: unknown): a is ComparableSchemaBase =>
  allPass([isPairSatisfying(isSchemaPath), propIs(String, 'name')])(a);

/**
 * ```haskell
 * isComparableSchemaBase :: a -> bool
 * ```
 */
export const isComparableSchema = (a: unknown): a is ComparableSchema =>
  allPass([
    isComparableSchemaBase,
    propIs(String, 'id'),
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

/**
 * ```haskell
 * serialize :: SerializableSchema -> Schema
 * ```
 */
export function serialize(
  serializable: Deserialized.ComparableSchema
): ComparableSchema;

export function serialize(
  serializable: Deserialized.ComparableSchemaBase
): ComparableSchemaBase;

export function serialize(
  serializable:
    | Deserialized.ComparableSchema
    | Deserialized.ComparableSchemaBase
): ComparableSchema | ComparableSchemaBase {
  return (S.serialize(
    (serializable as unknown) as S.Serializable
  ) as unknown) as ComparableSchema;
}

/**
 * ```haskell
 * deserialize :: Schema -> SerializableSchema
 * ```
 */
export function deserialize(
  deserializable: ComparableSchema
): E.Either<Error, Deserialized.ComparableSchema>;

export function deserialize(
  deserializable: ComparableSchemaBase
): E.Either<Error, Deserialized.ComparableSchemaBase>;

export function deserialize(
  deserializable: ComparableSchema | ComparableSchemaBase
): E.Either<
  Error,
  Deserialized.ComparableSchema | Deserialized.ComparableSchemaBase
> {
  return pipe(
    S.deserialize,
    E.chain(
      E.fromPredicate(
        isComparableSchema(deserializable)
          ? Deserialized.isComparableSchema
          : Deserialized.isComparableSchemaBase,
        () => new Error('Object is not a ComparableSchema.')
      )
    )
  )((deserializable as unknown) as S.Deserializable);
}
