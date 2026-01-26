import Link from "next/link";

export default function TechnologyUnitPage() {
    return (
        <>
            <article className="tech-unit">
                <div>
                    <div>
                        <h2>유압 유니트</h2>
                        <p>유압유니트 (Hydraulic Power Unit)는 장비의 성능과 안정성을 좌우하는 핵심 설비입니다.<br /><span>사용 목적, 필요한 힘, 작동 속도</span>를 기준으로 정확한 사양 선정이 필요합니다.</p>
                    </div>
                    <section>
                        <h3>사용 목적 확인</h3>
                        <ul>
                            <li>필요한 작업 하중 (톤 또는 kgf)</li>
                            <li>실린더 내경 기준으로 작동 압력 산정</li>
                            <li>안정적인 운전을 위해 <span>여유 압력 20~30% 적용</span></li>
                        </ul>
                    </section>
                    <section>
                        <h3>작동 속도 및 유량</h3>
                        <ul>
                            <li>원하는 동작 속도에 따라 유량 (L/min) 결정</li>
                            <li>유량은 <span>펌프 용량 및 모터 출력 선정의 기준</span></li>
                        </ul>
                    </section>
                    <section>
                        <h3>펌프 선택</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>펌프 종류</th>
                                    <th>특징</th>
                                    <th>적용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>기어펌프</td>
                                    <td>경제적·내구성 우수</td>
                                    <td>일반 산업기계</td>
                                </tr>
                                <tr>
                                    <td>베인펌프</td>
                                    <td>저소음</td>
                                    <td>정밀 설비</td>
                                </tr>
                                <tr>
                                    <td>피스톤펌프</td>
                                    <td>고압·고효율</td>
                                    <td>고부하 장비</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <h3>모터 및 탱크 용량</h3>
                        <ul>
                            <li>압력과 유량을 기준으로 모터(kW) 선정</li>
                            <li>유압유 탱크 : <span>펌프 유량의 3~5배 권장</span></li>
                        </ul>
                    </section>
                    <section>
                        <h3>기본 구성 및 옵션</h3>
                        <div>
                            <div>
                                <p>기본 구성</p>
                                <p>릴리프 밸브, 방향제어 밸브, 체크 밸프, 유량 조절 밸브</p>
                            </div>
                            <div>
                                <p>옵션 구성</p>
                                <p>비례 밸브 / 압력 스위치, 오일 쿨러, 필터 레벨게이지</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>설치 및 운전 환경</h3>
                        <ul>
                            <li>연속 / 간헐 운전</li>
                            <li>실내 / 실외 설치</li>
                            <li>소음 및 온도 조건</li>
                            <li>자동제어 여부</li>
                        </ul>
                    </section>
                    <section>
                        <h3>유압 유니트 문의 시 필요 정보</h3>
                        <p>아래 정보를 주시면 정확한 사양 제안이 가능합니다.</p>
                        <ul>
                            <li>사용 장비</li>
                            <li>필요 힘(톤)</li>
                            <li>실린더 또는 모터 사양</li>
                            <li>작동 속도</li>
                            <li>운전 방식</li>
                            <li>설치 환경</li>
                        </ul>
                    </section>
                </div>
            </article>
            <article className="contact technology">
                <div>
                    <div>
                        <h2>맞춤형 유압 유니트 설계·제작 </h2>
                        <p>당사는 고객 장비 조건에 최적화된 유압 유니트 설계 및 제작 서비스를 제공합니다.<br />사양 문의 및 상담은 언제든지 가능합니다.</p>
                    </div>
                    <div>
                        <button>
                            <Link href="/inquire/write">문의하기</Link>
                        </button>
                    </div>
                </div>
            </article>
        </>
    )
}