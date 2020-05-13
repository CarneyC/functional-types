import {
  concat,
  Dictionary,
  ifElse,
  is,
  isEmpty,
  map,
  mapObjIndexed,
  pipe,
  replace,
  test as regExpTest,
  toString,
} from 'ramda';
import * as R from 'fp-ts/lib/Reader';
import * as E from 'fp-ts/lib/Either';
import * as A from 'fp-ts/lib/Array';
import { sequenceS } from 'fp-ts/lib/Apply';

export type Serializable =
  | string
  | number
  | RegExp
  | Serializable[]
  | Dictionary<Serializable>;

export type Deserializable =
  | string
  | number
  | Deserializable[]
  | Dictionary<Deserializable>;

/**
 * ```haskell
 * serializeRegExp :: RegExp -> String
 * ```
 */
export const serializeRegExp: (regExp: RegExp) => string = pipe(
  toString as R.Reader<RegExp, string>,
  concat('__REGEXP__')
);

/**
 * ```haskell
 * deserializeRegExp :: String -> Either RegExp Error
 * ```
 */
export const deserializeRegExp: (
  regExpStr: string
) => E.Either<Error, RegExp> = pipe(
  E.fromPredicate(
    regExpTest(/^__REGEXP__\/.*\/$/),
    () => new Error('String is not a serialized RegExp instance.')
  ),
  E.chain(
    pipe(replace(/^__REGEXP__\/(.*)\/$/, '$1'), (regExpStr: string) =>
      E.tryCatch((): RegExp => new RegExp(regExpStr), E.toError)
    )
  )
);

/**
 * ```haskell
 * isRegExp :: a -> bool
 * ```
 */
const isRegExp = (a: unknown): a is RegExp => is(RegExp)(a);

/**
 * ```haskell
 * isNumber :: a -> bool
 * ```
 */
const isNumber = (a: unknown): a is number => is(Number)(a);

/**
 * ```haskell
 * isString :: a -> bool
 * ```
 */
const isString = (a: unknown): a is string => is(String)(a);

/**
 * ```haskell
 * isArray :: a -> bool
 * ```
 */
const isArray = (a: Deserializable): a is Deserializable[] => is(Array)(a);

/**
 * ```haskell
 * serialize :: Serializable -> Deserializable
 * ```
 */
export function serialize(value: Serializable): Deserializable {
  if (isRegExp(value)) return serializeRegExp(value);
  if (isString(value) || isNumber(value)) return value;
  return map(serialize, value) as Deserializable[] | Dictionary<Deserializable>;
}

/**
 * ```haskell
 * deserialize :: Deserializable -> Either Serializable Error
 * ```
 */

export function deserialize(
  value: Deserializable
): E.Either<Error, Serializable> {
  if (isString(value)) {
    return pipe(
      deserializeRegExp,
      E.orElse<Error, string | RegExp, never>(() => E.right(value))
    )(value);
  }
  if (isNumber(value)) return E.right(value);
  if (isArray(value)) {
    return pipe(map(deserialize), A.array.sequence(E.either))(value);
  }
  return pipe(
    mapObjIndexed(deserialize),
    ifElse(isEmpty, E.right, sequenceS(E.either))
  )(value as Dictionary<Deserializable>);
}
