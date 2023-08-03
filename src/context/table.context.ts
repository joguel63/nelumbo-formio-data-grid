import { createContext } from "react";
import { TableContextType } from "../types";

export const TableContext = createContext<TableContextType>(Object({}));
