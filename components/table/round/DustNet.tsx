export default function RoundDustNet() {
  return (
    <table className="dustnet round">
      <thead>
        <tr>
          <th rowSpan={2} className="line">
            <span>내경</span>
            <span>기호</span>
          </th>
          <th>Ø40</th>
          <th>Ø50</th>
          <th>Ø63</th>
          <th>Ø80</th>
          <th>Ø100</th>
          <th>Ø125</th>
          <th>Ø140</th>
          <th>Ø150</th>
          <th>Ø160</th>
          <th>Ø180</th>
          <th>Ø200</th>
          <th>Ø250</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>BB</th>
          <td>75</td>
          <td>75</td>
          <td>85</td>
          <td>95</td>
          <td>95</td>
          <td>110</td>
          <td>115</td>
          <td>115</td>
          <td>125</td>
          <td>135</td>
          <td>140</td>
          <td>190</td>
        </tr>
        <tr>
          <th>WW</th>
          <td>Ø50</td>
          <td>Ø63</td>
          <td>Ø71</td>
          <td>Ø80</td>
          <td>Ø100</td>
          <td>Ø125</td>
          <td>Ø140</td>
          <td>Ø140</td>
          <td>Ø160</td>
          <td>Ø180</td>
          <td>Ø180</td>
          <td>Ø220</td>
        </tr>
        <tr>
          <th>L</th>
          <td colSpan={2}>1/3.5 스트로크</td>
          <td colSpan={3}>1/4 스트로크</td>
          <td colSpan={6}>1/5 스트로크</td>
          <td>1/6 스트로크</td>
        </tr>
      </tbody>
    </table>
  )
}