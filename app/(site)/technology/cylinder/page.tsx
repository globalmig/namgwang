import BType from "@/components/table/technology/BType";
import CType from "@/components/table/technology/CType";
import Image from "next/image";

export default function TechnologyCylinderPage() {
    return (
        <article className="tech-cylinder">
            <div>

                <div>
                    <h2 className="page-title">유압 실린더</h2>
                </div>

                <div className="process">
                    <section>
                        <h3>유압 실린더 선정 순서</h3>
                        <p>유압 실린더를 선정할 경우 다음의 항목에 의하여 선정하시는 것이 좋습니다.</p>
                    </section>
                    <div className="display-flex-flow">
                        <section>
                            <h3>01</h3>
                            <p>실린더 내경</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서" width={32} height={32} />
                        </div>
                        <section>
                            <h3>02</h3>
                            <p>실린더 작동속도</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서" width={32} height={32} />
                        </div>
                        <section>
                            <h3>03</h3>
                            <p>지지방법</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서" width={32} height={32} />
                        </div>
                        <section>
                            <h3>04</h3>
                            <p>피스톤 로드경 결정</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서" width={32} height={32} />
                        </div>
                        <section>
                            <h3>05</h3>
                            <p>패킹재질</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서" width={32} height={32} />
                        </div>
                        <section>
                            <h3>06</h3>
                            <p>쿠션 유무</p>
                        </section>
                        <div className="pc">
                            <Image src="/icons/process_arrow.png" alt="순서" width={32} height={32} />
                        </div>
                        <section>
                            <h3>07</h3>
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

                <div className="cy-calculator">
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
                                <button type="button">예1</button>
                                <p>HA시리즈의 내경 100mm실린더를 70kgf/cm²에 사용할 경우 전진시, 후진시 출력을 구하라. (단 로드는 B형으로 한다.)</p>
                            </div>
                            <div className="display-flex">
                                <button type="button">해1</button>
                                <ul>
                                    <li>전진시 출력 = 사용압력 X 피스톤면적 X 실효율(80%) 70 X78.54 X 0.8 X 4398.2kgf/cm²</li>
                                    <li>후진시 출력 = 사용압력 X 피스톤면적 X 실효율(80%) 70 X54.78 X 0.8 X 3067.6kgf/cm²</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <div className="display-flex">
                                <button type="button">예2</button>
                                <p>HA시리즈를 사용하여 압력  70kgf/㎠에 사용할 경우 전진시,  5000kgf의 출력을 얻으려고 한다. 실린더의 내경을 결정하라 </p>
                            </div>
                            <div className="display-flex">
                                <button type="button">해2</button>
                                <div>
                                    <p>피스톤의 면적을 구한다.</p>
                                    <div>
                                        <Image src="/images/피스톤면적공식.png" alt="피스톤 면적" width={100} height={50} />
                                        <Image src="/images/내경공식.png" alt="내경" width={100} height={50} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="type-table">
                    <section>
                        <h3>C TYPE 이론 출력표<span className="pc">(이론 효율 100%)</span></h3>
                        <h5 className="mo">(이론 효율 100%)</h5>
                        <p>단위: kgf(1000kg = 1 Ton)</p>
                    </section>
                    <div className="table-wrapper">
                        <CType />
                    </div>
                    <p>* 실제 작동 시 효율은 이론 효율의 80%로 적용합니다.</p>
                </div>

                <div className="type-table">
                    <section>
                        <h3>B TYPE 이론 출력표<span className="pc">(이론 효율 100%)</span></h3>
                        <h5 className="mo">(이론 효율 100%)</h5>
                        <p>단위: kgf (1000kg = 1 Ton)</p>
                    </section>
                    <div className="table-wrapper">
                        <BType />
                    </div>
                    <p>* 실제 작동 시 효율은 이론 효율의 80%로 적용합니다.</p>
                </div>

                <div className="stroke">
                    <section>
                        <h3>스트로크 및 하증에 다른 로드경의 결정</h3>
                        <p>유압 실린더를 사용할 경우 스트로크에 따라 변하는 압축응력과 좌굴을 고려해야 합니다. 피스톤로드의 강도는 단순히 재질을 강하게, 즉 인장력이 높은 재질을 사용하거나 열처리를 한다고 해서 강해지는 것이 아닙니다. 피스톤로드의 좌굴강도를 크게 하는 방법은 피스톤로드경을 크게 하는 방법밖에 없고 그것은 로드경 선정의 중요한 포인트가 됩니다.</p>
                        <p>다음 도표는 각각의 피스톤 로드경의 최대 압축하중이 걸렸을때 사용 가능한 최대 스트로크를 표시합니다.</p>
                    </section>
                </div>

                <div className="buckling">
                    <section>
                        <h3>좌굴표를 이용하는 방법</h3>
                    </section>
                    <div>
                        <section className="display-flex-flow">
                            <div>
                                <Image src="/images/tech_좌굴표_선단하중.jpg" alt="선단하중의 한계를 구할 때" width={448} height={315} />
                            </div>
                            <div>
                                <h4>▶ 선단하중의 한계를 구할 때</h4>
                                <ul>
                                    <li>1) 지지상태가 그림 1~16중 어느 형태인가를 결정한다.</li>
                                    <li>2) 지지상태가 확인되면 그에 따라 L치수를 결정한다.</li>
                                    <li>3) 실린더 좌굴표에 의해 L차수와 내경으로 최대 선단하중이 결정된다.</li>
                                </ul>
                                <section>
                                    <div className="display-flex">
                                        <button type="button">예</button>
                                        <p>HA시리즈의 내경 50mm, B형 로드, 스트로크 1000mm (A형의 경우 최대 사용하중을 구하라)</p>
                                    </div>
                                    <div className="display-flex">
                                        <button type="button">해</button>
                                        <ul>
                                            <li>1. 양단 자유단의 ①Type L =D</li>
                                            <li>2. L = D = 230+70+1000 = 2300mm (70은 고리의 치수)</li>
                                            <li>3. 좌굴표에 의해 W=250 kgf이하에 사용</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="display-flex-flow">
                            <div>
                                <Image src="/images/tech_좌굴표_표준실린더.jpg" alt="표준실린더 내경을 구할 때" width={448} height={315} />
                            </div>
                            <div>
                                <h4>▶ 표준실린더 내경을 구할 때</h4>
                                <ul>
                                    <li>1) 지지상태가 그림 1~16중 어느 형태인가를 결정한다.</li>
                                    <li>2) 지지상태가 결정되면 그것에 맞춰 L치수를 구한다.</li>
                                    <li>3) 실린더 좌굴표에 의해 선단하중과 L치수로 부터 내경을 구한다.</li>
                                </ul>
                                <section>
                                    <div className="display-flex">
                                        <button type="button">예</button>
                                        <p>HA시리즈의 스트로크 1000mm, 하중 3000kgf, 선단 자유단의 경우 내경을 구하라</p>
                                    </div>
                                    <div className="display-flex">
                                        <button type="button">해</button>
                                        <ul>
                                            <li>1. FA형 로드선단 자유단이면 ⑤Type</li>
                                            <li>2. L = 2D = 2(1000+100) = 2200mm (100은 로드가 돌출되어 있는 것의 최고치임)</li>
                                            <li>3. 좌굴표에 의해 내경 100mm B로드, 내경 125mm C로드</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="display-flex-flow">
                            <div>
                                <Image src="/images/tech_좌굴표_스트로크.jpg" alt="최대 스트로크를 구할 때" width={448} height={315} />
                            </div>
                            <div>
                                <h4>▶ 최대 스트로크를 구할 때</h4>
                                <ul>
                                    <li>1) 지지상태가 그림 1~16중 어느 형태인가를 결정한다.</li>
                                    <li>2) 실린더 좌굴표에 따라 선단하중과 내경으로 L치수를 구한다.</li>
                                    <li>3) L치수에 의해 최대 스트로크가 결정된다.</li>
                                </ul>
                                <section>
                                    <div className="display-flex">
                                        <button type="button">예</button>
                                        <p>HA시리즈의 내경 80mm, B형 로드, 하중 3500kgf FB형일 때 최대 스트로크를 구하라 (단 로드선단은 자유단이다.)</p>
                                    </div>
                                    <div className="display-flex">
                                        <button type="button">해</button>
                                        <ul>
                                            <li>1. FB형, B로드선단 자유단이면 ⑦Type L=2D</li>
                                            <li>2. W = 3500kgf 이면 좌굴표에 의해 L + 1500mm</li>
                                            <li>3. D = L/2 = 1500/2 = (2X스트로크+240) (스트로크는 255mm 이내)</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="support">
                    <section>
                        <h3>실린더의 지지상태</h3>
                    </section>
                    <div className="display-flex-flow">
                        <section>
                            <h4>▶ 양단 핀결합인 경우 (D=L)</h4>
                            <div>
                                <Image src="/images/tech_support1.jpg" alt="양단 핀결합인 경우" width={550} height={282} />
                            </div>
                        </section>
                        <section>
                            <h4>▶ 실린더 고정, 로드선단 자유단의 경우 (D=L/2)</h4>
                            <div>
                                <Image src="/images/tech_support2.jpg" alt="실린더 고정, 로드선단 자유단의 경우" width={550} height={282} />
                            </div>
                        </section>
                        <section>
                            <h4>▶ 실린더 고정, 로드선단 핀결합의 경우 (D=1.4L)</h4>
                            <div>
                                <Image src="/images/tech_support3.jpg" alt="실린더 고정, 로드선단 핀결합의 경우" width={550} height={282} />
                            </div>
                        </section>
                        <section>
                            <h4>▶ 실린더 고정, 로드선단 가이드의 경우 (D=2L)</h4>
                            <div>
                                <Image src="/images/tech_support4.jpg" alt="실린더 고정, 로드선단 가이드의 경우" width={550} height={282} />
                            </div>
                        </section>
                    </div>
                </div>

                <div className="buckling-table">
                    <section>
                        <h3>좌굴표</h3>
                    </section>
                    <div>
                        <Image src="/images/tech_좌굴표.jpg" alt="좌굴표" width={1000} height={800} />
                    </div>
                </div>

                <div className="caution">
                    <section>
                        <h3>피스톤 로드의 좌굴계산 시 주의할 점</h3>
                        <p>피스톤 로드의 좌굴계산은 먼저 실린더를 어떤 방법으로 정지시키는지 살펴보아야 합니다. 실린더를 정지시키는 방법에는 스트로크를 모두 사용하여 로드 커버에서 정지시키는 내부 정지 방식과 외부 스토퍼에 의해서 정지시키는 외부 정지방식이 있으므로 하중에 대한 수치가 변합니다.</p>
                    </section>
                    <div className="display-flex-flow">
                        <section>
                            <h4>▶ 내부정지 방식의 경우 하중</h4>
                            <div>
                                <Image src="/images/tech_support4.jpg" alt="내부정지 방식의 경우 하중" width={550} height={282} />
                            </div>
                        </section>
                        <section>
                            <h4>▶ 외부정지 방식의 경우 하중 (D=2L)</h4>
                            <div>
                                <Image src="/images/tech_support4.jpg" alt="외부정지 방식의 경우 하중" width={550} height={282} />
                            </div>
                        </section>
                    </div>
                </div>

                <div className="speed-piping">
                    <section>
                        <h3>실린더의속도와 배관 PT 경의 선정</h3>
                        <p>실린더 속도는 실린더에 유입되는 유량으로 정해집니다.</p>
                    </section>
                    <div>
                        <h4>계산식</h4>
                        <ul>
                            <li>V = Qᶜ/a (mm/sec)</li>
                            <li>Qᶜ : 실린더내의 공급유량 (cm³/sec)</li>
                            <li>A : 피스톤 면적 (cm²)</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <Image src="/images/tech_speed-piping그래프.jpg" alt="그래프" width={1000} height={663} />
                        </div>
                        <p>실린더 각 사이즈에 대한 필요 유량과 속도, PT경과 관내 유속의 관계 그래프</p>
                    </div>
                </div>

                <div className="caution2">
                    <section>
                        <h3>취급상 주의점</h3>
                    </section>
                    <div>
                        <section>
                            <h4>1) 고정형의 경우 (LA, LB, FB, FC, FD)</h4>
                            <p>실린더에 의하여 이동되는 물체의 이동방향은 피스톤 로드의 운동축심과 일치하지 않으면 안됩니다. 그 축심에 일치하지 않았을 경우 부싱의 마모, 실린더 튜브의 긁힘, 그을음, 로드의 긁힘 현상이 생깁니다.</p>
                        </section>
                        <div className="display-flex-flow">
                            <div>
                                <Image src="/images/tech_caution_고정형1.jpg" alt="고정형의 경우 (LA, LB, FB, FC, FD)" width={549} height={517} />
                            </div>
                            <div>
                                <Image src="/images/tech_caution_고정형2.jpg" alt="고정형의 경우 (LA, LB, FB, FC, FD)" width={549} height={517} />
                            </div>
                        </div>
                    </div>
                    <div className="display-flex-flow">
                        <div>
                            <section>
                                <h4>▶ LA, LB형의 경우</h4>
                                <p>자체고정외에 스토퍼를 설치하면 완벽하게 고정시킬 수 있습니다.</p>
                            </section>
                            <div>
                                <Image src="/images/tech_caution_type1.jpg" alt="LA, LB형의 경우" width={550} height={282} />
                            </div>
                        </div>
                        <div>
                            <section>
                                <h4>▶ FA, FB, FC, FD형의 경우</h4>
                            </section>
                            <div className="display-flex">
                                <div>
                                    <Image src="/images/tech_caution_type2.jpg" alt="전진시 하중이 걸릴때" width={550} height={282} />
                                </div>
                                <div>
                                    <Image src="/images/tech_caution_type3.jpg" alt="후진시 하중이 걸릴때" width={550} height={282} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <section>
                            <h4>2) 요동형의 경우 (CA, CB, TA, TC)</h4>
                        </section>
                        <div className="display-flex-flow">
                            <section>
                                <h4>▶ CA, CB형의 경우</h4>
                                <p>스트로크가 1000mm 이상인 것은 수평 설치를 하면 좋지 않습니다.</p>
                            </section>
                            <section>
                                <h4>▶ TA, TC형의 경우</h4>
                                <div className="display-flex">
                                <div>
                                    <Image src="/images/tech_caution_type4.jpg" alt="TA, TC형의 경우" width={260} height={153} />
                                </div>
                                <div>
                                    <Image src="/images/tech_caution_type5.jpg" alt="TA, TC형의 경우" width={260} height={153} />
                                </div>
                            </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    )
}