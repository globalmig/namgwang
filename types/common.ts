export interface NavItem {
    id: string;
    name: string;
}

export interface ProductNavigatorProps {
    prevItem?: NavItem | null;
    nextItem?: NavItem | null;
}
export interface TableHeader {
  label: string | string[];
  rowSpan?: number;
  colSpan?: number;
  isLine?: boolean;
}

export interface TableColSpanCell {
  value: string;
  colSpan: number;
}

export interface TableRowSpanCell {
  value: string;
  rowSpan?: number;
}

export type TableBodyCell =
  | string
  | number
  | {
      main: string;
      sub?: string;
      p?: string;
      m?: string;
      value?: string;
    }
  | TableColSpanCell
  | TableRowSpanCell;

export interface TableBodyRow {
  id: string | number;
  data: TableBodyCell[];
}