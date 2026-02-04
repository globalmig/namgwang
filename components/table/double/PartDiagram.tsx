export default function PartDiagram() {
    // 부품도
    return (
        <div className="display-flex-flow">
            <div className="table-wrapper">
                <table className="part-diagram double">
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
                            <td>1</td>
                            <td>실린더 튜브</td>
                            <td>기계구조용 탄소강 강관</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>헤드커버</td>
                            <td>기계구조용 탄소강 강재</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>로드커버</td>
                            <td>기계구조용 탄소강 강재</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>보 스</td>
                            <td>청 동</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>보스커버</td>
                            <td>기계구조용 탄소강 강재</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-wrapper">
                <table className="part-diagram double">
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
                            <td>6</td>
                            <td>로드 & 피스톤</td>
                            <td>기계구조용 탄소강 강재</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>로드 & 피스톤</td>
                            <td>기계구조용 탄소강 강재</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>렌치 볼트</td>
                            <td>-</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>렌치 볼트</td>
                            <td>-</td>
                            <td>16</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}