export type TableContextType<Trow = Object> = {
  rows: Array<Trow>;
  setRows: React.Dispatch<Array<Trow>>;
};
