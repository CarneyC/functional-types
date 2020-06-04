import * as R from 'fp-ts/lib/Reader';
import { difference, isEmpty, pipe } from 'ramda';

/**
 * ```haskell
 * includesAll :: [a] -> Reader [a] bool
 * ```
 */
export const includesAll: <A>(a: A[]) => R.Reader<A[], boolean> = (a) => (b) =>
  pipe(difference(a), isEmpty)(b);
