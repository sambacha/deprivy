import { jsxs as r, jsx as e } from "react/jsx-runtime";
import o from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import { styled as i } from "styled-components";
const t = ({
  children: i,
  theme: t
}) => /*#__PURE__*/r(a, {
  $theme: t,
  children: [/*#__PURE__*/e(o, {
    width: "1.25rem",
    color: t === "dark" ? "#FDE68A" : "var(--privy-color-warn)"
  }), i]
});
let a = /*#__PURE__*/i.div.withConfig({
  displayName: "Container",
  componentId: "sc-97f152b3-0"
})(["display:flex;gap:0.5rem;background-color:", ";", " align-items:flex-start;text-align:left;padding:0.5rem 0.75rem;font-size:0.8125rem;font-weight:400;line-height:1.125rem;padding:0.75rem;&&{border-radius:var(--privy-border-radius-sm);}"], r => r.$theme === "dark" ? "var(--privy-color-background-2)" : "var(--privy-color-warn-light)", r => r.$theme === "dark" ? "color: #FDE68A;" : "");
export { t as WarningBanner };
