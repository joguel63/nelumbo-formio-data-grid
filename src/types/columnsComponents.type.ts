export type TableComponentProps<Trow = any> = { row: Trow; rowItems: Array<string> }; //eslint-disable-line

export type ColumnsComponents = {
  ActionsComponent?: React.FC<TableComponentProps>;
  MultilineComponent?: React.FC<TableComponentProps>;
  CheckComponent?: React.FC<TableComponentProps>;
};
