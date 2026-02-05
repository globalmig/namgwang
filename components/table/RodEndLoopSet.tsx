import Image from "next/image";
import Rod2 from "./standard/Rod2";
import DustNet from "./standard/DustNet";
import RodNut from "./standard/RodNut";
import { CylinderProps } from "@/types/product";
import { CYLINDER_SUBCATEGORY } from "@/data/category";
import HighDustNet from "./high-pressure/DustNet";
import HighRod2 from "./high-pressure/Rod2";
import HighRodNut from "./high-pressure/RodNut";
import RecRodNut from "./rectangular/RodNut";
import RecDustNet from "./rectangular/DustNet";
import RecRod2 from "./rectangular/Rod2";
import RoundDustNet from "./round/DustNet";
import RoundRod2 from "./round/Rod2";

interface RodEndLoopSetPops {
    category: string | undefined
    detail: CylinderProps
}

export default function RodEndLoopSet({ category, detail }: RodEndLoopSetPops) {

    const tableLayout = CYLINDER_SUBCATEGORY.find(c => c.category === detail?.category)?.category;

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
                <div className="table-wrapper">
                    {tableLayout === "standard" && <Rod2 />}
                    {tableLayout === "high-pressure" && <HighRod2 />}
                    {tableLayout === "rectangular" && <RecRod2 />}
                </div>
                </> :
                <>
                <h3>IB TYPE (일산 너클조인트)</h3>
                <div>
                    <div>
                        <Image src={`/images/${category}/일산너클.jpg`} alt="선단고리 IB TYPE" width={1000} height={400} />
                    </div>
                </div>
                <div className="table-wrapper">
                    <RoundRod2/>
                </div>
                </>
            }
            </section>
            <section className="dust-section">
                <h3>방진망 부착 실린더</h3>
                <div>
                    <Image src={`/images/${category}/방진망부착실린더.jpg`} alt="방진망 부착 실린더" width={1000} height={358} />
                </div>
                <div className="table-wrapper">
                    {tableLayout === "standard" && <DustNet />}
                    {tableLayout === "high-pressure" && <HighDustNet />}
                    {tableLayout === "rectangular" && <RecDustNet />}
                    {tableLayout === "round" && <RoundDustNet />}
                </div>
            </section>
            {category !== "round" &&
            <>
            <section className="nut-section">
                <h3>로크너트</h3>
                <div>
                    <Image src={`/images/${category}/로크너트.jpg`} alt="로크너트" width={800} height={533} />
                </div>
                <div className="table-wrapper">
                    {tableLayout === "standard" && <RodNut />}
                    {tableLayout === "high-pressure" && <HighRodNut />}
                    {tableLayout === "rectangular" && <RecRodNut />}
                </div>
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