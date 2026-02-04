'use client';
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/clinet";
import { AllProductDataProps } from "@/types/product";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() {

    const { category } = useParams();
    const searchParams = useSearchParams();
    const subCategory = searchParams.get("sub");

    const [products, setProducts] = useState<AllProductDataProps[]>([]);

    const { currentPage, currentItems, totalCount, onPageChange, } = usePagination(products, 12);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let query = supabase.from(`${category as string}s`).select("*");

                if (subCategory) {
                    query = query.eq("category", subCategory);
                } else {
                    if (category === "cylinder") {
                        query = query.eq("category", "standard");
                    } else if (category === "unit") {
                        query = query.eq("category", "small");
                    } else {
                        query = query.eq("category", category);
                    }
                }

                const { data, error } = await query.order("id", { ascending: true });

                if (error) throw error;
                setProducts(data || []);
            } catch (error) {
                console.error("data load error: ", error);
            }
        };

        fetchProducts();
    }, [category, subCategory]);

    if (!products) return <div className="loading">정보를 불러오는 중입니다.</div>

    if (products.length === 0) return <div className="loading">제품이 존재하지 않습니다.</div>

    return (
        <>
            <div className="product-list display-flex-flow">
                {currentItems.map(p =>
                    <section key={p.id}>
                        <Link href={`/product/${category}/${p.id}`}>
                            <Image src={p.thumbnail} alt={p.name} width={500} height={500} />
                        </Link>
                        <div>
                            <h4>{p.name}</h4>
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