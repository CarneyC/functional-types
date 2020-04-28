import fc, { Arbitrary } from 'fast-check';
import { Dictionary } from 'ramda';
import {
  FileMatcher,
  Gettable,
  Matcher,
  Schema,
  Type,
  VersionedSchema,
} from './index';

export const nonEmptyString = (): Arbitrary<string> => fc.hexaString(16, 16);

export const nonString = (): Arbitrary<unknown> =>
  fc.oneof(fc.nat(), fc.object());

export const nonNumber = (): Arbitrary<unknown> =>
  fc.oneof(fc.string(), fc.object());

export const invalidMatcherObject = (): Arbitrary<Dictionary<unknown>> =>
  fc
    .tuple(nonString(), nonString(), nonNumber())
    .map(([regex, name, timestamp]) => ({
      regex,
      name,
      timestamp_capture_group: timestamp,
    }));

export const nonMatcherObject = (): Arbitrary<unknown> =>
  fc
    .anything()
    .filter(
      (object: any) =>
        !object ||
        !object.regex ||
        !object.name ||
        !object.timestamp_capture_group
    );

export const invalidGettableObject = (): Arbitrary<Dictionary<unknown>> =>
  fc
    .tuple(
      fc.anything(),
      invalidMatcherObject(),
      fc.array(invalidMatcherObject(), 1, 100)
    )
    .map(([schemaAttribute, file, attributes]) => ({
      schema_attribute: schemaAttribute,
      file,
      attributes,
    }));

export const nonGettableObject = (): Arbitrary<unknown> =>
  fc.anything().filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (object: any) =>
      !object || !object.schema_attribute || !object.file || !object.attributes
  );

export const invalidSchemaObject = (): Arbitrary<Dictionary<unknown>> =>
  fc
    .tuple(invalidGettableObject(), fc.array(invalidMatcherObject(), 1, 100))
    .map(([gettable, attributes]) => ({
      gettable,
      attributes,
    }));

export const nonSchemaObject = (): Arbitrary<unknown> =>
  fc
    .anything()
    .filter(
      (object: any) => !object || !object.gettables || !object.attributes
    );

export const fileType = (): Arbitrary<Type> =>
  fc.constantFrom(
    'pdf',
    'excel',
    'json',
    'pdf-region',
    'excel-sheet',
    'json-child'
  );

export const regex = nonEmptyString;

export const matcher = (): Arbitrary<Matcher> =>
  fc.record({
    regex: regex(),
    name: nonEmptyString(),
    timestamp_capture_group: fc.integer(),
  });

export const singletonFileMatcher = (): Arbitrary<FileMatcher> =>
  fc.tuple(matcher(), fileType()).map(([matcher, fileType]) => ({
    ...matcher,
    type: fileType,
  }));

export const fileMatcher = (): Arbitrary<FileMatcher> =>
  fc
    .tuple(singletonFileMatcher(), singletonFileMatcher())
    .map(([fileMatcher, child]) => ({ ...fileMatcher, child }));

export const gettable = (): Arbitrary<Gettable> =>
  fc.record({
    schema_attribute: nonEmptyString(),
    file: fileMatcher(),
    attributes: fc.array(matcher(), 1, 100),
  });

export const gettables = (): Arbitrary<Record<string, Gettable>> =>
  fc.object({
    maxDepth: 0,
    key: nonEmptyString(),
    values: [gettable()],
  }) as any;

const natDate = (): Arbitrary<Date> =>
  fc.date({ min: new Date(0), max: new Date() });

export const schema = (): Arbitrary<Schema> =>
  fc.record({
    id: nonEmptyString(),
    gettables: gettables(),
    created_at: natDate(),
    updated_at: natDate(),
  });

export const versionedSchema = (): Arbitrary<VersionedSchema> =>
  fc.tuple(schema(), nonEmptyString()).map(([schema, schemaId]) => ({
    ...schema,
    schema_id: schemaId,
  }));
