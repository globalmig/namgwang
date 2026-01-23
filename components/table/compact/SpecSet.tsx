import CushionLength from "./CushionLength";
import PartDiagram from "./PartDiagram";
import SealMaterial from "./SealMaterial";
import SealPartsDiagram from "./SealPartsDiagram";
import Specifications from "./Specifications";
import StrokeLimit from "./StrokeLimit";

export default function CompactSpecSet() {
    return(
        <>
         <section>
            <h3>사양</h3>
            <Specifications/>
         </section>
         <section>
            <h3>쿠션길이</h3>
            <CushionLength/>
         </section>
         <section>
            <h3>스트로크 한계</h3>
            <StrokeLimit/>
         </section>
         <section>
            <h3>패킹 재질</h3>
            <SealMaterial/>
         </section>
         <section>
            <h3>부품도</h3>
            <PartDiagram/>
         </section>
         <section>
            <h3>패킹 부품도</h3>
            <SealPartsDiagram/>
         </section>
        </>
    )
}