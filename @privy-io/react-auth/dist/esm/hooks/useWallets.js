import { createContext as e, useContext as l } from "react";
const t = /*#__PURE__*/e(null);
function o() {
  let e = l(t);
  if (e === null) {
    console.warn("`useWallets` was called outside the PrivyProvider component");
    return {
      wallets: [],
      ready: false
    };
  } else {
    return e;
  }
}
export { t as UseWalletsContext, o as useWallets };
