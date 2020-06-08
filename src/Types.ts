import * as R from 'fp-ts/lib/Reader';
import {
  all,
  allPass,
  anyPass,
  Dictionary,
  has,
  is,
  isNil,
  join,
  keys,
  lte,
  not,
  pipe,
  propSatisfies,
  split,
} from 'ramda';

export interface Pair<T> {
  left: T;
  right: T;
}

export type TypePredicate<T> = (a: unknown) => a is T;

export type ArrayPredicate<T> = TypePredicate<T[]>;

export type PairPredicate<T> = TypePredicate<Pair<T>>;

/**
 * ```haskell
 * isArraySatisfying :: a ->  bool
 * ```
 */
export function isArraySatisfying<T>(
  predicate: TypePredicate<T>
): ArrayPredicate<T>;

export function isArraySatisfying(
  predicate: (a: unknown) => boolean
): ArrayPredicate<unknown> {
  return allPass([isArray, all(predicate)]) as ArrayPredicate<unknown>;
}

/**
 * ```haskell
 * isPair :: a ->  bool
 * ```
 */
export const isPair = (a: unknown): a is Pair<unknown> =>
  allPass([isDictionary, has('left'), has('right')])(a);

/**
 * ```haskell
 * isPairSatisfying :: a ->  bool
 * ```
 */
export function isPairSatisfying<T>(
  predicate: TypePredicate<T>
): PairPredicate<T>;

export function isPairSatisfying(
  predicate: (a: unknown) => boolean
): PairPredicate<unknown> {
  return allPass([
    isPair,
    propSatisfies(predicate, 'left'),
    propSatisfies(predicate, 'right'),
  ]) as PairPredicate<unknown>;
}

/**
 * ```haskell
 * fromPair :: Pair String -> String
 * ```
 */
export const fromPair: (pair: Pair<string>) => string = ({ left, right }) =>
  join(';', [left, right]);

/**
 * ```haskell
 * toPair :: String -> Pair String
 * ```
 */
export const toPair: (pairStr: string) => Pair<string> = pipe(
  split(';'),
  ([left, right]): Pair<string> => ({ left, right: right ?? '' })
);

/**
 * ```haskell
 * propSatisfiesIfExists :: (Pred, String) -> Reader a bool
 * ```
 */
export const propSatisfiesIfExists: (
  predicate: (a: unknown) => boolean,
  name: string
) => R.Reader<unknown, boolean> = (pred, name) =>
  anyPass([pipe(has(name), not), propSatisfies(pred, name)]);

/**
 * ```haskell
 * isNotNil :: a -> bool
 * ```
 */
export const isNotNil: (a: unknown) => boolean = pipe(isNil, not);

/**
 * ```haskell
 * isRegExp :: a -> bool
 * ```
 */
export const isRegExp = (a: unknown): a is RegExp => is(RegExp)(a);

/**
 * ```haskell
 * isNumber :: a -> bool
 * ```
 */
export const isNumber = (a: unknown): a is number => is(Number)(a);

/**
 * ```haskell
 * isNat :: a -> bool
 * ```
 */
export const isNat = (a: unknown): a is number =>
  allPass([isNumber, lte(0)])(a);

/**
 * ```haskell
 * isString :: a -> bool
 * ```
 */
export const isString = (a: unknown): a is string => is(String)(a);

/**
 * ```haskell
 * isArray :: a -> bool
 * ```
 */
export const isArray = (a: unknown): a is unknown[] => is(Array)(a);

/**
 * ```haskell
 * isDictionary :: a -> bool
 * ```
 */
export const isDictionary = (a: unknown): a is Dictionary<unknown> =>
  allPass([is(Object), pipe(keys, all(isString))])(a);

/**
 * ```haskell
 * isBoolean :: a -> bool
 * ```
 */
export const isBoolean = (a: unknown): a is boolean =>
  a === true || a === false;

/**
 * ```haskell
 * isStringArray :: a -> bool
 * ```
 */
export const isStringArray = (a: unknown): a is string[] =>
  allPass([isArray, all(isString)])(a);
