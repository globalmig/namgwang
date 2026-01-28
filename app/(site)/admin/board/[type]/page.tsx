// admin/board/type (unit, other, performance)
// : 게시판 리스트, 페이지네이션, 등록버튼, 상세 이동, 탭메뉴

import AdminProductList from "@/components/board/AdminProductList";
import SubCategoryTab from "@/components/SubCategoryTab";
import Link from "next/link";

export default function BoardPage () {
    return(
        <article>
            <div>
                <div>
                    <h2 className="page-title">관리자 페이지</h2>
                    <SubCategoryTab/>
                </div>
                <div>
                    {/* tab의 type에 따라 performance, unit, other */}
                    <AdminProductList/>
                    <button type="button">
                        <Link href="/admin/board/type">등록</Link>
                    </button>
                </div>
            </div>
        </article>
    )
}