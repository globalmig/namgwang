export default function Specifications() {
    // 사양
    return (
        <table className="specifications double">
            <thead>
                    <tr>
                        <th colSpan={2}>기종</th>
                        <th>10형</th>
                        <th>20형</th>
                        <th>30형</th>
                        <th>40형</th>
                        <th>50형</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}>실린더 내경mm</td>
                        <td>1단</td>
                        <td>ø63</td>
                        <td>ø90</td>
                        <td>ø110</td>
                        <td>ø125</td>
                        <td>ø140</td>
                    </tr>
                    <tr>
                        <td>2단</td>
                        <td>ø45</td>
                        <td>ø65</td>
                        <td>ø80</td>
                        <td>ø90</td>
                        <td>ø100</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>사용압력</td>
                        <td colSpan={5}>70 kgf/cm² (6.865 Mpa)</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>최고 허용 압력</td>
                        <td colSpan={2}>로드커버측 : 150 kgf/cm² (14.710 Mpa)</td>
                        <td colSpan={3}>헤드커버측 : 90 kgf/cm² (8.826 Mpa)</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>내 압 력</td>
                        <td colSpan={2}>로드커버측 : 210 kgf/cm² (20.593 Mpa)</td>
                        <td colSpan={3}>헤드커버측 : 140 kgf/cm² (13.729 Mpa)</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>최저 작동 압력</td>
                        <td colSpan={2}>로드커버측 : 3.5 kgf/cm² (0.343 Mpa)</td>
                        <td colSpan={3}>헤드커버측 : 2 kgf/cm² (0.196 Mpa)</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>최저 사용 속도</td>
                        <td colSpan={5}>0.06 m/min (1mm/sec)</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>상용속도</td>
                        <td>10 m/min (166mm/sec)</td>
                        <td>9 m/min (150mm/sec)</td>
                        <td>8.4 m/min (140mm/sec)</td>
                        <td>7.7 m/min (128mm/sec)</td>
                        <td>7.1 m/min (118mm/sec)</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>사용 온도 범위</td>
                        <td colSpan={5}>주위온도 : -10℃ ~ +50℃ | 유온 : -5℃ ~ +80℃</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>쿠션</td>
                        <td colSpan={5}>표준 : 오리피스형 감쇠 기구내장 | 준표준 : 감쇠감속형</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>적용 작동유</td>
                        <td colSpan={5}>일 반 광 물 성 작 동 유</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>나사공차</td>
                        <td colSpan={5}>KSB0214 2급</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>지지형식</td>
                        <td colSpan={5}>LA, LT, FA, FB, CA, TA, TB</td>
                    </tr>
                </tbody>
        </table>
    )
}