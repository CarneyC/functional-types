import {
  allPass,
  anyPass,
  assoc,
  evolve,
  has,
  ifElse,
  is,
  pipe,
  prop,
  propIs,
  propSatisfies,
  unless,
  when,
} from 'ramda';
import * as E from 'fp-ts/lib/Either';
import * as R from 'fp-ts/lib/Reader';

export interface Success<T> {
  message: string;
  payload: T;
}

export interface Failure {
  error: string;
}

export type Response<T> = Success<T> | Failure;

export type Status = 400 | 200;

/**
 * ```haskell
 * isSuccess :: a -> bool
 * ```
 */
export const isSuccess = (a: unknown): a is Success<unknown> =>
  allPass([is(Object), propIs(String, 'message'), has('payload')])(a);

/**
 * ```haskell
 * isFailure :: a -> bool
 * ```
 */
export const isFailure = (a: unknown): a is Failure =>
  allPass([is(Object), propIs(String, 'error')])(a);

/**
 * ```haskell
 * isResponse :: a -> bool
 * ```
 */
export const isResponse = (a: unknown): a is Response<unknown> =>
  anyPass([isSuccess, isFailure])(a);

/**
 * ```haskell
 * fromError :: Error -> Failure
 * ```
 */
export const fromError: (error: Error) => Failure = (error) => ({
  error: error.message,
});

/**
 * ```haskell
 * success :: a -> Success
 * ```
 */
export const success: <A>(a: A) => Success<A> = (a) => ({
  message: '',
  payload: a,
});

/**
 * ```haskell
 * fromEither :: Either Error a -> Response a
 * ```
 */
export const fromEither: <A>(
  either: E.Either<Error, A>
) => Response<A> = ifElse(
  E.isRight,
  pipe(prop('right'), success),
  pipe(prop('left'), fromError)
);

/**
 * ```haskell
 * withMessage :: string -> Reader (Response a) (Response a)`
 * ```
 */
export const withMessage: <A>(
  message: string
) => R.Reader<Response<A>, Response<A>> = <A>(message) =>
  when<Response<A>, Response<A>>(isSuccess, assoc('message', message));

/**
 * ```haskell
 * getStatusFromResponse :: Response -> Status
 * ```
 */
export const getStatusFromResponse: (
  response: Response<unknown>
) => Status = ifElse(
  isSuccess,
  () => 200,
  () => 400
);

/**
 * ```haskell
 * fromPredicate :: PredicateStr -> Response
 * ```
 */
export const fromPredicate: <A>(
  predicate: (a: unknown) => a is A,
  onFalse: (a: unknown) => Error
) => (response: Response<unknown>) => Response<A> = (predicate, onFalse) =>
  unless(propSatisfies(predicate, 'payload'), pipe(onFalse, fromError));

/**
 * ```haskell
 * map :: (A -> B) -> Reader (Response A) (Response B)
 * ```
 */
export const map: <A, B>(
  fa: (a: A) => B
) => (response: Response<A>) => Response<B> = <A, B>(fa: (a: A) => B) =>
  when(
    isSuccess,
    evolve({
      payload: fa,
    }) as R.Reader<Success<A>, Success<B>>
  );

/**
 * ```haskell
 * toEither :: Response -> Either Response Error
 * ```
 */
export const toEither: <A>(
  response: Response<A>
) => E.Either<Error, Success<A>> = ifElse(
  isSuccess,
  E.right,
  pipe((failure: Failure): Error => new Error(failure.error), E.left)
);

/**
 * ```haskell
 * getPayload :: Success a -> a
 * ```
 */
export const getPayload: <A>(response: Success<A>) => A = prop('payload');

/**
 * ```haskell
 * getPayloadOrElse :: ((Failure) -> E) -> Reader (Response a) a
 * ```
 */
export const getPayloadOrElse: <E, A>(
  onFailure: (failure: Failure) => E
) => R.Reader<Response<A>, A> = (onFailure) =>
  ifElse(isSuccess, getPayload, onFailure);

/**
 * ```haskell
 * toEmptyResponse :: Response -> Empty | Failure
 * ```
 */
export const toEmptyResponse: <T>(
  response: Response<T>
) => Failure | undefined = unless(isFailure, () => undefined);
