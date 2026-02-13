import { TABLE_DATA } from "@/data/table";
import { CylinderDetailProps } from "@/types/product";
import TableTemplate from "./TableTamplate";
import Image from "next/image";

export default function TableLayout({ detail }: CylinderDetailProps) {

    const { name, product_img, series_img, seal_material_img, cheats, category, mounting } = detail;

    // 로컬 데이터에서 일치하는 객체
    const tableData = TABLE_DATA.find((data) => String(data.id) === String(detail.id));

    // type 필터링
    const allTables = TABLE_DATA.filter((data) => String(data.category) === String(detail.category));

    // 특정 타입의 테이블 데이터를 찾는 헬퍼 함수
    const getTableByType = (type: string) => {
        return allTables.find(t => t.type === type);
    };

    if (allTables.length === 0 || !tableData) return null;

    return (
        <>
            <section className={`product_img-section ${category}`}>
                {category !== "rectangular" ?
                    <>
                        <div>
                            {product_img.map((p, index) =>
                                <div key={index}>
                                    <Image src={p} alt={name} width={1200} height={500} />
                                </div>
                            )}
                        </div>
                        {tableData.name === "박형-HTT" || tableData.name === "박형-HTT-LA" &&
                            (() => {
                                const target = getTableByType("stroke-suna");
                                return target &&
                                    <>
                                        <h3>스트로크 한계 및 수나사형 치수표</h3>
                                        <TableTemplate data={target.table} type={target.type} category={target.category} />
                                    </>
                            })()
                        }
                    </>
                    :
                    <>
                        {/* <div className="display-flex-flow">
                            <div>
                                <div>
                                    <Image src="/images/rectangular/product1.jpg" alt="제품 특징" width={500} height={500} />
                                </div>
                                <p>주) 배관위치 및 쿠션 위치의 표준 PT: A쿠션, 에어벤트: B입니다. 변경을 원하실 때는 위 그림을 이용하십시오.</p>
                                <ul>
                                    <li>1. 패킹의 별도 선정이 가능합니다. (문의요망)</li>
                                    <li>2. 표준품의 패킹재질은 URETHANE or NBR 입니다.</li>
                                    <li>3. 배관, 쿠션밸브, 에어벤트의 위치 표시는 로드측에서 볼 때 아래 그림의 A,B,C,D로 방향 선정</li>
                                    <li>4. 하기 내용은 쿠션이 없습니다.
                                        <ul>
                                            <li>⦁ 로드 A TYPE : ø40, ø50, ø63의 로드 측</li>
                                            <li>⦁ 로드 B TYPE : ø40의 로드 측</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>5. 로드선단나사의 형식 기호와 배관형식기호</li>
                                </ul>
                                <section>
                                    <h4>▶ 로드 선단 나사 형식</h4>
                                    <div>
                                        <Image src="/images/rectangular/로드선단나사형식.jpg" alt="로드 선단 나사 형식" width={500} height={200} />
                                    </div>
                                    <ul>
                                        <li>⦁ 2형은 선단나사가 1형보다 길고 로크너트가 체결됩니다.</li>
                                        <li>⦁ 별도 지시가 없는 경우 1형으로 제작합니다.</li>
                                    </ul>
                                </section>
                                <section>
                                    <h4>▶ 배관 형식</h4>
                                    <div>
                                        <Image src="/images/rectangular/배관형식.jpg" alt="배관 형식" width={500} height={200} />
                                    </div>
                                    <ul>
                                        <li>※ 별도 지시가 없는 경우 X형으로 제작합니다.</li>
                                    </ul>
                                </section>
                            </div>
                        </div> */}
                        <div>
                            {product_img.map((p, index) =>
                                <div key={index}>
                                    <Image src={p} alt={name} width={1200} height={500} />
                                </div>
                            )}
                        </div>
                    </>
                }
                {category === "standard" || category === "high-pressure" &&
                    <div className="display-flex-flow">
                        <div>
                            <Image src="/images/standard/HA-product_3.jpg" alt={name} width={482} height={337} />
                        </div>
                        <div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>로드경</th>
                                            <th>W</th>
                                            <th>WD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ø80</td>
                                            <td>Ø77</td>
                                            <td>Ø15</td>
                                        </tr>
                                        <tr>
                                            <td>Ø85</td>
                                            <td>Ø81</td>
                                            <td>Ø15</td>
                                        </tr>
                                        <tr>
                                            <td>Ø90</td>
                                            <td>Ø86</td>
                                            <td>Ø15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>* 로드경 Ø80이상은 드릴 홀 작업</p>
                        </div>
                    </div>
                }
                <TableTemplate data={tableData.table} type={tableData.type} category={tableData.category} />
            </section>
            <section className={`specifications-section ${category}`}>
                <h3>사양</h3>
                {(() => {
                    const target = getTableByType("spec");
                    return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                })()}
                <ul>
                    {category === "standard" || category === "rectangular" || category === "high-pressure" ?
                        <>
                            <li>1. 지지형식중 70kgf/cm²용입니다.</li>
                            <li>2. 사용온도 100도 이상 장시간 작동 시, 고속작동 시 (별도문의 요망)</li>
                            <li>단동형 사용 시 별도문의 요망</li>
                        </> : <></>}
                    {category === "round" &&
                        <>
                            <li>1. 사용온도 100도 이상 장시간 작동 시, 별도문의 요망</li>
                            <li>2. 250도 이상 대형 실린더를 제작합니다.</li>
                        </>}
                    {category === "double" &&
                        <>
                            <li>1. 후진시에 상용속도로 사용하는 경우, 압력은 60kgf/cm²을 표준으로 사용.</li>
                            <li>2. 사용압력이란 실린더를 작동함에 있어 허용되는 릴리프 변의 최고설정압력.</li>
                            <li>3. 최고허용압력이란 서지 압력을 포함해 실린더가 강도상 사용가능한 최고압력.</li>
                            <li>4. 내압력이란 최고허용압력으로 복귀하였을 때 성능의 저하를 초래하지 않고 견뎌내야 하는 시험압력.</li>
                            <li>5. 최저작동압력이란 무부하(로드 자중분은 별도 고려)의 상태에서 압력을 가할 때, 실린더가 움직이기 시작하는 압력.</li>
                            <li>6. 기본형 제작사양 이상의 BORE 및 스트로크 한계 이상의 스트로크 제작시 별도문의 요망</li>
                        </>}
                    {category === "compact" &&
                        <>
                            <li>⦁ 사용 압력 140kgf/cm² 이상은 문의바랍니다.</li>
                            <li>⦁ 사용온도 100도 이상 사용 시 문의바랍니다.</li>
                            <li>⦁ 오토센서 (S/R) Type도 제작 가능함 (문의요망)</li>
                            <li>⦁ S/R Type 제작 시 R차수 변경됨</li>
                        </>}
                </ul>
            </section>
            {(category === "double" || category === "compact") ? <></> :
                <section className={`cushion-section ${category}`}>
                    <div className="display-flex">
                        <h3>쿠션길이</h3>
                        <p>단위 mm</p>
                    </div>
                    {(() => {
                        const target = getTableByType("cushion");
                        return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                    })()}
                    {category === "rectangular" &&
                        <ul>
                            <li>* 하기 내용은 쿠션을 취부할 수 없음 </li>
                            <li>1. 로드 A TYPE : ø40, ø50, ø63의 로드축 </li>
                            <li>2. 로드 B TYPE : ø40의 로드축</li>
                        </ul>
                    }
                </section>
            }
            {category !== "compact" ?
                (category === "rectangular") ?
                    <section className={`stroke-section ${category}`}>
                        <div className="display-flex">
                            <h3>스트로크 한계</h3>
                            <p>단위 mm</p>
                        </div>
                        <section>
                            <h4>▶ TC형 이외의 지지형식</h4>
                            {(() => {
                                const target = getTableByType("stroke-limit1");
                                return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                            })()}
                        </section>
                        <section>
                            <h4>▶ TC형</h4>
                            {(() => {
                                const target = getTableByType("stroke-limit2");
                                return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                            })()}
                        </section>
                    </section>
                    :
                    <section className={`stroke-section ${category}`}>
                        <div className="display-flex">
                            <h3>스트로크 한계</h3>
                            <p>단위 mm</p>
                        </div>
                        {(() => {
                            const target = getTableByType("stroke-limit");
                            return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                        })()}
                        <ul>
                            <li>1. 지지형식에 따른 좌굴은 별도로 계산해주세요.</li>
                            <li>2. 스트로크 한계 이상 시 설계 제작합니다. (문의 요망)</li>
                            <li>* HA SERIES SWTCH는 Ro Sensor입니다.</li>
                        </ul>
                    </section> : <></>
            }
            {cheats &&
                <section className={`cheats-section ${category}`}>
                    <h3>표기 요령</h3>
                    <div>
                        <div>
                            <Image src={cheats} alt="표기요령" width={1000} height={187} />
                        </div>
                        {category === "double" &&
                            (() => {
                                const target = getTableByType("cheats");
                                return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                            })()
                        }
                    </div>
                </section>
            }
            {category === "compact" &&
                <section>
                    <h3>제작종류</h3>
                    <ul>
                        <li>⦁ D: 일반형 실린더</li>
                        <li>⦁ M: 수나사</li>
                        <li>⦁ T: 양드로형 실린더</li>
                        <li>⦁ S/R: Switch Type (SO TYPE DC 24V/AC 100V)</li>
                    </ul>
                </section>
            }
            {category !== "compact" && seal_material_img ?
                <section className={`seal-section ${category}`}>
                    <h3>작동유와 적합한 패킹 재질</h3>
                    <div className="display-flex-flow">
                        {category === "double" || category === "rectangular" ?
                            <></> : <div>
                                <Image src={seal_material_img} alt="작동유와 적합한 패킹재질" width={800} height={388} />
                            </div>
                        }
                        <div className="table-wrapper">
                            <table className={`seal-material ${category}`}>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>
                                            <span>작동유</span>
                                            <span>패킹재질</span>
                                        </th>
                                        <th>NBR</th>
                                        <th>URETHANE</th>
                                        <th>불소 (VITON)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>일반 광물성 작동유</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <td>수용성 글리코겔 작동유</td>
                                        <td>O</td>
                                        <td>X</td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <td>W / O 작동유</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <td>O / W 작동유</td>
                                        <td>O</td>
                                        <td>O</td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <td>인산 에스테르계 작동유</td>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>O</td>
                                    </tr>
                                    <tr>
                                        <td>지방산 에스테르계 작동유</td>
                                        <td>△</td>
                                        <td>△</td>
                                        <td>△</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={5}>※ O, △는 사용가능, X는 사용불가</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </section> : <></>
            }
            {category === "double" &&
                <>
                    <section className="thread-section">
                        <h3>나사선단부 길이 (A차수)</h3>
                        {(() => {
                            const target = getTableByType("nasan");
                            return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                        })()}
                    </section>
                    <section className="mounting-section">
                        <div className="display-flex-flow">
                            <div>
                                <h3>지지형식 LA/LT</h3>
                                <div>
                                    <Image src="/images/double/HTP_mounting1.jpg" alt="지지형식" width={1000} height={417} />
                                </div>
                            </div>
                            <div>
                                <h3>지지형식 FA/FB/CA/TA/TB</h3>
                                <div>
                                    <Image src="/images/double/HTP_mounting2.jpg" alt="지지형식" width={1000} height={417} />
                                </div>
                            </div>
                        </div>
                    </section>
                </>}
            <section className={`series-section ${category}`}>
                <h3>HA SERIES 내부구조도</h3>
                <div>
                    <Image src={series_img} alt="내부구조도" width={1000} height={417} />
                </div>
            </section>
            <section className={`part-diagram-section ${category}`}>
                <h3>부품도</h3>
                <div className="display-flex-flow">
                    {(() => {
                        const target = getTableByType("parts-list1");
                        return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                    })()}
                    {(() => {
                        const target = getTableByType("parts-list2");
                        return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                    })()}
                </div>
            </section>
            <section className={`seal-diagram-section ${category}`}>
                <h3>패킹 부품도</h3>
                {(() => {
                    const target = getTableByType("packing-list");
                    return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                })()}
            </section>
        </>
    )
}