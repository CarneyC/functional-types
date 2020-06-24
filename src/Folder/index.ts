import { getCurrentISOString } from '../DateTime';
import * as FT from '../FileType';
import { getRandomId } from '../String';
import { isArray, isArraySatisfying, isString } from '../Types';
import * as E from 'fp-ts/lib/Either';
import * as IO from 'fp-ts/lib/IO';
import * as R from 'fp-ts/lib/Reader';
import {
  all,
  allPass,
  includes,
  is,
  join,
  last,
  map,
  pipe,
  prop,
  propIs,
  propSatisfies,
  test as regExpTest,
  split,
  anyPass,
  filter,
  replace,
} from 'ramda';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RelationshipBrand {}

export type Relationship = string & RelationshipBrand; // has:string

export type Tag =
  | 'offline'
  | 'online'
  | 'singapore'
  | 'hong_kong'
  | Relationship;

export interface Folder {
  id: string;
  name: string;
  tags: Tag[];
  created_at: string;
  updated_at: string;
}

export interface Attributes {
  id: string;
  folder: string;
  name: string;
  type: FT.FileType;
}

export interface Metadata {
  kind: string;
  id: string;
  self_link: string;
  media_link: string;
  name: string;
  bucket: string;
  generation: string;
  content_type: string;
  size: string;
  created_at: string;
  updated_at: string;
}

export interface Reference {
  file: string;
}

export interface FolderReference {
  folder: string;
}

export interface FilesReference {
  files: string[];
}

export type FileReferences = FilesReference & FolderReference;

export type File = Attributes & { metadata: Metadata };

export type FilesByType = Record<FT.DocumentType, File[]>;

/**
 * ```haskell
 * isRelationship -> bool
 * ```
 */
export const isRelationship = (a: unknown): a is Relationship =>
  allPass([isString, regExpTest(/^has:[a-zA-Z0-9-]+$/)])(a);

/**
 * ```haskell
 * isTag -> bool
 * ```
 */
export const isTag = (a: unknown): a is Tag =>
  anyPass([
    (a: unknown): boolean =>
      includes(a, ['offline', 'online', 'singapore', 'hong_kong']),
    isRelationship,
  ])(a);

/**
 * ```haskell
 * isFolder -> bool
 * ```
 */
