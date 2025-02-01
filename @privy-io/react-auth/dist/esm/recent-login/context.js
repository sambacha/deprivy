import { jsx as o } from "react/jsx-runtime";
import { useState as n, useEffect as t, useContext as i, createContext as e } from "react";
import { useAppConfig as c } from "../configuration/context.mjs";
import { usePrivyEventSubscription as s } from "../hooks/events-context.mjs";
import r from "../storage.mjs";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
import "../constants.mjs";
import "../configuration/login-methods.mjs";
import "../configuration/wallets.mjs";
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
import "../connectors/chains/utils.mjs";
import "../lib/solana/index.mjs";
import "../theme.mjs";
import "tinycolor2";
import "../lib/cybr53.mjs";
let m = /*#__PURE__*/e({});
const a = ({
  children: i
}) => {
  let e = c();
  let [a, j] = n({});
  s("login", {
    onComplete: ({
      loginAccount: o
    }) => {
      if (o && o.type !== "passkey" && o.type !== "cross_app" && (o.type !== "wallet" || o.walletClientType !== "privy")) {
        r.put(p(e.id), o.type);
        if (o.type === "wallet") {
          r.put(l(e.id), o.walletClientType);
          r.put(h(e.id), o.chainType);
          j({
            accountType: o.type,
            walletClientType: o.walletClientType,
            chainType: o.chainType
          });
        } else {
          r.del(l(e.id));
          r.del(h(e.id));
          j({
            accountType: o.type
          });
        }
      }
    }
  });
  t(() => {
    if (!e.id) {
      return;
    }
    let o = r.get(p(e.id));
    let n = r.get(l(e.id));
    let t = r.get(h(e.id));
    if (o) {
      j(o === "wallet" ? {
        accountType: o,
        walletClientType: n,
        chainType: t
      } : {
        accountType: o
      });
    }
  }, [e.id]);
  return /*#__PURE__*/o(m.Provider, {
    value: a,
    children: i
  });
};
let p = o => `privy:${o}:recent-login-method`;
let l = o => `privy:${o}:recent-login-wallet-client`;
let h = o => `privy:${o}:recent-login-chain-type`;
const j = () => i(m);
export { a as RecentlyUsedAccountProvider, j as useRecentlyUsedLogin };
