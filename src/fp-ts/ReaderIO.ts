import * as R from 'fp-ts/lib/Reader';
import * as IO from 'fp-ts/lib/IO';
import { pipe } from 'ramda';
import { array } from 'fp-ts/lib/Array';

export type ReaderIO<R, A> = R.Reader<R, IO.IO<A>>;

/**
 * ```haskell
 * map :: ( A -> B ) -> ReaderIO R A -> ReaderIO R B
 * ```
 */
export const map: <R, A, B>(
  f: (a: A) => B
) => (fa: ReaderIO<R, A>) => ReaderIO<R, B> = pipe(IO.map, R.map);

/**
 * ```haskell
 * map :: ( A -> IO B ) -> ReaderIO R A -> ReaderIO R B
 * ```
 */
export const chainIOK: <A, B>(
  f: (a: A) => IO.IO<B>
) => <R>(fa: ReaderIO<R, A>) => ReaderIO<R, B> = pipe(IO.chain, R.map);

/**
 * ```haskell
 * chain :: ( A -> ReaderIO R B ) -> ReaderIO R A -> ReaderIO R B
 * ```
 */
export const chain: <R, A, B>(
  r: (a: A) => ReaderIO<R, B>
) => (r: ReaderIO<R, A>) => ReaderIO<R, B> = pipe(IO.chain, R.chain) as <
  R,
  A,
  B
>(
  r: (a: A) => ReaderIO<R, B>
) => (r: ReaderIO<R, A>) => ReaderIO<R, B>;

/**
 * ```haskell
 * fromReader :: Reader R A -> ReaderIO R A
 * ```
 */
export const fromReader: <R, A>(r: R.Reader<R, A>) => ReaderIO<R, A> = R.map(
  IO.of
);

/**
 * ```haskell
 * sequenceReaderIO :: [Reader a IO] -> Reader a [IO]
 * ```
 */
export const sequenceReaderIO = <R, A>(r: ReaderIO<R, A>[]): ReaderIO<R, A[]> =>
  pipe(
    array.sequence(R.reader) as (
      readers: ReaderIO<R, A>[]
    ) => R.Reader<R, IO.IO<A>[]>,
    R.map<IO.IO<A>[], IO.IO<A[]>>(
      array.sequence(IO.io) as (ios: IO.IO<A>[]) => IO.IO<A[]>
    )
  )(r);
