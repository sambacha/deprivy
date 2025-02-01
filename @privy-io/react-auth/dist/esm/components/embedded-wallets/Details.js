import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useState as o } from "react";
import { styled as r } from "styled-components";
const l = r => {
  let [l, d] = o(false); /*#__PURE__*/
  return i(t, {
    children: [r.collapsible ? /*#__PURE__*/e(n, {
      onClick: () => d(!l),
      children: l ? "Hide Details" : "Show Details"
    }) : null, !r.collapsible || l ? /*#__PURE__*/e(c, {
      collapsible: r.collapsible,
      children: r.children
    }) : null]
  });
};
let t = /*#__PURE__*/r.div.withConfig({
  displayName: "DetailsContainer",
  componentId: "sc-fc9c3388-0"
})(["margin-top:56px;"]);
let n = /*#__PURE__*/r.button.withConfig({
  displayName: "ShowDetailsToggle",
  componentId: "sc-fc9c3388-1"
})(["display:flex;justify-content:center;align-items:center;padding:12px 8px;min-width:116px;max-width:116px;&&{margin:0 auto -11px;position:relative;z-index:2;color:var(--privy-color-foreground-3);background:var(--privy-color-background);border:1px solid var(--privy-color-foreground-4);border-radius:var(--privy-border-radius-sm);}font-size:16px;line-height:16px;"]);
let c = /*#__PURE__*/r.div.withConfig({
  displayName: "DetailsList",
  componentId: "sc-fc9c3388-2"
})(["display:flex;flex-direction:column;align-items:center;gap:16px;width:100%;font-size:16px;line-height:16px;&&{border:1px solid var(--privy-color-foreground-4);border-radius:var(--privy-border-radius-md);}padding:16px 12px;padding-top:", ";text-align:left;max-height:310px;"], i => i.collapsible ? "24px" : "16px");
const d = o => /*#__PURE__*/i(a, {
  children: [typeof o.label == "string" ? /*#__PURE__*/e("span", {
    children: o.label
  }) : o.label, typeof o.children == "string" ? /*#__PURE__*/e("span", {
    children: o.children
  }) : o.children]
});
let a = /*#__PURE__*/r.div.withConfig({
  displayName: "StyledDetailsRow",
  componentId: "sc-fc9c3388-3"
})(["display:flex;justify-content:space-between;width:100%;> :first-child{color:var(--privy-color-foreground-3);text-align:left;}> :last-child{color:var(--privy-color-foreground-2);text-align:right;}&& a{color:var(--privy-color-accent);}a:hover{text-decoration:underline;}"]);
function p(e) {
  /*#__PURE__*/return i(s, {
    children: ["1 ETH = ", e.ethToUsd ?? "--", " USD"]
  });
}
let s = /*#__PURE__*/r.div.withConfig({
  displayName: "StyledEthConversionRow",
  componentId: "sc-fc9c3388-4"
})(["color:var(--privy-color-foreground-3);text-align:right;width:100%;"]);
export { l as Details, d as DetailsRow, p as EthConversionRow };
