import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { styled as i } from "styled-components";
const c = ({
  className: i,
  checked: c,
  color: r = "var(--privy-color-accent)",
  ...d
}) => /*#__PURE__*/e("label", {
  children: /*#__PURE__*/o(l, {
    className: i,
    children: [/*#__PURE__*/e(t, {
      checked: c,
      ...d
    }), /*#__PURE__*/e(a, {
      color: r,
      checked: c,
      children: /*#__PURE__*/e(n, {
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/e("polyline", {
          points: "20 6 9 17 4 12"
        })
      })
    })]
  })
});
const r = ({
  className: i,
  checked: c,
  color: r = "var(--privy-color-accent)",
  children: p,
  ...s
}) => /*#__PURE__*/o(d, {
  className: i,
  children: [/*#__PURE__*/o(l, {
    children: [/*#__PURE__*/e(t, {
      checked: c,
      ...s
    }), /*#__PURE__*/e(a, {
      color: r,
      checked: c,
      children: /*#__PURE__*/e(n, {
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/e("polyline", {
          points: "20 6 9 17 4 12"
        })
      })
    })]
  }), p]
});
let d = /*#__PURE__*/i.label.withConfig({
  displayName: "CheckboxCardContainer",
  componentId: "sc-db51b935-0"
})(["&&{cursor:pointer;display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;text-align:left;border-radius:0.5rem;border:1px solid var(--privy-color-foreground-4);width:100%;}"]);
let l = /*#__PURE__*/i.div.withConfig({
  displayName: "CheckboxContainer",
  componentId: "sc-db51b935-1"
})(["display:inline-block;vertical-align:middle;"]);
let n = /*#__PURE__*/i.svg.withConfig({
  displayName: "Icon",
  componentId: "sc-db51b935-2"
})(["fill:none;stroke:white;stroke-width:3px;"]);
let t = /*#__PURE__*/i.input.attrs({
  type: "checkbox"
}).withConfig({
  displayName: "HiddenCheckbox",
  componentId: "sc-db51b935-3"
})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);
let a = /*#__PURE__*/i.div.withConfig({
  displayName: "StyledCheckbox",
  componentId: "sc-db51b935-4"
})(["display:inline-block;width:18px;height:18px;transition:all 150ms;cursor:pointer;border-color:", ";border-radius:3px;background:", ";&&{border-width:1px;}", ":focus + &{box-shadow:0 0 0 1px ", ";}", "{visibility:", ";}"], e => e.color, e => e.checked ? e.color : "var(--privy-color-background)", t, e => e.color, n, e => e.checked ? "visible" : "hidden");
export { c as Checkbox, r as CheckboxCard };
