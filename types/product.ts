// 기본 속성
export interface ProductProps {
    id: string;
    name: string;
    category: string;
    thumbnail: string;
    images: string[];
}

// 기존 데이터
export interface InitialProductDataProps {
    id: string;
    name: string;
    category: string;
    thumbnail: string;
    images: string[];
}

// cylinder
export interface CylinderProps {
    id: number,
    category: string,
    name: string,
    thumbnail: string,
    type?: string,
    cad?: string,
    product_img: string[],
    seal_material_img?: string,
    mounting?: string[],
    series_img: string,
}

export type AllProductDataProps = ProductProps | CylinderProps;

type ProductFormMode = "upload" | "edit";

export interface ProductForm {
    name: string, // 제품명
    category: string, // 카테고리
    thumbnail: File | null, // 대표이미지
    images: File[], // 제품 이미지
}

export interface ProductFormProps {
    mode: ProductFormMode; // upload OR edit
    initialData?: InitialProductDataProps; // edit data (등록된 데이터)
}