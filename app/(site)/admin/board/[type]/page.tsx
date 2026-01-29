import AdminProductList from "@/components/board/AdminProductList";
import SubCategoryTab from "@/components/SubCategoryTab";

export default function BoardPage() {

    return (
        <article className="board">
            <div>
                <div>
                    <h2 className="page-title">관리자 페이지</h2>
                    <SubCategoryTab />
                </div>
                <AdminProductList />
            </div>
        </article>
    )
}