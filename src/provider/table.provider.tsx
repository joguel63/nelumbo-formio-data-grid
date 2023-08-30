import { useMemo, useState } from "react";
import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";
import { TableContext } from "../context";
import { FormioColumns, ColumnsComponents, useColumns } from "..";

type ProviderProps = {
  rows?: Object[];
  columns?: FormioColumns[];
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

  const CsGrid = useMemo(() => CustomGrid, []);

  return (
    <TableContext.Provider value={{ rows, setRows }}>
      {!CsGrid && <DataGrid {...tableProps} rows={rows} columns={getColumns(columns)} />}
      {!!CsGrid && <CsGrid rows={rows} columns={getColumns(columns)} />}
    </TableContext.Provider>
  );
};
