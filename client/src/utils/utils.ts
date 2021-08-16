export const getFormattedNumber = (num: number) => {
  const formatNumber = new Intl.NumberFormat("ua-UA");
  return formatNumber.format(num);
};
