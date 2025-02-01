import { jsx as e, jsxs as t } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/CheckIcon";
import o from "@heroicons/react/24/outline/Square2StackIcon";
import { useState as i, useEffect as c } from "react";
import { styled as n } from "styled-components";
import { formatWalletAddress as s } from "../../../utils/index.mjs";
import "../../../connectors/get-legacy-injected-providers.mjs";
import "../../../connectors/is-wallet-installed.mjs";
import "../../../errors.mjs";
import "ofetch";
import "../../../utils/eth/getPublicClient.mjs";
import "viem";
const a = ({
  address: r,
  showCopyIcon: o,
  url: n,
  className: a
}) => {
  let [p, d] = i(false);
  c(() => {
    if (p) {
      let e = setTimeout(() => d(false), 2000);
      return () => clearTimeout(e);
    }
  }, [p]);
  if (n) {
    return /*#__PURE__*/e("a", {
      title: r,
      className: a,
      href: `${n}/address/${r}`,
      target: "_blank",
      children: s(r)
    });
  } else {
    return /*#__PURE__*/t("button", {
      title: r,
      className: a,
      onClick: e => {
        e.stopPropagation();
        return navigator.clipboard.writeText(r).then(() => d(true)).catch(console.error);
      },
      children: [s(r), o && /*#__PURE__*/e(p ? l : m, {})]
    });
  }
};
let m = /*#__PURE__*/n(o).withConfig({
  displayName: "StyledSquare2StackIcon",
  componentId: "sc-6eaa0c94-0"
})(["&&{display:inline;}stroke-width:2;height:0.875rem;width:0.875rem;margin-left:0.125rem;color:var(--privy-color-foreground-3);"]);
let l = /*#__PURE__*/n(r).withConfig({
  displayName: "StyledCheckIcon",
  componentId: "sc-6eaa0c94-1"
})(["&&{display:inline;}stroke-width:2;height:0.875rem;width:0.875rem;margin-left:0.125rem;color:var(--privy-color-success);"]);
export { a as Address };
