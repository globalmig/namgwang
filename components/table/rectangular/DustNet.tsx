export default function RecDustNet() {
    return (
        <table className="dustnet rectangular">
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
            <td>42</td>
            <td>57</td>
            <td>60</td>
            <td>54</td>
            <td>64</td>
            <td>64</td>
            <td>69</td>
            <td>60</td>
            <td>60</td>
            <td>80</td>
            <td>78</td>
            <td>82</td>
          </tr>
          <tr>
            <th rowSpan={2}>WW</th>
            <th>A형</th>
            <td>ø63</td>
            <td>ø71</td>
            <td>ø80</td>
            <td>ø100</td>
            <td>ø125</td>
            <td>ø140</td>
            <td>ø160</td>
            <td>ø180</td>
            <td>ø180</td>
            <td>ø200</td>
            <td>ø220</td>
            <td>ø240</td>
          </tr>
          <tr>
            <th>B형</th>
            <td>ø50</td>
            <td>ø63</td>
            <td>ø71</td>
            <td>ø80</td>
            <td>ø100</td>
            <td>ø125</td>
            <td>ø125</td>
            <td>ø140</td>
            <td>ø160</td>
            <td>ø180</td>
            <td>ø180</td>
            <td>ø220</td>
          </tr>
          <tr>
            <th colSpan={2}>L</th>
            <td colSpan={2}>1/3.5 스트로크</td>
            <td colSpan={4}>1/4 스트로크</td>
            <td colSpan={3}>1/5 스트로크</td>
            <td colSpan={3}>1/6 스트로크</td>
          </tr>
        </tbody>
        </table>
    )
}