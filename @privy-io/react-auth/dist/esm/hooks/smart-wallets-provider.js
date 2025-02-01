import { jsx as i } from "react/jsx-runtime";
import { useContext as t, useState as o, useEffect as n, createContext as e } from "react";
import { useAppConfig as r } from "../configuration/context.mjs";
import { PrivyClientError as s } from "../errors.mjs";
import { getEmbeddedConnectedWallet as c } from "../lib/getEmbeddedConnectedWallet.mjs";
import { getSmartWalletClient as a, useSmartWalletsWrapper as m } from "../lib/smart-wallets.mjs";
import { usePrivyInternal as l } from "./internal-context.mjs";
import { usePrivyContext as p } from "./privy-context.mjs";
import { useWallets as d } from "./useWallets.mjs";
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
import "ofetch";
import "viem";
import "../client/user.mjs";
import "viem/utils";
import "./modal-context.mjs";
import "../components/PrefetchedImage.mjs";
import "../screens/index.mjs";
import "./index.mjs";
import "./useSmartWalletChain.mjs";
import "../utils/eth/getPublicClient.mjs";
import "../lib/smart-wallets-shared.mjs";
import "permissionless";
import "permissionless/accounts";
import "permissionless/clients/pimlico";
import "viem/account-abstraction";
import "@privy-io/js-sdk-core";
let h = /*#__PURE__*/e({
  client: undefined
});
const f = ({
  config: t,
  children: o
}) => /*#__PURE__*/i(y, {
  children: /*#__PURE__*/i(v, {
    config: t,
    children: /*#__PURE__*/i(w, {
      children: o
    })
  })
});
const j = () => {
  let {
    client: i
  } = t(h);
  return {
    client: i
  };
};
let g = /*#__PURE__*/e({
  config: undefined
});
let u = () => {
  let {
    config: i
  } = t(g);
  return {
    config: i
  };
};
let y = ({
  children: t
}) => {
  let [e, r] = o(undefined);
  let {
    client: s
  } = l();
  n(() => {
    if (!e && s) {
      (async () => {
        try {
          if (!s) {
            console.warn("No client found");
            return;
          }
          let i = await s.getSmartWalletsConfig();
          r(i);
        } catch (i) {
          console.warn("Error generating smart wallet config: ", i);
        }
      })();
    }
  }, [!!s]);
  return /*#__PURE__*/i(g.Provider, {
    value: {
      config: e
    },
    children: t
  });
};
let v = ({
  config: t,
  children: e
}) => {
  let {
    config: m
  } = u();
  let {
    appId: h
  } = l();
  let {
    chains: f,
    defaultChain: j,
    rpcConfig: g
  } = r();
  let {
    wallets: y
  } = d();
  let {
    user: v
  } = p();
  let [w, C] = o();
  let W = c(y);
  n(() => {
    (async () => {
      if (!m?.enabled) {
        return;
      }
      let i = m.configuredNetworks.find(i => i.chainId === `eip155:${j.id}`) ? j : f.find(i => m.configuredNetworks.map(i => i.chainId).includes(`eip155:${i.id}`));
      if (!i) {
        throw new s("Could not find smart wallets chain configurations for any Privy client configured chains. Please configure smart wallets for your chains in the Privy dashboard.");
      }
      C(await a({
        chain: i,
        privyAppId: h,
        paymasterContext: t?.paymasterContext,
        rpcConfig: g,
        embeddedWallet: W,
        user: v,
        smartWalletsConfig: m
      }));
    })();
  }, [!!m?.enabled, !!v?.smartWallet, !!W]);
  return /*#__PURE__*/i(b.Provider, {
    value: {
      client: w,
      config: t
    },
    children: e
  });
};
let b = /*#__PURE__*/e({
  client: undefined,
  config: undefined
});
let w = ({
  children: o
}) => {
  let {
    client: e,
    config: r
  } = (() => {
    let {
      client: i,
      config: o
    } = t(b);
    return {
      client: i,
      config: o
    };
  })();
  let {
    config: s
  } = u();
  let {
    wrapSmartAccountClient: c
  } = m({
    clientConfig: r,
    smartWalletsConfig: s
  });
  let {
    user: a
  } = p();
  let {
    generateSiweMessageForSmartWallet: d,
    linkSmartWallet: f,
    hideWalletUIs: j
  } = l();
  n(() => {
    (async () => {
      if (e && a && !a?.smartWallet && s?.enabled) {
        try {
          let i = await d({
            address: e.account.address,
            chainId: `eip155:${e.chain.id}`
          });
          j.current = true;
          let t = await e.signMessage({
            message: i
          });
          await f({
            signature: t,
            message: i,
            smartWalletType: s.smartWalletType
          });
        } catch (i) {
          console.error("Error creating smart wallet:", i);
        } finally {
          j.current = false;
        }
      }
    })();
  }, [!!e, !!a?.smartWallet, !!s?.enabled]);
  return /*#__PURE__*/i(h.Provider, {
    value: {
      client: a?.smartWallet && e ? c(e) : undefined
    },
    children: o
  });
};
export { f as SmartWalletsProvider, j as useSmartWallets };
