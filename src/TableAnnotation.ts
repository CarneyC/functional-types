import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';
import { isLabeledBoundingBox, LabeledBoundingBox, WithHeader } from './Vertex';
import * as IO from 'fp-ts/lib/IO';
import {
  all,
  allPass,
  assoc,
  Dictionary,
  is,
  pipe,
  propIs,
  propSatisfies,
  reduce,
  values,
} from 'ramda';

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
 * toBoundingBoxes :: [BoundingBox] -> BoundingBoxes
 * ```
 */
export const toBoundingBoxes: (
  boundingBoxes: Array<WithHeader<LabeledBoundingBox> | LabeledBoundingBox>
) => BoundingBoxes = reduce(
  (acc: BoundingBoxes, value) => assoc(value.id, value, acc),
  {}
);

/**
 * ```haskell
 * makeComparableSchema :: TableAnnotationBase -> IO TableAnnotation
 * ```
 */
export const make: (
  annotations: TableAnnotationBase
) => IO.IO<TableAnnotation> = ({
  file,
  boundingBoxesByPage,
}) => (): TableAnnotation => {
  const timestamp = getCurrentISOString();
  return {
    id: getRandomId(),
    file,
    boundingBoxesByPage,
    created_at: timestamp,
    updated_at: timestamp,
  };
};
