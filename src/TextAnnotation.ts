import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';
import { isPoly, Poly, sortPoly } from './Vertex';
import * as Vision from './Vision';
import * as A from 'fp-ts/lib/Array';
import * as IO from 'fp-ts/lib/IO';
import * as O from 'fp-ts/lib/Option';
import {
  __,
  all,
  allPass,
  applySpec,
  assoc,
  clone,
  defaultTo,
  Dictionary,
  includes,
  is,
  last,
  map,
  mergeDeepLeft,
  path,
  pipe,
  prop,
  propIs,
  propSatisfies,
  reduce,
  replace,
  trim,
  values,
} from 'ramda';

export type BreakType =
  | 'UNKNOWN'
  | 'SPACE'
  | 'SURE_SPACE' // Sure space (very wide)
  | 'EOL_SURE_SPACE' // Line-wrapping break
  | 'HYPHEN' // End-line hyphen that is not present in text
  | 'LINE_BREAK';

export const breakTypes: BreakType[] = [
  'UNKNOWN',
  'SPACE',
  'SURE_SPACE', // Sure space (very wide)
  'EOL_SURE_SPACE', // Line-wrapping break
  'HYPHEN', // End-line hyphen that is not present in text
  'LINE_BREAK',
];

export interface Word {
  id: string;
  paragraph: string;
  breakType: BreakType;
  boundingPoly: Poly;
  text: string;
  confidence: number;
}

export interface Paragraph {
  id: string;
  boundingPoly: Poly;
  confidence: number;
}

export type WordsById = Dictionary<Word>;

export type ParagraphsById = Dictionary<Paragraph>;

export interface Page {
  wordsById: WordsById;
  paragraphsById: ParagraphsById;
}

export interface TextAnnotation {
  id: string;
  file: string;
  pages: Page[];
  created_at: string;
  updated_at: string;
}

/**
 * ```haskell
 * isBreakType :: a -> bool
 * ```
 */
export const isBreakType = (a: unknown): a is BreakType =>
  includes(a, breakTypes);

/**
 * ```haskell
 * isWord :: a -> bool
 * ```
 */
export const isWord = (a: unknown): a is Word =>
  allPass([
    propIs(String, 'id'),
    propIs(String, 'paragraph'),
    propSatisfies(isBreakType, 'breakType'),
    propSatisfies(isPoly, 'boundingPoly'),
    propIs(String, 'text'),
    propIs(Number, 'confidence'),
  ])(a);

/**
 * ```haskell
 * isWordArray :: a -> bool
 * ```
 */
export const isWordArray = (a: unknown): a is Word[] =>
  allPass([is(Array), all(isWord)])(a);

/**
 * ```haskell
 * isParagraph :: a -> bool
 * ```
 */
export const isParagraph = (a: unknown): a is Paragraph =>
  allPass([
    propIs(String, 'id'),
    propSatisfies(isPoly, 'boundingPoly'),
    propIs(Number, 'confidence'),
  ])(a);

/**
 * ```haskell
 * isWordsById :: a -> bool
 * ```
 */
export const isWordsById = (a: unknown): a is WordsById =>
  allPass([is(Object), pipe(values, all(isWord))])(a);

/**
 * ```haskell
 * isWordsById :: a -> bool
 * ```
 */
export const isParagraphsById = (a: unknown): a is ParagraphsById =>
  allPass([is(Object), pipe(values, all(isParagraph))])(a);

/**
 * ```haskell
 * isPage :: a -> bool
 * ```
 */
export const isPage = (a: unknown): a is Page =>
  allPass([
    propSatisfies(isWordsById, 'wordsById'),
    propSatisfies(isParagraphsById, 'paragraphsById'),
  ])(a);

/**
 * ```haskell
 * isPages :: a -> bool
 * ```
 */
export const isPages = (a: unknown): a is Page =>
  allPass([is(Array), all(isPage)])(a);

/**
 * ```haskell
 * isTextAnnotation :: a -> bool
 * ```
 */
