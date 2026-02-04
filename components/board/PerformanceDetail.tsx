"use client";
import { NavItem } from "@/types/common";
import { PerformanceProps } from "@/types/performance";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PerformanceDetail() {

    const pathname = usePathname();
    const isPathnameProduct = pathname.startsWith("/product");
    const router = useRouter();
    const { id } = useParams();

    const [performance, setPerformance] = useState<PerformanceProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    useEffect(() => {
        if (!id) return;
        fetch(`/api/performance/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("정보 조회를 실패했습니다.");
                return res.json();
            })
            .then(setPerformance)
            .catch(console.error);
    }, [id]);

    // 삭제
    const onPerformanceDelete = async () => {
        if (!performance) return;
        if (!confirm("실적을 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(`/api/performance/${id}`, { method: "DELETE" });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "실적 삭제를 실패했습니다. 다시 시도해주세요.");

            alert(result.message);
            router.push("/admin");
            router.refresh();
        } catch (err) {
            console.error(err);
        }
    };

    // 수정
    const goEdit = (id: string) => {
        router.push(`/admin/write/performance/${id}/edit`);
    };

    if (!performance) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        // 실적 상세페이지
        <article className="performance-detail">
            <div>
                <div>
                    <h2 className="page-title">{performance.name}</h2>
                    <p><span>SPEC</span> | {performance.spec}</p>
                </div>
                <div>
                    <Image src={performance.img} alt={performance.name} width={800} height={500} />
                </div>
                {!isPathnameProduct &&
                    <div className="display-flex admin-btn">
                        <button type="button" onClick={() => goEdit(String(id))}>수정하기</button>
                        <button type="button" onClick={onPerformanceDelete}>삭제하기</button>
                    </div>
                }
            </div>
        </article>
    )
}