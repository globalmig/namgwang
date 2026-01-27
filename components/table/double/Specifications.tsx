export default function Specifications() {
    // 사양
    return (
        <table className="specifications double">
            <thead>
                <tr>
                    <th colSpan={2}>분류</th>
                    <th>내용</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>형식</td>
                    <td>70kgf/cm² ~ 140kgf/cm²</td>
                </tr>
                <tr>
                    <td colSpan={2}>실린더 내경(mm)</td>
                    <td>ø40, ø50, ø63, ø80, ø100, ø125, ø140, ø150, ø160, ø180, ø200, ø250</td>
                </tr>
                <tr>
                    <td colSpan={2}>최고 사용 압력</td>
                    <td>70kgf/cm² (6.864 Mpa) | 140kgf/cm² (13.729 Mpa)</td>
                </tr>
                <tr>
                    <td colSpan={2}>내압력</td>
                    <td>105kgf/cm² (10.297 Mpa) | 210kgf/cm² (20.594 Mpa)</td>
                </tr>
                <tr>
                    <td colSpan={2}>최저 작동 압력</td>
                    <td>3~8 kgf/cm²</td>
                </tr>
                <tr>
                    <td colSpan={2}>사용 속도 범위</td>
                    <td>10~300 mm/sec (쿠션부위제외)</td>
                </tr>
                <tr>
                    <td colSpan={2}>사용 온도 범위</td>
                    <td>-10℃~+80℃ (100℃ 이상 패킹 VITON 사용)</td>
                </tr>
                <tr>
                    <td colSpan={2}>적용 작동유</td>
                    <td>일반 광물성 작동유</td>
                </tr>
                <tr>
                    <td colSpan={2}>로드선단 나사공차</td>
                    <td>KSB0214 2급</td>
                </tr>
                <tr>
                    <td colSpan={2}>스트로크 허용차</td>
                    <td>
                        100mm 이하 +0.8/0, 101~250mm +1.0/0, 251~650mm +1.25/0 <br/>
                            651~1000mm +1.4/0, 1001~1500mm +1.6/0, 1501~2000mm +1.8/0
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>도장색</td>
                    <td>튜브 : 5.7BG/5.2/3.5 커버 및 TYPE : 흑착색</td>
                </tr>
                <tr>
                    <td rowSpan={2}>지지형식</td>
                    <td>표준형</td>
                    <td>표준형 SD, LA, (LB), (FA), (FB), FC, FD, TA, TC, CA, CB</td>
                </tr>
                <tr>
                    <td>양로드형</td>
                    <td>SD, LA, (LB), (FA), (FB), FC, FD, TA, TC</td>
                </tr>
                <tr>
                    <td rowSpan={3}>기타부품</td>
                    <td>방진망</td>
                    <td>나일론타폴린 (일반) / 네오프렌 (내열용)</td>
                </tr>
                <tr>
                    <td>선단 접속구</td>
                    <td>1산 (I고리), 2산 (Y고리), IB고리</td>
                </tr>
                <tr>
                    <td>그 외</td>
                    <td>로크너트</td>
                </tr>
            </tbody>
        </table>
    )
}