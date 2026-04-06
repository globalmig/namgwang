'use client';
import CertificationForm from "@/components/form/CertificationForm";
import PerformanceForm from "@/components/form/PerformanceForm";
import ProductForm from "@/components/form/ProductForm";
import NewsForm from "@/components/form/NewsForm";
import { BoardType } from "@/types/common";
import { useParams } from "next/navigation";

export default function AdminWritePage () {
    const {type} = useParams();
    const selectType = type as BoardType;

    const getWriteForm=  () => {
        switch(selectType){
            case "certification" : return <CertificationForm mode="upload"/>;
            case "performance" : return <PerformanceForm mode="upload"/>;
            case "product" : return <ProductForm mode="upload"/>;
            case "new" : return <NewsForm mode="upload"/>;
        }
    }

    const writeForm = getWriteForm();

    const getHeaderLabel = () => {
        switch (selectType) {
            case "performance": return { name: "실적"};
            case "certification": return { name: "인증서" };
            case "new": return { name: "기사" };
            default: return { name: "제품" };
        }
    };

    const labels = getHeaderLabel();

    return(
        <article className="admin-form">
            <div>
                <div>
                    <h2 className="page-title">{labels.name} 등록하기</h2>
                </div>
                {writeForm}
            </div>
        </article>
    )
}