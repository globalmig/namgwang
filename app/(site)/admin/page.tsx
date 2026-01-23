import SubCategoryTab from "@/components/SubCategoryTab"

const adminSubCategory = [
    "실적 게시판",
    "제품 게시판"
]

export default function AdminPage() {
    return (
        <article className="admin">
            <div>
                <div>
                    <SubCategoryTab/>
                </div>
            </div>
        </article>
    )
}