export const toNumberOrFallback = (value: string): number | string => {
  const number = Number(value);
  return !isNaN(number) ? number : value;
};
