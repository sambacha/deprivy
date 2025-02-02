let m = 2n ** 256n - 1n;
const t = ({
  amount: t,
  decimals: a
}) => t === m ? "Maximum" : Intl.NumberFormat(undefined, {
  maximumFractionDigits: a
}).format(Number(t) / 10 ** a);
export { t as formatErc20TokenAmount };
