import { useState as r, useEffect as e } from "react";
import { usePrivyInternal as o } from "./internal-context.mjs";
import "./index.mjs";
const i = ({
  enabled: i = true
} = {}) => {
  let {
    showFiatPrices: t,
    getUsdPriceForSol: c
  } = o();
  let [l, a] = r(true);
  let [n, s] = r(undefined);
  let [m, d] = r(undefined);
  e(() => {
    (async () => {
      if (t && i) {
        try {
          a(true);
          let r = await c();
          if (r) {
            d(r);
          } else {
            s(Error("Unable to fetch SOL price"));
          }
        } catch (r) {
          s(r);
        } finally {
          a(false);
        }
      } else {
        a(false);
      }
    })();
  }, []);
  return {
    solPrice: m,
    isSolPriceLoading: l,
    solPriceError: n
  };
};
export { i as useGetSolPrice };
