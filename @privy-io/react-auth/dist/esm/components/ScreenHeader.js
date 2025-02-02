import { jsx as e, jsxs as t, Fragment as i } from "react/jsx-runtime";
import { styled as n } from "styled-components";
const o = ({
  title: n,
  description: o,
  children: r,
  ...l
}) => /*#__PURE__*/e(d, {
  ...l,
  children: /*#__PURE__*/t(i, {
    children: [/*#__PURE__*/e("h3", {
      children: n
    }), typeof o == "string" ? /*#__PURE__*/e("p", {
      children: o
    }) : o, r]
  })
});
const r = /*#__PURE__*/n(o).withConfig({
  displayName: "PaddedScreenHeader",
  componentId: "sc-523a75d6-0"
})(["margin-bottom:24px;"]);
const l = ({
  title: i,
  description: n,
  icon: o,
  children: r,
  ...l
}) => /*#__PURE__*/t(c, {
  ...l,
  children: [o || null, /*#__PURE__*/e("h3", {
    children: i
  }), n && typeof n == "string" ? /*#__PURE__*/e("p", {
    children: n
  }) : n, r]
});
let d = /*#__PURE__*/n.div.withConfig({
  displayName: "StyledSection",
  componentId: "sc-523a75d6-1"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;text-align:left;gap:8px;width:100%;margin-bottom:24px;&& h3{font-size:17px;color:var(--privy-color-foreground);}&& p{color:var(--privy-color-foreground-2);font-size:14px;}"]);
let c = /*#__PURE__*/n(d).withConfig({
  displayName: "CenteredStyledSection",
  componentId: "sc-523a75d6-2"
})(["align-items:center;text-align:center;gap:16px;h3{margin-bottom:24px;}"]);
export { l as CenteredScreenHeader, r as PaddedScreenHeader, o as ScreenHeader };
