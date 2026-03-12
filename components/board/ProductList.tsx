'use client';
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { AllProductDataProps } from "@/types/product";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() {

    const { category } = useParams(); // cylinder, unit, other, performance
    const searchParams = useSearchParams();
    const subCategory = searchParams.get("sub");

    const [products, setProducts] = useState<AllProductDataProps[]>([]);
    const { currentPage, currentItems, totalCount, onPageChange, } = usePagination(products, 12);

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                let tableName = "";
                if (category === "performance") {
                    tableName = "performances";
                } else if (category === "unit" || category === "other") {
                    tableName = "products";
                } else {
                    // cylinder 등 기존 구조 유지 시
                    tableName = `${category}s`;
                }

                let query = supabase.from(tableName).select("*");

                if (category !== "performance") {
                    if (subCategory) {
                        // 쿼리 스트링(?sub=...)이 있을 때
                        query = query.eq("category", subCategory);
                    } else {
                        // 기본값 설정
                        if (category === "cylinder") {
                            query = query.eq("category", "standard"); // 요청하신 조건
                        } else if (category === "unit") {
                            query = query.eq("category", "small");
                        } else if (category === "other") {
                            query = query.eq("category", "other");
                        }
                    }
                }
                
                const { data, error } = await query.order("created_at", { ascending: true });

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
                            <Image src={'thumbnail' in p ? p.thumbnail : p.img} alt={p.name} width={500} height={500} />
                        </Link>
                        <div>
                            <h4>{p.name} {p.name !== "선단고리 & 로크너트" &&
                                category === "cylinder" ? "TYPE" : ""
                            }</h4>
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