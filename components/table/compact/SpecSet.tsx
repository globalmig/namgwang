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
   const { name, product_img, series_img, seal_material_img, cheats, mounting } = detail.detail;

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
               <li>⦁ 사용 압력 140kgf/cm² 이상은 문의바랍니다.</li>
               <li>⦁ 사용온도 100도 이상 사용 시 문의바랍니다.</li>
               <li>⦁ 오토센서 (S/R) Type도 제작 가능함 (문의요망)</li>
               <li>⦁ S/R Type 제작 시 R차수 변경됨</li>
            </ul>
         </section>
         <section className="cheats-section compact">
            <h3>표기 요령</h3>
            <div>
               <Image src="/images/compact/cheats.jpg" alt="표기요령" width={500} height={204} />
            </div>
         </section>
         <section>
            <h3>제작종류</h3>
            <ul>
               <li>⦁ D: 일반형 실린더</li>
               <li>⦁ M: 수나사</li>
               <li>⦁ T: 양드로형 실린더</li>
               <li>⦁ S/R: Switch Type (SO TYPE DC 24V/AC 100V)</li>
            </ul>
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