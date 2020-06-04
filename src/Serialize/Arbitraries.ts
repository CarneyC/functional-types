import { Serializable } from './index';
import fc, { Arbitrary } from 'fast-check';

export const regExp = (): Arbitrary<RegExp> =>
  fc.hexaString().map((value) => new RegExp(value));

export const serializable = (): Arbitrary<Serializable> =>
  fc.object({
    values: [regExp(), fc.string(), fc.integer(), fc.double()],
  }) as any;
