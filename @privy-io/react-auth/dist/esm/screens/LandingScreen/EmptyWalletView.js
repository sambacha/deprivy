import { jsx as e, jsxs as o } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import { EmptyWalletState as t, Header as l } from "./styles.mjs";
import "styled-components";
const a = ({
  chainType: a,
  withPadding: n
}) => {
  let i = "";
  i = a === "ethereum-only" || a === "ethereum-and-solana" ? "Rainbow, Phantom, or Coinbase Wallet" : "Phantom or Solflare";
  return /*#__PURE__*/e(t, {
    $withPadding: n,
    children: /*#__PURE__*/o(l, {
      children: [/*#__PURE__*/e(r, {
        style: {
          color: "var(--privy-color-warn)",
          height: 48,
          width: 48
        }
      }), /*#__PURE__*/e("h3", {
        children: "No wallets available"
      }), /*#__PURE__*/o("p", {
        children: ["Please download an external wallet provider, like ", i, "."]
      })]
    })
  }, "empty-wallet-state");
};
export { a as EmptyWalletView };
