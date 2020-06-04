import * as IO from 'fp-ts/lib/IO';
import { v4 as uuid } from 'uuid';

/**
 * ```haskell
 * getRandomId: IO String
 * ```
 */
export const getRandomId: IO.IO<string> = () => uuid();
