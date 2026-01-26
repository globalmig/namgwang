'use client';

import ProductItem from "./ProductItem";

export default function ProductList() {
    return (
        // 제품 리스트 디자인은 동일..
        // 유압 실린더, 유니트, 기타기기

        // category : cylinder = CYLINDER data
        // category : unit OR other = supabase /api/products
        <div className="product-list">
            <ProductItem/>
        </div>
    )
}