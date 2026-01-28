'use client';
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/clinet";
import { AllProductDataProps } from "@/types/product";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() { // 사용자페이지 리스트

    const { category } = useParams();
    const searchParams = useSearchParams();
    const subCategory = searchParams.get("sub");

    // cylinder OR unit, other
    const [products, setProducts] = useState<AllProductDataProps[]>([]);

    const {
        currentPage,
        totalCount,
        onPageChange,
    } = usePagination(products, 12);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // 테이블 결정 (cylinder면 전용 테이블, 아니면 공통 테이블)
            const table = category === "cylinder" ? "cylinders" : "products";
            let query = supabase.from(table).select("*");

            // 2. 필터링
            if (category === "cylinder") {
                // 실린더 페이지일 때는 subCategory(standard, high-pressure 등) 값으로 필터링
                if (subCategory) {
                    query = query.eq("category", subCategory);
                }
            } else if (category) {
                // 실린더가 아닌 일반 카테고리(unit, other)일 때
                query = query.eq("category", category);
            }

            const { data, error } = await query.order("id", { ascending: true }); // 정렬 기준 확인

            if (error) throw error;
            setProducts(data || []);
            } catch (error) {
                console.error("data load error: ", error);
            }
        };

        fetchProducts();
    }, [category, subCategory]);

    if(!products) return <div className="loading">정보를 불러오는 중입니다.</div>

    if(products.length === 0) return <div className="loading">제품이 존재하지 않습니다.</div>

    return (
        <>
            <div className="product-list display-flex-flow">
                {products.map(p =>
                    <section key={p.id}>
                        <Link href={`/product/${category}/${p.id}`}>
                            <Image src={p.thumbnail} alt={p.name} width={400} height={400} />
                        </Link>
                        <div>
                            <h5>{p.name}</h5>
                            {'type' in p && <p>{p.type}</p>}
                        </div>
                    </section>
                )}
            </div>
            <Pagination
                dataPerPage={12}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageChange={onPageChange} />
        </>
    )
}