/**
 * ```haskell
 * getUnixTimestamp :: Date -> Int
 * ```
 */
export const getUnixTimestamp: (date: Date) => number = (date) =>
  date.getTime();

/**
 * ```haskell
 * getCurrentUnixTimestamp :: () -> Int
 * ```
 */
export const getCurrentUnixTimestamp: () => number = Date.now;

/**
 * ```haskell
 * getCurrentDate :: () -> Date
 * ```
 */
export const getCurrentDate: () => Date = () => new Date();

/**
 * ```haskell
 * getCurrentISOString :: () -> string
 * ```
 */
export const getCurrentISOString: () => string = () =>
  getCurrentDate().toISOString();
