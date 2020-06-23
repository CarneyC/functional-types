import { TextAnnotation } from './lib/TextAnnotation';
import { isDictionary } from './src';
import { isTableAnnotation, TableAnnotation } from './src/TableAnnotation';
import { isTextAnnotation } from './src/TextAnnotation';
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
