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

export const getCurrentDate: () => Date = () => new Date();
