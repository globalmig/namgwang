export const CATEGORY_MAP: {
    [key: string]:
    {
        title: string;
        banner: { mo: string, pc: string };
        categories?: { name: string, url: string }[]
    }
} = {
    company: {
        title: '회사소개',
        banner: {
            mo: "/images/company_banner_mo.jpg",
            pc: "/images/company_banner.jpg"
        },
        categories: [
            { name: "회사개요", url: "about" },
            { name: "인사말", url: "about2" },
        ],
    },
    product: {
        title: '제품소개',
        banner: {
            mo: "/images/product_banner_mo.jpg",
            pc: "/images/product_banner_pc.jpg"
        },
        categories: [
            { name: "유압 실린더", url: "cylinder" },
            { name: "유압 유니트", url: "unit" },
            { name: "기타 기기 제작", url: "other" },
             { name: "실적", url: "performance" },
        ],
    },
    inquire: {
        title: '제품문의',
        banner: {
            mo: "/images/inquire_banner_mo.jpg",
            pc: "/images/inquire_banner_pc.jpg"
        },
        categories: [
            { name: "제품문의", url: "write" },
        ],
    },
    technology: {
        title: '기술자료실',
        banner: {
            mo: "/images/technology_banner_mo.jpg",
            pc: "/images/technology_banner_pc.jpg"
        },
        categories: [
            { name: "유압 실린더", url: "cylinder" },
            { name: "유압 유니트", url: "unit" },
        ],
    },
    admin: {
        title: '관리자 페이지',
        banner: {
            mo: "/images/admin_banner_mo.jpg",
            pc: "/images/admin_banner_pc.jpg"
        },
    },
};

export const CYLINDER_SUBCATEGORY:
    {
        name: string,
        category: string,
    }[]
    = [
        { name: "일반형 실린더", category: "standard" },
        { name: "고압형 실린더", category: "high-pressure" },
        { name: "제철 사각 실린더", category: "rectangular" },
        { name: "제철 원형 실린더", category: "round" },
        { name: "박형 실린더", category: "compact" },
        { name: "2단 복동 텔레스코픽 실린더", category: "double" },
        { name: "실적", category: "performance" },
    ];

export const UNIT_SUBCATEGORY : {
    name: string,
    category: string,
} [] = [
    { name: "소형 유니트", category: "small" },
    { name: "중형 유니트", category: "medium" },
    { name: "대형 유니트", category: "large" },
    { name: "특수형 유니트", category: "extra" },
]

export const ADMIN_SUBCATEGORY : {
    name: string,
    category: string,
} [] = [
    { name: "실적게시판", category: "performance" },
    { name: "유압 유니트 게시판", category: "unit" },
    { name: "기타 기기 게시판", category: "other" },
]

export const ADMIN_PRODUCT_CATEGORY_NAME : {[key: string] : string} = {
    small: "소형 유니트",
    medium: "중형 유니트",
    large: "대형 유니트",
    extra: "특수형 유니트",
    other: "기타 기기"
}