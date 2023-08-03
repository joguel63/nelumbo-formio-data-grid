import { Attribute } from "./attribute.type";

type GenericTypes = string | number | boolean | null | undefined | object | Array<unknown>;

export type ApiColumns = Record<string, GenericTypes> & {
  label: string;
  attrs: Attribute[];
  content: string;
};
