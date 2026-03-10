'use client'
import Link from "next/link";
import { ProductNavigatorProps } from "@/types/common";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ProductNavigator({ prevItem, nextItem }: ProductNavigatorProps) {
    const { category } = useParams();

    if (!nextItem && !prevItem) return null;

useEffect(() => {
    window.scrollTo(0, 0);
}, [prevItem]);

    return (
        <ul className="product-nav">
            {prevItem && (
                <li style={{ borderBottom: nextItem && !(nextItem || prevItem) ? "1px solid #aaa" : undefined }}>
                    <Link href={`/product/${category}/${prevItem.id}`} scroll={true}>
                        <span>이전 제품</span> {prevItem.name} TYPE
                    </Link>
                </li>
            )}

            {nextItem && (
                <li style={{ borderTop: prevItem ? "1px solid #aaa" : undefined }}>
                    <Link href={`/product/${category}/${nextItem.id}`} scroll={true}>
                        <span>다음 제품</span> {nextItem.name} TYPE
                    </Link>
                </li>
            )}
        </ul>
    )
}