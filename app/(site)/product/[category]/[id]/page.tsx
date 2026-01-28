"use client";
import PerformanceDetail from "@/components/board/PerformanceDetail";
import CylinderDetail from "@/components/CylinderDetail";
import ProductDetail from "@/components/ProductDetail";
import { usePathname } from "next/navigation";

export default function DetailPage() {
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const category = pathnameSplit[1];


    return (
        <>
            {category === "performance" ?
                <PerformanceDetail /> :
                (category === "cylinder"
                    ? <CylinderDetail />
                    : <ProductDetail />)
            }
        </>

    )
}