export const isTextAnnotation = (a: unknown): a is TextAnnotation =>
  allPass([
    propIs(String, 'id'),
    propIs(String, 'file'),
    propSatisfies(isPages, 'pages'),
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

/**
 * ```haskell
 * getBreakTypeFromSymbols :: [VisionSymbol] -> DetectedBreak
 * ```
 */
export const getBreakTypeFromSymbols: (
  symbols: Vision.TextSymbol[]
) => BreakType = pipe(
  last,
  path(['property', 'detectedBreak', 'type']),
  O.fromPredicate(isBreakType),
  O.getOrElse(() => 'UNKNOWN')
);

/**
 * ```haskell
 * getPoly :: Paragraph | Word -> Poly
 * ```
 */
const getPoly: (vision: Vision.Paragraph | Vision.Word) => Poly = pipe(
  path(['boundingBox', 'normalizedVertices']),
  clone,
  sortPoly
);

/**
 * ```haskell
 * getConfidence :: Paragraph | Word -> Float
 * ```
 */
const getConfidence: (vision: Vision.Paragraph | Vision.Word) => number = pipe(
  prop('confidence'),
  defaultTo(0)
);

/**
 * ```haskell
 * fromVisionWord :: VisionWord -> Word
 * ```
 */
export const fromVisionWord: (word: Vision.Word) => IO.IO<Word> = (
  word
) => (): Word =>
  applySpec<Word>({
    id: () => getRandomId(),
    paragraph: () => '',
    breakType: pipe(prop('symbols'), getBreakTypeFromSymbols),
    boundingPoly: getPoly,
    text: Vision.getTextFromWord,
    confidence: getConfidence,
  })(word);

/**
 * ```haskell
 * fromVisionParagraph :: VisionParagraph -> IO Page
 * ```
 */
export const fromVisionParagraph: (
  paragraph: Vision.Paragraph
) => IO.IO<Page> = (visionParagraph) => (): Page => {
  const paragraphId = getRandomId();

  const wordsById = pipe(
    Vision.getWordsFromParagraph,
    map(fromVisionWord),
    A.array.sequence(IO.io),
    IO.map(
      pipe(
        map<Word, Word>(assoc('paragraph', paragraphId)),
        reduce<Word, WordsById>(
          (acc, word: Word) => assoc(word.id, word, acc),
          {}
        )
      )
    )
  )(visionParagraph)();

  const paragraph: Paragraph = applySpec({
    id: () => paragraphId,
    boundingPoly: getPoly,
    confidence: getConfidence,
  })(visionParagraph);

  return {
    wordsById,
    paragraphsById: {
      [paragraphId]: paragraph,
    },
  };
};

/**
 * ```haskell
 * fromVisionPage :: VisionPage -> IO Page
 * ```
 */
export const fromVisionPage: (page: Vision.Page) => IO.IO<Page> = pipe(
  Vision.getParagraphsFromPage,
  map(fromVisionParagraph),
  A.array.sequence(IO.io),
  IO.map(
    reduce((acc: Page, page: Page) => mergeDeepLeft(acc, page) as Page, {
      wordsById: {},
      paragraphsById: {},
    })
  )
);

/**
 * ```haskell
 * fromAnnotateImageResponse :: AnnotateImageResponse -> IO [Page]
 * ```
 */
export const fromAnnotateImageResponse: (
  response: Vision.AnnotateImageResponse
) => IO.IO<Page[]> = pipe(
  Vision.getPagesFromAnnotateImageResponse,
  map(fromVisionPage),
  A.array.sequence(IO.io)
);

/**
 * ```haskell
 * fromAnnotateImageRequest :: AsyncAnnotateFileRequest -> IO [Page]
 * ```
 */
export const fromAnnotateImageRequest: (
  request: Vision.AsyncAnnotateFileRequest
) => IO.IO<TextAnnotation> = (request) => (): TextAnnotation => {
  const timestamp = getCurrentISOString();
  return {
    id: getRandomId(),
    file: Vision.getFileIdFromAnnotateImageRequest(request),
    pages: pipe(
      Vision.getPagesFromAnnotateImageRequest,
      map(fromVisionPage),
      A.array.sequence(IO.io)
    )(request)(),
    created_at: timestamp,
    updated_at: timestamp,
  };
};

const breakTypeMappings: Record<BreakType, string> = {
  UNKNOWN: '',
  SPACE: ' ',
  SURE_SPACE: ' ',
  EOL_SURE_SPACE: '\n',
  HYPHEN: '-',
  LINE_BREAK: '\n',
};

/**
 * ```haskell
 * getStringFromBreakType :: BreakType -> String
 * ```
 */
export const getStringFromBreakType: (breakType: BreakType) => string = prop(
  __,
  breakTypeMappings
);

/**
 * ```haskell
 * getTextFromWords :: [Word] -> String
 * ```
 */
export const getTextFromWords: (words: Word[]) => string = pipe(
  reduce(
    (acc: string, word: Word) =>
      acc + word.text + getStringFromBreakType(word.breakType),
    ''
  ),
  replace(/\n$/, ''),
  trim
);
