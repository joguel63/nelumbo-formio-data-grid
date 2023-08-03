import { GridColDef } from "@mui/x-data-grid";

import { FormioColumns, Attribute, ColumnsComponents } from "../types";
import { ColumnsEnum } from "../enums";
import { generateColumnsByType, toNumberOrFallback } from "../helpers";

type ReturnType = (unformatedColumns: FormioColumns[]) => GridColDef[];

export const useColumns = (actions: ColumnsComponents): ReturnType => {
  const getAttributes = (attributes: Attribute[], content: string): GridColDef => {
    let newAttributes: GridColDef = Object({});

    attributes.forEach((attribute) => {
      const { attr, value } = attribute;
      if (attr === "type") {
        const type = value as ColumnsEnum;
        newAttributes = generateColumnsByType(content, newAttributes, type, actions);
      } else newAttributes = { ...newAttributes, [attr]: toNumberOrFallback(value) };
    });

    return newAttributes;
  };

  const formatColumns = (unformatedColumns: FormioColumns[]): GridColDef[] => {
    const columns: GridColDef[] = [];

    unformatedColumns?.forEach((item) => {
      const { attrs, label, content } = item;
      const column: GridColDef = { headerName: label, ...getAttributes(attrs, content) };
      columns.push(column);
    });

    return columns;
  };

  return formatColumns;
};
