export default function BType() {
    // B TYPE 이론 출력표
    return (
        <table className="tech-table">
           <thead>
          <tr>
            <th rowSpan={2}>실린더 내경 mm</th>
            <th rowSpan={2}>피스톤로드경 mm</th>
            <th rowSpan={2}>작동방향</th>
            <th rowSpan={2}>유효면적 cm²</th>
            <th colSpan={4}>출력 kgf</th>
            <th rowSpan={2}>유량 10l/min 때의 속도 mm/sec</th>
            <th rowSpan={2}>속도 100mm/sec 때의 유량 l/min</th>
            <th colSpan={2}>속도비</th>
          </tr>
          <tr>
            <th>35kgf/cm²</th>
            <th>70kgf/cm²</th>
            <th>140kgf/cm²</th>
            <th>210kgf/cm²</th>
            <th>전진</th>
            <th>후진</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>ø40</td>
            <td rowSpan={2}>ø22.4</td>
            <td>전진</td>
            <td>12.56</td>
            <td>439.6</td>
            <td>879.2</td>
            <td>1,758.4</td>
            <td>2,637.6</td>
            <td>132.6</td>
            <td>0.8</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.43</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>8.76</td>
            <td>306.6</td>
            <td>613.2</td>
            <td>1,226.4</td>
            <td>1,839.6</td>
            <td>190.2</td>
            <td>0.6</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø50</td>
            <td rowSpan={2}>ø28</td>
            <td>전진</td>
            <td>19.63</td>
            <td>687.0</td>
            <td>1,374.1</td>
            <td>2,748.2</td>
            <td>4,122.3</td>
            <td>84.9</td>
            <td>1.2</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.46</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>13.47</td>
            <td>471.45</td>
            <td>942.9</td>
            <td>1,885.8</td>
            <td>2,828.7</td>
            <td>123.7</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø63</td>
            <td rowSpan={2}>ø35</td>
            <td>전진</td>
            <td>31.17</td>
            <td>1,090.9</td>
            <td>2,181.9</td>
            <td>4,363.8</td>
            <td>6,545.7</td>
            <td>53.4</td>
            <td>1.9</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.45</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>21.55</td>
            <td>754.2</td>
            <td>1,508.5</td>
            <td>3,017.0</td>
            <td>4,525.5</td>
            <td>77.3</td>
            <td>1.3</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø80</td>
            <td rowSpan={2}>ø45</td>
            <td>전진</td>
            <td>50.26</td>
            <td>1,759.1</td>
            <td>3,518.2</td>
            <td>7,036.4</td>
            <td>10,554.6</td>
            <td>33.1</td>
            <td>3.0</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.47</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>34.36</td>
            <td>1,202.6</td>
            <td>2,405.2</td>
            <td>4,810.4</td>
            <td>7,215.6</td>
            <td>48.5</td>
            <td>2.1</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø100</td>
            <td rowSpan={2}>ø55</td>
            <td>전진</td>
            <td>78.54</td>
            <td>2,748.9</td>
            <td>5,497.8</td>
            <td>10,995.6</td>
            <td>16,493.4</td>
            <td>21.2</td>
            <td>4.8</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.43</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>54.78</td>
            <td>1,917.3</td>
            <td>3,834.6</td>
            <td>7,669.2</td>
            <td>11,503.8</td>
            <td>30.4</td>
            <td>3.3</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø125</td>
            <td rowSpan={2}>ø70</td>
            <td>전진</td>
            <td>112.71</td>
            <td>4,294.8</td>
            <td>8,589.7</td>
            <td>17,179.4</td>
            <td>25,769.1</td>
            <td>13.5</td>
            <td>7.4</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.46</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>84.23</td>
            <td>2,948.0</td>
            <td>5,896.1</td>
            <td>11,792.2</td>
            <td>17,688.3</td>
            <td>19.7</td>
            <td>5.1</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø140</td>
            <td rowSpan={2}>ø80</td>
            <td>전진</td>
            <td>153.93</td>
            <td>5,387.5</td>
            <td>10,775.6</td>
            <td>21,551.4</td>
            <td>32,325.3</td>
            <td>10.8</td>
            <td>9.3</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.48</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>103.67</td>
            <td>3,628.4</td>
            <td>7,256.9</td>
            <td>14,513.8</td>
            <td>21,770.7</td>
            <td>16.0</td>
            <td>6.3</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø150</td>
            <td rowSpan={2}>ø85</td>
            <td>전진</td>
            <td>176.71</td>
            <td>6,184.8</td>
            <td>12,369.7</td>
            <td>24,739.4</td>
            <td>37,109.1</td>
            <td>9.4</td>
            <td>10.6</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.47</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>119.97</td>
            <td>4,198.9</td>
            <td>8,397.9</td>
            <td>16,795.8</td>
            <td>25,193.7</td>
            <td>13.8</td>
            <td>7.2</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø160</td>
            <td rowSpan={2}>ø90</td>
            <td>전진</td>
            <td>201.06</td>
            <td>7,037.1</td>
            <td>14,074.2</td>
            <td>28,148.4</td>
            <td>42,222.6</td>
            <td>8.2</td>
            <td>12.1</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.48</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>137.44</td>
            <td>4,810.4</td>
            <td>9,620.8</td>
            <td>19,241.6</td>
            <td>28,862.4</td>
            <td>12.1</td>
            <td>8.3</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø180</td>
            <td rowSpan={2}>ø100</td>
            <td>전진</td>
            <td>254.46</td>
            <td>8,906.1</td>
            <td>17,812.2</td>
            <td>35,624.4</td>
            <td>53,436.6</td>
            <td>6.5</td>
            <td>15.3</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.45</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>175.92</td>
            <td>6,157.2</td>
            <td>12,314.4</td>
            <td>24,628.8</td>
            <td>36,943.2</td>
            <td>9.4</td>
            <td>10.6</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø200</td>
            <td rowSpan={2}>ø112</td>
            <td>전진</td>
            <td>314.15</td>
            <td>10,995.2</td>
            <td>21,990.5</td>
            <td>43,981.0</td>
            <td>65,971.5</td>
            <td>5.3</td>
            <td>18.9</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.43</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>219.12</td>
            <td>7,669.2</td>
            <td>15,338.4</td>
            <td>30,676.8</td>
            <td>46,015.2</td>
            <td>7.6</td>
            <td>13.2</td>
          </tr>
          <tr>
            <td rowSpan={2}>ø250</td>
            <td rowSpan={2}>ø140</td>
            <td>전진</td>
            <td>490.87</td>
            <td>17,180.4</td>
            <td>34,360.9</td>
            <td>68,721.8</td>
            <td>103,082.7</td>
            <td>3.3</td>
            <td>29.5</td>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>1.48</td>
          </tr>
          <tr>
            <td>후진</td>
            <td>336.93</td>
            <td>11,792.5</td>
            <td>23,585.1</td>
            <td>47,170.2</td>
            <td>70,755.3</td>
            <td>4.9</td>
            <td>20.3</td>
          </tr>
        </tbody>
        </table>
    )
}