export default function SealPartsDiagram() {
    // 패킹 부품도
    return (
        <table className="seal-parts-diagram">
            <thead>
                <tr>
                    <th rowSpan={4}>내경</th>
                    <th>NO</th>
                    <th>4</th>
                    <th>7</th>
                    <th>9</th>
                    <th>11</th>
                    <th>12</th>
                    <th>15</th>
                    <th>16</th>
                </tr>
                <tr>
                    <th>명칭</th>
                    <th>보스오링</th>
                    <th>피스톤패킹</th>
                    <th>커버오링</th>
                    <th>더스트씰</th>
                    <th>보스U패킹</th>
                    <th>오링</th>
                    <th>로드오링</th>
                </tr>
                <tr>
                    <th>재질</th>
                    <th>NBR</th>
                    <th>NBR+TEFLON</th>
                    <th>NBR</th>
                    <th>NBR OR URETHANE</th>
                    <th>NBR OR URETHANE</th>
                    <th>NBR</th>
                    <th>NBR</th>
                </tr>
                <tr>
                    <th>수량</th>
                    <th>1</th>
                    <th>1 Set</th>
                    <th>2</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                </tr>
                <tr>
                    <th>내경</th>
                    <th>구분</th>
                    <th>B형</th>
                    <th>C형</th>
                    <th>C, B형</th>
                    <th>C, B형</th>
                    <th>B형</th>
                    <th>C형</th>
                    <th>B형</th>
                    <th>C형</th>
                    <th>B형</th>
                    <th>C형</th>
                    <th>B형</th>
                    <th>C형</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ø40</td>
                    <td>G25</td>
                    <td>G25</td>
                    <td>L43, 40-30</td>
                    <td>G35</td>
                    <td>PU 6-22,4</td>
                    <td>PU 6-18</td>
                    <td>NI 300-22,4</td>
                    <td>NI 300-18</td>
                    <td>P16</td>
                    <td>P16</td>
                    <td>P16</td>
                    <td>P16</td>
                </tr>
                <tr>
                    <td>ø50</td>
                    <td>G30</td>
                    <td>G30</td>
                    <td>L43, 50-34</td>
                    <td>G45</td>
                    <td>PU 6-28</td>
                    <td>PU 6-22,4</td>
                    <td>NI 300-28</td>
                    <td>NI 300-22,4</td>
                    <td>P22</td>
                    <td>P20</td>
                    <td>P20</td>
                    <td>P20</td>
                </tr>
                {/* 63,80,100,125,140,150,160,180,200 */}
                <tr>
                    <td>ø250</td>
                    <td>G155</td>
                    <td>G125</td>
                    <td>L26, 250-225</td>
                    <td>G240</td>
                    <td>PU 6-140</td>
                    <td>★ LBH 112</td>
                    <td>NI 300-140</td>
                    <td>USH 112</td>
                    <td>G120</td>
                    <td>G100</td>
                    <td>G115</td>
                    <td>G95</td>
                </tr>
            </tbody>
        </table>
    )
}