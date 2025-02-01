import { useState as o, useEffect as n } from "react";
import { addToDefaultChains as i } from "../connectors/chains/utils.mjs";
import { CHAIN_ID_MAINNET as r } from "../constants.mjs";
import { usePrivyInternal as c } from "./internal-context.mjs";
import { useGetSolPrice as s } from "./useGetSolPrice.mjs";
import "../connectors/chains/index.mjs";
import "../connectors/chains/arbitrum.mjs";
import "../connectors/chains/arbitrumSepolia.mjs";
import "../connectors/chains/avalanche.mjs";
import "../connectors/chains/avalancheFuji.mjs";
import "../connectors/chains/base.mjs";
import "../connectors/chains/baseSepolia.mjs";
import "../connectors/chains/berachainArtio.mjs";
import "../connectors/chains/celo.mjs";
import "../connectors/chains/celoAlfajores.mjs";
import "../connectors/chains/filecoin.mjs";
import "../connectors/chains/filecoinCalibration.mjs";
import "../connectors/chains/garnetHolesky.mjs";
import "../connectors/chains/holesky.mjs";
import "../connectors/chains/linea.mjs";
import "../connectors/chains/lineaTestnet.mjs";
import "../connectors/chains/lukso.mjs";
import "../connectors/chains/mainnet.mjs";
import "../connectors/chains/optimism.mjs";
import "../connectors/chains/optimismSepolia.mjs";
import "../connectors/chains/polygon.mjs";
import "../connectors/chains/polygonAmoy.mjs";
import "../connectors/chains/redstone.mjs";
import "../connectors/chains/sepolia.mjs";
import "../connectors/chains/zora.mjs";
import "../connectors/chains/zoraSepolia.mjs";
import "../connectors/chains/zoraTestnet.mjs";
import "./index.mjs";
function e(e) {
  let {
    tokenPrice: t,
    isTokenPriceLoading: a,
    tokenPriceError: m
  } = (s => {
    let {
      showFiatPrices: e,
      getUsdTokenPrice: t,
      chains: a
    } = c();
    let [m, p] = o(true);
    let [h, l] = o(undefined);
    let [j, d] = o(undefined);
    n(() => {
      s ||= r;
      let o = i(a).find(o => o.id === Number(s));
      (async () => {
        if (e) {
          if (!o) {
            p(false);
            l(Error(`Unable to fetch token price on chain id ${s}`));
            return;
          }
          try {
            p(true);
            let n = await t(o);
            if (n) {
              d(n);
            } else {
              l(Error(`Unable to fetch token price on chain id ${o.id}`));
            }
          } catch (o) {
            l(o);
          } finally {
            p(false);
          }
        } else {
          p(false);
        }
      })();
    }, [s]);
    return {
      tokenPrice: j,
      isTokenPriceLoading: m,
      tokenPriceError: h
    };
  })(e === "solana" ? -1 : e);
  let {
    solPrice: p,
    isSolPriceLoading: h,
    solPriceError: l
  } = s({
    enabled: e === "solana"
  });
  if (e === "solana") {
    return {
      tokenPrice: p,
      isTokenPriceLoading: h,
      tokenPriceError: l
    };
  } else {
    return {
      tokenPrice: t,
      isTokenPriceLoading: a,
      tokenPriceError: m
    };
  }
}
export { e as useGetTokenPrice };
