"use client";
import Image from "next/image";
import StandardSpecSet from "./table/standard/SpecSet";
import HighPressureSpecSet from "./table/high-pressure/SpecSet";
import RectangularSpecSet from "./table/rectangular/SpecSet";
import RoundSpecSet from "./table/round/SpecSet";
import CompactSpecSet from "./table/compact/SpecSet";
import DoubleSpecSet from "./table/double/SpecSet";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { CYLINDER } from "@/data/cylinder";
import { CYLINDER_SUBCATEGORY } from "@/data/category";


export default function CylinderDetail() {

    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const subCategory = pathnameSplit[2]; // standard, high-pressure ...
    const specLayout = CYLINDER_SUBCATEGORY.find(c => c.category === subCategory)?.category
    const router = useRouter();

    const params = useParams();
    const { id } = params;
    const detailId = Number(id);
    const detail = CYLINDER.find(c => c.id === detailId);
    const currentIndex = CYLINDER.findIndex(c => c.id === detailId);
    const prevItem = CYLINDER[currentIndex -1];
    const nextItem = CYLINDER[currentIndex +1];

    const goDetail = (targetIndex: number) => {
        const target = CYLINDER[targetIndex];
        router.push(`/product/cylinder/${target.id}`)
    }

    if (!detail) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        <div className="cylinder-detail">
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
                <div>
                    {specLayout === "standard" && <StandardSpecSet />}
                    {specLayout === "high-pressure" && <HighPressureSpecSet />}
                    {specLayout === "rectangular" && <RectangularSpecSet />}
                    {specLayout === "round" && <RoundSpecSet />}
                    {specLayout === "compact" && <CompactSpecSet />}
                    {specLayout === "double" && <DoubleSpecSet />}
                </div>
            </div>
            <div>
                <ul>
                    <li onClick={()=> goDetail(currentIndex -1)}><span>이전 제품</span>{prevItem.name}</li>
                    <li onClick={()=> goDetail(currentIndex +1)}><span>다음 제품</span>{nextItem.name}</li>
                </ul>
            </div>
        </div>
    )
}