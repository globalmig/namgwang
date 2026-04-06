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
    }, [prevItem, nextItem]); // 두 아이템 변경 시 모두 상단 이동

    if (!nextItem && !prevItem) return null;

    // 아이템의 표시 이름을 결정하는 헬퍼 함수
    const getDisplayName = (item: any) => {
        // title이 있으면 우선순위, 없으면 name 사용
        return item.title || item.name || "";
    };

    return (
        <ul className="product-nav">
            {prevItem && (
                <li style={{ borderBottom: nextItem && prevItem ? "none" : "none" }}>
                    <Link href={`${basePath}/${prevItem.id}`} scroll={true}>
                        <span>이전</span> {getDisplayName(prevItem)} 
                        {/* 특정 카테고리(cylinder)일 때만 붙는 접미사 조건 유지 */}
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