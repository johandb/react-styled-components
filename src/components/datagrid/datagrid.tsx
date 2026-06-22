import React, { useMemo, useState } from "react";
import type { DataGridColumn } from "../../models/data.model";
import "./DataGrid.css"; // Hier importeren we de CSS

interface DataGridProps {
  columns: DataGridColumn[];
  data: any[];
  initialRowsPerPage?: number;
  selectedRows: any[];
  onSelectionChange: (selectedRows: any[]) => void;
}

export default function DataGrid({ columns, data, initialRowsPerPage = 5, selectedRows, onSelectionChange }: DataGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(initialRowsPerPage);
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: "asc" | "desc" }>({ key: null, direction: "asc" });
  const [filterQuery, setFilterQuery] = useState("");

  // 1. Filteren
  const filteredData = useMemo(() => {
    if (!filterQuery) return data;
    return data.filter((row) =>
      columns.some((col) => {
        const value = row[col.field];
        return value ? String(value).toLowerCase().includes(filterQuery.toLowerCase()) : false;
      }),
    );
  }, [data, columns, filterQuery]);

  // 2. Sorteren
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  // 3. Paginering
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  // --- Selectie Logica ---
  const isRowSelected = (row: any) => selectedRows.some((r) => r.id === row.id);

  const isAllOnPageSelected = useMemo(() => {
    if (paginatedData.length === 0) return false;
    return paginatedData.every((row) => isRowSelected(row));
  }, [paginatedData, selectedRows]);

  const handleRowCheckboxChange = (row: any) => {
    if (isRowSelected(row)) {
      onSelectionChange(selectedRows.filter((r) => r.id !== row.id));
    } else {
      onSelectionChange([...selectedRows, row]);
    }
  };

  const handleSelectAllPageChange = () => {
    if (isAllOnPageSelected) {
      const pageIds = paginatedData.map((row) => row.id);
      onSelectionChange(selectedRows.filter((r) => !pageIds.includes(r.id)));
    } else {
      const newSelections = [...selectedRows];
      paginatedData.forEach((row) => {
        if (!isRowSelected(row)) {
          newSelections.push(row);
        }
      });
      onSelectionChange(newSelections);
    }
  };

  // --- Handlers ---
  const handleSort = (field: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === field && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: field, direction });
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="datagrid-container">
      {/* Zoekbalk */}
      <div className="datagrid-search-container">
        <input
          type="text"
          placeholder="Zoeken in alle kolommen..."
          value={filterQuery}
          onChange={handleSearchChange}
          className="datagrid-search-input"
        />
      </div>

      {/* Tabel */}
      <table className="datagrid-table">
        <thead>
          <tr className="datagrid-header-row">
            <th className="datagrid-checkbox-header-cell">
              <input
                type="checkbox"
                checked={isAllOnPageSelected}
                onChange={handleSelectAllPageChange}
                className="datagrid-checkbox-input"
              />
            </th>
            {columns.map((col) => (
              <th key={col.field} onClick={() => handleSort(col.field)} className="datagrid-header-cell">
                {col.headerName}
                {sortConfig.key === col.field && (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => {
              const selected = isRowSelected(row);
              return (
                <tr key={row.id || index} className={`datagrid-row ${selected ? "is-selected" : ""}`}>
                  <td className="datagrid-checkbox-cell">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => handleRowCheckboxChange(row)}
                      className="datagrid-checkbox-input"
                    />
                  </td>
                  {columns.map((col) => (
                    <td key={col.field} className="datagrid-cell">
                      {col.renderCell ? col.renderCell(row) : row[col.field]}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="datagrid-no-data">
                Geen resultaten gevonden.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Paginering */}
      <div className="datagrid-pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="datagrid-page-button"
        >
          Vorige
        </button>
        <span className="datagrid-page-info">
          Pagina {currentPage} van {totalPages || 1}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages || totalPages === 0}
          className="datagrid-page-button"
        >
          Volgende
        </button>
      </div>
    </div>
  );
}
