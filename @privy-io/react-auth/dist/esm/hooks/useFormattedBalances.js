import { Connection as o, PublicKey as s } from "@solana/web3.js";
import { useState as n, useMemo as t, useEffect as r } from "react";
import { useAppConfig as i } from "../configuration/context.mjs";
import { isBaseConnectedEthereumWallet as e } from "../connectors/isBaseConnectedEthereumWallet.mjs";
import { isBaseConnectedSolanaWallet as a } from "../connectors/solana/index.mjs";
import { extractChainIdFromCAIP2 as c } from "../lib/caip2.mjs";
import { getErc20TokenInfo as m } from "../lib/erc20/actions/getErc20TokenInfo.mjs";
import { formatErc20TokenAmount as l } from "../lib/erc20/formatErc20TokenAmount.mjs";
import { getErc20Balance as p } from "../lib/wallets/actions/getErc20Balance.mjs";
import { useBalance as d, updateBalance as j } from "../privy-components/wallets-pill/state.mjs";
import { usePrivyInternal as u } from "./internal-context.mjs";
import "react/jsx-runtime";
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
import "./index.mjs";
import "../types.mjs";
import "../connectors/base.mjs";
import "eventemitter3";
import "../connectors/errors.mjs";
import "@privy-io/js-sdk-core";
import "../errors.mjs";
import "ofetch";
import "viem";
import "../utils/eth/getPublicClient.mjs";
import "zustand";
import "zustand/shallow";
import "zustand/traditional";
import "../storage.mjs";
let h = async ({
  wallet: o,
  chains: s,
  tokens: n,
  rpcConfig: t,
  appId: r
}) => {
  let i = s.find(s => s.id === c(o.chainId));
  if (!i) {
    return [];
  }
  let e = n.filter(o => o.chain.id === i.id).map(s => (async ({
    address: o,
    erc20: s,
    chain: n,
    rpcConfig: t,
    appId: r
  }) => {
    let [i, {
      balance: e
    }] = await Promise.all([await m({
      chain: n,
      address: s.address,
      rpcConfig: t,
      privyAppId: r
    }), await p({
      chain: n,
      address: o,
      erc20Address: s.address,
      rpcConfig: t,
      appId: r
    })]);
    if (!i || e <= 0n) {
      return;
    }
    let a = Number(l({
      amount: e,
      decimals: i.decimals
    }).replace(",", "")).toFixed(2);
    return {
      amount: a,
      usdAmount: Number(a),
      symbol: i.symbol,
      icon: s.icon
    };
  })({
    address: o.address,
    erc20: s,
    chain: i,
    rpcConfig: t,
    appId: r
  }));
  return (await Promise.all(e)).filter(o => !!o);
};
let f = async ({
  wallet: n,
  tokens: t,
  solanaClusters: r
}) => {
  let i = t.map(t => (async ({
    wallet: n,
    spl: t,
    solanaClusters: r
  }) => {
    let i = new o(r[t.cluster], "confirmed");
    let e = new s(n.address);
    let a = new s(t.address);
    let c = await i.getParsedTokenAccountsByOwner(e, {
      mint: a
    });
    if (c.value.length <= 0 || !c.value[0]) {
      return;
    }
    let m = Number(c.value[0].account.data.parsed.info.tokenAmount.uiAmount);
    if (m <= 0) {
      return undefined;
    } else {
      return {
        amount: m.toFixed(2),
        usdAmount: m,
        symbol: t.ticker,
        icon: t.icon
      };
    }
  })({
    wallet: n,
    spl: t,
    solanaClusters: r
  }));
  return (await Promise.all(i)).filter(o => !!o);
};
const b = ({
  wallet: o,
  enabled: s,
  assets: c
}) => {
  let m = d(o.address, o.type === "solana" ? "solana" : o.chainId);
  let [l, p] = n(true);
  let {
    solanaClusters: b
  } = i();
  let {
    chains: g,
    rpcConfig: w,
    appId: y
  } = u();
  let C = t(() => (m || []).map(o => o.usdAmount).reduce((o, s) => o + s, 0), [m]);
  r(() => {
    if (s) {
      (async () => {
        p(m === undefined);
        if (e(o)) {
          j(o.address, o.chainId, await h({
            wallet: o,
            chains: g,
            tokens: c.ethereum,
            rpcConfig: w,
            appId: y
          }));
        } else if (a(o)) {
          j(o.address, "solana", await f({
            wallet: o,
            tokens: c.solana,
            solanaClusters: b
          }));
        }
        p(false);
      })().catch(console.error);
    } else {
      p(false);
    }
  }, [o, s]);
  return {
    balances: m ?? [],
    isLoading: l,
    totalUsdBalance: C
  };
};
export { b as useFormattedBalances };
