'use client';
import ProductForm from "@/components/form/ProductForm";
import { supabase } from "@/lib/supabase/clinet";
import { InitialProductDataProps } from "@/types/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductEditPage () {
     const { id } = useParams();
    const [initialData, setInitialData] = useState<InitialProductDataProps | null>(null);
    const [loading, setLoading] = useState(true);

     useEffect(() => { 
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from("products")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (error) throw error;
                if (!data) throw new Error("정보를 찾을 수 없습니다.");

                // Form 초기 데이터 타입에 맞게 변환
                const formattedData: InitialProductDataProps = {
                    id: String(data.id),
                    name: data.name,
                    category: data.category,
                    thumbnail: data.thumbnail,
                    images: data.images,
                };

                setInitialData(formattedData);
            } catch (err: any) {
                console.error("제품 조회 실패:", err);
                alert("제품 조회 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);
    
    if (loading) return <div className="loading">제품 정보를 불러오는 중입니다.</div>;
    if (!initialData) return <div className="loading">데이터가 존재하지 않습니다.</div>;

    return (
        <article className="admin-form">
                    <div>
                        <div>
                            <h2>제품 수정하기</h2>
                        </div>
                        <ProductForm mode="edit" initialData={initialData}/>
                    </div>
                </article>
    )
}