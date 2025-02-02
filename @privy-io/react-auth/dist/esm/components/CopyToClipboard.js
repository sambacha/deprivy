import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { useState as e } from "react";
import { styled as t } from "styled-components";
import { Checkmark as i } from "../svg/checkmark.mjs";
import { Copy as p } from "../svg/copy.mjs";
const n = t => {
  let [n, m] = e(false); /*#__PURE__*/
  return o(a, {
    color: t.color,
    onClick: () => {
      m(true);
      navigator.clipboard.writeText(t.text);
      setTimeout(() => m(false), 1500);
    },
    justCopied: n,
    children: [n ? /*#__PURE__*/r(i, {
      style: {
        height: "14px",
        width: "14px"
      },
      strokeWidth: "2"
    }) : /*#__PURE__*/r(p, {
      style: {
        height: "14px",
        width: "14px"
      }
    }), n ? "Copied" : "Copy", " ", t.itemName ? t.itemName : "to Clipboard"]
  });
};
let a = /*#__PURE__*/t.button.withConfig({
  displayName: "StyledCopytoClipboardButton",
  componentId: "sc-9c2ee64b-0"
})(["display:flex;align-items:center;gap:6px;&&{margin:8px 2px;font-size:14px;color:", ";font-weight:", ";transition:color 350ms ease;:focus,:active{background-color:transparent;border:none;outline:none;box-shadow:none;}:hover{color:", ";}:active{color:'var(--privy-color-foreground)';font-weight:medium;}@media (max-width:440px){margin:12px 2px;}}svg{width:14px;height:14px;}"], o => o.justCopied ? "var(--privy-color-foreground)" : o.color || "var(--privy-color-foreground-3)", o => o.justCopied ? "medium" : "normal", o => o.justCopied ? "var(--privy-color-foreground)" : "var(--privy-color-foreground-2)");
export { n as CopytoClipboardButton };
