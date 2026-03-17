'use client';
import Image from "next/image";
import ProductNavigator from "../ProductNavigator";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ProductProps } from "@/types/product";
import { NavItem } from "@/types/common";
import { PerformanceProps } from "@/types/performance";

// 상세페이지
export default function ProductDetail() {

    const [detail, setDetail] = useState<ProductProps | PerformanceProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const id = params.id;
    const type = params.type as string;
    const category = params.category as string;

    const isPathnameProduct = pathname.startsWith("/product");
    const getCategory = isPathnameProduct ? category : type;
    const isPerformance = getCategory === "performance";

    const fetchData = useCallback(async (signal: AbortSignal) => {
        if (!id || !getCategory) return;

        try {
            const apiUrl = isPerformance
                ? `/api/performance/${id}`
                : `/api/product/${getCategory}/${id}`;

            const res = await fetch(apiUrl, { signal });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "데이터를 불러오지 못했습니다.");
            }

            const data = await res.json();
            setDetail(data.currentData);
            setPrevItem(data.prev);
            setNextItem(data.next);
        } catch (error: any) {
            if (error.name === "AbortError") return;
            console.error("API fetch error:", error);
        }
    }, [id, getCategory, isPerformance]);

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    }, [fetchData]);

    // 삭제
    const onProductDelete = async () => {
        if (!detail) return;
        if (!confirm("제품을 삭제하시겠습니까?")) return;

        try {
            const apiUrl = isPerformance
                ? `/api/performance/${id}`
                : `/api/product/${getCategory}/${id}`;

            const res = await fetch(apiUrl, { method: "DELETE" });

            const contentType = res.headers.get("content-type");
            if (!res.ok || !contentType?.includes("application/json")) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.error || `삭제 실패 (상태 코드: ${res.status})`);
            }

            const result = await res.json();
            alert(result.message);

            router.push("/admin");
            router.refresh();

        } catch (err: any) {
            console.error("삭제 에러:", err);
            alert(err.message || "삭제 실패했습니다. 다시 시도해주세요.");
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
                    <h3 className="page-title">
                        {type === "product" ?
                            getCategory === "unit" ? "유압 유니트" : "기타 유압 기기"
                            : (category === "other" ? "기타 유압 기기" : "유압 유니트")
                        }
                    </h3>
                    {'spec' in detail && <p><span>SPEC </span>| {detail.spec}</p>}
                </div>
                <div>
                    <div className="stroke-text">
                        <h3>{detail.name}</h3>
                    </div>
                    <div>
                        {'thumbnail' in detail ?
                            <Image style={{ marginTop: "30px" }}
                                src={detail.thumbnail}
                                alt={detail.name}
                                width={500}
                                height={500}
                            />
                            : <Image style={{ marginTop: "30px" }} src={detail.img} alt={detail.name} width={800} height={500} />}
                    </div>
                </div>
                {'images' in detail &&
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
                }
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
                        nextItem={nextItem} />
                }
            </div>
        </article>
    )
}