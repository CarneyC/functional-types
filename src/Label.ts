import { allPass, is, propIs } from 'ramda';

export interface Label {
  id: string;
  color: string;
}

// isLabel :: a -> bool
export const isLabel = (a: unknown): a is Label =>
  allPass([is(Object), propIs(String, 'id'), propIs(String, 'color')])(a);
