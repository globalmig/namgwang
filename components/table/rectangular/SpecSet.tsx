import Image from "next/image";
import CushionLength from "./CushionLength";
import PartDiagram from "./PartDiagram";
import SealMaterial from "./SealMaterial";
import SealPartsDiagram from "./SealPartsDiagram";
import Specifications from "./Specifications";
import StrokeLimit from "./StrokeLimit";
import Rod from "./Rod";
import { CylinderDetailProps } from "@/types/product";

export default function RectangularSpecSet(detail: CylinderDetailProps) {
   const { series_img, cheats} = detail.detail;

   return (
      <>
         <section className="product_img-section recangular">
            {/* <div>
               {product_img.map((p, index) =>
                  <div key={index}>
                     <Image src={p} alt={name} width={1200} height={500} />
                  </div>
               )}
            </div> */}
            <div className="display-flex-flow">
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
            <ul>
               <li>* 하기 내용은 쿠션을 취부할 수 없음 </li>
               <li>1. 로드 A TYPE : ø40, ø50, ø63의 로드축 </li>
               <li>2. 로드 B TYPE : ø40의 로드축</li>
            </ul>
         </section>
         <section className="stroke-section">
            <div className="display-flex">
               <h3>스트로크 한계</h3>
               <p>단위 mm</p>
            </div>
            <div>
               <StrokeLimit />
            </div>
            <ul>
               <li>* 상가 이외의 스트로크는 별도 설계 제작합니다. (문의 요망)</li>
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
         <section className="seal-section">
            <h3>작동유와 적합한 패킹 재질</h3>
            <div className="table-wrapper">
               <SealMaterial />
            </div>
         </section>
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