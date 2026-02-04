export default function Specifications() {
    // 사양 
    return (
        <table className="specifications standard">
            <thead>
                <tr>
                    <th>형식</th>
                    <th>복동</th>
                    <th>양로드</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>실린더 내경</td>
                    <td>ø32, ø40, ø50, ø63, ø80, ø100, ø125</td>
                    <td>ø32, ø40, ø50, ø63, ø80, ø100, ø125</td>
                </tr>
                <tr>
                    <td>최고사용압력</td>
                    <td colSpan={2}>140 kgf/cm² (13,729MPa)</td>
                </tr>
                <tr>
                    <td>내압력</td>
                    <td colSpan={2}>210 kgf/cm² (20,594MPa)</td>
                </tr>
                <tr>
                    <td>최저작동압력</td>
                    <td colSpan={2}>3 ~ 8 kgf/cm²</td>
                </tr>
                <tr>
                    <td>사용속도범위</td>
                    <td colSpan={2}>8 ~ 100 mm/sec</td>
                </tr>
                <tr>
                    <td>사용온도범위</td>
                    <td colSpan={2}>-10℃ ~ +80℃</td>
                </tr>
                <tr>
                    <td>적용작동유</td>
                    <td colSpan={2}>일반 광물성 작동유</td>
                </tr>
                <tr>
                    <td>로드선단나사공차</td>
                    <td colSpan={2}>KSB 0214 2급</td>
                </tr>
                <tr>
                    <td>스트로크허용차</td>
                    <td colSpan={2}>0 ~ +0.8mm</td>
                </tr>
                <tr>
                    <td>지지형식</td>
                    <td colSpan={2}>기본형</td>
                </tr>
            </tbody>
        </table>
    );
}