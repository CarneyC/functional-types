import { isLabeledBoundingBox, LabeledBoundingBox, WithHeader } from './Vertex';
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
import { getRandomId } from './String';

export type BoundingBoxes = Dictionary<
  WithHeader<LabeledBoundingBox> | LabeledBoundingBox
>;

export type BoundingBoxesByPage = BoundingBoxes[];

export interface TableAnnotation {
  id: string;
  file: string;
  boundingBoxesByPage: BoundingBoxesByPage;
  created_at: string;
  updated_at: string;
}

export type TableAnnotationBase = Pick<
  TableAnnotation,
  'file' | 'boundingBoxesByPage'
>;

/**
 * ```haskell
 * isBoundingBoxes :: a -> bool
 * ```
 */
export const isBoundingBoxes = (a: unknown): a is BoundingBoxes =>
  allPass([
    is(Object),
    pipe(values, allPass([is(Array), all(isLabeledBoundingBox)])),
  ])(a);

/**
 * ```haskell
 * isBoundingBoxesByPage :: a -> bool
 * ```
 */
export const isBoundingBoxesByPage = (a: unknown): a is BoundingBoxesByPage =>
  allPass([is(Array), all(isBoundingBoxes)])(a);

/**
 * ```haskell
 * isTableAnnotationBase :: a -> bool
 * ```
 */
export const isTableAnnotationBase = (a: unknown): a is TableAnnotationBase =>
  allPass([
    is(Object),
    propIs(String, 'file'),
    propSatisfies(isBoundingBoxesByPage, 'boundingBoxesByPage'),
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
 * make :: (String, BoundingBoxesByPage) -> IO TableAnnotation
 * ```
 */
export const make: (
  annotations: TableAnnotationBase
) => IO.IO<TableAnnotation> = ({
  file,
  boundingBoxesByPage,
}) => (): TableAnnotation => {
  const timestamp = new Date().toISOString();
  return {
    id: getRandomId(),
    file,
    boundingBoxesByPage,
    created_at: timestamp,
    updated_at: timestamp,
  };
};
