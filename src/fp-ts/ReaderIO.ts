import * as R from 'fp-ts/lib/Reader';
import * as IO from 'fp-ts/lib/IO';
import { pipe } from 'ramda';
import { array } from 'fp-ts/lib/Array';

export type ReaderIO<R, A> = R.Reader<R, IO.IO<A>>;

// map :: ( A -> B ) -> ReaderIO R A -> ReaderIO R B
export const map: <R, A, B>(
  x0: (a: A) => B
) => (fa: ReaderIO<R, A>) => ReaderIO<R, B> = pipe(IO.map, R.map);

// sequenceReaderIO :: [Reader a IO] -> Reader a [IO]
export const sequenceReaderIO = <R, A>(r: ReaderIO<R, A>[]): ReaderIO<R, A[]> =>
  pipe(
    array.sequence(R.reader) as (
      readers: ReaderIO<R, A>[]
    ) => R.Reader<R, IO.IO<A>[]>,
    R.map<IO.IO<A>[], IO.IO<A[]>>(
      array.sequence(IO.io) as (ios: IO.IO<A>[]) => IO.IO<A[]>
    )
  )(r);
