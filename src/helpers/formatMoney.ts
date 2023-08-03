import { Currency } from "../types/currency.type";

export const formatMoney = (amount: number | string | null, currency: Currency = "USD"): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });
  return formatter.format(Number(amount));
};
