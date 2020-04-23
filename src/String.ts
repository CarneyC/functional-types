import { v4 as uuid } from 'uuid';
import * as IO from 'fp-ts/lib/IO';

/**
 * ```haskell
 * getRandomId: IO String
 * ```
 */
export const getRandomId: IO.IO<string> = uuid;
