import {
  __,
  anyPass,
  equals,
  invertObj,
  keys,
  map,
  mergeLeft,
  prop,
  reduce,
  values,
} from 'ramda';

export type DocumentType = 'pdf' | 'excel' | 'json';

export type LegacyDocumentType = 'ms-excel';

export type ArchiveType = 'zip';

export type ImageType = 'png' | 'jpeg';

export type FileType =
  | DocumentType
  | LegacyDocumentType
  | ArchiveType
  | ImageType;

export type DocumentContentType =
  | 'application/pdf'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/json';

export type LegacyDocumentContentType = 'application/vnd.ms-excel';

export type ArchiveContentType = 'application/zip';

export type ImageContentType = 'image/png' | 'image/jpeg';

export type ContentType =
  | DocumentContentType
  | LegacyDocumentContentType
  | ArchiveContentType
  | ImageContentType;

type DocumentTypeMappings = {
  [fileType in DocumentType]: DocumentContentType;
};

type LegacyDocumentTypeMappings = {
  [fileType in LegacyDocumentType]: LegacyDocumentContentType;
};

type ArchiveTypeMappings = {
  [fileType in ArchiveType]: ArchiveContentType;
};

type ImageTypeMappings = {
  [imageType in ImageType]: ImageContentType;
};

type FileTypeMappings = DocumentTypeMappings &
  LegacyDocumentTypeMappings &
  ArchiveTypeMappings &
  ImageTypeMappings;

type InvertedDocumentTypeMappings = {
  [contentType in DocumentContentType]: DocumentType;
};

type InvertedLegacyDocumentTypeMappings = {
  [contentType in LegacyDocumentContentType]: LegacyDocumentType;
};

type InvertedArchiveTypeMappings = {
  [contentType in ArchiveContentType]: ArchiveType;
};

type InvertedImageTypeMappings = {
  [contentType in ImageContentType]: ImageType;
};

type InvertedFileTypeMappings = InvertedDocumentTypeMappings &
  InvertedLegacyDocumentTypeMappings &
  InvertedArchiveTypeMappings &
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
 * LegacyDocumentTypeToContentType :: DocumentTypeMappings
 * ```
 */
const LegacyDocumentTypeToContentType: LegacyDocumentTypeMappings = {
  'ms-excel': 'application/vnd.ms-excel',
};

/**
 * ```haskell
 * ArchiveTypeToContentType :: DocumentTypeMappings
 * ```
 */
const ArchiveTypeToContentType: ArchiveTypeMappings = {
  zip: 'application/zip',
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
const FileTypeToContentType: FileTypeMappings = reduce(mergeLeft, {}, [
  DocumentTypeToContentType,
  LegacyDocumentTypeToContentType,
  ArchiveTypeToContentType,
  ImageTypeToContentType,
]) as FileTypeMappings;

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
 * ContentTypeToLegacyDocumentType :: InvertedLegacyDocumentTypeMappings
 * ```
 */
const ContentTypeToLegacyDocumentType: InvertedLegacyDocumentTypeMappings = invertObj(
  LegacyDocumentTypeToContentType
) as InvertedLegacyDocumentTypeMappings;

/**
 * ```haskell
 * ContentTypeToArchiveType :: InvertedArchiveTypeMappings
 * ```
 */
const ContentTypeToArchiveType: InvertedArchiveTypeMappings = invertObj(
  ArchiveTypeToContentType
) as InvertedArchiveTypeMappings;

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
 * legacyDocumentTypes: [LegacyDocumentType]
 * ```
 */
export const legacyDocumentTypes: LegacyDocumentType[] = keys(
  LegacyDocumentTypeToContentType
);

/**
 * ```haskell
 * archiveTypes: [ArchiveType]
 * ```
 */
export const archiveTypes: ArchiveType[] = keys(ArchiveTypeToContentType);

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
 * fileContentTypes: [DocumentContentType]
 * ```
 */
export const fileContentTypes: DocumentContentType[] = values(
  DocumentTypeToContentType
);

/**
 * ```haskell
 * documentContentTypes: [DocumentContentType]
 * ```
 */
export const documentContentTypes: DocumentContentType[] = fileContentTypes;

/**
 * ```haskell
 * legacyDocumentContentTypes: [DocumentContentType]
 * ```
 */
export const legacyDocumentContentTypes: LegacyDocumentContentType[] = values(
  LegacyDocumentTypeToContentType
);

/**
 * ```haskell
 * archiveContentTypes: [ArchiveContentType]
 * ```
 */
export const archiveContentTypes: ArchiveContentType[] = values(
  ArchiveTypeToContentType
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
 * isLegacyDocumentType :: a -> bool
 * ```
 */
export const isLegacyDocumentType = (a: unknown): a is LegacyDocumentType =>
  anyPass(map(equals)(legacyDocumentTypes))(a);

/**
 * ```haskell
 * isArchiveType :: a -> bool
 * ```
 */
export const isArchiveType = (a: unknown): a is ArchiveType =>
  anyPass(map(equals)(archiveTypes))(a);

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
  anyPass(map(equals)(documentContentTypes))(a);

/**
 * ```haskell
 * isLegacyDocumentContentType :: a -> bool
 * ```
 */
export const isLegacyDocumentContentType = (
  a: unknown
): a is LegacyDocumentContentType =>
  anyPass(map(equals)(legacyDocumentContentTypes))(a);

/**
 * ```haskell
 * isArchiveContentType :: a -> bool
 * ```
 */
export const isArchiveContentType = (a: unknown): a is ArchiveContentType =>
  anyPass(map(equals)(archiveContentTypes))(a);

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
 * toLegacyDocumentContentType :: LegacyDocumentType -> LegacyDocumentContentType
 * ```
 */
export const toLegacyDocumentContentType: (
  fileType: LegacyDocumentType
) => LegacyDocumentContentType = prop(__, LegacyDocumentTypeToContentType);

/**
 * ```haskell
 * toArchiveContentType :: ArchiveType -> ArchiveContentType
 * ```
 */
export const toArchiveContentType: (
  fileType: ArchiveType
) => ArchiveContentType = prop(__, ArchiveTypeToContentType);

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
 * fromLegacyDocumentContentType :: LegacyDocumentContentType -> LegacyDocumentType
 * ```
 */
export const fromLegacyDocumentContentType: (
  contentType: LegacyDocumentContentType
) => LegacyDocumentType = prop(__, ContentTypeToLegacyDocumentType);

/**
 * ```haskell
 * fromArchiveContentType :: ArchiveContentType -> ArchiveType
 * ```
 */
export const fromArchiveContentType: (
  contentType: ArchiveContentType
) => ArchiveType = prop(__, ContentTypeToArchiveType);

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
