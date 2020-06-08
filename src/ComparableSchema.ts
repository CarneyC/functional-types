export type SchemaPath = RegExp | [RegExp];

export interface ComparableSchema {
  left: SchemaPath;
  right: SchemaPath;
}
