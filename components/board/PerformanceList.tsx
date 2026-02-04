'use client';

import { supabase } from "@/lib/supabase/clinet";
import { PerformanceProps } from "@/types/performance";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";

export default function PerformanceList() {

    const [performances, setPerformances] = useState<PerformanceProps[]>([]);

        const {currentPage, currentItems, totalCount, onPageChange} = usePagination(performances, 10);


    useEffect(() => {
        const fetchPerformances = async () => {
            try {
                const query = supabase.from("performances").select("*");
                const { data, error } = await query.order("created_at", { ascending: false });

                if (error) throw error;
                setPerformances(data || []);
            } catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        }

        fetchPerformances();
    }, []);

    if(!performances) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        <>
            <div className="common-list">
                <ul className="display-flex">
                    <li>번호</li>
                    <li>프로젝트명</li>
                    <li>SPEC</li>
                </ul>
                {currentItems.map((p, index) =>
                    <Link href={`/product/performance/${p.id}`} key={p.id}>
                        <ul className="display-flex">
                            <li>{currentItems.length - index}</li>
                            <li>{p.name}</li>
                            <li>{p.spec}</li>
                        </ul>
                    </Link>
                )}
            </div>
            <Pagination
                dataPerPage={10}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageChange={onPageChange} />
        </>
    )
}