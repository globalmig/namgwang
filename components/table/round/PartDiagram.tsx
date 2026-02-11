export default function PartDiagram() {
    // 부품도
    return (
        <div className="display-flex-flow">
            <div className="table-wrapper">
                <table className="part-diagram round">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>명칭</th>
                            <th>재질</th>
                            <th>수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>2</td><td>웨아링</td><td>-</td><td>1</td></tr>
                        <tr><td>3</td><td>튜브</td><td>기계구조용 탄소강 강관</td><td>1</td></tr>
                        <tr><td>4</td><td>쿠션링</td><td>청동</td><td>1</td></tr>
                        <tr><td>9</td><td>로드커버</td><td>기계구조용 탄소강 강관</td><td>1</td></tr>
                        <tr><td>10</td><td>플랜지</td><td>일반구조용 압연 강재</td><td>2</td></tr>
                        <tr><td>11</td><td>로드</td><td>기계구조용 탄소강 강재</td><td>1</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="table-wrapper">
                <table className="part-diagram round">
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
                            <td>14</td>
                            <td>피스톤</td>
                            <td>기계구조용 탄소강 강재</td>
                            <td>1</td>
                        </tr>
                        <tr
                        ><td>15</td>
                            <td>헤드커버</td>
                            <td>기계구조용 탄소강 강재</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>렌치볼트</td>
                            <td>-</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>렌치볼트</td>
                            <td>-</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>플랜지</td>
                            <td>일반구조용 압연 강재</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>보스</td>
                            <td>청동</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}