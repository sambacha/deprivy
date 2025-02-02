import { jsx as r } from "react/jsx-runtime";
import { styled as o } from "styled-components";
import { usePrivyContext as t } from "../../hooks/privy-context.mjs";
import { useFundWallet as e } from "../../hooks/useFundWallet.mjs";
import { useWallets as s } from "../../hooks/useWallets.mjs";
import "react";
import "../../hooks/index.mjs";
import "../../hooks/events-context.mjs";
import "../../hooks/internal-context.mjs";
let n = /*#__PURE__*/o.button.withConfig({
  displayName: "Button",
  componentId: "sc-badd9796-0"
})(["display:flex;align-items:center;justify-content:center;background:var(--privy-color-accent);color:var(--privy-color-background);border-radius:var(--privy-border-radius-md);height:40px;margin:0px 1rem;"]);
function i() {
  let {
    user: o
  } = t();
  let {
    wallets: i
  } = s();
  let {
    fundWallet: l
  } = e();
  if (!o?.wallet?.address) {
    return null;
  }
  let d = i.find(r => r.address === o.wallet.address);
  if (d) {
    return /*#__PURE__*/r(n, {
      onClick: () => l(d.address),
      disabled: !o.wallet,
      children: "Add funds"
    });
  } else {
    return null;
  }
}
export { i as AddFundsButton };
