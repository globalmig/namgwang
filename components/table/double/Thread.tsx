export default function Thread() {
    // 나사선단부
    return (
        <table className="thread double">
            <thead>
                <tr>
                    <th>기종</th>
                    <th>표준 A</th>
                    <th>비표준 B</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10형</td>
                    <td>25</td>
                    <td>35</td>
                </tr>
                <tr>
                    <td>20형</td>
                    <td>35</td>
                    <td>45</td>
                </tr>
                <tr>
                    <td>30형</td>
                    <td>40</td>
                    <td>55</td>
                </tr>
                <tr>
                    <td>40형</td>
                    <td>45</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>50형</td>
                    <td>52</td>
                    <td>72</td>
                </tr>
            </tbody>
        </table>
    )
}