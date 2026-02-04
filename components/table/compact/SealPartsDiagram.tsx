export default function SealPartsDiagram() {
    // 패킹 부품도
    return (
        <table className="seal-parts-diagram compact">
            <thead>
                <tr>
                    <th rowSpan={4}>
                        <span>내경</span>
                    </th>
                    <th>NO</th>
                    <th>2</th>
                    <th>3</th>
                    <th>5</th>
                    <th>7</th>
                    <th>8</th>
                </tr>
                <tr>
                    <th>재질</th>
                    <td>URETHANE or NBR</td>
                    <td>URETHANE or NBR</td>
                    <td>NBR</td>
                    <td>NBR</td>
                    <td>NBR+URETHANE</td>
                </tr>
                <tr>
                    <th>명칭</th>
                    <td>더스트씰</td>
                    <td>U-패킹</td>
                    <td>커버오링</td>
                    <td>로드오링</td>
                    <td>피스톤패킹</td>
                </tr>
                <tr>
                    <th>수량</th>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1SET</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>ø32</td>
                    <td>MDSI 18</td>
                    <td>MUNI 18</td>
                    <td>G25</td>
                    <td>P14</td>
                    <td>MSPGI 32</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø40</td>
                    <td>MDSI 22.4</td>
                    <td>MUNI 22.4</td>
                    <td>G35</td>
                    <td>P18</td>
                    <td>MSPGI 40</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø50</td>
                    <td>MDSI 28</td>
                    <td>MUNI 28</td>
                    <td>G45</td>
                    <td>P22</td>
                    <td>MSPGI 50</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø63</td>
                    <td>MDSI 35</td>
                    <td>MUNI 35</td>
                    <td>G55</td>
                    <td>G30</td>
                    <td>MSPGI 63</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø80</td>
                    <td>MDSI 45</td>
                    <td>MUNI 45</td>
                    <td>G75</td>
                    <td>G40</td>
                    <td>MSPGI 80</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø100</td>
                    <td>★ SDR 55</td>
                    <td>★ SKY 55</td>
                    <td>G95</td>
                    <td>G50</td>
                    <td>G/R 100</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø125</td>
                    <td>★ SDR 70</td>
                    <td>★ SKY 70</td>
                    <td>G120</td>
                    <td>G65</td>
                    <td>G/R 125</td>
                </tr>
            </tbody>
        </table>
    )
}