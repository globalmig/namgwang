'use client'
import { ProductNavigatorProps } from "@/types/common";
import { useParams, useRouter } from "next/navigation";

export default function ProductNavigator({ prevItem, nextItem }: ProductNavigatorProps) {
    const router = useRouter();
    const { category } = useParams();

    const onPrev = () => {
        prevItem && router.push(`/product/${category}/${prevItem.id}`)
    }

    const onNext = () => {
        nextItem && router.push(`/product/${category}/${nextItem.id}`)
    }

    if(!nextItem && !prevItem) return null ;

    return (
        <ul className="product-nav">
            {prevItem && (
                <li onClick={onPrev} style={{borderBottom: nextItem && !(nextItem || prevItem) ? "1px solid #aaa": ""}}>
                    <span>이전 제품</span> {prevItem.name}
                </li>
            )}

            {nextItem && (
                <li onClick={onNext} style={{borderTop: prevItem ? "1px solid #aaa": ""}}>
                    <span>다음 제품</span> {nextItem.name}
                </li>
            )}
        </ul>
    )
}