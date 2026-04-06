import CertificationList from "@/components/board/CertificationList";

export default function CertificationPage() {
    return (
        <article className="certification">
            <div>
                <div>
                    <h2 className="page-title">인증서</h2>
                </div>
                <CertificationList/>
            </div>
        </article>
    )
}