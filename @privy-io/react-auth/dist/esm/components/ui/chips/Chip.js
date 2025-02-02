import { jsx as r } from "react/jsx-runtime";
import { styled as o, css as i, keyframes as e } from "styled-components";
import { LoadingSkeleton as n } from "../animation/LoadingSkeleton.mjs";
const l = ({
  children: o,
  color: i,
  isLoading: e,
  isPulsing: n,
  ...l
}) => /*#__PURE__*/r(a, {
  $color: i,
  $isLoading: e,
  $isPulsing: n,
  ...l,
  children: o
});
let a = /*#__PURE__*/o.span.withConfig({
  displayName: "StyledSpan",
  componentId: "sc-eba15c9-0"
})(["padding:0.125rem 0.5rem;font-size:0.75rem;font-weight:500;line-height:1.125rem;border-radius:var(--privy-border-radius-sm);display:flex;align-items:center;", " ", ""], r => {
  let o;
  let n;
  if (r.$color === "green") {
    o = "var(--privy-color-success-dark)";
    n = "var(--privy-color-success-light)";
  }
  if (r.$color === "red") {
    o = "var(--privy-color-error)";
    n = "var(--privy-color-error-light)";
  }
  if (r.$color === "gray") {
    o = "var(--privy-color-foreground-2)";
    n = "var(--privy-color-background-2)";
  }
  let l = /*#__PURE__*/e(["from,to{background-color:", ";}50%{background-color:rgba(", ",0.8);}"], n, n); /*#__PURE__*/
  return i(["color:", ";background-color:", ";", ";"], o, n, r.$isPulsing && /*#__PURE__*/i(["animation:", " 3s linear infinite;"], l));
}, n);
export { l as Chip };
