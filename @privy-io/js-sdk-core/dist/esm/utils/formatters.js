import { formatEther as e, formatUnits as r } from "viem";
function n(e) {
  if (e) {
    return `${e.slice(0, 5)}…${e.slice(-4)}`;
  } else {
    return "";
  }
}
function t({
  wei: r,
  precision: n = 3
}) {
  return parseFloat(e(r)).toFixed(n).replace(/0+$/, "").replace(/\.$/, "");
}
function i({
  amount: e,
  decimals: n
}) {
  return r(BigInt(e), n);
}
function o({
  lamports: e
}) {
  return r(e, 9);
}
export { o as formatLamportsAmount, i as formatTokenAmount, n as formatWalletAddress, t as formatWeiAmount };
