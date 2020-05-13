import fc from 'fast-check';
import { Arbitrary } from 'fast-check';
import { Serializable } from './index';

export const regExp = (): Arbitrary<RegExp> =>
  fc.hexaString().map((value) => new RegExp(value));

export const serializable = (): Arbitrary<Serializable> =>
  fc.object({
    values: [regExp(), fc.string(), fc.integer(), fc.double()],
  }) as any;
