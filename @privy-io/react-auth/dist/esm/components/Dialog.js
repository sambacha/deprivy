import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { Transition as n, Dialog as t, TransitionChild as a, DialogPanel as o } from "@headlessui/react";
import r from "react";
import { styled as s } from "styled-components";
const d = ({
  children: s,
  open: d,
  onClick: g,
  ...b
}) => /*#__PURE__*/e(n, {
  show: d,
  as: r.Fragment,
  children: /*#__PURE__*/i(t, {
    onClose: g,
    ...b,
    as: p,
    children: [/*#__PURE__*/e(a, {
      as: r.Fragment,
      enterFrom: "entering",
      leaveTo: "leaving",
      children: /*#__PURE__*/e(l, {
        id: "privy-dialog-backdrop",
        "aria-hidden": "true"
      })
    }), /*#__PURE__*/e(m, {
      children: /*#__PURE__*/e(a, {
        as: r.Fragment,
        enterFrom: "entering",
        leaveTo: "leaving",
        children: /*#__PURE__*/e(o, {
          as: c,
          children: s
        })
      })
    })]
  })
});
let l = /*#__PURE__*/s.div.withConfig({
  displayName: "Backdrop",
  componentId: "sc-28ab5e6b-0"
})(["position:fixed;inset:0;transition:backdrop-filter 100ms ease;backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);&.entering,&.leaving{backdrop-filter:unset;-webkit-backdrop-filter:unset;}"]);
let p = /*#__PURE__*/s.div.withConfig({
  displayName: "DialogWrapper",
  componentId: "sc-28ab5e6b-1"
})(["position:relative;z-index:999999;"]);
let m = /*#__PURE__*/s.div.withConfig({
  displayName: "DialogContainer",
  componentId: "sc-28ab5e6b-2"
})(["position:fixed;inset:0;display:flex;align-items:center;justify-content:center;width:100vw;min-height:100vh;"]);
const c = /*#__PURE__*/s.div.withConfig({
  displayName: "Panel",
  componentId: "sc-28ab5e6b-3"
})(["padding:0;background:transparent;border:none;width:100%;pointer-events:auto;outline:none;display:block;@media (max-width:440px){opacity:1;transform:translate3d(0,0,0);transition:transform 200ms ease-in;position:fixed;bottom:0;&.entering,&.leaving{opacity:0;transform:translate3d(0,100%,0);transition:transform 150ms ease-in 0ms,opacity 0ms ease 150ms;}}@media (min-width:441px){opacity:1;transition:opacity 100ms ease-in;&.entering,&.leaving{opacity:0;transition-delay:5ms;}margin:auto;width:360px;box-shadow:0px 8px 36px rgba(55,65,81,0.15);border-radius:var(--privy-border-radius-lg);}"]);
const g = /*#__PURE__*/s.div.withConfig({
  displayName: "CenterItem",
  componentId: "sc-28ab5e6b-4"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;"]);
export { g as CenterItem, d as Dialog, c as Panel };
