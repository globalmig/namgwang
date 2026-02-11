export default function TableTamplate() {
    return (
        <div className="table-wrapper">
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

// EX
export function DynamicTable({ data }: { data: any }) {
    const { thead, tbody } = data.table;

    return (
        <table className={`rod ${data.category}`}>
            <thead>
                {thead.map((row: any, rowIndex: number) => (
                    <tr key={rowIndex}>
                        {row.map((cell: any, cellIndex: number) => {
                            if (cell.isLine) {
                                return (
                                    <th key={cellIndex} rowSpan={cell.rowSpan} className="line">
                                        {cell.label.map((text: string, i: number) => (
                                            <span key={i}>{text}</span>
                                        ))}
                                    </th>
                                );
                            }
                            return (
                                <th
                                    key={cellIndex}
                                    rowSpan={cell.rowSpan || 1}
                                    colSpan={cell.colSpan || 1}
                                >
                                    {cell.label}
                                </th>
                            );
                        })}
                    </tr>
                ))}
            </thead>
            <tbody>
                {tbody.map((row: any) => (
                    <tr key={row.id}>
                        {row.data.map((val: string, i: number) => (
                            <td key={i}>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}