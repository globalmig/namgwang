'use client';
import PerformanceDetail from "@/components/board/PerformanceDetail";
import ProductDetail from "@/components/board/ProductDetail";
import { useParams } from "next/navigation";

export default function BoardDetailPage() {
    {/* type에 따라 detail 컴포넌트 다르게 */ }
    const { type } = useParams();

    return (
        <>
            {type === "performance" ? <PerformanceDetail /> : <ProductDetail />}
        </>
    )
}