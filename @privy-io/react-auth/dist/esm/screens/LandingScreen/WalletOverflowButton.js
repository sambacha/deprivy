import { jsxs as o, jsx as t } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/ChevronRightIcon";
import e from "@heroicons/react/24/outline/WalletIcon";
import { LoginMethodButton as i, Grow as n } from "./styles.mjs";
import "styled-components";
const c = ({
  onClick: c,
  text: m
}) => /*#__PURE__*/o(i, {
  onClick: c,
  children: [/*#__PURE__*/t(e, {}), /*#__PURE__*/t(n, {
    children: m
  }), /*#__PURE__*/t(r, {})]
});
export { c as WalletOverflowButton };
