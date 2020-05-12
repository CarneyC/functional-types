import { allPass, Dictionary, is } from 'ramda';
import { test as regExpTest } from 'ramda';
import { Direction } from '../Comparable';
import { DocumentType } from '../FileType';

enum PredicateBrand {}

export type PredicateStr = string & PredicateBrand;

export interface Predicates {
  has?: string[];
  regexp?: Array<{
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

// isPredicateStr :: a -> bool
export const isPredicateStr = (a: unknown): a is PredicateStr =>
  allPass([
    is(String),
    regExpTest(
      // has:property|regex:property,regexp
      /^((has:|regexp:[^,|]+,)[^,|]+)+(\|(has:|regexp:[^,|]+,)[^,|]+)*$/
    ),
  ])(a);
