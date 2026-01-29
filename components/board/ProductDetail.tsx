"use client";
import { ProductProps } from "@/types/product";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetail() {

    const pathname = usePathname();
    const isPathnameProduct = pathname.startsWith("/product");
    const router = useRouter();
    const { id, category } = useParams();

    const [product, setProduct] = useState<ProductProps>();

    useEffect(() => {
    const fetchDetail = async () => {
        if (!id || !category) return;

        try {
            const res = await fetch(`/api/product/${category}/${id}`);
            
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "제품을 찾을 수 없습니다.");
            }

            const data = await res.json();
            setProduct(data);
        } catch (err: any) {
            console.error("Data load error: ", err);
            // 여기서 발생하는 에러가 현재 보시는 콘솔 에러입니다.
        }
    };

    fetchDetail();
}, [id, category]);

    // 삭제
    const onProductDelete = async () => {
        if (!product) return;
        if (!confirm("제품을 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(`/api/product/${id}`, { method: "DELETE" });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "제품 삭제를 실패했습니다. 다시 시도해주세요.");

            alert(result.message);
            router.push("/admin");
            router.refresh();
        } catch (err: any) {
            alert(err.message);
        }
    };

    // 수정
    const goEdit = (id: string) => {
        router.push(`/admin/write/product/${id}/edit`);
    };

    if (!product) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        // 제품 상세페이지
        <article className="product-detail">
            <div>
                <div>
                    <h2 className="page-title">{product.name}</h2>
                </div>
                <div>
                    <Image src={product.thumbnail} alt={product.name} width={1000} height={500} />
                </div>
                <div>
                    <div>
                        <h3>제품 특징</h3>
                    </div>
                    <div>
                        {product.images.map((p, index) =>
                            <div key={index}>
                                <Image src={p} alt={`${product.name} ${index}`} width={1000} height={600} />
                            </div>
                        )}
                    </div>
                </div>
                {!isPathnameProduct &&
                    <div className="display-flex admin-btn">
                        <button type="button" onClick={() => goEdit(String(id))}>수정하기</button>
                        <button type="button" onClick={onProductDelete}>삭제하기</button>
                    </div>
                }
            </div>
        </article>
    )
}