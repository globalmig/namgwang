export default function DustNet() {
  return (
    <table className="dustnet standard">
      <thead>
        <tr>
          <th colSpan={2} className="line">
            <span>기호</span>
            <span>내경</span>
          </th>
          <th>ø40</th>
          <th>ø50</th>
          <th>ø63</th>
          <th>ø80</th>
          <th>ø100</th>
          <th>ø125</th>
          <th>ø140</th>
          <th>ø150</th>
          <th>ø160</th>
          <th>ø180</th>
          <th>ø200</th>
          <th>ø250</th>
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
        <tr>
          <th rowSpan={2}>WW</th>
          <th>B형</th>
          <td>ø50</td>
          <td>ø63</td>
          <td>ø71</td>
          <td>ø80</td>
          <td>ø100</td>
          <td>ø125</td>
          <td>ø125</td>
          <td>ø140</td>
          <td>ø140</td>
          <td>ø180</td>
          <td>ø180</td>
          <td>ø200</td>
        </tr>
        <tr>
          <th>C형</th>
          <td>ø50</td>
          <td>ø50</td>
          <td>ø63</td>
          <td>ø71</td>
          <td>ø80</td>
          <td>ø100</td>
          <td>ø125</td>
          <td>ø125</td>
          <td>ø125</td>
          <td>ø125</td>
          <td>ø140</td>
          <td>ø180</td>
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