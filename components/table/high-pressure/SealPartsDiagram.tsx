export default function SealPartsDiagram() {
    // 패킹 부품도
    return (
        <table className="seal-parts-diagram high-pressure">
           <thead>
                <tr>
                    <th rowSpan={4}>
                        내경
                    </th>
                    <th>NO</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>10</th>
                    <th>13</th>
                    <th>14</th>
                    <th>17</th>
                </tr>
                <tr>
                    <th>명칭</th>
                    <th>보스오링</th>
                    <th>쿠션오링</th>
                    <th>백업링</th>
                    <th>커버오링</th>
                    <th>피스톤패킹</th>
                    <th>더스트씰</th>
                    <th>U패킹</th>
                    <th>로드오링</th>
                </tr>
                <tr>
                    <th>재질</th>
                    <th>NBR</th>
                    <th>NBR</th>
                    <th>TEFLON</th>
                    <th>NBR</th>
                    <th>NBR + TEFLON</th>
                    <th>URETHANE</th>
                    <th>URETHANE</th>
                    <th>NBR</th>
                </tr>
                <tr>
                    <th>수량</th>
                    <th>1</th>
                    <th>1</th>
                    <th>2</th>
                    <th>2</th>
                    <th>1SET</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>ø 40</td>
                    <td>G40</td>
                    <td>P16</td>
                    <td>-</td>
                    <td>G35</td>
                    <td>L43, 40-30</td>
                    <td>PU6-22,4</td>
                    <td>NI 300-22,4</td>
                    <td>P16</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 50</td>
                    <td>G50</td>
                    <td>P20</td>
                    <td>-</td>
                    <td>G45</td>
                    <td>L43, 50-34</td>
                    <td>PU6-28</td>
                    <td>NI 300-28</td>
                    <td>P20</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 63</td>
                    <td>G60</td>
                    <td>P24</td>
                    <td>-</td>
                    <td>G55</td>
                    <td>L43, 63-47</td>
                    <td>PU6-35</td>
                    <td>NI 300-35</td>
                    <td>P24</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 80</td>
                    <td>G70</td>
                    <td>G40</td>
                    <td>G75</td>
                    <td>G75</td>
                    <td>L43, 80-60</td>
                    <td>PU6-45</td>
                    <td>NI 300-45</td>
                    <td>G35</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 100</td>
                    <td>G85</td>
                    <td>G50</td>
                    <td>G95</td>
                    <td>G95</td>
                    <td>L43, 100-75</td>
                    <td>PU6-55</td>
                    <td>NI 300-55</td>
                    <td>G45</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 125</td>
                    <td>G105</td>
                    <td>G60</td>
                    <td>G120</td>
                    <td>G120</td>
                    <td>L43, 125-100</td>
                    <td>PU6-70</td>
                    <td>NI 300-70</td>
                    <td>G55</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 140</td>
                    <td>G115</td>
                    <td>G70</td>
                    <td>G135</td>
                    <td>G135</td>
                    <td>L43, 140-115</td>
                    <td>PU6-80</td>
                    <td>NI 300-80</td>
                    <td>G65</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 150</td>
                    <td>G125</td>
                    <td>G70</td>
                    <td>G145</td>
                    <td>G145</td>
                    <td>L43, 150-128</td>
                    <td>PU6-85</td>
                    <td>NI 300-85</td>
                    <td>G65</td>
                </tr>
                <tr>
                    <td colSpan={2}>ø 160</td>
                    <td>G130</td>
                    <td>G75</td>
                    <td>G150</td>
                    <td>G150</td>
                    <td>L43, 160-130</td>
                    <td>PU6-90</td>
                    <td>NI 300-90</td>
                    <td>G70</td>
                </tr>
            </tbody>
        </table>
    )
}