import Image from "next/image";

export default function AboutPage() {
    return (
        <article className="about">
            <div>
                <div>
                    <h2 className="page-title">회사개요</h2>
                </div>
                <div>
                    <Image src="/images/회사사진.JPG" alt="남광유압 이미지" width={1106} height={593}/>
                </div>
                <div>
                    <h4>남광유압</h4>
                    <h2>인천광역시 미추홀구 봉수대로13번길 28-1</h2>
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