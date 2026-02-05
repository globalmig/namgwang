export default function HighDustNet() {
    return (
        <table className="dustnet high-pressure">
           <thead>
          <tr>
            <th rowSpan={3} colSpan={2} className="line">
                <span>기호</span>
                <span>내경</span>
            </th>
            <th rowSpan={2}>Ø40</th>
            <th rowSpan={2}>Ø50</th>
            <th rowSpan={2}>Ø63</th>
            <th rowSpan={2}>Ø80</th>
            <th rowSpan={2}>Ø100</th>
            <th rowSpan={2}>Ø125</th>
            <th rowSpan={2}>Ø140</th>
            <th rowSpan={2}>Ø150</th>
            <th rowSpan={2}>Ø160</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan={2}>BB</th>
            <th>FA</th>
            <td>45</td>
            <td>45</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>65</td>
            <td>65</td>
            <td>65</td>
            <td>65</td>
          </tr>
          <tr>
            <th>FA형이외</th>
            <td>47</td>
            <td>50</td>
            <td>61</td>
            <td>55</td>
            <td>60</td>
            <td>69</td>
            <td>70</td>
            <td>70</td>
            <td>70</td>
          </tr>
          <tr>
            <th colSpan={2}>WW</th>
            <td>Ø50</td>
            <td>Ø63</td>
            <td>Ø71</td>
            <td>Ø80</td>
            <td>Ø100</td>
            <td>Ø125</td>
            <td>Ø125</td>
            <td>Ø140</td>
            <td>Ø140</td>
          </tr>
          <tr>
            <th colSpan={2}>L</th>
            <td colSpan={2}>1/3.5 스트로크</td>
            <td colSpan={3}>1/4 스트로크</td>
            <td colSpan={4}>1/5 스트로크</td>
          </tr>
        </tbody>
        </table>
    )
}