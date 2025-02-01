import { jsxs as e, jsx as o } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/CheckIcon";
import { useState as t } from "react";
import { styled as i } from "styled-components";
import { Copy as n } from "../svg/copy.mjs";
let c = /*#__PURE__*/i.button.withConfig({
  displayName: "CopyTextButton",
  componentId: "sc-22be5be1-0"
})(["display:flex;align-items:center;gap:0.5rem;&:hover{text-decoration:underline;}svg{width:0.875rem;height:0.875rem;}"]);
let p = /*#__PURE__*/i.span.withConfig({
  displayName: "CopiedText",
  componentId: "sc-22be5be1-1"
})(["display:flex;align-items:center;gap:0.25rem;font-size:0.875rem;color:var(--privy-color-foreground-2);"]);
let l = /*#__PURE__*/i(r).withConfig({
  displayName: "GreenCheck",
  componentId: "sc-22be5be1-2"
})(["color:var(--privy-color-success);"]);
let m = /*#__PURE__*/i(n).withConfig({
  displayName: "StyledCopy",
  componentId: "sc-22be5be1-3"
})(["color:var(--privy-color-foreground-3);opactiy:0.5;"]);
function a({
  children: r,
  iconOnly: i,
  value: n,
  hideCopyIcon: a
}) {
  let [s, d] = t(false); /*#__PURE__*/
  return e(c, {
    onClick: () => {
      navigator.clipboard.writeText(n || r).catch(console.error);
      d(true);
      setTimeout(() => d(false), 1500);
    },
    children: [r, " ", s ? /*#__PURE__*/e(p, {
      children: [/*#__PURE__*/o(l, {}), " ", !i && "Copied"]
    }) : !a && /*#__PURE__*/o(m, {})]
  });
}
export { a as CopyableText };
