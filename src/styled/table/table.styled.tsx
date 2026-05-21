import { createContext, useContext } from "react";
import styled from "styled-components";
import { Box } from "../box/box";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import type { DefaultProps } from "../types/default.props";
import { themeColors } from "../utils/styled.utils";

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

interface TableProps<T> extends DefaultProps {
  data: T[];
  header?: ColumnHeader;
  withColumnBorder?: boolean;
  withBorder?: boolean;
  striped?: boolean;
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
      <Box w={props.w} m={props.m} mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
        <StyledTable $w={props.w ? props.w : 100} $withBorder={props.withBorder} cellSpacing="0" cellPadding="0">
          {props.header && <TableHeader />}
          <TableBody />
        </StyledTable>
      </Box>
    </TableContext.Provider>
  );
};

// const TableContainer = styled.div`
//   display: block;
//   padding: 0;
//   margin: 0;
// `;

const StyledTable = styled.table<{ $withBorder?: boolean; $withColumnBorder?: boolean; $w: number }>`
  text-align: left;
  padding: 0px;
  ${(props) => (props.$withBorder ? `border: 1px solid #efefef;` : "")};
  width: ${(props) => `${props.$w}%`};
`;

const TableHeader = () => {
  const ctx = useTableContext();

  let bg = themeColors[ctx.header?.bg as keyof typeof themeColors]?.value ?? ctx.header?.bg ?? theme.colors.gray;
  let fg = themeColors[ctx.header?.color as keyof typeof themeColors]?.value ?? ctx.header?.color ?? "white";

  return (
    <StyledTableHeader $bg={bg} $color={fg} $withColumnBorder={ctx.withColumnBorder}>
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
    background-color: ${(props) => props.$bg};
    color: ${(props) => props.$color};
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
