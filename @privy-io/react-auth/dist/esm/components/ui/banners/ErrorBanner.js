import { jsxs as r, jsx as e } from "react/jsx-runtime";
import o from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import { styled as i } from "styled-components";
const t = ({
  children: i,
  theme: t
}) => /*#__PURE__*/r(a, {
  $theme: t,
  children: [/*#__PURE__*/e(o, {
    width: "3rem",
    color: "var(--privy-color-error)"
  }), i]
});
let a = /*#__PURE__*/i.div.withConfig({
  displayName: "Container",
  componentId: "sc-5400b18f-0"
})(["display:flex;gap:0.5rem;", " align-items:flex-start;text-align:left;padding:0.5rem 0.75rem;font-size:0.75rem;font-weight:400;line-height:1.125rem;padding:0.5rem 0.75rem;&&{border:1px solid var(--privy-color-error);border-radius:var(--privy-border-radius-sm);}"], r => r.$theme === "dark" ? "color: var(--privy-color-error);" : "background-color: var(--privy-color-error-light);");
export { t as ErrorBanner };
