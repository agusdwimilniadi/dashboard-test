import React, { useEffect, useState } from "react";
import { LoaderIcon } from "lucide-react";

export type Column = {
    header: string;
    key: string;
};

type BaseTableProps = {
    columns: Column[];
    data: Record<string, string | number | React.ReactNode>[];
    loading?: boolean;
    page?: number;
    pageSize?: number;
    totalData?: number;
    onPageChange?: (newPage: number) => void;
};

const BaseTable: React.FC<BaseTableProps> = ({
    columns,
    data,
    loading = false,
    page = 1,
    pageSize = 10,
    totalData,
    onPageChange,
}) => {
    const [currentPage, setCurrentPage] = useState(page);

    const totalPages = totalData ? Math.ceil(totalData / pageSize) : 1;

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || (totalData && newPage > totalPages)) return;
        setCurrentPage(newPage);
        onPageChange?.(newPage);
    };

    return (
        <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100 text-gray-900 font-semibold">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="px-4 py-2 border-b">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-400 italic">
                                <div className="flex items-center justify-center h-20">
                                    <LoaderIcon className="animate-spin w-5 h-5" />
                                </div>
                            </td>
                        </tr>
                    ) : data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-500">
                                No data available
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2 border-b">
                                        {row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {totalData && totalPages > 1 && (
                <div className="flex justify-between items-center px-4 py-3 bg-white border-t text-sm">
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <div className="space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BaseTable;
