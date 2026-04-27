'use client';
import Image from "next/image";
import ProductNavigator from "../ProductNavigator";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ProductProps } from "@/types/product";
import { NavItem } from "@/types/common";
import { PerformanceProps } from "@/types/performance";
import Link from "next/link";
import { useDelete } from "@/hooks/useDelete";

// 상세페이지 (product, certification)
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
    const isCertification = getCategory === "certification";
     const apiUrl = isCertification ? "/api/certification" : `/api/product/${getCategory}`

    const {remove, isPending: isDeleting} = useDelete(apiUrl)

    const fetchData = useCallback(async (signal: AbortSignal) => {
        if (!id || !getCategory) return;

        try {

            const res = await fetch(`${apiUrl}/${id}`, { signal });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "데이터를 불러오지 못했습니다.");
            }

            const data = await res.json();
            setDetail(isCertification ? data : data.currentData);
            setPrevItem(data.next);
            setNextItem(data.prev);
        } catch (error: any) {
            if (error.name === "AbortError") return;
            console.error("API fetch error:", error);
        }
    }, [id, getCategory, isCertification]);

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    }, [fetchData]);

    // 삭제
    const onDelete = async () => {
        if (!detail) return;
        await remove(String(id));
        router.push(`/admin/board/${getCategory}`)
    };

    // 수정
    const goEdit = (id: string) => {
        router.push(`/admin/write/${getCategory}/${id}/edit`);
    };

    if (!detail) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        <article className={`product-detail ${isCertification && "certification"}`}>
            <div>
                <div>
                    <h3 className="page-title">
                        {type === "certification" ?  "인증서" :
                        getCategory === "unit" ? "유압 유니트" : "기타 유압 기기"}
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
                        <button type="button" onClick={onDelete}>{isDeleting ? "삭제 중..." : "삭제하기"}</button>
                    </div>
                }
                {
                    isPathnameProduct &&
                    <>
                    <div className="list-btn">
                    <button><Link href={`/product/unit?sub=${detail.category}`}>목록</Link></button>
                </div>
                <ProductNavigator
                        prevItem={prevItem}
                        nextItem={nextItem} />
                    </>
                }
            </div>
        </article>
    )
}