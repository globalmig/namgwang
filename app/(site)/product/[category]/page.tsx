"use client";
import PerformanceList from "@/components/board/PerformanceList";
import ProductList from "@/components/board/ProductList";
import SubCategoryTab from "@/components/SubCategoryTab";
import { CATEGORY_MAP } from "@/data/category";
import { useParams, usePathname } from "next/navigation";

export default function ProductListPage() {
    const { category } = useParams();
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const categoryKey = pathnameSplit[0];
    const categoryTitle = CATEGORY_MAP[categoryKey].categories?.find(c => c.url === category)?.name;
    
    const performance = pathnameSplit[1];
    console.log(performance)

    return (
        <article className="product">
            <div>
                <div>
                    <h2 className="page-title">{performance !== "performance" ? categoryTitle : "유압 실린더"}</h2>
                    <SubCategoryTab />
                </div>
               <ProductList />
            </div>
        </article>
    )
}