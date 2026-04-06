import NewsList from "@/components/board/NewsList";

export default function NewsPage() {
    return (
        <article className="news">
            <div>
                <div>
                    <h2 className="page-title">회사소식</h2>
                </div>
                <NewsList/>
            </div>
        </article>
    )
}