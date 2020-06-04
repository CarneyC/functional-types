import fc, { Arbitrary } from 'fast-check';
import { max } from 'ramda';

export const arrays = (): Arbitrary<{ array: string[]; subArray: string[] }> =>
  fc.array(fc.string(), 1, 128).chain((array) =>
    fc.record({
      array: fc.constantFrom(array),
      subArray: fc.shuffledSubarray(array, 0, max(0, array.length - 2)),
    })
  );
