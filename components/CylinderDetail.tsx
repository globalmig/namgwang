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
                            <h3>{detail.name} {detail.name.includes("선단고리") ? "" : "TYPE"}</h3>
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
                                    <p><Link href={`/cad/${detail.category}/${detail.cad}`} download>{detail.cad}</Link><br />
                                    {detail.name.includes("선단고리") ? "*1:1 도면" :
                                     detail.category === "rectangular" && detail.name.includes("TC") ?
                                        "*Φ40~Φ80 101ST / Φ100~Φ125 151ST / Φ140~Φ200 201ST / Φ224~Φ250 251ST 기준 1:1 도면" :
                                        detail.category === "rectangular" ? "*Φ180~Φ250 101ST 기준 (외 100ST) 1:1 도면" :
                                        detail.category === "compact" ? "*20ST 기준 1:1 도면" : "* 100ST 기준 1:1 도면"
                                    }
                                    </p>
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
                <div className="list-btn">
                    <button><Link href={`/product/cylinder?sub=${detail.category}`}>목록</Link></button>
                </div>
                <ProductNavigator
                    prevItem={prevItem}
                    nextItem={nextItem} />
            </div>
        </article>
    )
}