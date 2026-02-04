export default function DustNet() {
    return (
        <table className="dustnet standard">
            <thead>
          <tr>
            <th colSpan={2} className="line">
                <span>기호</span>
                <span>내경</span>
            </th>
            <th>ø 40</th>
            <th>ø 50</th>
            <th>ø 63</th>
            <th>ø 80</th>
            <th>ø 100</th>
            <th>ø 125</th>
            <th>ø 140</th>
            <th>ø 150</th>
            <th>ø 160</th>
            <th>ø 180</th>
            <th>ø 200</th>
            <th>ø 250</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={2}>BB</th>
            <td>45</td>
            <td>45</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>65</td>
            <td>65</td>
            <td>65</td>
            <td>65</td>
            <td>65</td>
            <td>65</td>
            <td>80</td>
          </tr>
          {/* WW 행 (B형, C형 분리) */}
          <tr>
            <th rowSpan={2}>WW</th>
            <th>B형</th>
            <td>ø 50</td>
            <td>ø 63</td>
            <td>ø 71</td>
            <td>ø 80</td>
            <td>ø 100</td>
            <td>ø 125</td>
            <td>ø 125</td>
            <td>ø 140</td>
            <td>ø 140</td>
            <td>ø 180</td>
            <td>ø 180</td>
            <td>ø 200</td>
          </tr>
          <tr>
            <th>C형</th>
            <td>ø 50</td>
            <td>ø 50</td>
            <td>ø 63</td>
            <td>ø 71</td>
            <td>ø 80</td>
            <td>ø 100</td>
            <td>ø 125</td>
            <td>ø 125</td>
            <td>ø 125</td>
            <td>ø 125</td>
            <td>ø 140</td>
            <td>ø 180</td>
          </tr>
          <tr>
            <th colSpan={2}>L</th>
            <td colSpan={2}>1/3.5 스트로크</td>
            <td colSpan={3}>1/4 스트로크</td>
            <td colSpan={6}>1/5 스트로크</td>
            <td>1/6 스트로크</td>
          </tr>
        </tbody>
        </table>
    )
}