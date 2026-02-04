export default function SealMaterial() {
    // 패킹재질
    return (
        <table className="seal-material round">
            <thead>
                <tr>
                    <th rowSpan={2}>
                        <span>작동유</span>
                        <span>패킹재질</span>
                    </th>
                    <th>NBR</th>
                    <th>URETHANE</th>
                    <th>불소 (VITON)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>일반 광물성 작동유</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>수용성 글리코겔 작동유</td>
                    <td>O</td>
                    <td>X</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>W / O 작동유</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>O / W 작동유</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>인산 에스테르계 작동유</td>
                    <td>X</td>
                    <td>X</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>지방산 에스테르계 작동유</td>
                    <td>△</td>
                    <td>△</td>
                    <td>△</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>※ O, △는 사용가능, X는 사용불가</td>
                </tr>
            </tfoot>
        </table>
    )
}