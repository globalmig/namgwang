import Image from "next/image";
import CushionLength from "./CushionLength";
import PartDiagram from "./PartDiagram";
import SealMaterial from "./SealMaterial";
import SealPartsDiagram from "./SealPartsDiagram";
import Specifications from "./Specifications";
import StrokeLimit from "./StrokeLimit";
import Rod from "./Rod";
import { CylinderDetailProps } from "@/types/product";
import Thread from "./Thread";

export default function DoubleSpecSet(detail: CylinderDetailProps) {
   const { name, product_img, series_img, seal_material_img, cheats, mounting } = detail.detail;

   const mounting1 = mounting?.[0];
   const mounting2 = mounting?.[1];

   return (
      <>
         <section className="product_img-section">
            <div>
               {product_img.map((p, index) =>
                  <div key={index}>
                     <Image src={p} alt={name} width={1200} height={500} />
                  </div>
               )}
            </div>
            <div className="table-wrapper">
               <Rod />
            </div>
         </section>
         <section className="specifications-section">
            <h3>사양</h3>
            <div className="table-wrapper">
               <Specifications />
            </div>
            <ul>
               <li>1. 후진시에 상용속도로 사용하는 경우, 압력은 60kgf/cm²을 표준으로 사용.</li>
               <li>2. 사용압력이란 실린더를 작동함에 있어 허용되는 릴리프 변의 최고설정압력.</li>
               <li>3. 최고허용압력이란 서지 압력을 포함해 실린더가 강도상 사용가능한 최고압력.</li>
               <li>4. 내압력이란 최고허용압력으로 복귀하였을 때 성능의 저하를 초래하지 않고 견뎌내야 하는 시험압력.</li>
               <li>5. 최저작동압력이란 무부하(로드 자중분은 별도 고려)의 상태에서 압력을 가할 때, 실린더가 움직이기 시작하는 압력.</li>
               <li>6. 기본형 제작사양 이상의 BORE 및 스트로크 한계 이상의 스트로크 제작시 별도문의 요망</li>
            </ul>
         </section>
         <section className="stroke-section">
            <div className="display-flex">
               <h3>스트로크 한계</h3>
               <p>단위 mm</p>
            </div>
            <div className="table-wrapper">
               <StrokeLimit />
            </div>
            <ul>
               <li>* 로드의 좌굴은 별도로 고려해주세요. 한계 이외의 스트로크는 문의바랍니다.</li>
               <li>최소 스트로크는 50mm입니다.</li>
            </ul>
         </section>
         {/* <section className="cushion-section double">
            <div className="display-flex-flow">
               <div>
                  <h3>쿠션에 대해</h3>
                  <ul>
                     <li>
                        양 스트로크 끝단에 스트로크가 짧은 오리피스형 감쇠기구(쇼크 압소버)를 채용했습니다. 또한, 전진측의 1단에서 2단으로, 후진측의 2단에서 1단 사이에도 간이형 쿠션을 채용하고 있습니다.
                     </li>
                     <li>
                        양측 감쇠감속형 쿠션(슬로우다운 쿠션)은 양 스트로크 끝단에서 감쇠시킨 후 정지시키는 쿠션입니다. (표준보다 쿠션영역이 길게 되어있습니다.)
                     </li>
                     <li>
                        쿠션형식을 감쇠감속형으로 할 경우 치수표의 (*)표 치수가 5mm 연장됩니다.
                     </li>
                  </ul>
               </div>
               <div>
                  <h3>ISO 의해 사용형 변경</h3>
                  <div>
                     <Image src="/images/iso.jpg" alt="ISO 의해 사용형 변경" width={500} height={500} />
                  </div>
               </div>
            </div>
         </section> */}
         {seal_material_img &&
            <section className="seal-section">
               <h3>작동유와 적합한 패킹 재질</h3>
               <div className="display-flex-flow">
                  <div>
                     <Image src={seal_material_img} alt="작동유와 적합한 패킹재질" width={500} height={228} />
                  </div>
                  <div className="table-wrapper">
                     <SealMaterial />
                  </div>
               </div>
            </section>
         }
         {cheats &&
            <section className="cheats-section">
               <h3>표기 요령</h3>
               <div>
                  <Image src={cheats} alt="표기요령" width={1000} height={187} />
               </div>
            </section>
         }
         <section className="thread-section">
            <h3>나사선단부 길이 (A차수)</h3>
            <div className="table-wrapper">
               <Thread/>
            </div>
         </section>
         {(mounting1 && mounting2) ?
            <section className="mounting-section">
               <div className="display-flex-flow">
                  <div>
                     <h3>지지형식 LA/LT</h3>
                     <div>
                        <Image src={mounting1} alt="지지형식" width={1000} height={417} />
                     </div>
                  </div>
                  <div>
                     <h3>지지형식 FA/FB/CA/TA/TB</h3>
                     <div>
                        <Image src={mounting2} alt="지지형식" width={1000} height={417} />
                     </div>
                  </div>
               </div>
            </section> : <></>
         }
         <section className="series-section">
            <h3>HA SERIES 내부구조도</h3>
            <div>
               <Image src={series_img} alt="내부구조도" width={1000} height={417} />
            </div>
         </section>
         <section className="part-diagram-section">
            <h3>부품도</h3>
            <div>
               <PartDiagram />
            </div>
         </section>
         <section className="seal-diagram-section">
            <h3>패킹 부품도</h3>
            <div className="table-wrapper">
               <SealPartsDiagram />
            </div>
         </section>
      </>
   )
}