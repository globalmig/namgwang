export default function StrokeLimit() {
    // 스트로크 한계
    return (
        <table className="stroke-limit high-pressure">
            <thead>
                <tr>
                    <th>내경</th>
                    <th>ø40 ~ ø50</th>
                    <th>ø63 ~ ø80</th>
                    <th>ø100 ~ ø160</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>스트로크 한계</td>
                    <td>1200</td>
                    <td>1600</td>
                    <td>2000</td>
                </tr>
            </tbody>
        </table>
    )
}