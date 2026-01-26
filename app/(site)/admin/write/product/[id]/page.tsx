"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductProps {
     name: string,
    category: string, 
    thumnail: string,
    images: string[],
}

export default function ProductDetailPage() {

    const router = useRouter();
    const { id } = useParams();

    const [product, setProduct] = useState<ProductProps>();

    useEffect(() => {
        if (!id) return;

        fetch(`/api/product/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("제품 조회를 실패했습니다.");
                return res.json();
            })
            .then(setProduct)
            .catch(console.error);
    }, [id]);

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

    if(!product) return <div className="loading">정보를 불러오는 중입니다.</div>

    return (
        // 제품 상세페이지
        <article className="product-detail">
            <div>
                <div>
                    <h2>{product.name}</h2>
                </div>
                <div>
                    <Image src={product.thumnail} alt={product.name} width={1000} height={500}/>
                </div>
                <div>
                    <div>
                        <h3>제품 특징</h3>
                    </div>
                    <div>
                        {product.images.map((p, index) =>
                            <div key={index}>
                                <Image src={p} alt={`${product.name} ${index}`} width={1000} height={600}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="display-flex">
                    <button type="button" onClick={()=> goEdit(String(id))}>수정하기</button>
                    <button type="button" onClick={onProductDelete}>삭제하기</button>
                </div>
            </div>
        </article>
    )
}