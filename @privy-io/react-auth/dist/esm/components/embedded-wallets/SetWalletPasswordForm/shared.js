import o from "@heroicons/react/24/outline/ArrowPathIcon";
import e from "@heroicons/react/24/outline/EyeIcon";
import i from "@heroicons/react/24/outline/EyeSlashIcon";
import { styled as r, css as t } from "styled-components";
import { PrimaryButton as n, Button as a } from "../../Button.mjs";
import "react/jsx-runtime";
import "../../Loader.mjs";
let c = /*#__PURE__*/t(["font-size:14px;font-style:normal;font-weight:400;line-height:20px;letter-spacing:-0.008px;text-align:left;transition:color 0.1s ease-in;"]);
const p = /*#__PURE__*/r.span.withConfig({
  displayName: "StatusText",
  componentId: "sc-3f6866a9-0"
})(["", " transition:color 0.1s ease-in;color:", ";text-transform:", ";&[aria-hidden='true']{visibility:hidden;}"], c, ({
  error: o
}) => o ? "var(--privy-color-error)" : "var(--privy-color-foreground-3)", ({
  error: o
}) => o ? "" : "capitalize");
const l = /*#__PURE__*/r.div.withConfig({
  displayName: "EmbeddedWalletScreenContainer",
  componentId: "sc-3f6866a9-1"
})(["display:flex;flex-direction:column;justify-content:center;flex-grow:1;"]);
const s = /*#__PURE__*/r(n).withConfig({
  displayName: "NoAnimationPrimaryButton",
  componentId: "sc-3f6866a9-2"
})(["", ""], o => o.hideAnimations && /*#__PURE__*/t(["&&{transition:none;}"]));
let d = /*#__PURE__*/t(["&&{width:100%;border-width:1px;border-radius:var(--privy-border-radius-md);border-color:var(--privy-color-foreground-3);background:var(--privy-color-background);color:var(--privy-color-foreground);padding:12px;font-size:16px;font-style:normal;font-weight:300;line-height:22px;}"]);
const m = /*#__PURE__*/r.input.withConfig({
  displayName: "PasswordInput",
  componentId: "sc-3f6866a9-3"
})(["", " &::placeholder{color:var(--privy-color-foreground-3);font-style:italic;font-size:14px;}overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"], d);
const f = /*#__PURE__*/r.div.withConfig({
  displayName: "PasswordDisplay",
  componentId: "sc-3f6866a9-4"
})(["", ""], d);
const h = /*#__PURE__*/r.div.withConfig({
  displayName: "PasswordContainer",
  componentId: "sc-3f6866a9-5"
})(["position:relative;width:100%;display:flex;align-items:center;justify-content:", ";"], ({
  centered: o
}) => o ? "center" : "space-between");
const g = /*#__PURE__*/r.div.withConfig({
  displayName: "Header",
  componentId: "sc-3f6866a9-6"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:32px 0;gap:4px;& h3{font-size:18px;font-style:normal;font-weight:600;line-height:24px;}& p{max-width:300px;font-size:14px;font-style:normal;font-weight:400;line-height:20px;}"]);
const y = /*#__PURE__*/r.div.withConfig({
  displayName: "Details",
  componentId: "sc-3f6866a9-7"
})(["display:flex;flex-direction:column;gap:10px;padding-bottom:1rem;"]);
const v = /*#__PURE__*/r.div.withConfig({
  displayName: "DetailItem",
  componentId: "sc-3f6866a9-8"
})(["display:flex;text-align:left;align-items:center;gap:8px;max-width:300px;font-size:14px;font-style:normal;font-weight:400;line-height:20px;letter-spacing:-0.008px;margin:0 8px;color:var(--privy-color-foreground-2);> :first-child{min-width:24px;}"]);
const x = /*#__PURE__*/r.div.withConfig({
  displayName: "CompactModalHeight",
  componentId: "sc-3f6866a9-9"
})(["height:var(--privy-height-modal-full);@media (max-width:440px){height:var(--privy-height-modal-compact);}"]);
const u = /*#__PURE__*/r(a).withConfig({
  displayName: "ExportButton",
  componentId: "sc-3f6866a9-10"
})(["display:flex;flex:1;gap:4px;justify-content:center;&&{background:var(--privy-color-background);border-radius:var(--privy-border-radius-md);border-color:var(--privy-color-foreground-3);border-width:1px;}"]);
const w = /*#__PURE__*/r.div.withConfig({
  displayName: "InputRightIcons",
  componentId: "sc-3f6866a9-11"
})(["position:absolute;right:0.5rem;display:flex;flex-direction:row;justify-content:space-around;align-items:center;"]);
const I = /*#__PURE__*/r(o).withConfig({
  displayName: "RegenerateIcon",
  componentId: "sc-3f6866a9-12"
})(["height:1.25rem;width:1.25rem;stroke:var(--privy-color-accent);cursor:pointer;:active{stroke:var(--privy-color-accent-light);}"]);
const b = /*#__PURE__*/r(i).withConfig({
  displayName: "HiddenIcon",
  componentId: "sc-3f6866a9-13"
})(["height:1.25rem;width:1.25rem;stroke:var(--privy-color-accent);cursor:pointer;:active{stroke:var(--privy-color-accent-light);}"]);
const C = /*#__PURE__*/r(e).withConfig({
  displayName: "ShownIcon",
  componentId: "sc-3f6866a9-14"
})(["height:1.25rem;width:1.25rem;stroke:var(--privy-color-accent);cursor:pointer;:active{stroke:var(--privy-color-accent-light);}"]);
const N = /*#__PURE__*/r.progress.withConfig({
  displayName: "StrengthMeter",
  componentId: "sc-3f6866a9-15"
})(["height:4px;width:100%;margin:8px 0;::-webkit-progress-bar{border-radius:8px;background:var(--privy-color-foreground-4);}::-webkit-progress-value{border-radius:8px;transition:all 0.1s ease-out;background:", ";}"], ({
  label: o
}) => (o === "Strong" ? "#78dca6" : o === "Medium" && "var(--privy-color-warn)") || "var(--privy-color-error)");
export { x as CompactModalHeight, v as DetailItem, y as Details, l as EmbeddedWalletScreenContainer, u as ExportButton, g as Header, b as HiddenIcon, w as InputRightIcons, s as NoAnimationPrimaryButton, h as PasswordContainer, f as PasswordDisplay, m as PasswordInput, I as RegenerateIcon, C as ShownIcon, p as StatusText, N as StrengthMeter };
