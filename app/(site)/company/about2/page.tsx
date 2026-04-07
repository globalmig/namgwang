import Image from "next/image";

export default function About2Page() {
    return (
        <>
            <article className="about2 intro">
                <div>
                    <div>
                        <h2 className="page-title">인사말</h2>
                    </div>
                    <div className="display-flex-flow">
                        <div>
                            {/* <Image className="mo" src="/images/대표님1.png" alt="대표이사 강대유" width={920} height={629} /> */}
                            <Image src="/images/대표님2.png" alt="대표이사 강대유" width={496} height={727} />
                        </div>
                        <div>
                            <h2>
                                안녕하십니까.<br/>
                                저희 회사 홈페에지를 방문해주신<br className="pc"/> 모든 분들께 진심으로 감사드립니다.
                            </h2>
                            <h3>저희는 유압 실린더 및 유압 유니트를 전문적으로 설계·제작하는 제조 기업으로서, 오랜 현장 경험과 기술력을 바탕으로 고객의 다양한 요구에 최적의 솔루션을 제공하고 있습니다.</h3>

                            <p>특히 대표는 오랜 기간 엔지니어로서 직접 현장에서 축적한 실무 경험을 바탕으로, 대형 실린더부터 특수 목적의 맞춤형 실린더, 그리고 다양한 유압 유니트까지 폭넓은 제품을 직접 설계하고 제작해 왔습니다. 이러한 경험은 단순한 제품 공급을 넘어, 고객의 환경과 목적에 가장 적합한 결과를 만들어내는 데 큰 강점이 되고 있습니다.</p>
                            <p>
                                또한 저희는 전 공정을 직접 관리·제조하는 시스템을 갖추고 있어 품질에 대한 높은 신뢰성과 안정성을 확보하고 있습니다. 설계부터 제작, 검수까지 모든 과정에서 책임을 다하며, 고객이 안심하고 사용할 수 있는 제품을 제공하는 것을 최우선 가치로 삼고 있습니다.
                            </p>
                            <p>앞으로도 끊임없는 기술 개발과 품질 향상을 통해 고객의 기대를 뛰어넘는 제품과 서비스를 제공하겠습니다. 신뢰를 바탕으로 함께 성장하는 파트너가 될 것을 약속드립니다.</p>
                            <div>
                                <Image src="/images/cto.jpg" alt="대표이사 강대유" width={161} height={36} />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}