import { isBoundingBox, LabeledBoundingBox } from './Vertex';
import * as IO from 'fp-ts/lib/IO';
import {
  all,
  allPass,
  Dictionary,
  is,
  pipe,
  propIs,
  propSatisfies,
  values,
} from 'ramda';

export type BoundingBoxes = Dictionary<LabeledBoundingBox>;

export type BoundingBoxesByPageId = Dictionary<BoundingBoxes>;

export interface TableAnnotation {
  id: string;
  file: string;
  boundingBoxesByPageId: BoundingBoxesByPageId;
  created_at: string;
  updated_at: string;
}

export type TableAnnotationBase = Pick<
  TableAnnotation,
  'file' | 'boundingBoxesByPageId'
>;

/**
 * ```haskell
 * isBoundingBoxByPageId :: a -> bool
 * ```
 */
export const isBoundingBoxByPageId = (a: unknown): a is BoundingBoxesByPageId =>
  allPass([is(Object), pipe(values, allPass([is(Array), all(isBoundingBox)]))])(
    a
  );

/**
 * ```haskell
 * isTableAnnotationBase :: a -> bool
 * ```
 */
export const isTableAnnotationBase = (a: unknown): a is TableAnnotationBase =>
  allPass([
    is(Object),
    propIs(String, 'file'),
    propSatisfies(isBoundingBoxByPageId, 'boundingBoxByPageId'),
  ])(a);

/**
 * ```haskell
 * isTableAnnotation :: a -> bool
 * ```
 */
export const isTableAnnotation = (a: unknown): a is TableAnnotation =>
  allPass([
    isTableAnnotationBase,
    propIs(String, 'id'),
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

/**
 * ```haskell
 * make :: (String, BoundingBoxesByPageId) -> IO TableAnnotation
 * ```
 */
export const make: (
  annotations: TableAnnotationBase
) => IO.IO<TableAnnotation> = ({
  file,
  boundingBoxesByPageId,
}) => (): TableAnnotation => {
  const timestamp = new Date().toISOString();
  return {
    id: file,
    file,
    boundingBoxesByPageId,
    created_at: timestamp,
    updated_at: timestamp,
  };
};
