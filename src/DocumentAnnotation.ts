import { Word } from './TextAnnotation';
import { Dictionary } from 'ramda';
import { Poly } from './Vertex';
import * as IO from 'fp-ts/lib/IO';
import { getCurrentISOString } from './DateTime';
import { getRandomId } from './String';

export interface Node {
  id: string;
  label: string;
  boundingPoly: Poly;
}

export interface Cell extends Node {
  words: Word[];
  text: string;
}

export interface TableCell extends Cell {
  rowHeader: Cell;
  columnHeader: Cell;
}

export type CellById = Dictionary<Cell>;
export type TableCellById = Dictionary<TableCell>;

export interface Table extends Node {
  parent?: string;
  rowHeaders: CellById;
  columnHeaders: CellById;
  mergedRowHeader: Cell;
  mergedColumnHeader: Cell;
  cellById: TableCellById;
}

export interface Leaf extends Node {
  parent?: Leaf;
  children?: Leaf[];
  node: Table | Cell;
}

export type Tree = Dictionary<Leaf>;

export type TreeByPage = Tree[];

export interface DocumentAnnotation {
  id: string;
  file: string;
  treeByPage: TreeByPage;
  created_at: string;
  updated_at: string;
}

export type DocumentAnnotationBase = Pick<
  DocumentAnnotation,
  'file' | 'treeByPage'
>;

/**
 * ```haskell
 * make :: DocumentAnnotationBase -> IO DocumentAnnotation
 * ```
 */
export const make: (
  annotation: DocumentAnnotationBase
) => IO.IO<DocumentAnnotation> = ({
  file,
  treeByPage,
}) => (): DocumentAnnotation => {
  const timestamp = getCurrentISOString();
  return {
    id: getRandomId(),
    file,
    treeByPage,
    created_at: timestamp,
    updated_at: timestamp,
  };
};
