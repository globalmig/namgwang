import { TableHeader, TableBodyRow } from "@/types/common";

interface TableTemplateProps {
    data: {
        thead: TableHeader[][];
        tbody: TableBodyRow[];
    };
    type: string;
    category: string;
}

export default function TableTemplate({ data, type, category }: TableTemplateProps) {

    return (
        <div className="table-wrapper">
            <table className={`${type} ${category}`}>
                <thead>
                    {data.thead.map((row, trIndex) => (
                        <tr key={trIndex}>
                            {row.map((cell, thIndex) => (
                                <th
                                    key={thIndex}
                                    rowSpan={cell.rowSpan}
                                    colSpan={cell.colSpan}
                                    className={cell.isLine ? "line" : undefined}
                                >
                                    {Array.isArray(cell.label) ? (
                                        cell.label.map((text, i) => (
                                            <span key={i}>{text}</span>
                                        ))
                                    ) : (
                                        <span>{cell.label}</span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {data.tbody.map((row) => (
                        <tr key={row.id}>
                            {row.data.map((cell, i) => {
                                if (typeof cell === "object" && cell !== null) {
                                    const rowSpan = "rowSpan" in cell ? (cell as any).rowSpan : undefined;
                                    const colSpan = "colSpan" in cell ? (cell as any).colSpan : undefined;
                                    const value = "main" in cell ? cell.main : (cell as any).value;

                                    return (
                                        <td key={i} rowSpan={rowSpan} colSpan={colSpan}>
                                            <span className="clamp-text">{value}</span>
                                        </td>
                                    );
                                }
                                return <td key={i}><span className="clamp-text">{cell}</span></td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
