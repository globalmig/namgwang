"use client";

import { NavItem, NewsListProps } from "@/types/common";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ProductNavigator from "../ProductNavigator";
import Image from "next/image";
import { useDelete } from "@/hooks/useDelete";

export default function NewsDetail() {
    const { id } = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const [news, setNews] = useState<NewsListProps>();
    const [prevItem, setPrevItem] = useState<NavItem | null>(null);
    const [nextItem, setNextItem] = useState<NavItem | null>(null);

    const {remove, isPending : isDeleting} = useDelete("/api/news");

    const isPathnameCompany = pathname.startsWith("/company");

    const fetchData = useCallback(async (signal: AbortSignal) => {
        if (!id) return;

        try {
            const res = await fetch(`/api/news/${id}`, { signal });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "데이터를 불러오지 못했습니다.");
            }

            const data = await res.json();
            setNews(data);
           
            setPrevItem(data.prev);
            setNextItem(data.next);

        } catch (err: any) {
            if (err.name === "AbortError") return;
            console.error("API fetch error:", err);
        }

    }, [id])

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => controller.abort();
    }, [fetchData]);

    const newsDate = news && new Date(news?.created_at);
    const formattedDate = newsDate && `${String(newsDate.getFullYear())}. ${String(newsDate.getMonth() + 1).padStart(2, '0')}. ${String(newsDate.getDate()).padStart(2, '0')}.`

    const onDelete = async () => {
        if(!id) return;
        await remove(String(id));

        router.push("/admin/board/new")
    }

    const goEdit = (id: string) => {
        router.push(`/admin/write/new/${id}/edit`);
    }

    if (!news) return <div className="loading">정보를 불러오는 중입니다.</div>;

    return (
        <article className="news-detail">
            <div>
                <div>
                    <h2 className="page-title">회사소식</h2>
                </div>
                <div>
                    <h3>{news.title}</h3>
                    <p>작성일. {formattedDate}</p>
                    <div>
                        <Image src={news.img} alt={news.title} width={1000} height={619} />
                    </div>
                    <div>
                        <p>{news.contents}</p>
                    </div>
                </div>
                {!isPathnameCompany &&
                    <div className="display-flex admin-btn">
                        <button type="button" onClick={() => goEdit(String(id))}>수정하기</button>
                        <button type="button" onClick={onDelete}>{isDeleting ? "삭제 중..." : "삭제하기"}</button>
                    </div>
                }
                {
                    isPathnameCompany &&
                    <>
                        <div className="list-btn">
                            <button><Link href="/company/news">목록</Link></button>
                        </div>
                        <ProductNavigator
                            prevItem={prevItem}
                            nextItem={nextItem} />
                    </>
                }
            </div>
        </article>
    )
}