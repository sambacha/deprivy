import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { countryCodesAndNumbers as r } from "@privy-io/js-sdk-core";
const c = ({
  value: c,
  onChange: n
}) => /*#__PURE__*/e("select", {
  value: c,
  onChange: n,
  children: r.map(e => /*#__PURE__*/o("option", {
    value: e.code,
    children: [e.code, " +", e.callCode]
  }, e.code))
});
export { c as PhoneCountryDropdown };
