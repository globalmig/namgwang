import ProductForm from "@/components/form/ProductForm";

export default function ProductWritePage () {
    return(
        <article className="admin-form">
            <div>
                <div>
                    <h2 className="page-title">제품 등록하기</h2>
                </div>
                <ProductForm mode="upload"/>
            </div>
        </article>
    )
}