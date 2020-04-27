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

export type BoundingBoxesByPage = Record<number, BoundingBoxes>;

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
 * isBoundingBoxByPage :: a -> bool
 * ```
 */
export const isBoundingBoxByPage = (a: unknown): a is BoundingBoxesByPage =>
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
    propSatisfies(isBoundingBoxByPage, 'boundingBoxByPage'),
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
    id: file,
    file,
    boundingBoxesByPage,
    created_at: timestamp,
    updated_at: timestamp,
  };
};
