import PerformanceForm from "@/components/form/PerformanceForm";

export default function PerformanceWritePage () {
    return(
        <article className="admin-form">
            <div>
                <div>
                    <h2>실적 등록하기</h2>
                </div>
                <PerformanceForm mode="upload"/>
            </div>
        </article>
    )
}