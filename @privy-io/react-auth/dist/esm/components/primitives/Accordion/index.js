import { jsx as e, jsxs as i, Fragment as o } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/ChevronDownIcon";
import { useState as t, useContext as r } from "react";
import { styled as d } from "styled-components";
import { AccordionContext as a, AccordionPanelContext as l } from "./AccordionContext.mjs";
const c = ({
  defaultValue: i,
  children: o
}) => {
  let [n, r] = t(i || null); /*#__PURE__*/
  return e(a.Provider, {
    value: {
      activePanel: n,
      togglePanel: e => {
        r(n === e ? null : e);
      }
    },
    children: /*#__PURE__*/e(f, {
      children: o
    })
  });
};
const p = ({
  value: i,
  children: o
}) => {
  let {
    activePanel: n,
    togglePanel: t
  } = r(a);
  let d = n === i;
  /*#__PURE__*/
  return e(l.Provider, {
    value: {
      onToggle: () => t(i),
      value: i
    },
    children: /*#__PURE__*/e(x, {
      isActive: d,
      "data-open": d,
      children: o
    })
  });
};
const h = ({
  children: t
}) => {
  let {
    activePanel: d
  } = r(a);
  let {
    onToggle: c,
    value: p
  } = r(l);
  let h = d === p;
  /*#__PURE__*/
  return i(o, {
    children: [/*#__PURE__*/i(g, {
      onClick: c,
      "data-open": h,
      children: [/*#__PURE__*/e(u, {
        children: t
      }), /*#__PURE__*/e(b, {
        isactive: h,
        children: /*#__PURE__*/e(n, {
          height: "16px",
          width: "16px",
          strokeWidth: "2"
        })
      })]
    }), /*#__PURE__*/e(v, {})]
  });
};
const s = ({
  children: i
}) => {
  let {
    activePanel: o
  } = r(a);
  let {
    value: n
  } = r(l);
  /*#__PURE__*/
  return e(w, {
    "data-open": o === n,
    children: /*#__PURE__*/e(y, {
      children: i
    })
  });
};
const m = ({
  children: i
}) => {
  let {
    activePanel: o
  } = r(a);
  let {
    value: n
  } = r(l);
  /*#__PURE__*/
  return e(y, {
    children: typeof i == "function" ? i({
      isActive: o === n
    }) : i
  });
};
let f = /*#__PURE__*/d.div.withConfig({
  displayName: "AccordionRoot",
  componentId: "sc-281bf545-0"
})(["display:flex;flex-direction:column;width:100%;gap:8px;"]);
let g = /*#__PURE__*/d.div.withConfig({
  displayName: "AccordionTriggerContainer",
  componentId: "sc-281bf545-1"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer;padding-bottom:8px;"]);
let v = /*#__PURE__*/d.div.withConfig({
  displayName: "AccordionDivider",
  componentId: "sc-281bf545-2"
})(["width:100%;&&{border-top:1px solid;border-color:var(--privy-color-foreground-4);}padding-bottom:12px;"]);
let u = /*#__PURE__*/d.div.withConfig({
  displayName: "AccordionTriggerContent",
  componentId: "sc-281bf545-3"
})(["font-size:14px;font-weight:500;line-height:19.6px;width:100%;padding-right:8px;"]);
let x = /*#__PURE__*/d.div.withConfig({
  displayName: "AccordionPanelContainer",
  componentId: "sc-281bf545-4"
})(["display:flex;flex-direction:column;width:100%;overflow:hidden;padding:12px;&&{border:1px solid;border-color:var(--privy-color-foreground-4);border-radius:var(--privy-border-radius-md);}"]);
let w = /*#__PURE__*/d.div.withConfig({
  displayName: "AccordionContentContainer",
  componentId: "sc-281bf545-5"
})(["position:relative;overflow:hidden;transition:max-height 25ms ease-out;&[data-open='true']{max-height:700px;}&[data-open='false']{max-height:0;}"]);
let y = /*#__PURE__*/d.div.withConfig({
  displayName: "ContentWrapper",
  componentId: "sc-281bf545-6"
})(["display:flex;flex-direction:column;gap:12px;flex:1 1 auto;min-height:1px;"]);
let b = /*#__PURE__*/d.div.withConfig({
  displayName: "IconWrapper",
  componentId: "sc-281bf545-7"
})(["transform:", ";"], e => e.isactive ? "rotate(180deg)" : "rotate(0deg)");
export { c as Accordion, m as AccordionAdditionalContent, s as AccordionContent, p as AccordionPanel, h as AccordionTrigger };
