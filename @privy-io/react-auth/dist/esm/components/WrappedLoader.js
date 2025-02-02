import { jsx as t, Fragment as i, jsxs as e } from "react/jsx-runtime";
import { styled as o } from "styled-components";
import { ConnectionLoader as n } from "./Loader.mjs";
const p = ({
  icon: o
}) => /*#__PURE__*/t(i, {
  children: /*#__PURE__*/t(r, {
    children: /*#__PURE__*/e("div", {
      children: [/*#__PURE__*/t(n, {}), typeof o == "string" ? /*#__PURE__*/t("span", {
        style: {
          background: `url('${o}')`,
          height: "38px",
          width: "38px",
          borderRadius: "6px",
          margin: "auto",
          backgroundSize: "cover"
        }
      }) : o ? /*#__PURE__*/t(o, {
        style: {
          width: "38px",
          height: "38px"
        }
      }) : /*#__PURE__*/t("span", {})]
    })
  })
});
let r = /*#__PURE__*/o.div.withConfig({
  displayName: "StackedContainer",
  componentId: "sc-26c1d9b9-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:82px;> div{position:relative;}> div > span{position:absolute;left:-41px;top:-41px;}> div > :last-child{position:absolute;left:-19px;top:-19px;}"]);
export { p as WrappedLoader };
