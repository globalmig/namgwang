'use client';
import Image from "next/image";
import ProductNavigator from "../ProductNavigator";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductProps } from "@/types/product";
import { NavItem } from "@/types/common";

// 유니트, 기타기기 상세페이지
export default function ProductDetail() {

    const router = useRouter();
    const pathname = usePathname();
    const { id, category, type } = useParams();
    const isPathnameProduct = pathname.startsWith("/product");
    const getCategory = isPathnameProduct ? category : type;

    const [detail, setDetail] = useState<ProductProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!id || (!category && !type)) return;

            try {
                const res = await fetch(`/api/product/${getCategory}/${id}`);
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || "데이터를 불러오지 못했습니다.");
                }
                const data = await res.json();

                setDetail(data.currentData);
                setPrevItem(data.prev);
                setNextItem(data.next);
            } catch (error) {
                console.error("API Fetch Error: ", error);
            }
        };

        fetchData();
    }, [id, getCategory]);

    // 삭제
    const onProductDelete = async () => {
        if (!detail) return;
        if (!confirm("제품을 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(`/api/product/${getCategory}/${id}`, { method: "DELETE" });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "삭제 실패했습니다. 다시 시도해주세요.");

            alert(result.message);
            router.push("/admin");
            router.refresh();
        } catch (err) {
            console.error(err)
        }
    };

    // 수정
    const goEdit = (id: string) => {
        router.push(`/admin/write/${getCategory}/${id}/edit`);
    };

    if (!detail) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        <article className="product-detail">
            <div>
                <div>
                    <h3 className="page-title">{getCategory === "unit" ? "유압 유니트" : "기타 기기"}</h3>
                </div>
                <div>
                    <div className="stroke-text">
                        <h3>{detail.name}</h3>
                    </div>
                    <div>
                        <Image src={detail.thumbnail} alt={detail.name} width={500} height={500} />
                    </div>
                </div>
                <div>
                    <div className="stroke-text">
                        <h3>제품 특징</h3>
                    </div>
                    <div>
                        {detail.images.map((i, index) =>
                            <div key={index}>
                                <Image src={i} alt={detail.name} width={500} height={500} />
                            </div>
                        )}
                    </div>
                </div>
                {!isPathnameProduct &&
                    <div className="display-flex admin-btn">
                        <button type="button" onClick={() => goEdit(String(id))}>수정하기</button>
                        <button type="button" onClick={onProductDelete}>삭제하기</button>
                    </div>
                }
                {
                    isPathnameProduct &&
                    <ProductNavigator
                        prevItem={prevItem}
                        nextItem={nextItem}/>
                }
            </div>
        </article>
    )
}