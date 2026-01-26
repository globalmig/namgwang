import Image from "next/image";

export default function About2Page() {
    return (
        <article className="about2">
            <div>
                <div>
                    <h2>인사말</h2>
                </div>
                <div>
                    <p>당사는 1997년 창립 이후 다양한 경험과 축적된 기술력을 바탕으로 최고의 유압 시스템 및 유압기기를 개발, 생산하고 있습니다.<br />끊임없는 연구와 혁신을 통해 급변하는 산업 환경 속에서도 고객의 기대를 뛰어넘는 품질과 서비스를 제공합니다.</p>
                    <p>상담 및 견적, 설계, 제작, 납품의 전 과정을 책임지며, 단순히 제품을 공급하는 데 그치지 않고 철저한 A/S와 사후관리로 고객의 신뢰를 지켜드리겠습니다.</p>
                    <p>언제나 믿을 수 있는 기업, 남광유압이 여러분과 함께 미래를 열어가겠습니다.</p>
                </div>
                <div>
                    <Image src="/images/cto.jpg" alt="대표이사 강대유" width={161} height={36}/>
                </div>
            </div >
        </article>
    )
}