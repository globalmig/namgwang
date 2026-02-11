export default function PartDiagram() {
    // 부품도
    return (
        <div className="display-flex-flow">
            <div className="table-wrapper">
                <table className="part-diagram compact">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>명칭</th>
                            <th>재질</th>
                            <th>수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>로드</td><td>기계구조용 탄소강 강재</td><td>1</td></tr>
                        <tr><td>4</td><td>보스</td><td>청동</td><td>1</td></tr>
                        <tr><td>3</td><td>보스</td><td>청동</td><td>1</td></tr>
                        <tr><td>6</td><td>몸체</td><td>기계구조용 탄소강 강재</td><td>1</td></tr>
                        <tr><td>9</td><td>피스톤</td><td>청동</td><td>1</td></tr>
                        <tr><td>10</td><td>마그네트</td><td>-</td><td>1</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="table-wrapper">
                <table className="part-diagram compact">
                    <thead>
                <tr>
                    <th>규격</th>
                    <th>한계 (STROKE)</th>
                    <th>한계 스트로크 이상 시 (R+ST) + 아래치수</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ø32</td>
                    <td>80mm</td>
                    <td>⊕16mm</td>
                </tr>
                <tr>
                    <td>ø40</td>
                    <td>80mm</td>
                    <td>⊕15mm</td>
                </tr>
                <tr>
                    <td>ø50</td>
                    <td>100mm</td>
                    <td>⊕15mm</td>
                </tr>
                <tr>
                    <td>ø63</td>
                    <td>100mm</td>
                    <td>⊕17mm</td>
                </tr>
                <tr>
                    <td>ø80</td>
                    <td>120mm</td>
                    <td>⊕17mm</td>
                </tr>
                <tr>
                    <td>ø100</td>
                    <td>120mm</td>
                    <td>⊕25mm</td>
                </tr>
                <tr>
                    <td>ø125</td>
                    <td>120mm</td>
                    <td>⊕35mm</td>
                </tr>
            </tbody>
                </table>
            </div>
        </div>
    )
}