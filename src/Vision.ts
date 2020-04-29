import * as R from 'ramda';
import {
  defaultTo,
  join,
  map,
  path,
  pipe,
  prop,
  split,
  takeLast,
  unnest,
} from 'ramda';

export interface AsyncAnnotateFileRequest {
  inputConfig: InputConfig;
  features: Feature[];
  imageContext?: ImageContext;
  outputConfig: OutputConfig;
  responses?: AnnotateImageResponse[];
}

export interface InputConfig {
  gcsSource: GcsSource;
  content?: Buffer;
  mimeType: string;
}

export interface GcsSource {
  uri: string;
}

export interface OutputConfig {
  /*
   * The max number of response protos to put into each output
   * JSON file on Google Cloud Storage. The valid range is [1, 100].
   * If not specified, the default value is 20.
   */
  batchSize?: number;
  gcsDestination: GcsDestination;
}

export interface GcsDestination {
  uri: string;
}

export interface AnnotateImageRequest {
  image: Image;
  features?: Feature[];
  imageContext?: ImageContext;
}

export interface AnnotateImageResponse {
  // If present, label detection has completed successfully.
  labelAnnotations?: EntityAnnotation[];

  // If present, text (OCR) detection has completed successfully.
  textAnnotations?: EntityAnnotation[];

  /*
   * If present, text (OCR) detection or document (OCR) text detection has completed successfully.
   * This annotation provides the structural hierarchy for the OCR detected text.
   */
  fullTextAnnotation?: TextAnnotation;
}

export interface Image {
  content?: Buffer;
  source?: ImageSource;
}

export interface ImageSource {
  gcsImageUri?: string;
  imageUri?: string;
}

export interface Feature {
  type: Type;
  maxResult?: number;
  model?: 'builtin/stable' | 'builtin/latest';
}

export type Type = string;

export interface ImageContext {
  latLongRect: unknown;
  languageHints: string[];
  cropHintsParams: unknown;
  productSearchParams: unknown;
  webDetectionParams: unknown;
}

export interface EntityAnnotation {
  mid: string;
  locale: string;
  description: string;
  score: number;
  confidence: number;
  topicality: number;
  boundingPoly?: BoundingPoly;
  locations: LocationInfo[];
  properties: Property[];
}

/*
 * TextAnnotation contains a structured representation of OCR extracted text.
 * The hierarchy of an OCR extracted text structure is like this:
 * TextAnnotation -> Page -> Block -> Paragraph -> Word -> TextSymbol
 */
export interface TextAnnotation {
  pages: Page[];

  // UTF-8 text detected on the pages.
  text: string;
}

// Detected page from OCR.
export interface Page {
  property: TextProperty;

  /*
   * Page width and height.
   * For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
   */
  width: number;
  height: number;

  blocks: Block[];

  // Confidence of the OCR results on the page. Range [0, 1].
  confidence?: number;
}

export interface TextProperty {
  detectedLanguages: DetectedLanguage[];
  detectedBreak?: DetectedBreak;
}

export interface Block {
  property?: TextProperty;

  /*
   * The bounding box for the block. The vertices are
   * in the order of top-left, top-right, bottom-right, bottom-left.
   * When a rotation of the bounding box is detected the rotation is represented
   * as around the top-left corner as defined when the text is read in the 'natural' orientation.
   * For example: * when the text is horizontal it might look like:
   *  0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner
   * it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).
   */
  boundingBox: BoundingPoly;
  paragraphs: Paragraph[];
  blockType: BlockType;
  confidence?: number;
}

export interface Paragraph {
  property?: TextProperty;
  boundingBox: BoundingPoly;
  words: Word[];
  confidence: number;
}

export type BlockType =
  | 'UNKNOWN'
  | 'TEXT'
  | 'TABLE'
  | 'PICTURE'
  | 'RULER'
  | 'BARCODE'
  | string;

export interface Word {
  property?: TextProperty;
  boundingBox: BoundingPoly;
  symbols: TextSymbol[];
  confidence: number;
}

export interface TextSymbol {
  property: TextProperty;
  boundingBox?: BoundingPoly;
  text: string;
  confidence: number;
}

export interface DetectedLanguage {
  /*
   * The BCP-47 language code, such as "en-US" or "sr-Latn".
   * For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   */
  languageCode: string;
  confidence?: number;
}

export interface DetectedBreak {
  type: BreakType;

  // True if break prepends the element.
  isPrefix?: boolean;
}

