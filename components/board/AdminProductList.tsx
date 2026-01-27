'use client';
import { supabase } from "@/lib/supabase/clinet";
import { ProductProps } from "@/types/product";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";

export default function AdminProductList() {
    const [products, setProducts] = useState<ProductProps[]>([]);

    const {
        currentPage,
        totalCount,
        onPageChange,
    } = usePagination(products, 10);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query = supabase.from("products").select("*");
                const { data, error } = await query.order("created_at", { ascending: false });

                if (error) throw error;
                setProducts(data || []);
            } catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <>
            <div className="common-list">
                <ul className="display-flex">
                    <li>번호</li>
                    <li>제품명</li>
                    <li>카테고리</li>
                </ul>
                {products.map(p =>
                    <Link href={`/product/product/${p.id}`} key={p.id}>
                        <ul className="display-flex">
                            <li></li>
                            <li>{p.name}</li>
                            <li>{p.category}</li>
                        </ul>
                    </Link>
                )}
            </div>
            <Pagination
                dataPerPage={10}
                totalCount={totalCount}
                currentPage={currentPage}
                onPageChange={onPageChange} />
        </>
    )
}