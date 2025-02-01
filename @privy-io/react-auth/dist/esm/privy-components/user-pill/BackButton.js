import { jsx as r } from "react/jsx-runtime";
import { ArrowLeft as o } from "../../icons/ArrowLeft.mjs";
import { useMenu as t } from "./MenuProvider.mjs";
import "react";
function e() {
  let {
    history: e,
    goBack: i
  } = t();
  if (e.length === 0) {
    return null;
  } else {
    return /*#__PURE__*/r("button", {
      onClick: () => i(),
      children: /*#__PURE__*/r(o, {})
    });
  }
}
export { e as BackButton };
