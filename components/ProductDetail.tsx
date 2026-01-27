'use client';
import Image from "next/image";
import Link from "next/link";
import ProductNavigator from "./ProductNavigator";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductProps } from "@/types/product";
import { supabase } from "@/lib/supabase/clinet";
import { NavItem } from "@/types/common";

// 유니트, 기타기기 상세페이지
export default function ProductDetail() {
    const router = useRouter();
    const params = useParams();
    const { id, category } = params;

    const [detail, setDetail] = useState<ProductProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    useEffect(() => {
        const fetchDetailAndNav = async () => {
            try {
                const { data: currentData, error } = await supabase
                    .from("products")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (error || !currentData) throw new Error("제품을 찾을 수 없습니다.");
                setDetail(currentData);

                // 이전/다음 제품 가져오기 (created_at 기준)
                const { data: prev } = await supabase
                    .from("products")
                    .select("id, name")
                    .eq("category", currentData.category) // 같은 카테고리 내에서
                    .lt("created_at", currentData.created_at)
                    .order("created_at", { ascending: false })
                    .limit(1)
                    .maybeSingle();

                // 다음 제품: 현재보다 나중에 생성된 것 중 가장 오래된 것 하나
                const { data: next } = await supabase
                    .from("products")
                    .select("id, name")
                    .eq("category", currentData.category)
                    .gt("created_at", currentData.created_at)
                    .order("created_at", { ascending: true })
                    .limit(1)
                    .maybeSingle();

                setPrevItem(prev);
                setNextItem(next);
            } catch (error) {
                console.error("Data load error: ", error);
            }
        };

        if (id) fetchDetailAndNav();
    }, [id]);

    if (!detail) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        <div className="product-detail">
            <div className="display-flex-flow">
                <div>
                    <Image src="" alt="" width={500} height={500} />
                </div>
                <div>
                    <div className="stroke-text">
                        <h3>제품명</h3>
                    </div>
                    <div>
                        <p>TYPE</p>
                        <p>타입</p>
                    </div>
                    <button>
                        <Link href="/inquire/write">문의하기</Link>
                    </button>
                </div>
            </div>
            <div>
                {/* 업로드한 이미지들 map */}
            </div>
            <ProductNavigator
                prevItem={prevItem}
                nextItem={nextItem}
                onPrev={() => router.push(`/product/${category}/${prevItem?.id}`)}
                onNext={() => router.push(`/product/${category}/${nextItem?.id}`)} />
        </div>
    )
}