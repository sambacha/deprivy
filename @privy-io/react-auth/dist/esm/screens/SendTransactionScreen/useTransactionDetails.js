import { useState as s } from "react";
const t = t => {
  let [i, r] = s(false);
  let e = true;
  let a = false;
  if (!t || t.isErc20Ish || t.action === "transaction") {
    e = false;
  }
  if (e) {
    a = Object.entries(t || {}).some(([s, t]) => t && !["action", "isErc20Ish", "isNFTIsh"].includes(s));
  }
  return {
    showTransactionDetails: i,
    setShowTransactionDetails: r,
    hasMoreDetails: e && a,
    isErc20Ish: t?.isErc20Ish
  };
};
export { t as useTransactionDetails };
