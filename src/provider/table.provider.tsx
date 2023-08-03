import { useState } from "react";
import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";
import { TableContext } from "../context";
import { ApiColumns, ColumnsComponents, useColumns } from "..";

type ProviderProps = {
  rows: Object[];
  columns?: ApiColumns[];
  columnsComponents?: ColumnsComponents;
  tableProps?: Omit<DataGridProps, "rows" | "columns">;
  CustomGrid?: React.FC<{ rows: Object[]; columns: GridColDef[] }>;
};

export const TableProvider: React.FC<ProviderProps> = ({
  rows: initialRows,
  columns = [],
  columnsComponents,
  tableProps,
  CustomGrid,
}) => {
  const [rows, setRows] = useState<Object[]>(initialRows ?? []);
  const getColumns = useColumns(columnsComponents ?? {});

  return (
    <TableContext.Provider value={{ rows, setRows }}>
      {!CustomGrid && <DataGrid {...tableProps} rows={rows} columns={getColumns(columns)} />}
      {!!CustomGrid && <CustomGrid rows={rows} columns={getColumns(columns)} />}
    </TableContext.Provider>
  );
};
