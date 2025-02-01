import { styled as e } from "styled-components";
const i = /*#__PURE__*/e.div.withConfig({
  displayName: "AppLogoContainer",
  componentId: "sc-a63b1990-0"
})(["display:flex;flex-direction:column;align-items:center;padding:0px 0px 30px;@media (max-width:440px){padding:10px 10px 20px;}"]);
const t = /*#__PURE__*/e.div.withConfig({
  displayName: "Title",
  componentId: "sc-a63b1990-1"
})(["font-size:18px;line-height:30px;text-align:center;font-weight:600;margin-bottom:10px;"]);
const o = /*#__PURE__*/e.div.withConfig({
  displayName: "SubTitle",
  componentId: "sc-a63b1990-2"
})(["font-size:0.875rem;text-align:center;"]);
const n = /*#__PURE__*/e.div.withConfig({
  displayName: "Container",
  componentId: "sc-a63b1990-3"
})(["display:flex;flex-direction:column;align-items:center;gap:10px;flex-grow:1;padding:20px 0;@media (max-width:440px){padding:10px 10px 20px;}"]);
const a = /*#__PURE__*/e.div.withConfig({
  displayName: "List",
  componentId: "sc-a63b1990-4"
})(["display:flex;flex-direction:column;align-items:stretch;gap:0.75rem;padding:1rem 0rem 0rem;flex-grow:1;width:100%;"]);
const r = /*#__PURE__*/e.div.withConfig({
  displayName: "ListItemIcon",
  componentId: "sc-a63b1990-5"
})(["width:25px;display:flex;align-items:center;justify-content:flex-start;> svg{z-index:2;height:25px !important;width:25px !important;color:var(--privy-color-accent);}"]);
const p = /*#__PURE__*/e.div.withConfig({
  displayName: "ListItem",
  componentId: "sc-a63b1990-6"
})(["display:flex;align-items:center;gap:10px;font-size:0.875rem;line-height:1rem;text-align:left;"]);
const d = /*#__PURE__*/e.div.withConfig({
  displayName: "BottomSection",
  componentId: "sc-a63b1990-7"
})(["display:flex;flex-direction:column;gap:10px;padding-top:20px;"]);
const l = /*#__PURE__*/e.div.withConfig({
  displayName: "MethodList",
  componentId: "sc-a63b1990-8"
})(["display:flex;flex-direction:column;align-items:stretch;gap:1rem;padding:1rem 0rem 0rem;flex-grow:1;width:100%;"]);
const c = /*#__PURE__*/e.div.withConfig({
  displayName: "MethodListItem",
  componentId: "sc-a63b1990-9"
})(["display:flex;gap:5px;width:100%;position:relative;"]);
const s = /*#__PURE__*/e.button.withConfig({
  displayName: "RemoveMethodButton",
  componentId: "sc-a63b1990-10"
})(["&&{background-color:transparent;color:var(--privy-color-foreground-3);padding:0 0.75rem;display:flex;align-items:center;height:100%;> svg{z-index:2;height:20px !important;width:20px !important;}}&&:hover{color:var(--privy-color-error);}"]);
const m = /*#__PURE__*/e.div.withConfig({
  displayName: "MethodText",
  componentId: "sc-a63b1990-11"
})(["display:flex;align-items:center;gap:0.5rem;> svg{z-index:2;height:20px !important;width:20px !important;}"]);
const g = /*#__PURE__*/e.div.withConfig({
  displayName: "ExtraText",
  componentId: "sc-a63b1990-12"
})(["display:flex;align-items:center;gap:6px;font-weight:400 !important;color:", ";> svg{z-index:2;height:18px !important;width:18px !important;display:flex !important;align-items:flex-end;}"], e => e.isAccent ? "var(--privy-color-accent)" : "var(--privy-color-foreground-3)");
const x = /*#__PURE__*/e.div.withConfig({
  displayName: "SmsInsecureText",
  componentId: "sc-a63b1990-13"
})(["width:100%;display:flex;justify-content:space-between;"]);
const h = /*#__PURE__*/e.p.withConfig({
  displayName: "TermsText",
  componentId: "sc-a63b1990-14"
})(["text-align:left;width:100%;color:var(--privy-color-foreground-3) !important;"]);
const f = /*#__PURE__*/e.button.withConfig({
  displayName: "PrimaryTextButton",
  componentId: "sc-a63b1990-15"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;user-select:none;&{width:100%;cursor:pointer;border-radius:var(--privy-border-radius-md);font-size:0.875rem;line-height:1rem;font-style:normal;font-weight:500;line-height:22px;letter-spacing:-0.016px;}&&{color:", ";background-color:transparent;padding:0.5rem 0px;}&:hover{text-decoration:underline;}"], e => e.theme === "dark" ? "var(--privy-color-foreground-2)" : "var(--privy-color-accent)");
const y = /*#__PURE__*/e.div.withConfig({
  displayName: "IconWrapper",
  componentId: "sc-a63b1990-16"
})(["display:flex;align-items:center;justify-content:center;color:var(--privy-color-accent);width:100%;> svg{z-index:2;width:3rem;height:3rem;}"]);
const v = /*#__PURE__*/e.div.withConfig({
  displayName: "ErrorMessage",
  componentId: "sc-a63b1990-17"
})(["color:var(--privy-color-error);"]);
export { i as AppLogoContainer, d as BottomSection, n as Container, v as ErrorMessage, g as ExtraText, y as IconWrapper, a as List, p as ListItem, r as ListItemIcon, l as MethodList, c as MethodListItem, m as MethodText, f as PrimaryTextButton, s as RemoveMethodButton, x as SmsInsecureText, o as SubTitle, h as TermsText, t as Title };
