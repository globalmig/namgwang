"use client";
import Image from "next/image";
import StandardSpecSet from "./table/standard/SpecSet";
import HighPressureSpecSet from "./table/high-pressure/SpecSet";
import RectangularSpecSet from "./table/rectangular/SpecSet";
import RoundSpecSet from "./table/round/SpecSet";
import CompactSpecSet from "./table/compact/SpecSet";
import DoubleSpecSet from "./table/double/SpecSet";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { CYLINDER_SUBCATEGORY } from "@/data/category";
import ProductNavigator from "./ProductNavigator";
import { useEffect, useState } from "react";
import { NavItem } from "@/types/common";
import { CylinderProps } from "@/types/product";
import { supabase } from "@/lib/supabase/clinet";
import "../app/table.css";


export default function CylinderDetail() {

    const router = useRouter();
    const params = useParams();
    const { id, category } = params;
    const searchParams = useSearchParams();
    const subCategory = searchParams.get("sub") || "standard";
    const [detail, setDetail] = useState<CylinderProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    console.log("prev: ", prevItem);
    console.log("next: ", nextItem);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await fetch(`/api/product/${category}/${id}`);
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || "데이터를 불러오지 못했습니다.");
                }
                const data = await res.json();
                
                setDetail(data);
                setPrevItem(data.prev);
                setNextItem(data.next);

            } catch (error) {
                console.error("API Fetch Error: ", error);
            }
        };

        if (id) fetchData();
    }, [id]);

    const specLayout = CYLINDER_SUBCATEGORY.find(c => c.category === subCategory)?.category

    if (!detail) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        <article className="cylinder-detail">
            <div >
                <div>
                    <h2 className="page-title">{category}</h2>
                </div>
                <div className="display-flex-flow">
                    <div>
                        <Image src={detail.thumbnail} alt={detail.name} width={500} height={373} />
                    </div>
                    <div>
                        <div className="stroke-text">
                            <h3>{detail.name}</h3>
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
                    <div className="spec-set">
                        {specLayout === "standard" && <StandardSpecSet />}
                        {specLayout === "high-pressure" && <HighPressureSpecSet />}
                        {specLayout === "rectangular" && <RectangularSpecSet />}
                        {specLayout === "round" && <RoundSpecSet />}
                        {specLayout === "compact" && <CompactSpecSet />}
                        {specLayout === "double" && <DoubleSpecSet />}
                    </div>
                </div>
                <ProductNavigator
                    prevItem={prevItem}
                    nextItem={nextItem}
                    onPrev={() => router.push(`/product/cylinder/${prevItem?.id}`)}
                    onNext={() => router.push(`/product/cylinder/${nextItem?.id}`)} />
            </div>
        </article>
    )
}