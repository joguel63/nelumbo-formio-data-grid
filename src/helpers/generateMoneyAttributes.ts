import { GridColDef } from "@mui/x-data-grid";
import { Currency } from "../types/currency.type";
import { formatMoney } from ".";

export const generateMoneyAttributes = (content: string, attributes: GridColDef): GridColDef => {
  const [MoneyKey, currency = "USD"] = content.split(",");
  return {
    ...attributes,
    renderCell: ({ row }: { row: Record<string, string | number | null> }) =>
      row[MoneyKey] ? formatMoney(row[MoneyKey], currency as Currency) : "",
  };
};
