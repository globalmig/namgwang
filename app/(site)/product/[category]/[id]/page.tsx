"use client";
import CylinderDetail from "@/components/CylinderDetail";
import ProductDetail from "@/components/ProductDetail";
import { CATEGORY_MAP } from "@/data/category";
import { usePathname } from "next/navigation";

export default function DetailPage() {
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[1]; // cylinder, unit, other
    const categoryTitle = CATEGORY_MAP[pathnameSplit[0]].categories.find(c => c.url === category)?.name;

    return (
        <article className="detail">
            <div>
                <div>
                    <h2>{categoryTitle}</h2>
                </div>
                {category === "cylinder"
                ? <CylinderDetail/>
                :<ProductDetail/>
                }
            </div>
        </article>
    )
}