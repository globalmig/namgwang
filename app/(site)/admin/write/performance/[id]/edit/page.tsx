'use client';
import PerformanceForm from "@/components/form/PerformanceForm";
import { supabase } from "@/lib/supabase/clinet";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface InitialDataProps {
    id: string;
    name: string; 
    spec: string; 
    img: string;
}

export default function PerformanceEditPage () {
     const { id } = useParams();
    const [initialData, setInitialData] = useState<InitialDataProps | null>(null);
    const [loading, setLoading] = useState(true);

     useEffect(() => { 
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from("performances")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (error) throw error;
                if (!data) throw new Error("정보를 찾을 수 없습니다.");

                // Form 초기 데이터 타입에 맞게 변환
                const formattedData: InitialDataProps = {
                    id: String(data.id),
                    name: data.name,
                    spec: data.spec,
                    img: data.img,
                };

                setInitialData(formattedData);
            } catch (err: any) {
                console.error("실적 조회 실패:", err);
                alert("실적 조회 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);
    
    if (loading) return <div className="loading">실적 정보를 불러오는 중입니다.</div>;
    if (!initialData) return <div className="loading">데이터가 존재하지 않습니다.</div>;

    return (
        <article className="admin-form">
                    <div>
                        <div>
                            <h2>실적 수정하기</h2>
                        </div>
                        <PerformanceForm mode="edit" initialData={initialData}/>
                    </div>
                </article>
    )
}