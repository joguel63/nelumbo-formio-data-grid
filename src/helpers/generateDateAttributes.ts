import { GridColDef } from "@mui/x-data-grid";
import { format } from "date-fns";

export const generateDateAttributes = (content: string, attributes: GridColDef): GridColDef => {
  const [dateKey, dateFormat = "dd/MM/yyyy"] = content.split(",");
  return {
    ...attributes,
    renderCell: ({ row }: { row: Record<string, string | Date | null> }) =>
      row[dateKey] ? format(new Date(row[dateKey] as Date), dateFormat) : "",
  };
};
