import { useContext } from "react";
import { TableContext } from "../context";
import { TableContextType } from "../types";

export const useTableContext = <Trow = Object>() => {
  const { rows, setRows } = useContext(TableContext);
  const context: TableContextType<Trow> = { rows, setRows } as any; //eslint-disable-line
  return context;
};
