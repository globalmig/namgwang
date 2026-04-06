'use client';
import NewsDetail from "@/components/board/NewsDetail";
import PerformanceDetail from "@/components/board/PerformanceDetail";
import ProductDetail from "@/components/board/ProductDetail";
import { BoardType } from "@/types/common";
import { useParams } from "next/navigation";

export default function BoardDetailPage() {
    const { type } = useParams();
    const selectType = type as BoardType;

    const getDetail = () => {
        switch(selectType) {
            case "performance" : return <PerformanceDetail/>;
            case "new" : return <NewsDetail/>;
            default : return <ProductDetail/>;
        }
    }

    const detail = getDetail();

    return (
        <>
            {detail}
        </>
    )
}