import { styled as e } from "styled-components";
const i = /*#__PURE__*/e.div.withConfig({
  displayName: "BottomPusherContainer",
  componentId: "sc-cb963810-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;margin-top:auto;gap:16px;flex-grow:100;"]);
const t = /*#__PURE__*/e.div.withConfig({
  displayName: "CenteredItem",
  componentId: "sc-cb963810-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;flex-grow:1;width:100%;"]);
const o = /*#__PURE__*/e.div.withConfig({
  displayName: "HorizontallyCenteredItem",
  componentId: "sc-cb963810-2"
})(["display:flex;flex-direction:column;align-items:center;width:100%;"]);
const n = /*#__PURE__*/e(t).withConfig({
  displayName: "CenteredItemWithPadding",
  componentId: "sc-cb963810-3"
})(["padding:20px 0;"]);
const d = /*#__PURE__*/e(t).withConfig({
  displayName: "CenteredItemWithGap",
  componentId: "sc-cb963810-4"
})(["gap:16px;"]);
const c = /*#__PURE__*/e.div.withConfig({
  displayName: "FlexContainer",
  componentId: "sc-cb963810-5"
})(["display:flex;flex-direction:column;width:100%;"]);
const a = /*#__PURE__*/e.div.withConfig({
  displayName: "FixedGappedContainer",
  componentId: "sc-cb963810-6"
})(["display:flex;flex-direction:column;gap:8px;"]);
const r = /*#__PURE__*/e.div.withConfig({
  displayName: "FullHeightFlexContainer",
  componentId: "sc-cb963810-7"
})(["display:flex;flex-direction:column;justify-content:space-between;height:100%;"]);
const l = /*#__PURE__*/e.div.withConfig({
  displayName: "StyledCalloutSection",
  componentId: "sc-cb963810-8"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;text-align:left;gap:8px;padding:16px;margin-top:16px;margin-bottom:16px;width:100%;background:var(--privy-color-background-2);border-radius:var(--privy-border-radius-md);&& h4{color:var(--privy-color-foreground-3);font-size:14px;text-decoration:underline;font-weight:medium;}&& p{color:var(--privy-color-foreground-3);font-size:14px;}"]);
const p = /*#__PURE__*/e.div.withConfig({
  displayName: "RefactorSpacerTop",
  componentId: "sc-cb963810-9"
})(["height:16px;"]);
const s = /*#__PURE__*/e.div.withConfig({
  displayName: "RefactorSpacerBottom",
  componentId: "sc-cb963810-10"
})(["height:12px;"]);
const m = /*#__PURE__*/e.div.withConfig({
  displayName: "RelativeContainer",
  componentId: "sc-cb963810-11"
})(["position:relative;"]);
const f = /*#__PURE__*/e.div.withConfig({
  displayName: "ConfigurableSpacer",
  componentId: "sc-cb963810-12"
})(["height:", "px;"], e => e.height ?? "12");
const g = /*#__PURE__*/e.div.withConfig({
  displayName: "Circle",
  componentId: "sc-cb963810-13"
})(["background-color:var(--privy-color-accent);display:flex;justify-content:center;align-items:center;border-radius:50%;border-color:white;border-width:2px !important;"]);
export { i as BottomPusherContainer, t as CenteredItem, d as CenteredItemWithGap, n as CenteredItemWithPadding, g as Circle, f as ConfigurableSpacer, a as FixedGappedContainer, c as FlexContainer, r as FullHeightFlexContainer, o as HorizontallyCenteredItem, s as RefactorSpacerBottom, p as RefactorSpacerTop, m as RelativeContainer, l as StyledCalloutSection };
