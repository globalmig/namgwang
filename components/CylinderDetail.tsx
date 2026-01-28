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

    useEffect(() => {
        const fetchCylinderData = async () => {
            try {
                // 상세 데이터 가져오기
                const { data: current, error } = await supabase
                    .from("cylinders")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (error || !current) throw error;
                setDetail(current);

                // 이전 제품
                const { data: prev } = await supabase
                    .from("cylinders")
                    .select("id, name")
                    .eq("category", current.category) // 같은 타입 내에서 탐색
                    .lt("created_at", current.created_at)
                    .order("created_at", { ascending: false })
                    .limit(1)
                    .maybeSingle();

                // 다음 제품
                const { data: next } = await supabase
                    .from("cylinders")
                    .select("id, name")
                    .eq("category", current.category)
                    .gt("created_at", current.created_at)
                    .order("created_at", { ascending: true })
                    .limit(1)
                    .maybeSingle();

                setPrevItem(prev);
                setNextItem(next);

            } catch (err) {
                console.error("Cylinder load error:", err);
            }
        };

        if (id) fetchCylinderData();
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
                {/* error fix: prevItem, prevItem.id : undefined */}
                <ProductNavigator
                    prevItem={prevItem}
                    nextItem={nextItem}
                    onPrev={() => router.push(`/product/cylinder/${prevItem?.id}`)}
                    onNext={() => router.push(`/product/cylinder/${nextItem?.id}`)} />
            </div>
        </article>
    )
}