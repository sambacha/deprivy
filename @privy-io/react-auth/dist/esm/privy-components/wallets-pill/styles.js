import { styled as r } from "styled-components";
const e = /*#__PURE__*/r.div.withConfig({
  displayName: "Header",
  componentId: "sc-179b3d3f-0"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const o = /*#__PURE__*/r.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-179b3d3f-1"
})(["padding:0.25rem;height:30px;width:30px;display:flex;align-items:center;justify-content:center;border-radius:var(--privy-border-radius-full);background:var(--privy-color-background-2);"]);
const i = /*#__PURE__*/r.div.withConfig({
  displayName: "WalletIconContainer",
  componentId: "sc-179b3d3f-2"
})(["position:relative;&::after{content:' ';border-radius:var(--privy-border-radius-full);height:6px;width:6px;background-color:var(--privy-color-success);position:absolute;right:-3px;bottom:-3px;}& > img{width:100%;max-width:1.5rem;max-height:1.5rem;border-radius:0.25rem;}"]);
const a = /*#__PURE__*/r.img.withConfig({
  displayName: "WalletIcon",
  componentId: "sc-179b3d3f-3"
})(["width:100%;max-width:1.5rem;max-height:1.5rem;border-radius:0.25rem;"]);
const t = /*#__PURE__*/r.span.withConfig({
  displayName: "Chip",
  componentId: "sc-179b3d3f-4"
})(["display:flex;gap:0.25rem;align-items:center;padding:0.25rem 0.5rem;font-size:0.75rem;font-weight:500;line-height:1.125rem;border-radius:var(--privy-border-radius-sm);background-color:var(--privy-color-background-3);svg{width:100%;max-width:1rem;max-height:1rem;stroke-width:2;}"]);
const n = /*#__PURE__*/r.div.withConfig({
  displayName: "ScrollContainer",
  componentId: "sc-179b3d3f-5"
})(["display:flex;flex-direction:column;gap:1rem;max-height:24rem;overflow-y:scroll;&::-webkit-scrollbar{display:none;}scrollbar-gutter:stable both-edges;scrollbar-width:none;-ms-overflow-style:none;", " background-repeat:no-repeat;background-size:100% 32px,100% 16px;background-attachment:local,scroll;"], r => r.$colorScheme === "light" ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;" : r.$colorScheme === "dark" ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;" : undefined);
export { t as Chip, o as CloseButton, e as Header, n as ScrollContainer, a as WalletIcon, i as WalletIconContainer };
