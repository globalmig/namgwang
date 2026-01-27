export default function CType() {
    // C TYPE 이론 출력표
    return (
        <table className="tech-table">
            <thead>
                <tr>
                    <th rowSpan={2}>실린더 내경 mm</th>
                    <th rowSpan={2}>피스톤로드경 mm</th>
                    <th rowSpan={2}>작동방향</th>
                    <th rowSpan={2}>유효면적 cm²</th>
                    <th colSpan={3}>출력 kgf</th>
                    <th rowSpan={2}>유량 10l/min 때의 속도 mm/sec</th>
                    <th rowSpan={2}>속도 100mm/sec 때의 유량 l/min</th>
                    <th colSpan={2}>속도비</th>
                </tr>
                <tr>
                    <th>35kgf/cm²</th>
                    <th>70kgf/cm²</th>
                    <th>140kgf/cm²</th>
                    <th>전진</th>
                    <th>후진</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={2}>ø40</td>
                    <td rowSpan={2}>ø18</td>
                    <td>전진</td>
                    <td>12.56</td>
                    <td>439.6</td>
                    <td>879.2</td>
                    <td>1,758.4</td>
                    <td>132.6</td>
                    <td>0.8</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.25</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>10.02</td>
                    <td>350.7</td>
                    <td>701.4</td>
                    <td>1,402.8</td>
                    <td>166.3</td>
                    <td>0.6</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø50</td>
                    <td rowSpan={2}>ø22.4</td>
                    <td>전진</td>
                    <td>19.63</td>
                    <td>687.0</td>
                    <td>1,374.1</td>
                    <td>2,748.2</td>
                    <td>84.9</td>
                    <td>1.2</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.24</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>15.83</td>
                    <td>554.0</td>
                    <td>1,108.1</td>
                    <td>2,216.2</td>
                    <td>105.2</td>
                    <td>1.0</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø63</td>
                    <td rowSpan={2}>ø28</td>
                    <td>전진</td>
                    <td>31.17</td>
                    <td>1,090.9</td>
                    <td>2,181.9</td>
                    <td>4,363.8</td>
                    <td>53.4</td>
                    <td>1.9</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.25</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>25.01</td>
                    <td>875.3</td>
                    <td>1,750.7</td>
                    <td>3,501.4</td>
                    <td>66.6</td>
                    <td>1.5</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø80</td>
                    <td rowSpan={2}>ø35</td>
                    <td>전진</td>
                    <td>50.26</td>
                    <td>1,759.1</td>
                    <td>3,518.2</td>
                    <td>7,036.4</td>
                    <td>33.1</td>
                    <td>3.0</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.24</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>40.84</td>
                    <td>1,422.4</td>
                    <td>2,844.8</td>
                    <td>5,689.6</td>
                    <td>41.0</td>
                    <td>2.5</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø100</td>
                    <td rowSpan={2}>ø45</td>
                    <td>전진</td>
                    <td>78.54</td>
                    <td>2,748.9</td>
                    <td>5,497.8</td>
                    <td>10,995.6</td>
                    <td>21.2</td>
                    <td>4.8</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.23</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>62.83</td>
                    <td>2,199.0</td>
                    <td>4,384.1</td>
                    <td>8,768.2</td>
                    <td>26.1</td>
                    <td>3.8</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø125</td>
                    <td rowSpan={2}>ø55</td>
                    <td>전진</td>
                    <td>122.71</td>
                    <td>4,294.8</td>
                    <td>8,589.7</td>
                    <td>17,179.4</td>
                    <td>13.5</td>
                    <td>7.4</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.24</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>98.95</td>
                    <td>3,463.2</td>
                    <td>6,926.5</td>
                    <td>13,853.0</td>
                    <td>16.8</td>
                    <td>6.0</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø140</td>
                    <td rowSpan={2}>ø60</td>
                    <td>전진</td>
                    <td>153.93</td>
                    <td>5,387.5</td>
                    <td>10,775.6</td>
                    <td>21,551.4</td>
                    <td>10.8</td>
                    <td>9.3</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.22</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>125.66</td>
                    <td>4,398.1</td>
                    <td>8,796.2</td>
                    <td>17,592.4</td>
                    <td>13.2</td>
                    <td>7.6</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø150</td>
                    <td rowSpan={2}>ø65</td>
                    <td>전진</td>
                    <td>176.71</td>
                    <td>6,184.8</td>
                    <td>12,369.7</td>
                    <td>24,739.4</td>
                    <td>9.4</td>
                    <td>10.6</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.23</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>143.53</td>
                    <td>5,023.5</td>
                    <td>10,047.1</td>
                    <td>20,094.2</td>
                    <td>11.6</td>
                    <td>8.7</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø160</td>
                    <td rowSpan={2}>ø70</td>
                    <td>전진</td>
                    <td>201.06</td>
                    <td>7,037.1</td>
                    <td>14,074.2</td>
                    <td>28,148.4</td>
                    <td>8.2</td>
                    <td>12.1</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.24</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>162.57</td>
                    <td>5,689.9</td>
                    <td>11,379.9</td>
                    <td>22,759.8</td>
                    <td>10.2</td>
                    <td>9.8</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø180</td>
                    <td rowSpan={2}>ø80</td>
                    <td>전진</td>
                    <td>254.46</td>
                    <td>8,906.1</td>
                    <td>17,812.2</td>
                    <td>35,624.4</td>
                    <td>6.5</td>
                    <td>15.3</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.25</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>204.20</td>
                    <td>7,147.0</td>
                    <td>14,294.0</td>
                    <td>28,588.0</td>
                    <td>8.1</td>
                    <td>12.3</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø200</td>
                    <td rowSpan={2}>ø90</td>
                    <td>전진</td>
                    <td>314.15</td>
                    <td>10,995.2</td>
                    <td>21,990.5</td>
                    <td>43,981.0</td>
                    <td>5.3</td>
                    <td>18.9</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.25</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>250.54</td>
                    <td>8,768.9</td>
                    <td>17,537.8</td>
                    <td>35,075.6</td>
                    <td>6.6</td>
                    <td>15.1</td>
                </tr>
                <tr>
                    <td rowSpan={2}>ø250</td>
                    <td rowSpan={2}>ø112</td>
                    <td>전진</td>
                    <td>490.87</td>
                    <td>17,180.4</td>
                    <td>34,360.9</td>
                    <td>68,721.8</td>
                    <td>3.3</td>
                    <td>29.5</td>
                    <td rowSpan={2}>1</td>
                    <td rowSpan={2}>1.27</td>
                </tr>
                <tr>
                    <td>후진</td>
                    <td>395.84</td>
                    <td>13,855.4</td>
                    <td>27,710.9</td>
                    <td>55,421.8</td>
                    <td>4.2</td>
                    <td>23.8</td>
                </tr>
            </tbody>
        </table>
    )
}