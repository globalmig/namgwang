import InquireForm from "@/components/form/InquireForm";

export default function InquirePage() {
    return (
        <article className="inquire">
            <div>
                <div>
                    <h2 className="page-title">제품문의</h2>
                </div>
                <InquireForm/>
            </div>
        </article>
    )
}