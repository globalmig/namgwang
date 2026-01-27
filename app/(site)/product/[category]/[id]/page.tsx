"use client";
import PerformanceDetail from "@/components/board/PerformanceDetail";
import CylinderDetail from "@/components/CylinderDetail";
import ProductDetail from "@/components/ProductDetail";
import { CATEGORY_MAP } from "@/data/category";
import { usePathname } from "next/navigation";

export default function DetailPage() {
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[1]; // cylinder, unit, other, performance
    const categoryTitle = CATEGORY_MAP[pathnameSplit[0]].categories.find(c => c.url === category)?.name;
    const isPerformance = category === "performance";
    const performanceTitle = ""
    // : performance data의 id와 params.id가 동일한 것의 name

    return (
        <article className="detail">
            <div>
                <div>
                    <h2>{!isPerformance ? categoryTitle : performanceTitle}</h2>
                    {isPerformance && <p><span>SPEC</span> | </p>}
                </div>
                {category === "cylinder"
                ? <CylinderDetail/>
                :<ProductDetail/>
                }
                {category === "performance" && <PerformanceDetail/>}
            </div>
        </article>
    )
}