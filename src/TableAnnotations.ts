import { isBoundingBox, LabeledBoundingBox } from './Vertex';
import * as IO from 'fp-ts/lib/IO';
import { all, allPass, is, pipe, propIs, propSatisfies, values } from 'ramda';
import { getRandomId } from './String';

export type BoundingBoxByPageId = Record<string, LabeledBoundingBox[]>;

export interface TableAnnotations {
  id: string;
  file: string;
  boundingBoxesByPageId: BoundingBoxByPageId;
  created_at: string;
  updated_at: string;
}

export type TableAnnotationsBase = Pick<
  TableAnnotations,
  'file' | 'boundingBoxesByPageId'
>;

// isBoundingBoxByPageId :: a -> bool
export const isBoundingBoxByPageId = (a: unknown): a is BoundingBoxByPageId =>
  allPass([is(Object), pipe(values, allPass([is(Array), all(isBoundingBox)]))])(
    a
  );

// isTableAnnotationsBase :: a -> bool
export const isTableAnnotationsBase = (a: unknown): a is TableAnnotationsBase =>
  allPass([
    is(Object),
    propIs(String, 'file'),
    propSatisfies(isBoundingBoxByPageId, 'boundingBoxByPageId'),
  ])(a);

// isTableAnnotations :: a -> bool
export const isTableAnnotations = (a: unknown): a is TableAnnotations =>
  allPass([
    isTableAnnotationsBase,
    propIs(String, 'id'),
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

// make :: (String, BoundingBoxByPageId) -> IO TableAnnotations
export const make: (
  annotations: TableAnnotationsBase
) => IO.IO<TableAnnotations> = ({
  file,
  boundingBoxesByPageId,
}) => (): TableAnnotations => {
  const timestamp = new Date().toISOString();
  return {
    id: getRandomId(),
    file,
    boundingBoxesByPageId,
    created_at: timestamp,
    updated_at: timestamp,
  };
};
