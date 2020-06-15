import * as T from '../Types';
import { sequenceS } from 'fp-ts/lib/Apply';
import * as A from 'fp-ts/lib/Array';
import * as E from 'fp-ts/lib/Either';
import * as R from 'fp-ts/lib/Reader';
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

export type Serializable =
  | string
  | number
  | boolean
  | RegExp
  | Serializable[]
  | Dictionary<Serializable>;

export type Deserializable =
  | string
  | number
  | boolean
  | Deserializable[]
  | Dictionary<Deserializable>;

const regExpValidator = /^__REGEXP__\/(.*)\/([igmsuy])*$/;

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
export const isRegExp = (a: unknown): a is string =>
  allPass([is(String), regExpTest(regExpValidator)])(a);

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
    pipe((regExpStr: string) => {
      const expression = replace(regExpValidator, '$1', regExpStr);
      const flag = replace(regExpValidator, '$2', regExpStr);
      return E.tryCatch((): RegExp => new RegExp(expression, flag), E.toError);
    })
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
  if (T.isString(value) || T.isNumber(value) || T.isBoolean(value))
    return value;
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
  if (T.isNumber(value) || T.isBoolean(value)) return E.right(value);
  if (T.isArray(value)) {
    return pipe(map(deserialize), A.array.sequence(E.either))(value);
  }
  return pipe(
    mapObjIndexed(deserialize),
    ifElse(isEmpty, E.right, sequenceS(E.either))
  )(value as Dictionary<Deserializable>);
}
