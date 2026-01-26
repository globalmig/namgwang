import BType from "@/components/table/technology/BType";
import CType from "@/components/table/technology/Ctype";
import Image from "next/image";

export default function TechnologyCylinderPage () {
    return (
        <article className="tech-cylinder">
            <div>

                <div>
                    <h2>유압 실린더</h2>
                </div>
                
                <div>
                    <section>
                        <h3>유압 실린더 선정 순서</h3>
                        <p>유압 실린더를 선정할 경우 다음의 항목에 의하여 선정하시는 것이 좋습니다.</p>
                    </section>
                    <div className="display-flex-flow">
                        <section>
                            <h4>01</h4>
                            <p>실린더 내경</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서"/>
                        </div>
                        <section>
                            <h4>02</h4>
                            <p>실린더 작동속도</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서"/>
                        </div>
                        <section>
                            <h4>03</h4>
                            <p>지지방법</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서"/>
                        </div>
                        <section>
                            <h4>04</h4>
                            <p>피스톤 로드경 결정</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서"/>
                        </div>
                        <section>
                            <h4>05</h4>
                            <p>패킹재질</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서"/>
                        </div>
                        <section>
                            <h4>06</h4>
                            <p>쿠션 유무</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서"/>
                        </div>
                        <section>
                            <h4>07</h4>
                            <p>방진망 결정 (자바라)</p>
                        </section>
                    </div>
                    <ul>
                        <li><span>설정입력</span> : 사용시 강하되는 압력의 하한치</li>
                        <li><span>부하의 크기</span> : 이동 물체의 중량</li>
                        <li><span>부하의 상태</span> : 부하의 설치 상태 및 사용방법</li>
                        <li><span>필요스트로크</span> : 장치에 필요한 실린더 스트로크</li>
                        <li><span>작동속도</span></li>
                        <li><span>작동 회수 (회/min)</span></li>
                        <li><span>주변상황</span> : 온도, 진동, 분진</li>
                    </ul>
                </div>

                <div>
                    <section>
                        <h3>유압 실린더 내경의 결정</h3>
                        <p>실린더 내경을 결정할 때는 부하의 크기 (중량)에 따른 실린더 출력이 어느정도 필요한지 파악해야 합니다.</p>
                    </section>
                    <ul>
                        <li><span>A1</span> : 전진시 피스톤 면적 (cm²)  A1 = π/4 D2</li>
                        <li><span>A2</span> : 후진시 피스톤 면적 (cm²)  A2 = π/4 (D2 -d2)</li>
                        <li><span>D</span> : 실린더내경 (cm)</li>
                        <li><span>d</span> : 피스톤 로드경 (cm)</li>
                        <li><span>P</span> : 작동압력 (kgf/cm²)</li>
                        <li><span>β</span> : 실효율 → 실린더의 실제 출력은 실린더 내 운동부의 저항, 배관 및 기기에 의한 (통상 80%) 압력손실에 의해 감소된다.</li>
                    </ul>
                    <div>
                        <section>
                            <div className="display-flex">
                                <div>예1</div>
                                <p>HA시리즈의 내경 100mm실린더를 70kgf/cm²에 사용할 경우 전진시, 후진시 출력을 구하라. (단 로드는 B형으로 한다.)</p>
                            </div>
                            <div className="display-flex">
                                <div>해1</div>
                                <ul>
                                    <li>전진시 출력 = 사용압력 X 피스톤면적 X 실효율(80%) 70 X78.54 X 0.8 X 4398.2kgf/cm²</li>
                                    <li>후진시 출력 = 사용압력 X 피스톤면적 X 실효율(80%) 70 X54.78 X 0.8 X 3067.6kgf/cm²</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className="display-flex">
                                <div>예2</div>
                                <p>HA시리즈를 사용하여 압력  70kgf/㎠에 사용할 경우 전진시,  5000kgf의 출력을 얻으려고 한다. 실린더의 내경을 결정하라 </p>
                            </div>
                            <div className="display-flex">
                                <div>해2</div>
                                <div>
                                    <p>피스톤의 면적을 구한다.</p>
                                    <div>
                                        <Image src="/images/피스톤면적공식.png" alt="피스톤 면적" width={100} height={50}/>
                                        <Image src="/images/내경공식.png" alt="내경" width={100} height={50}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div>
                    <div className="display-flex">
                        <h3>C TYPE 이론 출력표 <span>(이론 효율 100%)</span></h3>
                        <p>단위: kgf (1000kg = 1 Ton)</p>
                    </div>
                    <CType/>
                    <p>* 실제 작동 시 효율은 이론 효율의 80%로 적용합니다.</p>
                </div>

                <div>
                    <div className="display-flex">
                        <h3>B TYPE 이론 출력표 <span>(이론 효율 100%)</span></h3>
                        <p>단위: kgf (1000kg = 1 Ton)</p>
                    </div>
                    <BType/>
                    <p>* 실제 작동 시 효율은 이론 효율의 80%로 적용합니다.</p>
                </div>

            </div>
        </article>
    )
}