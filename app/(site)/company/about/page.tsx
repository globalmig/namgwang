import Image from "next/image";

export default function AboutPage() {
    return (
        <article className="about">
            <div>
                <div>
                    <h2 className="page-title">회사개요</h2>
                </div>
                <div>
                    지도오
                </div>
                <div>
                    <h4>(주)남광유압</h4>
                    <h2>인천 미추홀구 도화동 969-6</h2>
                    <div className="display-flex">
                        <p>(지번) 도화동 969-6</p>
                        <p>(우)22129</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <p>TEL</p>
                        <p>032-574-4030</p>
                    </li>
                    <li>
                        <p>FAX</p>
                        <p>032-574-4031</p>
                    </li>
                    <li>
                        <p>E-mail</p>
                        <p>nkhcyld@naver.com</p>
                    </li>
                </ul>
            </div>
        </article>
    )
}