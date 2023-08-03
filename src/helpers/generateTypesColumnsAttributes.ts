import { GridColDef } from "@mui/x-data-grid";
import { ColumnsEnum } from "../enums";
import { ColumnsComponents } from "../types";
import { generateMultilineAttributes } from "./generateMultilineAttributes";
import { generateActionAttributes } from "./generateActionAttributes";
import { generateCheckAttributes } from "./generateCheckAttributes";
import { generateMultipleAttributes } from "./generateMultipleAttributes";

export const generateColumnsByType = (
  content: string,
  attributes: GridColDef,
  type: ColumnsEnum,
  actions: ColumnsComponents
): GridColDef => {
  switch (type) {
    case ColumnsEnum.MultiLine:
      return generateMultilineAttributes(content, attributes, actions);
    case ColumnsEnum.Actions:
      return generateActionAttributes(content, attributes, actions);
    case ColumnsEnum.Check:
      return generateCheckAttributes(content, attributes, actions);
    case ColumnsEnum.Multiple:
      return generateMultipleAttributes(content, attributes);
    default:
      return attributes;
  }
};
