import Image from "next/image";
import CushionLength from "./CushionLength";
import PartDiagram from "./PartDiagram";
import SealMaterial from "./SealMaterial";
import SealPartsDiagram from "./SealPartsDiagram";
import Specifications from "./Specifications";
import StrokeLimit from "./StrokeLimit";

export default function StandardSpecSet() {
   return (
      <>
         <section>
            <h3>사양</h3>
            <Specifications />
            <ul>
               <li>1. 지지형식중 70kgf/cm²용입니다.</li>
               <li>2. 사용온도 100도 이상 장시간 작동 시, 고속작동 시 (별도문의요망)</li>
               <li>단동형 사용 시 별도문의 요망</li>
            </ul>
         </section>
         <section>
            <h3>쿠션길이</h3>
            <p>단위 mm</p>
            <CushionLength />
         </section>
         <section>
            <h3>스트로크 한계</h3>
            <p>단위 mm</p>
            <StrokeLimit />
            <ul>
               <li>1. 지지형식에 따른 좌굴은 별도로 계산해주세요.</li>
               <li>2. 스트로크 한계 이상 시 상담 바랍니다.</li>
               <li>* HA SERIES SWTCH는 Ro Sensor입니다.</li>
            </ul>
         </section>
         <section>
            <h3>표기 요령</h3>
         </section>
         <section>
            <h3>작동유와 적합한 패킹 재질</h3>
            <div className="display-flex=flow">
               <div>
                  <Image src="" alt="작동유와 적합한 패킹재질" width={300} height={300} />
               </div>
               <SealMaterial />
            </div>
         </section>
         <section>
            <h3>HA SERIES 내부구조도</h3>
            <div>
               <Image src="" alt="내부구조도" width={1000} height={500} />
            </div>
         </section>
         <section>
            <h3>부품도</h3>
            <PartDiagram />
         </section>
         <section>
            <h3>패킹 부품도</h3>
            <SealPartsDiagram />
         </section>
      </>
   )
}