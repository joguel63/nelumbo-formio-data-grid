import { GridColDef } from "@mui/x-data-grid";

export const generateMultipleAttributes = (content: string, attributes: GridColDef): GridColDef => {
  return {
    ...attributes,
    renderCell: ({ row }: { row: Record<string, string> }) =>
      content.replace(/{{(\w+)}}/g, (_, key) => row[key]),
  };
};
