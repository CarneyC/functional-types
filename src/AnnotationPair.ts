import { isDictionary } from './index';
import { isTableAnnotation, TableAnnotation } from './TableAnnotation';
import { isTextAnnotation, TextAnnotation } from './TextAnnotation';
import { allPass, propSatisfies } from 'ramda';

export interface AnnotationPair {
  left: TableAnnotation;
  right: TextAnnotation;
}

export const isAnnotationPair = (a: unknown): a is AnnotationPair =>
  allPass([
    isDictionary,
    propSatisfies(isTableAnnotation, 'left'),
    propSatisfies(isTextAnnotation, 'right'),
  ])(a);
