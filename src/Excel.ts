import {
  all,
  allPass,
  anyPass,
  Dictionary,
  is,
  map,
  not,
  pipe,
  propIs,
  propSatisfies,
  values,
} from 'ramda';
import { isDictionary, isNotNil, isString } from './Types';

export interface Position {
  file: string;
  sheet: string;
  cell: string;
}

export type Cell = string;
export type Row = Dictionary<Cell>;
export type Sheet = Row[];
export type SheetByName = Dictionary<Sheet>;

export interface Excel {
  file: string;
  sheetByName: SheetByName;
}

/**
 * ```haskell
 * isPosition :: a -> bool
 * ```
 */
export const isPosition = (a: unknown): a is Position =>
  allPass([
    isNotNil,
    propIs(String, 'file'),
    propIs(String, 'sheet'),
    propIs(String, 'cell'),
  ])(a);

/**
 * ```haskell
 * isCell :: a -> bool
 * ```
 */
export const isCell = (a: unknown): a is Row =>
  anyPass(map(is)([String, Number, Date]))(a);

/**
 * ```haskell
 * isRow :: a -> bool
 * ```
 */
export const isRow = (a: unknown): a is Row =>
  allPass([is(Object), pipe(is(Array), not), pipe(values, all(isCell))])(a);

/**
 * ```haskell
 * isSheet :: a -> bool
 * ```
 */
export const isSheet = (a: unknown): a is Row =>
  allPass([is(Array), all(isRow)])(a);

/**
 * ```haskell
 * isSheetByName :: a -> bool
 * ```
 */
export const isSheetByName = (a: unknown): a is SheetByName =>
  pipe(values, all(isSheet))(a);

/**
 * ```haskell
 * isExcel :: a -> bool
 * ```
 */
export const isExcel = (a: unknown): a is Excel =>
  allPass([
    isDictionary,
    propSatisfies(isSheetByName, 'sheetByName'),
    propSatisfies(isString, 'file'),
  ])(a);
