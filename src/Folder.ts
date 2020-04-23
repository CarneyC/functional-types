import { getRandomId } from './String';
import { getCurrentDate } from './DateTime';
import * as IO from 'fp-ts/lib/IO';
import {
  all,
  allPass,
  is,
  join,
  map,
  pipe,
  prop,
  propIs,
  propSatisfies,
  split,
} from 'ramda';
import * as FT from './FileType';
import * as R from 'fp-ts/lib/Reader';
import * as E from 'fp-ts/lib/Either';

export interface Folder {
  id: string;
  name: string;
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

export type File = Attributes & { metadata: Metadata };

export type FilesByType = Record<FT.DocumentType, File[]>;

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
    propIs(String, 'created_at'),
    propIs(String, 'updated_at'),
  ])(a);

/**
 * ```haskell
 * make :: String -> Folder
 * ```
 */
export const make: (name: string) => IO.IO<Folder> = (name) => (): Folder => {
  const dateStr = getCurrentDate().toISOString();
  return {
    id: getRandomId(),
    name: name,
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
