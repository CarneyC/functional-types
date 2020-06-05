import * as R from 'fp-ts/lib/Reader';
import {
  all,
  allPass,
  anyPass,
  Dictionary,
  has,
  is,
  isNil,
  keys,
  lte,
  not,
  pipe,
  propSatisfies,
} from 'ramda';

export type ArrayPredicate<T> = (a: unknown) => a is T[];

/**
 * ```haskell
 * isArraySatisfying :: a ->  bool
 * ```
 */
export function isArraySatisfying<T>(
  predicate: (a: unknown) => a is T
): ArrayPredicate<T>;

export function isArraySatisfying(
  predicate: (a: unknown) => boolean
): ArrayPredicate<unknown> {
  return allPass([isArray, all(predicate)]) as ArrayPredicate<unknown>;
}

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
export const isBoolean = (a: unknown): a is boolean => is(Boolean)(a);
