import { useState as t, useEffect as r } from "react";
import { usePrivyInternal as e } from "../../hooks/internal-context.mjs";
import { usePrivyContext as o } from "../../hooks/privy-context.mjs";
import { prepareTransactionRequest as i } from "../../lib/viem/prepareTransactionRequest.mjs";
import "../../hooks/index.mjs";
import "../../lib/viem/toViemTransactionSerializable.mjs";
import "viem";
import "../../errors.mjs";
import "ofetch";
const s = (s, m, n) => {
  let [a, l] = t(null);
  let {
    getAccessToken: c
  } = o();
  let {
    walletProxy: p
  } = e();
  r(() => {
    if (a) {
      l(null);
    }
    (async () => {
      if (!(await c()) || !p || !m) {
        return null;
      }
      let t = [];
      let r = true;
      let e = await i(s, n, m.address).catch(e => {
        if (e.details.includes("insufficient funds")) {
          r = false;
        } else {
          t.push(e);
        }
        return s;
      });
      return {
        tx: e,
        totalGasEstimate: e.gas,
        hasFunds: r,
        errors: t
      };
    })().then(l);
  }, [s]);
  return a;
};
export { s as usePrepareTransaction };
