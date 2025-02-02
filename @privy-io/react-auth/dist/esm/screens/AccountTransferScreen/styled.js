import i from "@heroicons/react/24/outline/ExclamationCircleIcon";
import o from "@heroicons/react/24/outline/Square2StackIcon";
import { styled as e } from "styled-components";
const t = /*#__PURE__*/e.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-aa2e65ff-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;width:100%;padding-bottom:16px;"]);
const n = /*#__PURE__*/e.div.withConfig({
  displayName: "GappedContainer",
  componentId: "sc-aa2e65ff-1"
})(["display:flex;flex-direction:column;&& p{font-size:14px;}width:100%;gap:16px;"]);
const a = /*#__PURE__*/e.div.withConfig({
  displayName: "DisclosedAccountContainer",
  componentId: "sc-aa2e65ff-2"
})(["display:flex;cursor:pointer;align-items:center;width:100%;border:1px solid var(--privy-color-foreground-4) !important;border-radius:var(--privy-border-radius-md);padding:8px 10px;font-size:14px;font-weight:500;gap:8px;"]);
const r = /*#__PURE__*/e(i).withConfig({
  displayName: "StyledExclamationCircleIcon",
  componentId: "sc-aa2e65ff-3"
})(["position:relative;width:", ";height:", ";color:var(--privy-color-foreground-3);margin-left:auto;"], i => `${i.iconSize}px`, i => `${i.iconSize}px`);
const p = /*#__PURE__*/e(o).withConfig({
  displayName: "StyledCopyIcon",
  componentId: "sc-aa2e65ff-4"
})(["position:relative;width:15px;height:15px;color:var(--privy-color-foreground-3);margin-left:auto;"]);
const l = /*#__PURE__*/e.ol.withConfig({
  displayName: "ListContainer",
  componentId: "sc-aa2e65ff-5"
})(["display:flex;flex-direction:column;font-size:14px;width:100%;text-align:left;"]);
const c = /*#__PURE__*/e.li.withConfig({
  displayName: "ListItem",
  componentId: "sc-aa2e65ff-6"
})(["font-size:14px;list-style-type:auto;list-style-position:outside;margin-left:1rem;margin-bottom:0.5rem;&:last-child{margin-bottom:0;}"]);
const d = /*#__PURE__*/e.div.withConfig({
  displayName: "CircleContainer",
  componentId: "sc-aa2e65ff-7"
})(["position:relative;width:60px;height:60px;margin:10px;display:flex;justify-content:center;align-items:center;"]);
export { d as CircleContainer, t as ConnectContainer, a as DisclosedAccountContainer, n as GappedContainer, l as ListContainer, c as ListItem, p as StyledCopyIcon, r as StyledExclamationCircleIcon };
