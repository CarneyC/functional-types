import * as IO from 'fp-ts/lib/IO';
import { TableAnnotation } from '../../../../src/TableAnnotation';
import tableAnnotation from './TableAnnotation';
import { TextAnnotation } from '../../../../src/TextAnnotation';
import textAnnotation from './TextAnnotation';

// getTableAnnotation :: IO TableAnnotation
export const getTableAnnotation: IO.IO<TableAnnotation> = () => tableAnnotation;

// getTextAnnotation :: IO TextAnnotation
export const getTextAnnotation: IO.IO<TextAnnotation> = () => textAnnotation;
