import { useCallback as e } from "react";
import { createPublicClient as n, http as t } from "viem";
import { getEntropyDetailsFromUser as r } from "../client/user.mjs";
import { useAppConfig as o } from "../configuration/context.mjs";
import { PrivyClientError as i } from "../errors.mjs";
import { usePrivyInternal as a } from "../hooks/internal-context.mjs";
import { usePrivyModal as s } from "../hooks/modal-context.mjs";
import { usePrivyContext as c } from "../hooks/privy-context.mjs";
import { useSmartWalletChains as m } from "../hooks/useSmartWalletChain.mjs";
import { useWallets as l } from "../hooks/useWallets.mjs";
import { ModalScreen as p } from "../screens/index.mjs";
import { getJsonRpcEndpointFromChain as d } from "../utils/eth/getPublicClient.mjs";
import { getEmbeddedConnectedWallet as u } from "./getEmbeddedConnectedWallet.mjs";
import { signerToSmartAccountClient as h } from "./smart-wallets-shared.mjs";
import "viem/utils";
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
import "./solana/index.mjs";
import "../theme.mjs";
import "tinycolor2";
import "./cybr53.mjs";
import "ofetch";
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
import "permissionless";
import "permissionless/accounts";
import "permissionless/clients/pimlico";
import "viem/account-abstraction";
import "@privy-io/js-sdk-core";
const f = ({
  calls: e,
  chain: n,
  maxPriorityFeePerGas: t,
  maxFeePerGas: r,
  nonce: o
}) => e.map(e => ({
  to: e.to || undefined,
  data: e.data,
  value: e.value,
  chainId: n.id,
  nonce: o,
  maxFeePerGas: r,
  maxPriorityFeePerGas: t
}));
const y = async ({
  chain: e,
  paymasterContext: r,
  embeddedWallet: o,
  user: a,
  smartWalletsConfig: s,
  rpcConfig: c,
  privyAppId: m
}) => {
  if (!s?.enabled || !a || !o) {
    return;
  }
  let l = await o.getEthereumProvider();
  let p = s?.configuredNetworks.find(n => n.chainId === `eip155:${e.id}`);
  if (!p) {
    throw new i(`The chain ${e.name} (eip155:${e.id}) must be configured in the smart wallet configuration in your dashboard`);
  }
  let u = a.smartWallet?.smartWalletType ?? s.smartWalletType;
  let f = d(e, c, m);
  let y = n({
    chain: e,
    transport: t(f)
  });
  let j = r ?? p.paymasterContext;
  let g = await h({
    owner: l,
    smartWalletType: u,
    chain: e,
    publicClient: y,
    paymasterContext: j,
    ...p
  });
  if (!g) {
    throw new i(`Failed to create smart wallet client for chain ${e.name} (eip155:${e.id})`);
  }
  return g;
};
const j = ({
  clientConfig: n,
  smartWalletsConfig: t
}) => {
  let {
    hideWalletUIs: d,
    openPrivyModal: h,
    appId: j
  } = a();
  let g = o();
  let {
    setModalData: E
  } = s();
  let {
    user: C
  } = c();
  let {
    chains: I
  } = o();
  let {
    chainId: w,
    clients: T,
    setChainId: x,
    chainIdState: W
  } = m();
  let S = I.find(e => e.id === W);
  let {
    wallets: D
  } = l();
  let N = e(async () => w.current, [w]);
  let P = e(async ({
    id: e
  }) => {
    if (!T.current[e]) {
      let r = u(D);
      let o = await y({
        chain: I.find(n => n.id === e),
        embeddedWallet: r,
        user: C,
        paymasterContext: n?.paymasterContext,
        smartWalletsConfig: t,
        rpcConfig: g.rpcConfig,
        privyAppId: j
      });
      if (o) {
        T.current[e] = o;
      }
    }
    x(e);
  }, [I, n, D, C, t]);
  return {
    wrapSmartAccountClient: e => {
      T.current[e.chain.id] = e;
      if (!W) {
        x(e.chain.id);
      }
      return {
        ...e,
        sendTransaction: async (e, n) => {
          let t = T.current[w.current];
          if (!t) {
            throw new i(`Smart wallet client for chain (eip155:${w.current}) not found`);
          }
          if (!g.embeddedWallets.showWalletUIs) {
            d.current = true;
            return await t.sendTransaction(e).finally(() => d.current = false);
          }
          let o = [];
          if ("calls" in e && e.calls !== undefined) {
            o = [...e.calls];
          } else if ("to" in e) {
            o = [{
              to: e.to,
              value: e.value || BigInt(0),
              data: e.data || "0x"
            }];
          }
          let a = async () => {
            if (!t.paymaster) {
              return false;
            }
            let {
              paymasterAndData: n,
              paymasterData: r
            } = await t.prepareUserOperation({
              calls: o,
              maxFeePerGas: e.maxFeePerGas,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas,
              nonce: e.nonce ? BigInt(e.nonce) : undefined
            });
            return Number(n ?? r ?? 0) > 0;
          };
          return new Promise(async (i, s) => {
            d.current = true;
            let {
              entropyId: c,
              entropyIdVerifier: m
            } = r(C);
            E({
              connectWallet: {
                entropyId: c,
                entropyIdVerifier: m,
                onCompleteNavigateTo: p.EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN,
                onFailure: () => {}
              },
              sendTransaction: {
                transactionRequests: f({
                  calls: o,
                  chain: t.chain,
                  maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                  maxFeePerGas: e.maxFeePerGas,
                  nonce: e.nonce ? BigInt(e.nonce) : undefined
                }),
                entropyId: c,
                entropyIdVerifier: m,
                transactingWallet: {
                  address: t.account.address,
                  walletIndex: null
                },
                getIsSponsored: a,
                signOnly: false,
                onConfirm: () => t.sendTransaction(e),
                onSuccess: e => i(e.hash),
                onFailure: s,
                uiOptions: n?.uiOptions ?? {}
              }
            });
            h(p.EMBEDDED_WALLET_CONNECTING_SCREEN);
          }).finally(() => {
            d.current = false;
          });
        },
        signMessage: async (e, n) => {
          let t = T.current[w.current];
          if (!t) {
            throw new i(`Smart wallet client for chain (eip155:${w.current}) not found`);
          }
          if (g.embeddedWallets.showWalletUIs) {
            return new Promise(async (o, i) => {
              let {
                entropyId: a,
                entropyIdVerifier: s
              } = r(C);
              d.current = true;
              E({
                connectWallet: {
                  entropyId: a,
                  entropyIdVerifier: s,
                  onCompleteNavigateTo: p.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN,
                  onFailure: () => {}
                },
                signMessage: {
                  method: "personal_sign",
                  data: e.message,
                  confirmAndSign: () => t.signMessage(e),
                  onSuccess: e => o(e),
                  onFailure: i,
                  uiOptions: n?.uiOptions ?? {}
                }
              });
              h(p.EMBEDDED_WALLET_CONNECTING_SCREEN);
            }).finally(() => {
              d.current = false;
            });
          } else {
            d.current = true;
            return await t.signMessage(e).finally(() => d.current = false);
          }
        },
        signTypedData: async (e, n) => {
          let t = T.current[w.current];
          if (!t) {
            throw new i(`Smart wallet client for chain (eip155:${w.current}) not found`);
          }
          if (g.embeddedWallets.showWalletUIs) {
            return new Promise(async (o, i) => {
              d.current = true;
              let {
                entropyId: a,
                entropyIdVerifier: s
              } = r(C);
              E({
                connectWallet: {
                  entropyId: a,
                  entropyIdVerifier: s,
                  onCompleteNavigateTo: p.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN,
                  onFailure: () => {}
                },
                signMessage: {
                  method: "eth_signTypedData_v4",
                  data: e,
                  confirmAndSign: () => t.signTypedData(e),
                  onSuccess: e => o(e),
                  onFailure: i,
                  uiOptions: n?.uiOptions ?? {}
                }
              });
              h(p.EMBEDDED_WALLET_CONNECTING_SCREEN);
            }).finally(() => {
              d.current = false;
            });
          } else {
            d.current = true;
            return await t.signTypedData(e).finally(() => d.current = false);
          }
        },
        getChainId: N,
        chain: S,
        switchChain: P
      };
    }
  };
};
export { f as callsToTransactionRequests, y as getSmartWalletClient, j as useSmartWalletsWrapper };
