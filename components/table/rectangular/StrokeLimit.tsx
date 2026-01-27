export default function StrokeLimit() {
    // 스트로크 한계
    return (
        <>
        <h4>▶ TC형 이외의 지지형식</h4>
        <table className="stroke-limit rectangular">
            <thead>
                <tr>
                    <th>내경</th>
                    <th>ø40 ~ ø63</th>
                    <th>ø80 ~ ø160</th>
                    <th>ø180 ~ ø224</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>스트로크 한계</td>
                    <td>0~2000</td>
                    <td>51~2000</td>
                    <td>101~2000</td>
                </tr>
            </tbody>
        </table>
        <h4>▶ TC형</h4>
        <table className="stroke-limit rectangular">
            <thead>
                <tr>
                    <th>내경</th>
                    <th>ø40 ~ ø80</th>
                    <th>ø100 ~ ø125</th>
                    <th>ø140 ~ ø200</th>
                    <th>ø224 ~ ø250</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>스트로크 한계</td>
                    <td>101~2000</td>
                    <td>150~2000</td>
                    <td>201~2000</td>
                    <td>251~2000</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}