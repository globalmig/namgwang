import Image from "next/image";
import CushionLength from "./CushionLength";
import PartDiagram from "./PartDiagram";
import SealMaterial from "./SealMaterial";
import SealPartsDiagram from "./SealPartsDiagram";
import Specifications from "./Specifications";
import StrokeLimit from "./StrokeLimit";
import Rod from "./Rod";
import { CylinderDetailProps } from "@/types/product";

export default function HighPressureSpecSet(detail: CylinderDetailProps) {
   const { name, product_img, series_img, seal_material_img, cheats, mounting } = detail.detail;

   return (
      <>
         <section className="product_img-section high-pressure">
            <div>
               {product_img.map((p, index) =>
                  <div key={index}>
                     <Image src={p} alt={name} width={1200} height={500} />
                  </div>
               )}
            </div>
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
               <li>1. 지지형식중 70kgf/cm²용입니다.</li>
               <li>2. 사용온도 100도 이상 장시간 작동 시, 고속작동 시 (별도문의요망)</li>
               <li>단동형 사용 시 별도문의 요망</li>
            </ul>
         </section>
         <section className="cushion-section">
            <div className="display-flex">
               <h3>쿠션길이</h3>
               <p>단위 mm</p>
            </div>
            <div className="table-wrapper">
               <CushionLength />
            </div>
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
               <li>1. 지지형식에 따른 좌굴은 별도로 계산해주세요.</li>
               <li>2. 스트로크 한계 이상 시 상담 바랍니다.</li>
               <li>* HA SERIES SWTCH는 Ro Sensor입니다.</li>
            </ul>
         </section>
         {cheats &&
            <section className="cheats-section">
               <h3>표기 요령</h3>
               <div>
                  <Image src={cheats} alt="표기요령" width={1000} height={187} />
               </div>
            </section>
         }
         {seal_material_img &&
            <section className="seal-section">
               <h3>작동유와 적합한 패킹 재질</h3>
               <div className="display-flex-flow">
                  <div>
                     <Image src={seal_material_img} alt="작동유와 적합한 패킹재질" width={800} height={388} />
                  </div>
                  <div className="table-wrapper">
                     <SealMaterial />
                  </div>
               </div>
            </section>
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