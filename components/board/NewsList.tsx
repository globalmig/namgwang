"use client";
import { supabase } from "@/lib/supabase/client";
import { NewsListProps } from "@/types/common";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";

export default function NewsList() {

    const [news, setNews] = useState<NewsListProps[]>([]);
    const { currentPage, currentItems, totalCount, onPageChange, } = usePagination(news, 10);

    useEffect(() => {
        const fetch = async () => {
            try {
                const query = supabase.from("news").select("*");
                const { data, error } = await query.order("created_at", { ascending: false });
                if (error) throw error;
                setNews(data || []);
            } catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        }
        fetch();
    }, []);

    if (!news) return <div className="loading">정보를 불러오는 중입니다.</div>
    if (news.length === 0) return <div className="loading">데이터가 존재하지 않습니다.</div>

    return (
        <>
            <div className="news-list">
                <ul className="display-flex">
                    <li>번호</li>
                    <li>제목</li>
                    <li className="pc">작성일</li>
                </ul>
                {currentItems.map((n, index) => {

                    const date = new Date(n.created_at);
                    const formattedDate = `${String(date.getFullYear())}. ${String(date.getMonth() + 1).padStart(2, '0')}. ${String(date.getDate()).padStart(2, '0')}.`;
                    return <Link href={`/company/news/${n.id}`} key={n.id}>
                        <ul className="display-flex">
                            <li>{currentItems.length - index}</li>
                            <li>{n.title}</li>
                            <li className="pc">{formattedDate}</li>
                        </ul>
                    </Link>
                }
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