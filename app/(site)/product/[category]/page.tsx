import SubCategoryTab from "@/components/SubCategoryTab";

export default function ProductPage() {
    return (
        <article className="product">
            <div>
                <div>
                    {/* 유압실린더만 서브카테고리 */}
                    <SubCategoryTab/>
                </div>
                <div>
                    {/* productList */}
                    {/* pagination? */}
                </div>
            </div>
        </article>
    )
}