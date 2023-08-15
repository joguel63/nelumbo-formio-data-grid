export const toNumberOrFallback = (value: string): number | string => {
  if (value === undefined || value === null || value === "") return value;
  const number = Number(value);
  return !isNaN(number) ? number : value;
};
