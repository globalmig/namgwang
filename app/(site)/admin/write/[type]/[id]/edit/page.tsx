'use client';
import { supabase } from "@/lib/supabase/client";
import { InitialPerformanceDataProps } from "@/types/performance";
import { InitialProductDataProps } from "@/types/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PerformanceForm from "@/components/form/PerformanceForm";
import ProductForm from "@/components/form/ProductForm";
import CertificationForm from "@/components/form/CertificationForm";
import NewsForm from "@/components/form/NewsForm";
import { BoardType, InitialCertificationDataProps, InitialNewsDataProps } from "@/types/common";

export default function AdminEditPage() {

    const { id, type } = useParams();
    const [initialData, setInitialData] = useState<InitialProductDataProps | InitialPerformanceDataProps | InitialCertificationDataProps | InitialNewsDataProps | null>(null);
    const [loading, setLoading] = useState(true);

    const selectType = type as BoardType;

    const getEditForm = () => {
        switch (selectType) {
            case "certification": return <CertificationForm mode="edit" initialData={initialData as InitialCertificationDataProps} />;;
            case "performance": return <PerformanceForm mode="edit" initialData={initialData as InitialPerformanceDataProps} />;
            case "product": return <ProductForm mode="edit" initialData={initialData as InitialProductDataProps} />;
            case "new": return <NewsForm mode="edit" initialData={initialData as InitialNewsDataProps} />;
        }
    }

    const editForm = getEditForm();

    const getHeaderLabel = () => {
        switch (selectType) {
            case "performance": return { name: "실적" };
            case "certification": return { name: "인증서" };
            case "new": return { name: "기사" };
            default: return { name: "제품" };
        }
    };

    const labels = getHeaderLabel();

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
                
                const formattedData = () => {
                    switch (selectType) {
                        case "performance":
                            return {
                                ...commonData,
                                spec: data.spec,
                                img: data.img,
                            } as InitialPerformanceDataProps;
                        case "certification":
                            return {
                                ...commonData,
                                img: data.img,
                            } as InitialCertificationDataProps;
                        case "new":
                            return {
                                ...commonData,
                                title: data.title,
                                contents: data.contents,
                                img: data.img
                            } as InitialNewsDataProps;
                        default:
                            return {
                                ...commonData,
                                category: data.category,
                                thumbnail: data.thumbnail,
                                images: data.images,
                            } as InitialProductDataProps; // product
                    }
                }

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
                    <h2 className="page-title">{labels.name} 수정하기</h2>
                </div>
                {editForm}
            </div>
        </article>
    )
}