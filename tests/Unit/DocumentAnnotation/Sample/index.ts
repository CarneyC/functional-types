import * as IO from 'fp-ts/lib/IO';
import { TableAnnotation } from '../../../../src/TableAnnotation';
import { labeledBoundingBox, tableAnnotation } from './TableAnnotation';
import { Page, TextAnnotation } from '../../../../src/TextAnnotation';
import { page, textAnnotation } from './TextAnnotation';
import { LabeledBoundingBox } from '../../../../src/Vertex';
import { Cell } from '../../../../src/DocumentAnnotation';
import { map, pick } from 'ramda';

export type Text = Pick<Cell, 'text'>;

// makeText :: String -> Text
export const makeText: (text: string) => Text = (text) => ({ text });

// getTextFromCell: Cell -> Text
export const getTextFromCell: (cell: Cell) => Text = pick(['text']);

// makeTexts :: [String] -> [Text]
export const makeTexts: (texts: string[]) => Text[] = map(makeText);

// getTextsFromCells: [Cell] -> [Text]
export const getTextsFromCells: (cells: Cell[]) => Text[] = map(
  getTextFromCell
);

// getLabeledBoundingBox :: IO TableAnnotation
export const getLabeledBoundingBox: IO.IO<LabeledBoundingBox> = () =>
  labeledBoundingBox;

// getTableAnnotation :: IO TableAnnotation
export const getTableAnnotation: IO.IO<TableAnnotation> = () => tableAnnotation;

// getPage :: IO Page
export const getPage: IO.IO<Page> = () => page;

// getTextAnnotation :: IO TextAnnotation
export const getTextAnnotation: IO.IO<TextAnnotation> = () => textAnnotation;
