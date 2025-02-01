import { jsx as e, jsxs as i, Fragment as t } from "react/jsx-runtime";
import { styled as n } from "styled-components";
import { formatUnits as o } from "viem";
import { sumWeiQuantities as r, getDollarsFromWei as s, getNativeCurrencyFromWei as l } from "../../lib/ethers.mjs";
import { getDollarsFromLamport as m, getNativeCurrencyFromLamports as c } from "../../lib/solana/transaction.mjs";
import "../../hooks/internal-context.mjs";
import "react";
import "../../hooks/index.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../../lib/solana/index.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
const p = ({
  weiQuantities: i,
  tokenPrice: t,
  tokenSymbol: n
}) => {
  let o = r(i);
  let m = t ? s(o, t) : undefined;
  let c = l(o, n);
  /*#__PURE__*/
  return e(h, {
    children: m || c
  });
};
const d = ({
  weiQuantities: n,
  tokenPrice: o,
  tokenSymbol: m
}) => {
  let c = r(n);
  let p = o ? s(c, o) : undefined;
  let d = l(c, m);
  /*#__PURE__*/
  return e(h, {
    children: p ? /*#__PURE__*/i(t, {
      children: [/*#__PURE__*/e(f, {
        children: "USD"
      }), p === "<$0.01" ? /*#__PURE__*/i(g, {
        children: [/*#__PURE__*/e(y, {
          children: "<"
        }), "$0.01"]
      }) : p]
    }) : d
  });
};
const a = ({
  quantities: n,
  tokenPrice: r,
  tokenSymbol: s = "SOL",
  tokenDecimals: l = 9
}) => {
  let p = n.reduce((e, i) => e + i, 0n);
  let d = r && s === "SOL" && l === 9 ? m(p, r) : undefined;
  let a = s === "SOL" && l === 9 ? c(p) : `${o(p, l)} ${s}`;
  /*#__PURE__*/
  return e(h, {
    children: d ? /*#__PURE__*/e(t, {
      children: d === "<$0.01" ? /*#__PURE__*/i(g, {
        children: [/*#__PURE__*/e(y, {
          children: "<"
        }), "$0.01"]
      }) : d
    }) : a
  });
};
let h = /*#__PURE__*/n.span.withConfig({
  displayName: "StyledPriceDisplay",
  componentId: "sc-596cd423-0"
})(["font-size:14px;line-height:140%;display:flex;gap:4px;align-items:center;"]);
let f = /*#__PURE__*/n.span.withConfig({
  displayName: "StyledPriceUnit",
  componentId: "sc-596cd423-1"
})(["font-size:12px;line-height:12px;color:var(--privy-color-foreground-3);"]);
let y = /*#__PURE__*/n.span.withConfig({
  displayName: "TinyLessThan",
  componentId: "sc-596cd423-2"
})(["font-size:10px;"]);
let g = /*#__PURE__*/n.span.withConfig({
  displayName: "FlexCenter",
  componentId: "sc-596cd423-3"
})(["display:flex;align-items:center;"]);
export { p as HeaderPriceDisplay, d as PriceDisplay, a as SolanaPriceDisplay };