export const isFolder = (a: unknown): a is Folder =>
  allPass([
    is(Object),
    propIs(String, 'id'),
    propIs(String, 'name'),
    propSatisfies(isArraySatisfying(isTag), 'tags'),
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

/**
 * ```haskell
 * make :: String -> Folder
 * ```
 */
export const make: (name: string, tags?: Tag[]) => IO.IO<Folder> = (
  name,
  tags
) => (): Folder => {
  const dateStr = getCurrentISOString();
  return {
    id: getRandomId(),
    name: name,
    tags: tags ?? [],
    created_at: dateStr,
    updated_at: dateStr,
  };
};
/**
 * ```haskell
 * hasStringProps :: [String] -> Reader a bool
 * ```
 */
const hasStringProps: (props: string[]) => R.Reader<unknown, boolean> = pipe(
  map(propIs(String)),
  allPass
);

/**
 * ```haskell
 * isAttributes :: a -> bool
 * ```
 */
const isAttributes = (a: unknown): a is Attributes =>
  allPass([
    is(Object),
    hasStringProps(['id', 'folder', 'name']),
    propSatisfies(FT.isFileType, 'type'),
  ])(a);

/**
 * ```haskell
 * isMetadata :: a -> bool
 * ```
 */
export const isMetadata = (a: unknown): a is Metadata =>
  allPass([
    is(Object),
    hasStringProps([
      'kind',
      'id',
      'self_link',
      'media_link',
      'name',
      'bucket',
      'generation',
      'content_type',
      'size',
      'created_at',
      'updated_at',
    ]),
  ])(a);

/**
 * ```haskell
 * isFile :: a -> bool
 * ```
 */
export const isFile = (a: unknown): a is File =>
  allPass([isAttributes, propSatisfies(isMetadata, 'metadata')])(a);

/**
 * ```haskell
 * isFileArray :: a -> bool
 * ```
 */
export const isFileArray = (a: unknown): a is File[] =>
  allPass([is(Array), all(isFile)])(a);

/**
 * ```haskell
 * isFilesByType :: a -> bool
 * ```
 */
export const isFilesByType = (a: unknown): a is FilesByType =>
  allPass([
    is(Object),
    ...map(propSatisfies(isFileArray), ['pdf', 'json', 'excel']),
  ])(a);

/**
 * ```haskell
 * getAttributesFromName :: String -> Either Attributes Error
 * ```
 */
export const getAttributesFromName: (
  name: string
) => E.Either<Error, Omit<Attributes, 'type'>> = pipe(
  split('/'),
  E.fromPredicate(
    (segments: string[]) => segments.length >= 2,
    () => new Error('Invalid file name format.')
  ),
  E.map(([folder, ...names]: string[]) => {
    const name = names.join('/');
    return {
      id: join('/')([folder, name]),
      folder,
      name,
    };
  })
);

/**
 * ```haskell
 * fromMetadata :: Metadata -> Either
 * ```
 */
export const fromMetadata: (metadata: Metadata) => E.Either<Error, File> = (
  metadata
) =>
  pipe(
    E.fromPredicate(
      propSatisfies(FT.isContentType, 'content_type'),
      () => new Error('Unsupported Content-Type.')
    ),
    E.chain(pipe(prop('name'), getAttributesFromName)),
    E.map((attributes) => ({
      ...attributes,
      metadata,
      type: FT.fromContentType(metadata.content_type as FT.ContentType),
    }))
  )(metadata);

/**
 * ```haskell
 * isReference :: a -> bool
 * ```
 */
export const isReference = (a: unknown): a is Reference =>
  allPass([is(Object), propIs(String, 'file')])(a);

/**
 * ```haskell
 * isFilesReference :: a -> bool
 * ```
 */
export const isFilesReference = (a: unknown): a is FilesReference =>
  allPass([
    is(Object),
    propSatisfies(allPass([isArray, all(isString)]), 'files'),
  ])(a);

/**
 * ```haskell
 * isFileReferences :: a -> bool
 * ```
 */
export const isFileReferences = (a: unknown): a is FileReferences =>
  allPass([
    is(Object),
    propIs(String, 'folder'),
    propSatisfies(allPass([isArray, all(isString)]), 'files'),
  ])(a);

/**
 * ```haskell
 * makeReference :: String -> Reference
 * ```
 */
export const makeReference: (file: string) => Reference = (file) => ({
  file,
});

/**
 * ```haskell
 * getFileNameFromId :: String -> String
 * ```
 */
export const getFileNameFromId: (id: string) => string = pipe(
  split('/'),
  last as R.Reader<string[], string>
);

/**
 * ```haskell
 * makeFolderReference :: String -> FolderReference
 * ```
 */
export const makeFolderReference: (folder: string) => FolderReference = (
  folder
) => ({
  folder,
});

/**
 * ```haskell
 * isFolderReference :: a -> bool
 * ```
 */
export const isFolderReference = (a: unknown): a is FolderReference =>
  allPass([is(Object), propIs(String, 'folder')])(a);

/**
 * ```haskell
 * getFolderFromReference :: FolderReference -> String
 * ```
 */
export const getFolderFromReference: (
  reference: FolderReference
) => string = prop('folder');

/**
 * ```haskell
 * makeRelationship :: String -> Relationship
 * ```
 */
export const makeRelationship: (target: string) => Relationship = (target) =>
  `has:${target}` as Relationship;

/**
 * ```haskell
 * getRelated :: Folder -> [String]
 * ```
 */
export const getRelated: (folder: Folder) => string[] = pipe(
  prop('tags'),
  filter(isRelationship),
  map(replace(/^has:/, ''))
);
