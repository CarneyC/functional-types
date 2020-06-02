import {
  addIndex,
  allPass,
  assoc,
  concat,
  Dictionary,
  ifElse,
  is,
  isEmpty,
  map,
  mapObjIndexed,
  pipe,
  reduce,
  replace,
  test as regExpTest,
  toString,
  values,
} from 'ramda';
import * as R from 'fp-ts/lib/Reader';
import * as E from 'fp-ts/lib/Either';
import * as A from 'fp-ts/lib/Array';
import { sequenceS } from 'fp-ts/lib/Apply';
import * as T from '../Types';

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
 * isRegExp :: a -> bool
 * ```
 */
export const isRegExp = (a: unknown): boolean =>
  allPass([is(String), regExpTest(/^__REGEXP__\/.*\/$/)])(a);

/**
 * ```haskell
 * deserializeRegExp :: String -> Either RegExp Error
 * ```
 */
export const deserializeRegExp: (
  regExpStr: string
) => E.Either<Error, RegExp> = pipe(
  E.fromPredicate(
    isRegExp,
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
 * serializeArray :: [A] -> Dictionary A
 * ```
 */
export const serializeArray = <A>(array: A[]): Dictionary<A> =>
  addIndex(reduce)(
    (acc: Dictionary<A>, array: A, index: number) =>
      assoc(index.toString(), array, acc),
    {} as Dictionary<A>
  )(array) as Dictionary<A>;

/**
 * ```haskell
 * deserializeArray :: Dictionary A -> [A]
 * ```
 */
export const deserializeArray: <A>(array: Dictionary<A>) => A[] = values;

/**
 * ```haskell
 * serialize :: Serializable -> Deserializable
 * ```
 */
export function serialize(value: Serializable): Deserializable {
  if (T.isRegExp(value)) return serializeRegExp(value);
  if (T.isString(value) || T.isNumber(value)) return value;
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
  if (T.isString(value)) {
    return pipe(
      deserializeRegExp,
      E.orElse<Error, string | RegExp, never>(() => E.right(value))
    )(value);
  }
  if (T.isNumber(value)) return E.right(value);
  if (T.isArray(value)) {
    return pipe(map(deserialize), A.array.sequence(E.either))(value);
  }
  return pipe(
    mapObjIndexed(deserialize),
    ifElse(isEmpty, E.right, sequenceS(E.either))
  )(value as Dictionary<Deserializable>);
}
