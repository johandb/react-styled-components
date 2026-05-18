import { createContext, useContext } from "react";
import styled from "styled-components";
import type { Color } from "../types/color";

interface Column {
  id: string;
  title: string;
}

export interface ColumnHeader {
  bg?: Color;
  color?: Color;
  headerClick?: () => void;
  columns: Column[];
}

interface TableProps<T> {
  data: T[];
  header?: ColumnHeader;
  // children: React.ReactNode;
  withColumnBorder?: boolean;
  withBorder?: boolean;
  striped?: boolean;
  m?: number;
  handleRowClick?: (index: number) => void;
}

const TableContext = createContext<TableProps<any> | null>(null);

const useTableContext = () => {
  const container = useContext(TableContext);
  if (container === null || container === undefined) {
    throw new Error("useTableContext must be used with a valid TableProps");
  }
  return container;
};

export const Table = (props: TableProps<any>) => {
  return (
    <TableContext.Provider value={props}>
      <TableContainer>
        <StyledTable $margin={props.m ?? 5} $withBorder={props.withBorder} cellSpacing="0" cellPadding="0">
          {props.header && <TableHeader />}
          <TableBody />
        </StyledTable>
      </TableContainer>
    </TableContext.Provider>
  );
};

const TableContainer = styled.div`
  display: block;
  padding: 0;
  margin: 0;
`;

const StyledTable = styled.table<{ $margin: number; $withBorder?: boolean; $withColumnBorder?: boolean }>`
  text-align: left;
  margin: ${(props) => `${props.$margin}px`};
  padding: 0px;
  ${(props) => (props.$withBorder ? `border: 1px solid #efefef;` : "")};
`;

const TableHeader = () => {
  const ctx = useTableContext();

  return (
    <StyledTableHeader $bg={ctx.header?.bg} $color={ctx.header?.color} $withColumnBorder={ctx.withColumnBorder}>
      <tr>
        {ctx.header?.columns.map((h) => (
          <th key={h.id}>{h.title}</th>
        ))}
      </tr>
    </StyledTableHeader>
  );
};

const StyledTableHeader = styled.thead<{ $bg?: string; $color?: string; $withColumnBorder?: boolean }>`
  tr {
    background-color: ${(props) => props.$bg ?? "gray"};
    color: ${(props) => props.$color ?? "white"};
  }

  th {
    padding: 10px;
    margin: 0;
    ${(props) =>
      props.$withColumnBorder
        ? `
    &:not(:last-child) {
      border-right: 1px solid #efefef;
    }`
        : ""};
  }
`;

const TableBody = () => {
  const ctx = useTableContext();
  const hasHeader = ctx.header;

  console.log("hasHeader:", hasHeader);

  return (
    <StyledTableBody $withColumnBorder={ctx.withColumnBorder}>
      {ctx.data?.map((row, index) => (
        <tr key={index} onClick={() => ctx.handleRowClick?.(index)}>
          {row.map((item: any, i: number) => (
            <td key={i}>{item}</td>
          ))}
          {/* {hasHeader
            ? ctx.header?.columns.map((h) => <td key={h.id}>{row[h.id]}</td>)
            : row.map((item: any, i: number) => <td key={i}>{item}</td>)} */}
        </tr>
      ))}
    </StyledTableBody>
  );
};

const StyledTableBody = styled.tbody<{ $withColumnBorder?: boolean }>`
  td {
    padding: 10px;
    margin: 0px;
    ${(props) =>
      props.$withColumnBorder
        ? `
    &:not(:last-child) {
      border-right: 1px solid #efefef;
    }`
        : ""};
  }

  tr {
    &:nth-of-type(odd) {
      background-color: #f6f6f6;
    }
    &:hover {
      background-color: #e9f1fa;
      cursor: pointer;
    }
  }
`;
