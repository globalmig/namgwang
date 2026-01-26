export default function PartDiagram() {
    // 부품도
    return (
        <div className="display-flex-flow">
            <table className="part-diagram high-pressure">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>명칭</th>
                        <th>재질</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td>
                        <td>로드</td>
                        <td>기계구조용탄소강 강재</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>플랜지</td>
                        <td>일반구조용 압연 강재</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>보스</td>
                        <td>청동</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>튜브</td>
                        <td>기계구조용탄소강 강관</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>쿠션링</td>
                        <td>청동</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>피스톤</td>
                        <td>기계구조용탄소강 강재</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <table className="part-diagram high-pressure">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>명칭</th>
                        <th>재질</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10</td>
                        <td>너트</td>
                        <td>-</td>
                        <td>4</td>
                    </tr>
                    <tr
                    ><td>13</td>
                        <td>로드커버</td>
                        <td>일반구조용 압연 강재</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>타이로드</td>
                        <td>크롬 몰리브덴강 강재</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>헤드커버</td>
                        <td>일반구조용 압연 강재</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>타입</td>
                        <td>CA, CB, TC</td>
                        <td>ø40 ~ ø250 일반구조용 압연 강재</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}