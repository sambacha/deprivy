import { jsx as e, Fragment as r, jsxs as t } from "react/jsx-runtime";
import { useState as n } from "react";
import { isMobile as i } from "react-device-detect";
import { styled as o } from "styled-components";
let a = Array(6).fill("");
var l;
(l = c || {})[l.RESET_AFTER_DELAY = 0] = "RESET_AFTER_DELAY";
l[l.CLEAR_ON_NEXT_VALID_INPUT = 1] = "CLEAR_ON_NEXT_VALID_INPUT";
var c = l;
function s(e) {
  return /^[0-9]{1}$/.test(e);
}
function p(e) {
  return e.length === 6 && e.every(s);
}
const d = ({
  onChange: o,
  disabled: l,
  errorReasonOverride: c,
  success: d
}) => {
  let [f, v] = n(a);
  let [x, y] = n(null);
  let [h, g] = n(null);
  let b = async e => {
    e.preventDefault();
    let r = e.currentTarget.value.replace(/\s+/g, "");
    if (r === "") {
      return;
    }
    let t = f.reduce((e, r) => e + Number(s(r)), 0);
    let n = r.split("");
    let i = !n.every(s);
    let a = n.length + t > 6;
    if (i) {
      y("Passcode can only be numbers");
      g(1);
      return;
    }
    if (a) {
      y("Passcode must be exactly 6 numbers");
      g(1);
      return;
    }
    y(null);
    g(null);
    let l = Number(e.currentTarget.name?.charAt(4));
    let c = [...(r || [""])].slice(0, 6 - l);
    let d = [...f.slice(0, l), ...c, ...f.slice(l + c.length)];
    v(d);
    let u = Math.min(Math.max(l + c.length, 0), 5);
    let m = document.querySelector(`input[name=pin-${u}]`);
    m?.focus();
    if (p(d)) {
      try {
        await o(d.join(""));
        let e = document.querySelector(`input[name=pin-${u}]`);
        e?.blur();
      } catch (e) {
        g(1);
        y(e.message);
      }
    } else {
      try {
        await o(null);
      } catch (e) {
        g(1);
        y(e.message);
      }
    }
  };
  let E = d ? "success" : !!c || !!x ? "fail" : "";
  /*#__PURE__*/
  return e(r, {
    children: /*#__PURE__*/t(u, {
      children: [/*#__PURE__*/e("div", {
        children: f.map((r, t) => /*#__PURE__*/e("input", {
          name: `pin-${t}`,
          type: "text",
          value: f[t],
          onChange: b,
          onKeyUp: e => {
            if (e.key === "Backspace") {
              (e => {
                if (h === 1) {
                  y(null);
                  g(null);
                }
                let r = [...f.slice(0, e), "", ...f.slice(e + 1)];
                v(r);
                if (e > 0) {
                  let r = document.querySelector(`input[name=pin-${e - 1}]`);
                  r?.focus();
                }
                if (p(r)) {
                  o(r.join(""));
                } else {
                  o(null);
                }
              })(t);
            }
          },
          inputMode: "numeric",
          autoFocus: t === 0,
          pattern: "[0-9]",
          className: E,
          autoComplete: i ? "one-time-code" : "off",
          disabled: l
        }, t))
      }), /*#__PURE__*/e("div", {
        children: /*#__PURE__*/e(m, {
          $fail: !!c || !!x,
          children: c || x
        })
      })]
    })
  });
};
let u = /*#__PURE__*/o.div.withConfig({
  displayName: "PinInputContainer",
  componentId: "sc-7a171f6-0"
})(["display:flex;flex-direction:column;width:100%;gap:8px;@media (max-width:440px){margin-top:8px;margin-bottom:8px;}> div:nth-child(1){display:flex;justify-content:center;gap:0.5rem;width:100%;border-radius:var(--privy-border-radius-md);> input{border:1px solid var(--privy-color-foreground-4);background:var(--privy-color-background);border-radius:var(--privy-border-radius-md);padding:8px 10px;height:58px;width:46px;text-align:center;font-size:18px;}> input:disabled{background:var(--privy-color-background-2);}> input:focus{border:1px solid var(--privy-color-accent);}> input:invalid{border:1px solid var(--privy-color-error);}> input.success{border:1px solid var(--privy-color-success);}> input.fail{border:1px solid var(--privy-color-error);animation:shake 180ms;animation-iteration-count:2;}}@keyframes shake{0%{transform:translate(1px,0px);}33%{transform:translate(-1px,0px);}67%{transform:translate(-1px,0px);}100%{transform:translate(1px,0px);}}"]);
let m = /*#__PURE__*/o.div.withConfig({
  displayName: "InputHelp",
  componentId: "sc-7a171f6-1"
})(["line-height:20px;font-size:13px;display:flex;justify-content:flex-start;width:100%;color:", ";"], e => e.$fail ? "var(--privy-color-error)" : "var(--privy-color-foreground-3)");
export { d as NumericPinInput };
