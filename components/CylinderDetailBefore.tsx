"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductNavigator from "./ProductNavigator";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NavItem } from "@/types/common";
import { CylinderProps } from "@/types/product";

interface CylinderDetailProps {
    currentData: CylinderProps;
    prev?: NavItem | null;
    next?: NavItem | null;
}

export default function CylinderDetailBefore() {

    const params = useParams();
    const { id, category } = params;

    const [detail, setDetail] = useState<CylinderProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    // rerender 방지, detail.name memoization
    const isSpecialType = useMemo(()=> {
        return detail?.name === "선단고리 & 로크너트";
    }, [detail?.name])

    // component unmount 시 fetch 취소를 위한 AbortController
    // AbortController : 동일 component 내에서 매개변수 (id)만 
    const fetchData = useCallback(async (signal: AbortSignal) => {
        if(!id || !category) return;

        try {
            const res = await fetch(`/api/product/${category}/${id}`, { signal });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "데이터를 불러오지 못했습니다.");
            }
            const data = await res.json() as CylinderDetailProps;

            setDetail(data.currentData ?? null);
            setPrevItem(data.prev ?? null);
            setNextItem(data.next ?? null);

        } catch (error: any) {
            if (error.name === "AbortError") {
                return;
            }
            console.error("API Fetch Error: ", error);
        }
    },[category, id]);

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    },[fetchData])

    if (!detail) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        <article className="cylinder-detail">
            <div >
                <div>
                    <h2 className="page-title">유압 실린더</h2>
                </div>
                <div className="display-flex-flow">
                    <div>
                        <Image src={detail.thumbnail} alt={detail.name} width={500} height={500} />
                    </div>
                    <div>
                        <div className="stroke-text">
                            <h3>{detail.name} TYPE</h3>
                        </div>
                        <ul>
                            {detail.type &&
                                <li>
                                    <p>TYPE</p>
                                    <p>{detail.type}</p>
                                </li>}
                            {detail.cad &&
                                <li>
                                    <p>CAD</p>
                                    <p><Link href={`/cad/${detail.cad}`} download>{detail.cad}</Link><br />*100ST 기준 1:1 도면</p>
                                </li>}
                        </ul>
                        <button>
                            <Link href="/inquire/write">문의하기</Link>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="stroke-text">
                        <h3>제품 특징</h3>
                    </div>
                    <div>
                        {/* 여기에 product_img map function */}
                    </div>
                    {/* <div className="spec-set">
                        {isSpecialType ?
                            <TableLayout2 detail={detail} />
                            :
                            <TableLayout detail={detail}
                            />}
                    </div> */}
                </div>
                <ProductNavigator
                    prevItem={prevItem}
                    nextItem={nextItem} />
            </div>
        </article>
    )
}