import {
  gettable,
  gettables,
  mergeGettable,
  replacements,
  schema,
} from './Schema';
import { Leaf } from '../../../../lib/DocumentAnnotation';
import { Node, Tree } from '../../../../src/Comparable';
import {
  Branch,
  DocumentAnnotation,
  Table,
  ForestByPage,
  Descendant,
  mergeForestByPage,
  ForestByLabel,
} from '../../../../src/DocumentAnnotation';
import {
  Gettable,
  Gettables,
  Replacements,
  Schema,
} from '../../../../src/Schema';
import * as IO from 'fp-ts/lib/IO';
import * as R from 'fp-ts/lib/Reader';
import {
  allPass,
  find,
  flatten,
  keys,
  map,
  mapObjIndexed,
  mergeAll,
  path as getPath,
  pathSatisfies,
  pipe,
  prop,
  propEq,
  test as regExpTest,
  replace,
  values,
} from 'ramda';
import fs from 'fs';
import path from 'path';

// getDocumentAnnotation :: IO DocumentAnnotation
export const getDocumentAnnotation: IO.IO<DocumentAnnotation> = () => {
  const buffer = fs.readFileSync(
    path.join(__dirname, 'DocumentAnnotation.json')
  );
  return JSON.parse((buffer as unknown) as string);
};

// getForestByPage :: IO ForestByPage
export const getForestByPage: IO.IO<ForestByPage> = () =>
  getDocumentAnnotation().forestByPage;

// getForestByLabel :: IO ForestByLabel
export const getForestByLabel: IO.IO<ForestByLabel> = pipe(
  getForestByPage,
  mergeForestByPage
);

// getDescendant :: IO Descendant
export const getDescendant: IO.IO<Descendant> = () =>
  getForestByLabel()['fund_details'] as Descendant;

// getBranch :: IO Branch
export const getBranch: IO.IO<Branch> = () =>
  getForestByLabel()['portfolio'] as Branch;

// getTableByColumns :: IO Table
export const getTableByColumns: IO.IO<Table> = pipe(
  getDescendant,
  prop('children'),
  find(propEq('label', 'table')) as R.Reader<Leaf[], Table>
);

// getTableByRows :: IO Table
export const getTableByRows: IO.IO<Table> = pipe(
  getForestByLabel,
  getPath<Leaf[]>(['portfolio', 'children']),
  find(
    allPass([
      propEq('label', 'table'),
      pathSatisfies(regExpTest(/Dividend History/), [
        'intersectHeader',
        'text',
      ]),
    ])
  ) as R.Reader<Leaf[], Table>
);

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

// getMergeGettable :: IO Gettable
export const getMergeGettable: IO.IO<Gettable> = () => mergeGettable;

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
});

// getComparableTree :: IO Tree
export const getComparableTree: IO.IO<Tree> = () => ({
  performance: {
    cumulative_returns: getComparableNode(),
    calendar_year_returns: {
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
