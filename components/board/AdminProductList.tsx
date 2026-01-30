'use client';
import { supabase } from "@/lib/supabase/clinet";
import { AllAdminDataProps, ProductProps } from "@/types/product";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";
import { useParams } from "next/navigation";
import { PerformanceProps } from "@/types/performance";
import { ADMIN_PRODUCT_CATEGORY_NAME } from "@/data/category";

export default function AdminProductList() {

    const { type } = useParams();
    const [products, setProducts] = useState<AllAdminDataProps[]>([]);
    const isPerformance = type === "performance";

    const {
        currentPage,
        totalCount,
        onPageChange,
    } = usePagination(products, 10);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let query = supabase.from(`${type as string}s`).select("*");

                const { data, error } = await query.order("created_at", { ascending: false });

                if (error) throw error;
                setProducts(data || []);
            } catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        }

        fetchProducts();
    }, [type]);

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
                    <li>{isPerformance ? "프로젝트명" : "제품명"}</li>
                    <li>{isPerformance ? "SPEC" : "카테고리"}</li>
                </ul>
                {products.map((p, index) =>
                    <Link href={`/admin/board/${type}/${p.id}`} key={p.id}>
                        <ul className="display-flex">
                            <li>{products.length - index}</li>
                            <li>{p.name}</li>
                            <li>
                                {isPerformance
                                    ? (p as PerformanceProps).spec
                                    : ADMIN_PRODUCT_CATEGORY_NAME[
                                    (p as ProductProps).category]
                                }
                            </li>
                        </ul>
                    </Link>
                )}
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
            {/* 등록버튼 css, 이전/다음제품 네비게이션 추가 */}
        </>
    )
}