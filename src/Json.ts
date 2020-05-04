import { Dictionary, is } from 'ramda';

export type Json = Dictionary<unknown>;

// isJson :: a -> bool
export const isJson = (a: unknown): a is Json => is(Object)(a);
