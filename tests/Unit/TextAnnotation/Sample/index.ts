import { TextAnnotation } from '../../../../src/TextAnnotation';
import * as IO from 'fp-ts/lib/IO';
import fs from 'fs';
import path from 'path';

// getTextAnnotation :: IO TextAnnotation
export const getTextAnnotation: IO.IO<TextAnnotation> = () => {
  const buffer = fs.readFileSync(path.join(__dirname, 'TextAnnotation.json'));
  return JSON.parse((buffer as unknown) as string);
};
