import * as IO from 'fp-ts/lib/IO';
import { TableAnnotation } from '../../../../src/TableAnnotation';
import {
  tableBoundingBox,
  tableAnnotation,
  titleBoundingBox,
  groupBoundingBox,
} from './TableAnnotation';
import { Page, TextAnnotation } from '../../../../src/TextAnnotation';
import { page, textAnnotation } from './TextAnnotation';
import { LabeledBoundingBox } from '../../../../src/Vertex';
import {
  makeTextTableCell,
  TextTableCell,
} from '../../../../src/DocumentAnnotation';
import { is } from 'ramda';

// getTableBoundingBox :: IO TableAnnotation
export const getTableBoundingBox: IO.IO<LabeledBoundingBox> = () =>
  tableBoundingBox;

// getTitleBoundingBox :: IO TableAnnotation
export const getTitleBoundingBox: IO.IO<LabeledBoundingBox> = () =>
  titleBoundingBox;

// getGroupBoundingBox :: IO TableAnnotation
export const getGroupBoundingBox: IO.IO<LabeledBoundingBox> = () =>
  groupBoundingBox;

// getTableAnnotation :: IO TableAnnotation
export const getTableAnnotation: IO.IO<TableAnnotation> = () => tableAnnotation;

// getPage :: IO Page
export const getPage: IO.IO<Page> = () => page;

// getTextAnnotation :: IO TextAnnotation
export const getTextAnnotation: IO.IO<TextAnnotation> = () => textAnnotation;

// getHeaderRows :: IO String
export const getHeaderRows: IO.IO<string[]> = () => [
  'US TREASURY N/B FIX 1.750% 30.09.19',
  'ALLIANZ EMERGING MARKETS BOND FUND',
  'US TREASURY N/B FIX 1.750% 31.07.24',
  'US TREASURY N/B FIX 3.500% 15.05.20',
  'US TREASURY N/B FIX 2.875% 30.11.23',
  'US TREASURY N/B FIX 3.625% 15.02.21',
  'INDONESIA GOVERNMENT FR61 FIX 7.000%\n15.05.22',
  'NOTA DO TESOURO NACIONAL NTNE FIX\n10.000% 01.01.21',
  'US TREASURY N/B FIX 2.000% 31.07.20',
  'US TREASURY N/B FIX 2.375% 31.01.23',
  'Total',
];

// getHeaderColumns :: IO String
export const getHeaderColumns: IO.IO<string[]> = () => [
  'Country/Location',
  '%',
];

// getTableCell :: (String, number, number) -> TextTableCell
export const getTableCell: (
  text: string,
  row: number | string,
  col: number | string
) => TextTableCell = (text, row, col) => {
  const rowHeader = is(String, row) ? row : getHeaderRows()[row];
  const columnHeader = is(String, col) ? col : getHeaderColumns()[col];
  return makeTextTableCell(text, rowHeader, columnHeader);
};
