import { allPass, assoc, is, propIs, reduce } from 'ramda';

export interface Label {
  id: string;
  color: string;
}

export type ColorMappings = Record<string, string>;

/**
 * ```haskell
 * isLabel :: a -> bool
 * ```
 */
export const isLabel = (a: unknown): a is Label =>
  allPass([is(Object), propIs(String, 'id'), propIs(String, 'color')])(a);

/**
 * ```haskell
 * toColorMappings :: [Label] -> ColorMappings
 * ```
 */
export const toColorMappings: (labels: Label[]) => ColorMappings = reduce(
  (acc: ColorMappings, label: Label) => assoc(label.id, label.color)(acc),
  {}
);
