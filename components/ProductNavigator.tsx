'use client'
import Link from "next/link";
import { ProductNavigatorProps } from "@/types/common";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProductNavigator({ prevItem, nextItem }: ProductNavigatorProps) {
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const firstPath = pathnameSplit[0];
    const { category } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [prevItem]);

    if (!nextItem && !prevItem) return null;

    return (
        <ul className="product-nav">
            {prevItem && (
                <li style={{ borderBottom: nextItem && !(nextItem || prevItem) ? "1px solid #aaa" : undefined }}>
                    <Link href={`/${firstPath}${category ? `/${category}` : ""}/${prevItem.id}`} scroll={true}>
                        <span>이전 제품</span> {prevItem.name} {category === "cylinder" && "TYPE"}
                    </Link>
                </li>
            )}

            {nextItem && (
                <li style={{ borderTop: prevItem ? "1px solid #aaa" : undefined }}>
                    <Link href={`/${firstPath}${category ? `/${category}` : ""}/${nextItem.id}`} scroll={true}>
                        <span>다음 제품</span> {nextItem.name} {category === "cylinder" && "TYPE"}
                    </Link>
                </li>
            )}
        </ul>
    )
}