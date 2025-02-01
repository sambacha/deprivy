import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { styled as i } from "styled-components";
const o = () => /*#__PURE__*/e(n, {
  children: /*#__PURE__*/t(r, {
    children: [/*#__PURE__*/e(a, {}), /*#__PURE__*/e(d, {})]
  })
});
let n = /*#__PURE__*/i.div.withConfig({
  displayName: "LoadingContainer",
  componentId: "sc-85b54ede-0"
})(["display:flex;justify-content:center;align-items:center;flex-grow:1;margin:12px;padding:16px;@media all and (display-mode:standalone){margin-bottom:30px;}"]);
let r = /*#__PURE__*/i.div.withConfig({
  displayName: "SpinnerContainer",
  componentId: "sc-85b54ede-1"
})(["position:relative;height:140px;width:140px;opacity:1;animation:fadein 200ms ease;"]);
let a = /*#__PURE__*/i.div.withConfig({
  displayName: "CircleFixed",
  componentId: "sc-85b54ede-2"
})(["position:absolute;top:0;right:0;bottom:0;left:0;width:140px;height:140px;&&{border:4px solid var(--privy-color-accent-light);border-radius:50%;}"]);
let d = /*#__PURE__*/i.div.withConfig({
  displayName: "CircleRotate",
  componentId: "sc-85b54ede-3"
})(["position:absolute;top:0;right:0;bottom:0;left:0;width:140px;height:140px;animation:spin 1200ms linear infinite;&&{border:4px solid;border-color:var(--privy-color-accent) transparent transparent transparent;border-radius:50%;}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"]);
export { o as FullScreenLoadingSpinner };
