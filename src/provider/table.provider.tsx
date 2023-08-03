import { useState } from "react";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { TableContext } from "../context";
import { ApiColumns, ColumnsComponents, useColumns } from "..";

type ProviderProps = {
  rows: Object[];
  columns?: ApiColumns[];
  columnsComponents?: ColumnsComponents;
  children?: React.ReactNode;
  tableProps?: Omit<DataGridProps, "rows" | "columns">;
};

export const TableProvider: React.FC<ProviderProps> = ({
  children,
  rows: initialRows,
  columns = [],
  columnsComponents,
  tableProps,
}) => {
  const [rows, setRows] = useState<Object[]>(initialRows ?? []);
  const getColumns = useColumns(columnsComponents ?? {});

  return (
    <TableContext.Provider value={{ rows, setRows }}>
      {!children && <DataGrid {...tableProps} rows={rows} columns={getColumns(columns)} />}
      {!!children && children}
    </TableContext.Provider>
  );
};
