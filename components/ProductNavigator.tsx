'use client'
import Link from "next/link";
import { ProductNavigatorProps } from "@/types/common";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProductNavigator({ prevItem, nextItem }: ProductNavigatorProps) {
    const pathname = usePathname();
    const { category } = useParams();
    const basePath = pathname.split('/').slice(0, -1).join('/');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [prevItem, nextItem]);

    if (!nextItem && !prevItem) return null;

    const getDisplayName = (item: any) => {
        return item.title || item.name || "";
    };

    return (
        <ul className="product-nav">
            {prevItem && (
                <li style={{ borderBottom: nextItem && prevItem ? "none" : "none" }}>
                    <Link href={`${basePath}/${prevItem.id}`} scroll={true}>
                        <span>이전</span> {getDisplayName(prevItem)} 
                        {category === "cylinder" && " TYPE"}
                    </Link>
                </li>
            )}

            {nextItem && (
                <li style={{ borderTop: prevItem ? "1px solid #aaa" : "none" }}>
                    <Link href={`${basePath}/${nextItem.id}`} scroll={true}>
                        <span>다음</span> {getDisplayName(nextItem)} 
                        {category === "cylinder" && !getDisplayName(nextItem).includes("선단고리") ? " TYPE" : ""}
                    </Link>
                </li>
            )}
        </ul>
    )
}