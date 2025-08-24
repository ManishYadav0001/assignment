import  { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  // Handle sorting
  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const newOrder =
      sortKey === col.dataIndex && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(col.dataIndex);
    setSortOrder(newOrder);
  };

  // Apply sorting
  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Handle row selection
  const toggleRow = (index: number) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(index)) {
      newSelection.delete(index);
    } else {
      newSelection.add(index);
    }
    setSelectedRows(newSelection);
    if (onRowSelect) {
      onRowSelect([...newSelection].map((i) => sortedData[i]));
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="p-4 text-center text-gray-500">No data available</div>;
  }

  return (
    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2"></th>}
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => handleSort(col)}
              className={`p-2 text-left cursor-pointer ${
                col.sortable ? "hover:bg-gray-200" : ""
              }`}
            >
              {col.title}
              {sortKey === col.dataIndex && (
                <span>{sortOrder === "asc" ? " 🔼" : " 🔽"}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {sortedData.map((row, index) => (
          <tr
            key={index}
            className={`${
              selectedRows.has(index) ? "bg-blue-100" : "hover:bg-gray-50"
            }`}
          >
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.has(index)}
                  onChange={() => toggleRow(index)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}