"use client";
import PerformanceList from "@/components/board/PerformanceList";
import ProductList from "@/components/board/ProductList";
import SubCategoryTab from "@/components/SubCategoryTab";
import { useParams } from "next/navigation";

export default function ProductListPage() {
    const { category } = useParams();

    return (
        <article className="product">
            <div>
                <div>
                    <h2></h2>
                    {/* 서브카테고리가 있는 경우에만 생성 : cylinder, unit */}
                    <SubCategoryTab />
                </div>
                {category === "performance" ? <PerformanceList /> : <ProductList />}
            </div>
        </article>
    )
}