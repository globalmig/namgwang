// 기본 속성
export interface PerformanceProps {
    id: string,
    name: string,
    spec: string,
    img: string
}

// 기존 데이터
export interface InitialPerformanceDataProps {
    id: string;
    name: string; 
    spec: string; 
    img: string;
} 

// 실적 등록 양식
export interface PerformanceForm {
    name: string, // 프로젝트명
    spec: string, // spec
    img: File | null // 이미지
}

type PerformanceFormMode = "upload" | "edit";

export interface PerformanceFormProps {
    mode: PerformanceFormMode; // upload OR edit
    initialData?: InitialPerformanceDataProps; // edit data (등록된 데이터)
}