import { jsx as o } from "react/jsx-runtime";
import { useState as r } from "react";
import { styled as e } from "styled-components";
const n = e => {
  let [n, i] = r(false); /*#__PURE__*/
  return o(t, {
    color: e.color,
    href: e.url,
    target: "_blank",
    rel: "noreferrer noopener",
    onClick: () => {
      i(true);
      setTimeout(() => i(false), 1500);
    },
    justOpened: n,
    children: e.text
  });
};
let t = /*#__PURE__*/e.a.withConfig({
  displayName: "StyledOpenLinkButton",
  componentId: "sc-4e695c83-0"
})(["display:flex;align-items:center;gap:6px;&&{margin:8px 2px;font-size:14px;color:", ";font-weight:", ";transition:color 350ms ease;:focus,:active{background-color:transparent;border:none;outline:none;box-shadow:none;}:hover{color:", ";}:active{color:'var(--privy-color-foreground)';font-weight:medium;}@media (max-width:440px){margin:12px 2px;}}svg{width:14px;height:14px;}"], o => o.justOpened ? "var(--privy-color-foreground)" : o.color || "var(--privy-color-foreground-3)", o => o.justOpened ? "medium" : "normal", o => o.justOpened ? "var(--privy-color-foreground)" : "var(--privy-color-foreground-2)");
export { n as OpenLinkButton };
