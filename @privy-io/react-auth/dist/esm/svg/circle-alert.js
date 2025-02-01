import { jsxs as r, jsx as e } from "react/jsx-runtime";
function n(n) {
  /*#__PURE__*/return r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    ...n,
    children: [/*#__PURE__*/e("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/e("line", {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12"
    }), /*#__PURE__*/e("line", {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16"
    })]
  });
}
export { n as CircleAlert };
