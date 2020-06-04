import { Reader } from 'fp-ts/lib/Reader';

/**
 * ```haskell
 * flip :: (A -> Reader R B) -> (R -> Reader A B)
 * ```
 */
export const flip = <R, A, B>(
  fa: (ma: A) => Reader<R, B>
): ((ma: R) => Reader<A, B>) => (ma: R) => (r: A): B => fa(r)(ma);
