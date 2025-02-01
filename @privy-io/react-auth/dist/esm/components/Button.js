import { jsx as r, jsxs as o } from "react/jsx-runtime";
import { styled as e, css as i } from "styled-components";
import { ButtonLoader as a } from "./Loader.mjs";
const n = /*#__PURE__*/e.button.withConfig({
  displayName: "Button",
  componentId: "sc-e15d0508-0"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;user-select:none;&{width:100%;cursor:pointer;border-radius:var(--privy-border-radius-md);font-size:1rem;font-style:normal;font-weight:500;line-height:22px;letter-spacing:-0.016px;}&&{padding:12px 16px;}"]);
const c = ({
  children: e,
  loading: i,
  disabled: n,
  success: c,
  loadingText: d = "Loading...",
  ...l
}) => /*#__PURE__*/r(s, {
  disabled: i || n,
  success: c,
  ...l,
  children: i ? /*#__PURE__*/o("span", {
    children: [/*#__PURE__*/r(a, {}), d ? /*#__PURE__*/r("span", {
      children: d
    }) : null]
  }) : e
});
const d = ({
  children: o,
  loading: e,
  disabled: i,
  ...n
}) => /*#__PURE__*/r(l, {
  disabled: i,
  ...n,
  children: e ? /*#__PURE__*/r(a, {
    color: "var(--privy-color-foreground-accent)"
  }) : o
});
let l = /*#__PURE__*/e(n).withConfig({
  displayName: "StyledPrimaryButtonWithoutGray",
  componentId: "sc-e15d0508-1"
})(["position:relative;&&{background-color:var(--privy-color-accent);color:var(--privy-color-foreground-accent);transition:background-color 200ms ease;}&:hover{background-color:var(--privy-color-accent-dark);}&:active{background-color:var(--privy-color-accent-dark);}&:disabled,&:hover:disabled,&:active:disabled{cursor:not-allowed;pointer-events:none;color:var(--privy-color-foreground-accent);background-color:var(--privy-color-accent-dark);}"]);
const t = ({
  children: e,
  loading: i,
  disabled: n,
  loadingText: c = "Loading...",
  ...d
}) => /*#__PURE__*/r(s, {
  as: "a",
  disabled: i || n,
  ...d,
  children: i ? /*#__PURE__*/o("span", {
    children: [/*#__PURE__*/r(a, {}), c ? /*#__PURE__*/r("span", {
      children: c
    }) : null]
  }) : e
});
let s = /*#__PURE__*/e(n).withConfig({
  displayName: "StyledPrimaryButton",
  componentId: "sc-e15d0508-2"
})(["position:relative;&&{background-color:", ";color:var(--privy-color-foreground-accent);transition:background-color 200ms ease;}&:hover{background-color:", ";}&:active{background-color:", ";}&:hover:disabled,&:active:disabled{background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-3);cursor:not-allowed;}", " > span{display:flex;align-items:center;gap:8px;opacity:1;animation:fadein 200ms ease;}"], r => r.warn ? "var(--privy-color-error)" : r.success ? "var(--privy-color-success)" : "var(--privy-color-accent)", r => r.warn ? "var(--privy-color-error)" : r.success ? "var(--privy-color-success)" : "var(--privy-color-accent-dark)", r => r.warn ? "var(--privy-color-error)" : r.success ? "var(--privy-color-success)" : "var(--privy-color-accent-dark)", r => r.disabled ? /*#__PURE__*/i(["&&&,&&&:hover,&&&:active{background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-3);cursor:not-allowed;pointer-events:none;}"]) : "");
const p = ({
  children: e,
  loading: i,
  disabled: n,
  loadingText: c = "Loading...",
  ...d
}) => /*#__PURE__*/r(v, {
  disabled: i || n,
  ...d,
  children: i ? /*#__PURE__*/o("span", {
    children: [/*#__PURE__*/r(a, {}), c ? /*#__PURE__*/r("span", {
      children: c
    }) : null]
  }) : e
});
let v = /*#__PURE__*/e(n).withConfig({
  displayName: "StyledSecondaryButton",
  componentId: "sc-e15d0508-3"
})(["&&{border-width:1px;border-color:", ";color:var(--privy-color-foreground);transition:border-color 200ms ease;}&:hover,&:active{border-color:", ";}&:hover:disabled,&:active:disabled{border-color:var(--privy-color-foreground-accent);color:var(--privy-color-foreground-3);cursor:not-allowed;}> span{display:flex;align-items:center;gap:8px;opacity:1;animation:fadein 200ms ease;}"], r => r.warn ? "var(--privy-color-error)" : "var(--privy-color-foreground-4)", r => r.warn ? "var(--privy-color-error)" : "var(--privy-color-foreground-3)");
const u = /*#__PURE__*/e.button.withConfig({
  displayName: "SoftCtaButton",
  componentId: "sc-e15d0508-4"
})(["&&{padding:12px 16px;font-weight:500;text-align:center;color:var(--privy-color-foreground-accent);background-color:var(--privy-color-accent);border-radius:var(--privy-border-radius-sm);min-width:144px;opacity:", ";transition:opacity 200ms ease,background-color 200ms ease,color 200ms ease;user-select:none;", " &:hover{background-color:var(--privy-color-accent-dark);}&:active{background-color:var(--privy-color-accent-dark);}&:hover:disabled,&:active:disabled{background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-3);cursor:not-allowed;}}"], r => r.invisible ? "0" : "1", r => r.invisible && /*#__PURE__*/i(["pointer-events:none;"]));
const g = /*#__PURE__*/e.div.withConfig({
  displayName: "FixedButtonContainer",
  componentId: "sc-e15d0508-5"
})(["height:44px;"]);
const y = ({
  children: e,
  onClick: i,
  disabled: n,
  isSubmitting: c,
  ...d
}) => /*#__PURE__*/o(b, {
  $isSubmitting: c,
  onClick: i,
  disabled: n,
  ...d,
  children: [/*#__PURE__*/r("span", {
    children: e
  }), /*#__PURE__*/r("span", {
    children: /*#__PURE__*/r(a, {})
  })]
});
let b = /*#__PURE__*/e.button.withConfig({
  displayName: "StyledEmbeddedButton",
  componentId: "sc-e15d0508-6"
})(["&&{color:var(--privy-color-accent);font-size:16px;font-style:normal;font-weight:500;line-height:24px;cursor:pointer;border-radius:0px var(--privy-border-radius-mdlg) var(--privy-border-radius-mdlg) 0px;border:none;transition:color 200ms ease;@media (min-width:441px){font-size:14px;}:hover{color:var(--privy-color-accent-dark);}&& > :first-child{opacity:", ";}&& > :last-child{position:absolute;display:flex;top:50%;left:50%;transform:translate3d(-50%,-50%,0);opacity:", ";}:disabled,:hover:disabled{color:var(--privy-color-foreground-3);cursor:not-allowed;}}"], r => r.$isSubmitting ? 0 : 1, r => r.$isSubmitting ? 1 : 0);
export { n as Button, y as EmbeddedButton, g as FixedButtonContainer, c as PrimaryButton, t as PrimaryButtonLink, d as PrimaryButtonWithoutGray, p as SecondaryButton, u as SoftCtaButton };
