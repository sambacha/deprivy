import { jsx as o } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/WalletIcon";
const e = ({
  icon: e,
  name: r
}) => typeof e == "string" ? /*#__PURE__*/o("img", {
  alt: `${r || "wallet"} logo`,
  src: e,
  style: {
    height: 24,
    width: 24,
    borderRadius: 4
  }
}) : e === undefined ? /*#__PURE__*/o(t, {}) : e ? /*#__PURE__*/o(e, {}) : null;
export { e as InjectedWalletIcon };
