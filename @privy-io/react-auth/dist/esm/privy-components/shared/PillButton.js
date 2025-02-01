import { styled as r } from "styled-components";
const o = /*#__PURE__*/r.button.withConfig({
  displayName: "PillButton",
  componentId: "sc-163b2a35-0"
})(["--size:", ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:flex;align-items:center;flex-shrink:0;gap:0.5rem;justify-content:center;font-size:0.875rem;transition:color 0.2s ease-in-out,background 0.2s ease-in-out;", " ", ""], ({
  $size: r
}) => `${r}px`, ({
  $background: r
}) => r === "secondary" ? "\n      background: var(--privy-color-background-2);\n      color: var(--privy-color-foreground-2);\n      &:hover {\n        color: var(--privy-color-foreground-1);\n      }\n      " : "\n      background: var(--privy-color-accent);\n      color: var(--privy-color-foreground-accent);\n      &:hover {\n        background: var(--privy-color-accent-dark);\n      }\n      ", ({
  $variant: r
}) => r === "rounded" ? "\n    border-radius: var(--privy-border-radius-full);\n    width: var(--size);\n    height: var(--size);\n    " : r === "default" ? "\n    border-radius: var(--privy-border-radius-md);\n    padding: 0 1rem;\n    height: 44px;\n    " : undefined);
export { o as PillButton };
