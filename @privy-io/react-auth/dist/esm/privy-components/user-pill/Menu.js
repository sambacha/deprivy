import { jsx as e } from "react/jsx-runtime";
import { styled as i, css as n } from "styled-components";
import { X as o } from "../shared/X.mjs";
import { PopoverClose as t } from "./Popover.mjs";
import "@floating-ui/react";
import "react";
const r = /*#__PURE__*/i.div.withConfig({
  displayName: "MenuContainer",
  componentId: "sc-ee195031-0"
})(["--background:var(--privy-color-background);--foreground:var(--privy-color-foreground);background:var(--background);border-radius:var(--privy-border-radius-md);box-shadow:0px 0px 20px -3px rgba(0,0,0,0.1),0px 4px 10px -3px rgba(0,0,0,0.08);color:var(--foreground);display:flex;flex-direction:column;gap:1.25rem;width:22.5rem;"]);
const a = /*#__PURE__*/i.div.withConfig({
  displayName: "WalletItemContainer",
  componentId: "sc-ee195031-1"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;"]);
const d = /*#__PURE__*/i.div.withConfig({
  displayName: "AccountContainer",
  componentId: "sc-ee195031-2"
})(["display:flex;align-items:center;gap:0.5rem;"]);
const p = /*#__PURE__*/i.div.withConfig({
  displayName: "MenuHeader",
  componentId: "sc-ee195031-3"
})(["position:relative;display:flex;align-items:flex-end;"]);
const s = /*#__PURE__*/i.div.withConfig({
  displayName: "MenuTitle",
  componentId: "sc-ee195031-4"
})(["display:flex;align-items:center;gap:0.5rem;font-size:1.125rem;font-weight:500;line-height:30px;padding-top:2.5rem;padding-left:1.5rem;padding-right:3.375rem;width:100%;"]);
const m = /*#__PURE__*/i.div.withConfig({
  displayName: "MenuContent",
  componentId: "sc-ee195031-5"
})(["display:flex;flex-direction:column;padding:0 0.5rem;gap:0.75rem;"]);
let l = /*#__PURE__*/n(["align-items:center;display:flex;font-size:0.875rem;gap:0.5rem;padding:0 1.5rem;height:34px;width:100%;&:disabled{opacity:0.5;}"]);
const c = /*#__PURE__*/i.button.withConfig({
  displayName: "MenuItemButton",
  componentId: "sc-ee195031-6"
})(["", ""], l);
const g = /*#__PURE__*/i.span.withConfig({
  displayName: "MenuItem",
  componentId: "sc-ee195031-7"
})(["", ""], l);
let f = /*#__PURE__*/i.div.withConfig({
  displayName: "MenuCloseContainer",
  componentId: "sc-ee195031-8"
})(["--size:1.5rem;--offset:1rem;display:flex;align-items:center;justify-content:center;border-radius:var(--privy-border-radius-full);background:var(--privy-color-background-2);height:var(--size);width:var(--size);position:absolute;top:var(--offset);right:var(--offset);"]);
function u() {
  /*#__PURE__*/return e(f, {
    children: /*#__PURE__*/e(t, {
      children: /*#__PURE__*/e(o, {})
    })
  });
}
export { d as AccountContainer, u as MenuClose, r as MenuContainer, m as MenuContent, p as MenuHeader, g as MenuItem, c as MenuItemButton, s as MenuTitle, a as WalletItemContainer };
