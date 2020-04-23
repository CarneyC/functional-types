import {
  __,
  anyPass,
  equals,
  invertObj,
  keys,
  map,
  mergeLeft,
  prop,
  values,
} from 'ramda';

export type DocumentType = 'pdf' | 'excel' | 'json';

export type ImageType = 'png' | 'jpeg';

export type FileType = DocumentType | ImageType;

export type DocumentContentType =
  | 'application/pdf'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/json';

export type ImageContentType = 'image/png' | 'image/jpeg';

export type ContentType = DocumentContentType | ImageContentType;

type DocumentTypeMappings = {
  [fileType in DocumentType]: DocumentContentType;
};

type ImageTypeMappings = {
  [imageType in ImageType]: ImageContentType;
};

type FileTypeMappings = DocumentTypeMappings & ImageTypeMappings;

type InvertedDocumentTypeMappings = {
  [contentType in DocumentContentType]: DocumentType;
};

type InvertedImageTypeMappings = {
  [contentType in ImageContentType]: ImageType;
};

type InvertedFileTypeMappings = InvertedDocumentTypeMappings &
  InvertedImageTypeMappings;

/**
 * ```haskell
 * DocumentTypeToContentType :: DocumentTypeMappings
 * ```
 */
const DocumentTypeToContentType: DocumentTypeMappings = {
  pdf: 'application/pdf',
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  json: 'application/json',
};

/**
 * ```haskell
 * ImageTypeToContentType :: ImageTypeMappings
 * ```
 */
const ImageTypeToContentType: ImageTypeMappings = {
  png: 'image/png',
  jpeg: 'image/jpeg',
};

/**
 * ```haskell
 * FileTypeToContentType :: FileTypeMappings
 * ```
 */
const FileTypeToContentType: FileTypeMappings = mergeLeft(
  DocumentTypeToContentType,
  ImageTypeToContentType
);

/**
 * ```haskell
 * ContentTypeToDocumentType :: InvertedDocumentTypeMappings
 * ```
 */
const ContentTypeToDocumentType: InvertedDocumentTypeMappings = invertObj(
  DocumentTypeToContentType
) as InvertedDocumentTypeMappings;

/**
 * ```haskell
 * ContentTypeToDocumentType :: InvertedImageTypeMappings
 * ```
 */
const ContentTypeToImageType: InvertedImageTypeMappings = invertObj(
  ImageTypeToContentType
) as InvertedImageTypeMappings;

/**
 * ```haskell
 * ContentTypeToFileType :: InvertedFileTypeMappings
 * ```
 */
const ContentTypeToFileType: InvertedFileTypeMappings = invertObj(
  FileTypeToContentType
) as InvertedFileTypeMappings;

/**
 * ```haskell
 * documentTypes: [DocumentType]
 * ```
 */
export const documentTypes: DocumentType[] = keys(DocumentTypeToContentType);

/**
 * ```haskell
 * imageTypes: [DocumentType]
 * ```
 */
export const imageTypes: ImageType[] = keys(ImageTypeToContentType);

/**
 * ```haskell
 * fileTypes: [FileType]
 * ```
 */
export const fileTypes: FileType[] = keys(FileTypeToContentType);

/**
 * ```haskell
 * contentTypes: [DocumentContentType]
 * ```
 */
export const fileContentTypes: DocumentContentType[] = values(
  DocumentTypeToContentType
);

/**
 * ```haskell
 * imageContentTypes: [DocumentContentType]
 * ```
 */
export const imageContentTypes: ImageContentType[] = values(
  ImageTypeToContentType
);

/**
 * ```haskell
 * contentTypes: [ContentType]
 * ```
 */
export const contentTypes: ContentType[] = values(FileTypeToContentType);

/**
 * ```haskell
 * isDocumentType :: a -> bool
 * ```
 */
export const isDocumentType = (a: unknown): a is DocumentType =>
  anyPass(map(equals)(documentTypes))(a);

/**
 * ```haskell
 * isImageType :: a -> bool
 * ```
 */
export const isImageType = (a: unknown): a is ImageType =>
  anyPass(map(equals)(imageTypes))(a);

/**
 * ```haskell
 * isFileType :: a -> bool
 * ```
 */
export const isFileType = (a: unknown): a is ImageType =>
  anyPass([isDocumentType, isImageType])(a);

/**
 * ```haskell
 * isDocumentContentType :: a -> bool
 * ```
 */
export const isDocumentContentType = (a: unknown): a is DocumentContentType =>
  anyPass(map(equals)(fileContentTypes))(a);

/**
 * ```haskell
 * isDocumentContentType :: a -> bool
 * ```
 */
export const isImageContentType = (a: unknown): a is ImageContentType =>
  anyPass(map(equals)(imageContentTypes))(a);

/**
 * ```haskell
 * isContentType :: a -> bool
 * ```
 */
export const isContentType = (a: unknown): a is ContentType =>
  anyPass([isDocumentContentType, isImageContentType])(a);

/**
 * ```haskell
 * toDocumentContentType :: DocumentType -> DocumentContentType
 * ```
 */
export const toDocumentContentType: (
  fileType: DocumentType
) => DocumentContentType = prop(__, DocumentTypeToContentType);

/**
 * ```haskell
 * toImageContentType :: DocumentType -> ImageContentType
 * ```
 */
export const toImageContentType: (
  imageType: ImageType
) => ImageContentType = prop(__, ImageTypeToContentType);

/**
 * ```haskell
 * toContentType :: FileType -> ContentType
 * ```
 */
export const toContentType: (fileType: FileType) => ContentType = prop(
  __,
  FileTypeToContentType
);

/**
 * ```haskell
 * fromDocumentContentType :: DocumentContentType -> DocumentType
 * ```
 */
export const fromDocumentContentType: (
  contentType: DocumentContentType
) => DocumentType = prop(__, ContentTypeToDocumentType);

/**
 * ```haskell
 * fromImageContentType :: DocumentContentType -> DocumentType
 * ```
 */
export const fromImageContentType: (
  contentType: ImageContentType
) => ImageType = prop(__, ContentTypeToImageType);

/**
 * ```haskell
 * fromContentType :: ContentType -> FileType
 * ```
 */
export const fromContentType: (contentType: ContentType) => FileType = prop(
  __,
  ContentTypeToFileType
);
