import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { styled as e } from "styled-components";
import { CheckBadge as i } from "../svg/check-badge.mjs";
const r = /*#__PURE__*/e.div.withConfig({
  displayName: "TodoList",
  componentId: "sc-491785d-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;gap:4px;"]);
const n = /*#__PURE__*/e.div.withConfig({
  displayName: "TodoSpacer",
  componentId: "sc-491785d-1"
})(["&&&{margin-left:7px;border-left:2px solid var(--privy-color-foreground-4);height:12px;}"]);
const d = ({
  children: e
}) => /*#__PURE__*/t(p, {
  children: [/*#__PURE__*/o(i, {
    style: {
      width: "16px",
      height: "16px"
    }
  }), e]
});
let p = /*#__PURE__*/e.div.withConfig({
  displayName: "TodoItemWrapper",
  componentId: "sc-491785d-2"
})(["display:flex;justify-content:flex-start;justify-items:center;text-align:left;gap:8px;&&{a{text-decoration:underline;color:var(--privy-color-accent);}svg{margin-top:auto;margin-bottom:auto;}}"]);
export { d as TodoItem, r as TodoList, n as TodoSpacer };
