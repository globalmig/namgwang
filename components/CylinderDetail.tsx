"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductNavigator from "./ProductNavigator";
import { useEffect, useMemo, useState } from "react";
import { NavItem } from "@/types/common";
import { CYLINDER_DATA } from "@/data/cylinder";

export default function CylinderDetail() {

    const params = useParams();
    const id = params?.id;

    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    const detail = useMemo(() => {
        return CYLINDER_DATA.find(item => item.id === Number(id));
    }, [id]);

    useEffect(() => {
        if (!detail) return;

        const sameCategoryProducts = CYLINDER_DATA.filter(
            item => item.category === detail.category
        );
        const currentIndex = sameCategoryProducts.findIndex(item => String(item.id) === id);

        if (currentIndex !== -1) {
            setPrevItem(currentIndex > 0 ? (sameCategoryProducts[currentIndex - 1] as any) : null);
            setNextItem(
                currentIndex < sameCategoryProducts.length - 1
                    ? (sameCategoryProducts[currentIndex + 1] as any)
                    : null
            );
        }
    }, [id, detail]);

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
                    <div className="cylinder-feature">
                        {detail.product_img.map((img, index) =>
                            <div key={index}>
                                <Image src={img} alt={`${detail.name} ${index + 1}`} width={1452} height={1880} />
                            </div>
                        )}
                    </div>
                </div>
                <ProductNavigator
                    prevItem={prevItem}
                    nextItem={nextItem} />
            </div>
        </article>
    )
}