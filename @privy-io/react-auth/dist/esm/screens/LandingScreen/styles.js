import { styled as o, css as i } from "styled-components";
const t = /*#__PURE__*/o.div.withConfig({
  displayName: "Grow",
  componentId: "sc-b51c7c74-0"
})(["text-align:left;flex-grow:1;"]);
const n = /*#__PURE__*/o.div.withConfig({
  displayName: "AlignBottom",
  componentId: "sc-b51c7c74-1"
})(["display:flex;flex-direction:column;justify-content:flex-end;flex-grow:1;"]);
const e = /*#__PURE__*/o.div.withConfig({
  displayName: "LoginMethodContainer",
  componentId: "sc-b51c7c74-2"
})(["display:flex;flex-direction:column;gap:12px;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"]);
const r = /*#__PURE__*/o(e).withConfig({
  displayName: "LoginMethodContainerWithScrollShadows",
  componentId: "sc-b51c7c74-3"
})(["", " background-repeat:no-repeat;background-size:100% 32px,100% 16px;background-attachment:local,scroll;"], o => o.$colorScheme === "light" ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;" : o.$colorScheme === "dark" ? "background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;" : undefined);
let a = /*#__PURE__*/i(["&&{width:100%;font-size:16px;line-height:24px;@media (min-width:440px){font-size:14px;}display:flex;gap:12px;align-items:center;padding:12px 16px;border:1px solid var(--privy-color-foreground-4) !important;border-radius:var(--privy-border-radius-mdlg);transition:background-color 200ms ease;cursor:pointer;&:hover{background-color:var(--privy-color-background-2);}&:disabled{cursor:pointer;background-color:var(--privy-color-background-2);}svg{height:24px;max-height:24px;max-width:24px;}}"]);
const c = /*#__PURE__*/o.div.withConfig({
  displayName: "Subtitle",
  componentId: "sc-b51c7c74-4"
})(["text-align:center;font-size:14px;margin-bottom:24px;"]);
const d = /*#__PURE__*/o.button.attrs({
  className: "login-method-button"
}).withConfig({
  displayName: "LoginMethodButton",
  componentId: "sc-b51c7c74-5"
})(["", ""], a);
const l = /*#__PURE__*/o.a.withConfig({
  displayName: "LoginMethodButtonLink",
  componentId: "sc-b51c7c74-6"
})(["", ""], a);
const p = /*#__PURE__*/o.div.withConfig({
  displayName: "Hide",
  componentId: "sc-b51c7c74-7"
})(["width:100%;height:100%;min-height:inherit;display:flex;flex-direction:column;", ""], o => o.$if ? "display: none;" : "");
const g = /*#__PURE__*/o.div.withConfig({
  displayName: "EmptyWalletState",
  componentId: "sc-b51c7c74-8"
})(["width:100%;height:100%;padding:", ";"], o => o.$withPadding ? "64px 0px" : "0px");
const s = /*#__PURE__*/o.div.withConfig({
  displayName: "Header",
  componentId: "sc-b51c7c74-9"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:32px;gap:12px;& h3{font-size:18px;font-style:normal;font-weight:600;line-height:24px;}& p{max-width:300px;font-size:14px;font-style:normal;font-weight:400;line-height:20px;}"]);
export { n as AlignBottom, g as EmptyWalletState, t as Grow, s as Header, p as Hide, d as LoginMethodButton, l as LoginMethodButtonLink, e as LoginMethodContainer, r as LoginMethodContainerWithScrollShadows, c as Subtitle };
