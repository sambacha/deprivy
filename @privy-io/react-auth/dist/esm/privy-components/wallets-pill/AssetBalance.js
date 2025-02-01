import { jsxs as o, jsx as r } from "react/jsx-runtime";
import e from "@heroicons/react/24/outline/CurrencyDollarIcon";
import { styled as t } from "styled-components";
import { Column as i } from "../../components/ui/layout/Column.mjs";
import { Row as m } from "../../components/ui/layout/Row.mjs";
var n = ({
  amount: t,
  symbol: m,
  icon: n
}) => /*#__PURE__*/o(a, {
  children: [/*#__PURE__*/o(l, {
    children: [n ? /*#__PURE__*/r("img", {
      alt: m,
      src: n,
      style: {
        height: "1rem",
        width: "1rem",
        borderRadius: "1000px"
      }
    }) : /*#__PURE__*/r(e, {
      height: "1rem",
      width: "1rem"
    }), m]
  }), /*#__PURE__*/r(i, {
    style: {
      textAlign: "right"
    },
    children: /*#__PURE__*/r("span", {
      children: t
    })
  })]
});
let l = /*#__PURE__*/t.div.withConfig({
  displayName: "Info",
  componentId: "sc-381a221c-0"
})(["display:flex;align-items:center;gap:0.25rem;"]);
let a = /*#__PURE__*/t(m).withConfig({
  displayName: "StyledRow",
  componentId: "sc-381a221c-1"
})(["& + &{border-top:solid 1px var(--privy-color-foreground-4);padding-top:0.5rem;}"]);
export { n as default };
