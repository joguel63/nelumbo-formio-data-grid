import { GridColDef } from "@mui/x-data-grid";
import { ColumnsComponents } from "../types";

export const generateActionAttributes = (
  content: string,
  attributes: GridColDef,
  actions: ColumnsComponents
): GridColDef => {
  const actionKeys = content.split(",");
  const { ActionsComponent } = actions;
  return {
    ...attributes,
    renderCell: ({ row }) =>
      ActionsComponent ? <ActionsComponent row={row} rowItems={actionKeys} /> : <></>,
  };
};
