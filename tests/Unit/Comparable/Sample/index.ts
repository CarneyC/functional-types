import * as IO from 'fp-ts/lib/IO';
import fs from 'fs';
import path from 'path';
import {
  Branch,
  DocumentAnnotation,
  Table,
  Forest,
  ForestByPage,
  Descendant,
} from '../../../../src/DocumentAnnotation';
import { Node, Tree } from '../../../../src/Comparable';
import {
  flatten,
  keys,
  map,
  mapObjIndexed,
  mergeAll,
  pipe,
  replace,
  values,
} from 'ramda';
import {
  Gettable,
  Gettables,
  Replacements,
  Schema,
} from '../../../../src/Schema';
import { gettable, gettables, replacements, schema } from './Schema';

const tableByColumnsId = '60fc0465-527a-4a03-ad18-958cd5056b00';
const tableByRowsId = '5ad93d23-e4a0-41d7-b212-850d74c66d68';

// getDocumentAnnotation :: IO DocumentAnnotation
export const getDocumentAnnotation: IO.IO<DocumentAnnotation> = () => {
  const buffer = fs.readFileSync(
    path.join(__dirname, 'DocumentAnnotation.json')
  );
  return JSON.parse((buffer as unknown) as string);
};

// getComplexDocumentAnnotation :: IO DocumentAnnotation
export const getComplexDocumentAnnotation: IO.IO<DocumentAnnotation> = () => {
  const buffer = fs.readFileSync(
    path.join(__dirname, 'ComplexDocumentAnnotation.json')
  );
  return JSON.parse((buffer as unknown) as string);
};

// getCompleteDocumentAnnotation :: IO DocumentAnnotation
export const getCompleteDocumentAnnotation: IO.IO<DocumentAnnotation> = () => {
  const buffer = fs.readFileSync(
    path.join(__dirname, 'CompleteDocumentAnnotation.json')
  );
  return JSON.parse((buffer as unknown) as string);
};

// getForestByPage :: IO ForestByPage
export const getForestByPage: IO.IO<ForestByPage> = () =>
  getDocumentAnnotation().forestByPage;

// getComplexForestByPage :: IO ForestByPage
export const getComplexForestByPage: IO.IO<ForestByPage> = () =>
  getComplexDocumentAnnotation().forestByPage;

// getCompleteForestByPage :: IO ForestByPage
export const getCompleteForestByPage: IO.IO<ForestByPage> = () =>
  getCompleteDocumentAnnotation().forestByPage;

// getForest :: IO Forest
export const getForest: IO.IO<Forest> = () => getForestByPage()[1];

// getComplexForest :: IO Forest
export const getComplexForest: IO.IO<Forest> = () =>
  getComplexForestByPage()[0];

// getCompleteForest :: IO Forest
export const getCompleteForest: IO.IO<Forest> = () =>
  getCompleteForestByPage()[0];

// getDescendant :: IO Descendant
export const getDescendant: IO.IO<Descendant> = () =>
  getForest()[tableByColumnsId] as Descendant;

// getBranch :: IO Branch
export const getBranch: IO.IO<Branch> = () =>
  getComplexForest()['bc279842-13b8-483c-8ea4-8f35679b77ec'] as Branch;

// getTableByColumns :: IO Table
export const getTableByColumns: IO.IO<Table> = () =>
  (getForest()[tableByColumnsId] as Branch).children[1] as Table;

// getTableByRows :: IO Table
export const getTableByRows: IO.IO<Table> = () =>
  (getForest()[tableByRowsId] as Branch).children[0] as Table;

// keysOf :: Tree -> [String]
export const keysOf: (comparable: Tree) => string[] = pipe(
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

// getTree :: IO Tree
export const getTree: IO.IO<Tree> = () =>
  (mapObjIndexed(
    (sharedClass) => ({ 'Share Class': { value: sharedClass } }),
    mappings
  ) as any) as Tree;

// getReplacements :: IO Path
export const getReplacements: IO.IO<Replacements> = () => replacements;

// getGettable :: IO Gettable
export const getGettable: IO.IO<Gettable> = () => gettable;

// getGettables :: IO Gettables
export const getGettables: IO.IO<Gettables> = () => gettables;

// getSchema :: IO Schema
export const getSchema: IO.IO<Schema> = () => schema;

// getTranslationNode :: IO Node
export const getTranslationNode: IO.IO<Node> = () => {
  const buffer = fs.readFileSync(path.join(__dirname, 'Node.json'));
  return JSON.parse((buffer as unknown) as string);
};

// getComparableNode :: IO Node
export const getComparableNode: IO.IO<Tree> = () => ({
  'NAV-NAV (%)': {
    'Year to Date': {
      value: '7.76',
    },
    '1 Year': {
      value: '6.31',
    },
    '3 Years': {
      value: '7.39',
    },
    '5 Years': {
      value: '13.23',
    },
    'Since Inception': {
      value: '21.93',
    },
  },
});

// getComparableTree :: IO Tree
export const getComparableTree: IO.IO<Tree> = () => ({
  performance: {
    cumulative_returns: getComparableNode(),
    calendar_year_returns: {
      'NAV-NAV (%)': {
        '2018': {
          value: '-4.78',
        },
        '2017': {
          value: '6.69',
        },
        '2016': {
          value: '5.82',
        },
        '2015': {
          value: '0.44',
        },
        '2014': {
          value: '0.81',
        },
      },
    },
  },
});

// getFlatComparableTree :: IO Tree
export const getFlatComparableTree: IO.IO<Tree> = pipe(
  getComparableTree,
  mapObjIndexed((tree, outer) =>
    pipe(
      mapObjIndexed((tree, inner) => ({ [`${outer}.${inner}`]: tree })),
      values
    )(tree as any)
  ),
  values,
  flatten,
  mergeAll
) as any;
