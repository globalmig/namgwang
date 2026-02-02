import Image from "next/image";
import CushionLength from "./CushionLength";
import PartDiagram from "./PartDiagram";
import SealMaterial from "./SealMaterial";
import SealPartsDiagram from "./SealPartsDiagram";
import Specifications from "./Specifications";
import StrokeLimit from "./StrokeLimit";
import Rod from "./Rod";
import { CylinderDetailProps } from "@/types/product";

export default function CompactSpecSet(detail: CylinderDetailProps) {
   return (
      <>
         <section>
            <div>
               {/* product_img */}
               <Image src="" alt="" width={500} height={500} />
            </div>
            <div className="table-wrapper">
               <Rod />
            </div>
         </section>
         <section>
            <h3>사양</h3>
            <div className="table-wrapper">
               <Specifications />
            </div>
            <ul>
               <li>1. 지지형식중 70kgf/cm²용입니다.</li>
               <li>2. 사용온도 100도 이상 장시간 작동 시, 고속작동 시 (별도문의요망)</li>
               <li>단동형 사용 시 별도문의 요망</li>
            </ul>
         </section>
         <section>
            <div className="display-flex">
               <h3>쿠션길이</h3>
               <p>단위 mm</p>
            </div>
            <div className="table-wrapper">
               <CushionLength />
            </div>
            <ul>
               <li>* 하기 내용은 쿠션을 취부할 수 없음 </li>
               <li>1. 로드 A TYPE : ø40, ø50, ø63의 로드축 </li>
               <li>2. 로드 B TYPE : ø40의 로드축</li>
            </ul>
         </section>
         <section>
            <div className="display-flex">
               <h3>스트로크 한계</h3>
               <p>단위 mm</p>
            </div>
            <div className="table-wrapper">
               <StrokeLimit />
            </div>
            <ul>
               <li>* 상가 이외의 스트로크는 별도 설계 제작합니다. (문의 요망)</li>
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
               <div className="table-wrapper">
                  <SealMaterial />
               </div>
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