import Image from "next/image";
import { CylinderDetailProps, CylinderProps } from "@/types/product";
import { TABLE_DATA } from "@/data/table";
import TableTemplate from "./TableTamplate";

// 선단고리 레이아웃
export default function TableLayout2({ detail }: CylinderDetailProps) {

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
            <section className="intro-section">
                {category !== "round" ?
                    <>
                        <h3>I, Y TYPE</h3>
                        <div>
                            <h4>▶ I TYPE (일산너클 조인트)</h4>
                            <div>
                                <Image src={`/images/${category}/일산너클.jpg`} alt="선단고리 I, Y TYPE" width={1000} height={400} />
                            </div>
                        </div>
                        <div>
                            <h4>▶ Y TYPE (이산너클 조인트)</h4>
                            <div>
                                <Image src={`/images/${category}/이산너클.jpg`} alt="선단고리 I, Y TYPE" width={1000} height={400} />
                            </div>
                        </div>
                        <TableTemplate data={tableData.table} type={tableData.type} category={tableData.category} />
                    </> :
                    <>
                        <h3>IB TYPE (일산 너클조인트)</h3>
                        <div>
                            <div>
                                <Image src={`/images/${category}/일산너클.jpg`} alt="선단고리 IB TYPE" width={1000} height={400} />
                            </div>
                        </div>
                        <TableTemplate data={tableData.table} type={tableData.type} category={tableData.category} />
                    </>
                }
            </section>
            <section className="dust-section">
                <h3>방진망 부착 실린더</h3>
                <div>
                    <Image src={`/images/${category}/방진망부착실린더.jpg`} alt="방진망 부착 실린더" width={1000} height={358} />
                </div>
                {(() => {
                    const target = getTableByType("dust-proof");
                    return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                })()}
            </section>
            {category !== "round" &&
                <>
                    <section className="nut-section">
                        <h3>로크너트</h3>
                        <div>
                            <Image src={`/images/${category}/로크너트.jpg`} alt="로크너트" width={800} height={533} />
                        </div>
                        {(() => {
                    const target = getTableByType("rod2");
                    return target && <TableTemplate data={target.table} type={target.type} category={target.category} />;
                })()}
                    </section>
                </>}
            {/* {category === "rectangular" &&
                <section className="ks-section">
                    <h3>배관용 플랜지 (KS B 1521)</h3>
                    <div>
                        <Image src="/images/rectangular/배관용플랜지.jpg" alt="배관용 플랜지" width={800} height={500} />
                    </div>
                    <div className="table-wrapper">
                    </div>
                </section> }
                */}
        </>
    )
}