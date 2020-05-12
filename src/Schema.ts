import { Dictionary } from 'ramda';
import { Direction } from './Comparable';
import { DocumentType } from './FileType';

export interface Predicates {
  value: RegExp;
  properties?: Array<{
    property: string;
    pattern: RegExp;
  }>;
}

export type Path = Array<RegExp | Predicates>;

export type FilePath = [RegExp] | [RegExp, RegExp];

export type MergeType = 'header' | 'table';

export interface GettableOptions {
  merge_type?: MergeType[];
  direction?: Direction;
  key?: RegExp;
}

export interface Gettable {
  file: FilePath;
  attribute: Path;
  options?: GettableOptions;
}

export type Gettables = Dictionary<Gettable>;

export interface Schema {
  id: string;
  gettables: Gettables;
  files: FilePath[];
  file_type: DocumentType;
}
