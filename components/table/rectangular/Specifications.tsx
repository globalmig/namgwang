export default function Specifications() {
    // 사양
    return (
        <table className="specifications rectangular">
            <thead>
                <tr>
                    <th colSpan={2}>분류</th>
                    <th>내용</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>형식</td>
                    <td>70~140 kgf/cm²</td>
                </tr>
                <tr>
                    <td colSpan={2}>실린더 내경(mm)</td>
                    <td>ø40, ø50, ø63, ø80, ø100, ø125, ø140, ø150, ø160, ø180, ø200, ø250</td>
                </tr>
                <tr>
                    <td colSpan={2}>최고사용압력</td>
                    <td>70 kgf/cm² (6,864Mpa) | 140 kgf/cm² (13,729Mpa)</td>
                </tr>
                <tr>
                    <td colSpan={2}>내압력</td>
                    <td>105 kgf/cm² (1,667Mpa) | 210 kgf/cm² (27,459Mpa)</td>
                </tr>
                <tr>
                    <td colSpan={2}>최저작동압력</td>
                    <td>3~8 kgf/cm²</td>
                </tr>
                <tr>
                    <td colSpan={2}>최고사용속도</td>
                    <td>500 mm/sec</td>
                </tr>
                <tr>
                    <td colSpan={2}>최저사용속도</td>
                    <td>10mm/sec (ø40 ~ ø140) | 20mm/sec (ø160~ø250)</td>
                </tr>
                <tr>
                    <td colSpan={2}>사용온도범위</td>
                    <td>-10℃ ~ +80℃</td>
                </tr>
                <tr>
                    <td colSpan={2}>적용작동유</td>
                    <td>일반광물성작동유 (그 외 작동유를 사용하는 장소는 별도 지시요)</td>
                </tr>
                <tr>
                    <td colSpan={2}>로드선단나사공차</td>
                    <td>KSB0214 2급</td>
                </tr>
                <tr>
                    <td colSpan={2}>스트로크 허용차</td>
                    <td>
                        100mm이하 +0.8/0 | 101~250mm +1.0/0 | 251~630mm +1.25/0<br />
                        631~1000mm +1.4/0 | 1001~1600mm +1.6/0 | 1601~3000mm +1.8/0
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>도장색</td>
                    <td>튜브: 7.6B / 5.6 / 5.0 커버 및 TYPE: 흑착색</td>
                </tr>
                <tr>
                    <td colSpan={2}>지지형식</td>
                    <td>SD, LA, TC, FA, FB, CA</td>
                </tr>
                <tr>
                    <td rowSpan={3}>기타부품</td>
                    <td>방진망</td>
                    <td>나일론타폴린(일반) / 네오프렌(내열용)</td>
                </tr>
                <tr>
                    <td>선단접속구</td>
                    <td>1산(I고리), 2산(Y고리)</td>
                </tr>
                <tr>
                    <td>그 외</td>
                    <td>로크너트</td>
                </tr>
            </tbody>
        </table>
    );
}