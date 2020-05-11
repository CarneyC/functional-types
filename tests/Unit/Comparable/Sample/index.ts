import * as IO from 'fp-ts/lib/IO';
import fs from 'fs';
import path from 'path';
import {
  Branch,
  DocumentAnnotation,
  Table,
  Tree,
  TreeByPage,
} from '../../../../src/DocumentAnnotation';
import { Comparable } from '../../../../src/Comparable';
import { keys, map, mapObjIndexed, pipe, replace, values } from 'ramda';

const tableByColumnsId = '60fc0465-527a-4a03-ad18-958cd5056b00';
const tableByRowsId = '5ad93d23-e4a0-41d7-b212-850d74c66d68';

// getDocumentAnnotation :: IO DocumentAnnotation
export const getDocumentAnnotation: IO.IO<DocumentAnnotation> = () => {
  const buffer = fs.readFileSync(
    path.join(__dirname, 'DocumentAnnotation.json')
  );
  return JSON.parse((buffer as unknown) as string);
};

// getTreeByPage :: IO TreeByPage
export const getTreeByPage: IO.IO<TreeByPage> = () =>
  getDocumentAnnotation().treeByPage;

// getTree :: IO Tree
export const getTree: IO.IO<Tree> = () => getTreeByPage()[1];

// getTableByColumns :: IO Table
export const getTableByColumns: IO.IO<Table> = () =>
  (getTree()[tableByColumnsId] as Branch).children[1] as Table;

// getTableByRows :: IO Table
export const getTableByRows: IO.IO<Table> = () =>
  (getTree()[tableByRowsId] as Branch).children[0] as Table;

// keysOf :: Comparable -> [String]
export const keysOf: (comparable: Comparable) => string[] = pipe(
  keys,
  map(replace(/\n/, ' '))
);

const mappings = {
  LU0745992734: 'Class AM\n(USD) Dis.',
  LU0706718086: 'Class AM\n(HKD) Dis.',
  LU0706718243: 'Class AM (H2-AUD) Dis.',
  LU0706718755: 'Class AM (H2-CAD) Dis.',
  LU0774780943: 'Class AM (H2-RMB) Dis.',
  LU0790109010: 'Class AM (H2-NZD) Dis.',
  LU0706718672: 'Class AM (H2-EUR) Dis.',
  LU0706718326: 'Class AM (H2-GBP) Dis.',
  LU0706718169: 'Class AM\n(H2-SGD) Dis.',
};

// getShareClasses :: IO [String]
export const getShareClasses: IO.IO<string[]> = () => values(mappings);

// getISINs :: IO [String]
export const getISINs: IO.IO<string[]> = () => keys(mappings);

// getComparable :: IO Comparable
export const getComparable: IO.IO<Comparable> = () =>
  (mapObjIndexed(
    (sharedClass) => ({ 'Share Class': { value: sharedClass } }),
    mappings
  ) as any) as Comparable;
