import { GridColDef } from "@mui/x-data-grid";
import { ColumnsComponents } from "../types";

export const generateMultilineAttributes = (
  content: string,
  attributes: GridColDef,
  actions: ColumnsComponents
): GridColDef => {
  const multilineKeys = content.split(",");
  const { MultilineComponent } = actions;
  return {
    ...attributes,
    renderCell: ({ row }) =>
      MultilineComponent ? <MultilineComponent row={row} rowItems={multilineKeys} /> : <></>,
  };
};
