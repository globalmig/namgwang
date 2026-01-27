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
                const table = category === "cylinder" ? "cylinders" : "products";
                let query = supabase.from(table).select("*");

                // 필터링 조건 추가 (메인 카테고리 및 서브카테고리)
                if (category) {
                    query = query.eq("category", category);
                }

                // 만약 URL이나 상태값에 subCategory가 있다면 추가
                // interface 의 category 필드: subCategory
                if (subCategory) {
                    query = query.eq("category", subCategory);
                }

                const { data, error } = await query.order("created_at", { ascending: false });

                if (error) throw error;
                setProducts(data || []);
            } catch (error) {
                console.error("data load error: ", error);
            }
        };

        fetchProducts();
    }, [category, subCategory]);


    return (
        <>
            <div className="product-list">
                {products.map(p =>
                    <section key={p.data.id}>
                        <Link href={`/`}>
                            <Image src={p.data.thumbnail} alt={p.data.name} width={400} height={400} />
                        </Link>
                        <div></div>
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