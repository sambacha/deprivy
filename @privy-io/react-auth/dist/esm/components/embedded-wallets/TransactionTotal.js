import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { styled as t } from "styled-components";
import { PriceDisplay as o } from "./PriceDisplay.mjs";
import { getNativeCurrencyFromWei as n } from "../../lib/ethers.mjs";
import { FlexContainer as r } from "../Layouts.mjs";
import "viem";
import "../../lib/solana/transaction.mjs";
import "../../lib/solana/index.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../hooks/internal-context.mjs";
import "react";
import "../../hooks/index.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
const s = ({
  gas: t,
  tokenPrice: s,
  tokenSymbol: l
}) => /*#__PURE__*/i(r, {
  style: {
    paddingBottom: "12px"
  },
  children: [/*#__PURE__*/i(m, {
    children: [/*#__PURE__*/e(p, {
      children: "Est. Fees"
    }), /*#__PURE__*/e("div", {
      children: /*#__PURE__*/e(o, {
        weiQuantities: [BigInt(t)],
        tokenPrice: s,
        tokenSymbol: l
      })
    })]
  }), s && /*#__PURE__*/e(c, {
    children: `${n(BigInt(t), l)}`
  })]
});
const l = ({
  value: t,
  gas: s,
  tokenPrice: l,
  tokenSymbol: a
}) => {
  let d = BigInt(t ?? 0) + BigInt(s); /*#__PURE__*/
  return i(r, {
    children: [/*#__PURE__*/i(m, {
      children: [/*#__PURE__*/e(p, {
        children: "Total (including fees)"
      }), /*#__PURE__*/e("div", {
        children: /*#__PURE__*/e(o, {
          weiQuantities: [BigInt(t || 0), BigInt(s)],
          tokenPrice: l,
          tokenSymbol: a
        })
      })]
    }), l && /*#__PURE__*/e(c, {
      children: n(d, a)
    })]
  });
};
let m = /*#__PURE__*/t.div.withConfig({
  displayName: "TransactionTotalRow",
  componentId: "sc-f8ef9b74-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-top:4px;"]);
let c = /*#__PURE__*/t.div.withConfig({
  displayName: "ValueConversionRow",
  componentId: "sc-f8ef9b74-1"
})(["display:flex;flex-direction:row;height:12px;font-size:12px;line-height:12px;color:var(--privy-color-foreground-3);font-weight:400;"]);
let p = /*#__PURE__*/t.div.withConfig({
  displayName: "TotalText",
  componentId: "sc-f8ef9b74-2"
})(["font-size:14px;line-height:22.4px;font-weight:400;"]);
export { s as TransactionFeeRow, l as TransactionTotal };
