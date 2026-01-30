'use client';
import PerformanceForm from "@/components/form/PerformanceForm";
import ProductForm from "@/components/form/ProductForm";
import { useParams } from "next/navigation";

export default function AdminWritePage () {
    const {type} = useParams();
    const isPerformance = type === "performance";

    return(
        <article className="admin-form">
            <div>
                <div>
                    <h2 className="page-title">{isPerformance ? "실적" : "제품"} 등록하기</h2>
                </div>
                {isPerformance ?
                <PerformanceForm mode="upload"/>
                : <ProductForm mode="upload"/>
                }
            </div>
        </article>
    )
}