import { jsxs as r, jsx as e } from "react/jsx-runtime";
import o from "@heroicons/react/24/outline/InformationCircleIcon";
import { styled as t } from "styled-components";
const i = ({
  children: t,
  theme: i
}) => /*#__PURE__*/r(a, {
  $theme: i,
  children: [/*#__PURE__*/e(o, {
    width: "1.25rem",
    color: i === "dark" ? "var(--privy-color-accent-light)" : "var(--privy-color-accent-dark)",
    style: {
      minWidth: "1.25rem"
    }
  }), t]
});
let a = /*#__PURE__*/t.div.withConfig({
  displayName: "Container",
  componentId: "sc-dc8a0871-0"
})(["display:flex;gap:0.5rem;background-color:", ";color:var(--privy-color-foreground);align-items:flex-start;text-align:left;font-size:0.8125rem;font-weight:400;line-height:1.125rem;padding:0.75rem;&&{border-radius:var(--privy-border-radius-sm);border:1px solid var(--privy-color-accent);}"], r => r.$theme === "dark" ? "var(--privy-color-accent-darkest)" : "var(--privy-color-accent-lightest)");
export { i as InfoBanner };
