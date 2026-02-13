"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CYLINDER_SUBCATEGORY } from "@/data/category";
import ProductNavigator from "./ProductNavigator";
import { useEffect, useState } from "react";
import { NavItem } from "@/types/common";
import { CylinderProps } from "@/types/product";
import "../app/table.css";
import TableLayout from "./TableLayout";
import TableLayout2 from "./TableLayout2";

export default function CylinderDetail() {

    const params = useParams();
    const { id, category } = params;
    const [detail, setDetail] = useState<CylinderProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await fetch(`/api/product/${category}/${id}`);
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

        if (id) fetchData();
    }, [id]);

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
                        {detail.name === "선단고리 & 로크너트" ?
                            <TableLayout2 detail={detail} />
                            :
                            <TableLayout detail={detail}
                            />}
                    </div>
                </div>
                <ProductNavigator
                    prevItem={prevItem}
                    nextItem={nextItem} />
            </div>
        </article>
    )
}