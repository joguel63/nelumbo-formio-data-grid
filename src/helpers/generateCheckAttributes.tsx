import { GridColDef } from "@mui/x-data-grid";
import { ColumnsComponents } from "../types";

export const generateCheckAttributes = (
  content: string,
  attributes: GridColDef,
  actions: ColumnsComponents
): GridColDef => {
  const { CheckComponent } = actions;
  return {
    ...attributes,
    renderCell: ({ row }) =>
      CheckComponent ? <CheckComponent row={row} rowItems={[content]} /> : <></>,
  };
};
