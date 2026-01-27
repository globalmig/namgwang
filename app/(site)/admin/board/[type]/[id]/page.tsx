import PerformanceDetail from "@/components/board/PerformanceDetail";
import ProductDetail from "@/components/ProductDetail";

export default function BoardDetailPage () {
    {/* type에 따라 detail 컴포넌트 다르게 */}
    return (
        <>
        <ProductDetail/>
        <PerformanceDetail/>
        </>
    )
}