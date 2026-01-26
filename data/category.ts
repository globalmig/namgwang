export const CATEGORY_MAP: {
    [key: string]:
    {
        title: string;
        banner: { mo: string, pc: string };
        categories: { name: string, url: string }[]
    }
} = {
    company: {
        title: '회사소개',
        banner: {
            mo: "/images/company_banner_mo.jpg",
            pc: "/images/company_banner.jpg"
        },
        categories: [
            { name: "회사개요", url: "/about" },
            { name: "인사말", url: "/about2" },
        ],
    },
    product: {
        title: '제품소개',
        banner: {
            mo: "/images/product_banner_mo.jpg",
            pc: "/images/product_banner_pc.jpg"
        },
        categories: [
            { name: "유압 실린더", url: "/cylinder" },
            { name: "유압 유니트", url: "/unit" },
            { name: "기타 기기 제작", url: "/other" },
        ],
    },
    inquire: {
        title: '제품문의',
        banner: {
            mo: "/images/inquire_banner_mo.jpg",
            pc: "/images/inquire_banner_pc.jpg"
        },
        categories: [
            { name: "제품문의", url: "/write" },
        ],
    },
    technology: {
        title: '기술자료실',
        banner: {
            mo: "/images/technology_banner_mo.jpg",
            pc: "/images/technology_banner_pc.jpg"
        },
        categories: [
            { name: "유압 실린더", url: "/cylinder" },
            { name: "유압 유니트", url: "/unit" },
        ],
    },
};

// 유압 유니트, 기타 기기는 서브 카테고리 X
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
    ]
