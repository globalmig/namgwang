'use client';
import { supabase } from "@/lib/supabase/clinet";
import { InitialPerformanceDataProps } from "@/types/performance";
import { InitialProductDataProps } from "@/types/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PerformanceForm from "@/components/form/PerformanceForm";
import ProductForm from "@/components/form/ProductForm";

export default function AdminEditPage() {

    const { id, type } = useParams();
    const [initialData, setInitialData] = useState<InitialProductDataProps | InitialPerformanceDataProps | null>(null);
    const [loading, setLoading] = useState(true);
    const isPerformance = type === "performance";

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from(`${type}s`)
                    .select("*")
                    .eq("id", id)
                    .single();

                if (error) throw error;
                if (!data) throw new Error("정보를 찾을 수 없습니다.");

                // Form 초기 데이터 타입에 맞게 변환
                const commonData = {
                    id: String(data.id),
                    name: data.name
                }
                const formattedData = type === "performance"
                    ? {
                        ...commonData,
                        spec: data.spec,
                        img: data.img,
                    } as InitialPerformanceDataProps
                    : {
                        ...commonData,
                        category: data.category,
                        thumbnail: data.thumbnail,
                        images: data.images,
                    } as InitialProductDataProps;

                setInitialData(formattedData);
            } catch (err) {
                console.error("edit data load:", err);
                alert("오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="loading">정보를 불러오는 중입니다.</div>;
    if (!initialData) return <div className="loading">데이터가 존재하지 않습니다.</div>;

    return (
        <article className="admin-form">
            <div>
                <div>
                    <h2 className="page-title">{isPerformance ? "실적" : "제품"} 수정하기</h2>
                </div>
                {isPerformance ?
                    <PerformanceForm mode="edit" initialData={initialData as InitialPerformanceDataProps} />
                    : <ProductForm mode="edit" initialData={initialData as InitialProductDataProps} />
                }
            </div>
        </article>
    )
}