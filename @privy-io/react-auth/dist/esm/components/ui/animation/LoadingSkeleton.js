import { css as r, keyframes as o } from "styled-components";
let i = /*#__PURE__*/o(["from,to{background:var(--privy-color-foreground-4);color:var(--privy-color-foreground-4);}50%{background:var(--privy-color-foreground-accent);color:var(--privy-color-foreground-accent);}"]);
const n = /*#__PURE__*/r(["", ""], o => o.$isLoading ? /*#__PURE__*/r(["width:35%;animation:", " 2s linear infinite;border-radius:var(--privy-border-radius-sm);"], i) : "");
export { n as LoadingSkeleton };