export type BreakType =
  | 'UNKNOWN'
  | 'SPACE'
  | 'SURE_SPACE' // Sure space (very wide)
  | 'EOL_SURE_SPACE' // Line-wrapping break
  | 'HYPHEN' // End-line hyphen that is not present in text
  | 'LINE_BREAK';

export interface BoundingPoly {
  vertices?: Vertex[];
  normalizedVertices?: NormalizedVertex[];
}

export interface LocationInfo {
  latLng: LatLng;
}

export interface Property {
  name: string;
  value: string;
  uint64Value: number;
}

/*
 * A vertex represents a 2D point in the image.
 * NOTE: the vertex coordinates are in the same scale as the original image.
 */
export interface Vertex {
  x: number;
  y: number;
}

/*
 * A vertex represents a 2D point in the image.
 * NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
 */
export interface NormalizedVertex extends Vertex {
  x: number;
  y: number;
}

/*
 * An object representing a latitude/longitude pair. This is expressed as a pair of
 * (doubles representing degrees latitude and degrees longitude. Unless specified otherwise,
 * this must conform to the WGS84 standard. Values must be within normalized ranges.
 */
export interface LatLng {
  // The latitude in degrees. It must be in the range [-90.0, +90.0].
  latitude: number;
  // The longitude in degrees. It must be in the range [-180.0, +180.0].
  longitude: number;
}

/**
 * ```haskell
 * getTextFromSymbol :: TextSymbol -> String
 * ```
 */
export const getTextFromSymbol: (symbol: TextSymbol) => string = R.prop('text');

/**
 * ```haskell
 * getSymbolsFromWord :: Word -> [TextSymbol]
 * ```
 */
export const getSymbolsFromWord: (word: Word) => TextSymbol[] = R.prop(
  'symbols'
);

/**
 * ```haskell
 * getTextFromWord :: Word -> String
 * ```
 */
export const getTextFromWord: (word: Word) => string = R.pipe(
  getSymbolsFromWord,
  R.map(getTextFromSymbol),
  R.join('')
);

/**
 * ```haskell
 * getWordsFromParagraph :: Paragraph -> [Word]
 * ```
 */
export const getWordsFromParagraph: (paragraph: Paragraph) => Word[] = R.prop(
  'words'
);

/**
 * ```haskell
 * getParagraphsFromBlock :: Block -> [Paragraph]
 * ```
 */
export const getParagraphsFromBlock: (block: Block) => Paragraph[] = R.prop(
  'paragraphs'
);

/**
 * ```haskell
 * getBlocksFromPage :: Page -> [Block]
 * ```
 */
export const getBlocksFromPage: (page: Page) => Block[] = R.prop('blocks');

/**
 * ```haskell
 * getParagraphsFromPage :: Page -> [Paragraph]
 * ```
 */
export const getParagraphsFromPage: (page: Page) => Paragraph[] = R.pipe(
  getBlocksFromPage,
  R.chain(getParagraphsFromBlock)
);

/**
 * ```haskell
 * getWordsFromPage :: Page -> [Word]
 * ```
 */
export const getWordsFromPage: (page: Page) => Word[] = R.pipe(
  getParagraphsFromPage,
  R.chain(getWordsFromParagraph)
);

/**
 * ```haskell
 * getPagesFromAnnotateImageResponse :: AnnotateImageResponse -> [Page]
 * ```
 */
export const getPagesFromAnnotateImageResponse: (
  response: AnnotateImageResponse
) => Page[] = pipe(
  path(['fullTextAnnotation', 'pages']),
  defaultTo([]) as (pages: Page[] | undefined) => Page[]
);

/**
 * ```haskell
 * getPagesFromAnnotateImageRequest :: AnnotateImageRequest -> [Page]
 * ```
 */
export const getPagesFromAnnotateImageRequest: (
  request: AsyncAnnotateFileRequest
) => Page[] = pipe(
  prop('responses') as (
    request: AsyncAnnotateFileRequest
  ) => AsyncAnnotateFileRequest['responses'],
  defaultTo([]),
  map(getPagesFromAnnotateImageResponse),
  unnest
);

/**
 * ```haskell
 * getFileIdFromAnnotateImageRequest :: AnnotateImageRequest -> String
 * ```
 */
export const getFileIdFromAnnotateImageRequest: (
  request: AsyncAnnotateFileRequest
) => string = pipe(
  path<string>(['inputConfig', 'gcsSource', 'uri']),
  split('/'),
  takeLast(2) as (segments: string[]) => string[],
  join('/')
);
