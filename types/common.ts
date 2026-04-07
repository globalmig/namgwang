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

export interface CertificationProps {
  id: string;
  name: string;
  img: string;
}

export interface InitialCertificationDataProps {
  id: string;
  name: string;
  img: string;
}

export interface CertificationForm {
  name: string, // 프로젝트명
  img: File | null // 이미지
}

type CertificationFormMode = "upload" | "edit";

export interface CertificationFormProps {
  mode: CertificationFormMode; // upload OR edit
  initialData?: InitialCertificationDataProps; // edit data (등록된 데이터)
}

export interface NewsForm {
  title: string;
  contents: string;
  img: File | null;
}

export interface NewsListProps {
  id: string;
  title: string;
  contents: string;
  img: string;
  created_at: string;
}

export interface InitialNewsDataProps {
  id: string;
  title: string;
  contents: string;
  img: string;
}

type NewsFormMode = "upload" | "edit";

export interface NewsFormProps {
  mode: NewsFormMode; // upload OR edit
  initialData?: InitialNewsDataProps; // edit data (등록된 데이터)
}

export type BoardType = "performance" | "certification" | "product" | "new";