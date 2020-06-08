import * as C from './Comparable';
import { Comparable } from './Comparable';
import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';
import { isArraySatisfying, isPairSatisfying, isRegExp, Pair } from './Types';
import * as IO from 'fp-ts/lib/IO';
import * as R from 'fp-ts/lib/Reader';
import {
  all,
  allPass,
  any,
  anyPass,
  clone,
  converge,
  filter,
  map,
  pipe,
  propIs,
  test as regExpTest,
  xprod,
} from 'ramda';

export type SchemaPath = RegExp | [RegExp];

export interface ComparableSchema extends Pair<SchemaPath> {
  id: string;
  created_at: string;
  updated_at: string;
}

export type ComparableSchemaBase = Omit<
  ComparableSchema,
  'id' | 'created_at' | 'updated_at'
>;

export type ComparablePair = Pair<Comparable>;

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
  isPairSatisfying(isSchemaPath)(a);

/**
 * ```haskell
 * isComparableSchema :: a -> bool
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
 * allFilesSatisfyRegExps :: [RegExp] -> Reader [String] Bool
 * ```
 */
const allFilesSatisfyRegExps: (
  regExp: RegExp[]
) => R.Reader<string[], boolean> = (regExps) => (files: string[]): boolean =>
  all((regExp: RegExp): boolean => any(regExpTest(regExp), files), regExps);

/**
 * ```haskell
 * satisfySchemaPath :: SchemaPath -> Reader Schema Bool
 * ```
 */
export const satisfySchemaPath: (
  schemaPath: SchemaPath
) => R.Reader<C.Comparable, boolean> = (schemaPath) => (
  comparable: C.Comparable
): boolean => {
  if (isRegExpArray(schemaPath)) {
    return allFilesSatisfyRegExps(schemaPath)(comparable.files);
  } else {
    return (
      regExpTest(schemaPath)(comparable.schema_id) ||
      allFilesSatisfyRegExps([schemaPath])(comparable.files)
    );
  }
};

/**
 * ```haskell
 * makeComparableSchema :: ComparableSchemaBase -> IO ComparableSchema
 * ```
 */
export const makeComparableSchema: (
  base: ComparableSchemaBase
) => IO.IO<ComparableSchema> = (base) => (): ComparableSchema => {
  const time = getCurrentISOString();
  return {
    ...clone(base),
    id: getRandomId(),
    created_at: time,
    updated_at: time,
  };
};

/**
 * ```haskell
 * makeComparablePairs :: ComparableSchema -> Reader [Comparables] [ComparablePair]
 * ```
 */
export const makeComparablePairs: (
  comparableSchema: ComparableSchema
) => R.Reader<Comparable[], ComparablePair[]> = ({
  left: leftPath,
  right: rightPath,
}) =>
  pipe(
    converge(xprod, [
      filter(satisfySchemaPath(leftPath)),
      filter(satisfySchemaPath(rightPath)),
    ]),
    map<[Comparable, Comparable], ComparablePair>(
      ([left, right]): ComparablePair => ({ left, right })
    )
  );
