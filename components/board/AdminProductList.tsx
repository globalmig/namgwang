'use client';
import { supabase } from "@/lib/supabase/client";
import { AllAdminDataProps, ProductProps } from "@/types/product";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";
import { useParams } from "next/navigation";
import { PerformanceProps } from "@/types/performance";
import { ADMIN_PRODUCT_CATEGORY_NAME } from "@/data/category";
import Image from "next/image";
import { BoardType } from "@/types/common";

export default function AdminProductList() {

    const { type } = useParams(); // performance, product, certification, news
    const [products, setProducts] = useState<AllAdminDataProps[]>([]);
    const selectType = type as BoardType;

    const { currentPage, currentItems, totalCount, onPageChange, } = usePagination(products, 10);

    useEffect(() => {
        const fetchDatas = async () => {
            try {
                let query = supabase.from(`${type as string}s`).select("*");

                const { data, error } = await query.order("created_at", { ascending: false });

                if (error) throw error;
                setProducts(data || []);
            } catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        }

        fetchDatas();
    }, [type]);

    const getHeaderLabel = () => {
        switch (selectType) {
            case "performance": return { name: "프로젝트명", info: "SPEC" };
            case "certification": return { name: "인증서명", info: "이미지" };
            case "new": return { name: "제목", info: "작성일" };
            default: return { name: "제품명", info: "카테고리" };
        }
    };

    const renderInfoContent = (item: AllAdminDataProps) => {
        switch (selectType) {
            case "certification":
                return (
                    <div>
                        <Image src="/icons/image.png" alt="인증서 이미지" width={20} height={20} />
                    </div>
                );
            case "performance":
                return (item as PerformanceProps).spec;
            case "product":
                return ADMIN_PRODUCT_CATEGORY_NAME[(item as ProductProps).category];
            case "new":
                return new Date(item.created_at).toLocaleDateString();
            default:
                return null;
        }
    };

    const labels = getHeaderLabel();


    if (!products) return <div className="loading">데이터를 불러오는 중입니다.</div>

    if (products.length === 0) return (
        <>
            <div className="loading">데이터가 존재하지 않습니다.</div>
            <div>
                <button type="button">
                    <Link href={`/admin/write/${type}`}>등록</Link>
                </button>
            </div>
        </>
    )

    return (
        <>
            <div className="common-list">
                <ul className="display-flex">
                    <li>번호</li>
                    <li>{labels.name}</li>
                    <li>{labels.info}</li>
                </ul>
                {currentItems.map((p, index) => (
                    <Link href={`/admin/board/${selectType}/${p.id}`} key={p.id}>
                        <ul className="display-flex">
                            <li>{totalCount - ((currentPage - 1) * 10) - index}</li>
                            <li>
                                {selectType === "new" ? p.title : p.name}
                            </li>
                            <li>{renderInfoContent(p)}</li>
                        </ul>
                    </Link>
                ))}
            </div>
            <div>
                <button type="button">
                    <Link href={`/admin/write/${type}`}>등록</Link>
                </button>
            </div>
            <Pagination
                dataPerPage={10}
                totalCount={totalCount}
                currentPage={currentPage}
                onPageChange={onPageChange} />
        </>
    )
}