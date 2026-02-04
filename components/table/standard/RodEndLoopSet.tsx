import Image from "next/image";
import Rod2 from "./Rod2";
import DustNet from "./DustNet";
import RodNut from "./RodNut";

interface RodEndLoopSetPops {
    category: string | undefined
}

export default function RodEndLoopSet({category}: RodEndLoopSetPops) {

    return (
        <>
            <section>
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
                    <Rod2/>
                </div>
            </section>
            <section className="dust-section">
                <h3>방진망 부착 실린더</h3>
                <div>
                    <Image src={`/images/${category}/방진망부착실린더.jpg`} alt="방진망 부착 실린더" width={1000} height={358}/>
                </div>
                <div className="table-wrapper">
                    <DustNet/>
                </div>
            </section>
            <section className="nut-section">
                <h3>로크너트</h3>
                <div>
                    <Image src={`/images/${category}/로크너트.jpg`} alt="로크너트" width={800} height={533}/>
                </div>
                <div className="table-wrapper">
                    <RodNut/>
                </div>
            </section>
            {category === "rectangular" &&
            <section className="ks-section">
                <h3>배관용 플랜지 (KS B 1521)</h3>
                <div>
                    <Image src="/images/rectangular/배관용플랜지.jpg" alt="배관용 플랜지" width={800} height={500}/>
                </div>
                <div className="table-wrapper">
                    {/* <RodNut/> */}
                </div>
            </section>}
        </>
    )
}