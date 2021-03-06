import { File, FilesByType, Folder, make, Metadata } from './index';
import { fileTypes } from '../FileType';
import fc, { Arbitrary } from 'fast-check';

export const invalidFolderObject = (): Arbitrary<Record<string, any>> =>
  fc
    .tuple(fc.anything(), fc.anything(), fc.anything(), fc.anything())
    .map(([id, name, createdAt, updatedAt]) => ({
      id,
      name,
      created_at: createdAt,
      updated_at: updatedAt,
    }));

export const nonFolderObject = (): Arbitrary<unknown> =>
  fc
    .anything()
    .filter(
      (object: any) =>
        !object ||
        !object.id ||
        !object.name ||
        !object.created_at ||
        !object.updated_at
    );

const nonEmptyString = (): Arbitrary<string> => fc.hexaString(2, 16);

export const folder = (): Arbitrary<Folder> =>
  nonEmptyString().map((name) => make(name)());

export const metadata = (): Arbitrary<Metadata> =>
  fc.record({
    kind: nonEmptyString(),
    id: nonEmptyString(),
    self_link: nonEmptyString(),
    media_link: nonEmptyString(),
    name: nonEmptyString(),
    bucket: nonEmptyString(),
    generation: nonEmptyString(),
    content_type: nonEmptyString(),
    size: nonEmptyString(),
    created_at: nonEmptyString(),
    updated_at: nonEmptyString(),
  });

export const file = (): Arbitrary<File> =>
  fc.record({
    id: nonEmptyString(),
    folder: nonEmptyString(),
    name: nonEmptyString(),
    version: nonEmptyString(),
    type: fc.constantFrom(...fileTypes),
    metadata: metadata(),
  });

export const filesByType = (): Arbitrary<FilesByType> =>
  fc.record({
    pdf: fc.array(file()),
    json: fc.array(file()),
    excel: fc.array(file()),
  });
