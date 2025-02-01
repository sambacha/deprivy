import { createAbstractClient as o } from "@abstract-foundation/agw-client";
import { createWalletClient as n, custom as t } from "viem";
import { toAccount as e } from "viem/accounts";
import { abstractTestnet as s } from "viem/chains";
import { getEntropyDetailsFromUser as i } from "../client/user.mjs";
import { usePrivyInternal as r } from "../hooks/internal-context.mjs";
import { usePrivyModal as a } from "../hooks/modal-context.mjs";
import { usePrivyContext as c } from "../hooks/privy-context.mjs";
import { useWallets as m } from "../hooks/useWallets.mjs";
import { ModalScreen as p } from "../screens/index.mjs";
import { getJsonRpcEndpointFromChain as l } from "../utils/eth/getPublicClient.mjs";
import { getEmbeddedConnectedWallet as d } from "./getEmbeddedConnectedWallet.mjs";
import { callsToTransactionRequests as h } from "./smart-wallets.mjs";
import "viem/utils";
import "react";
import "../hooks/index.mjs";
import "react/jsx-runtime";
import "../components/PrefetchedImage.mjs";
import "../configuration/context.mjs";
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
import "../errors.mjs";
import "ofetch";
import "../hooks/useSmartWalletChain.mjs";
import "./smart-wallets-shared.mjs";
import "permissionless";
import "permissionless/accounts";
import "permissionless/clients/pimlico";
import "viem/account-abstraction";
import "@privy-io/js-sdk-core";
function u() {
  let {
    user: u
  } = c();
  let {
    hideWalletUIs: j,
    openPrivyModal: E,
    chains: g,
    appId: f,
    rpcConfig: y
  } = r();
  let {
    wallets: T
  } = m();
  let {
    setModalData: I
  } = a();
  let C = async (i = s.id) => {
    let r = d(T);
    if (!r) {
      throw Error("No connected wallet found");
    }
    if (![s.id, 2741].includes(i)) {
      throw Error("Error, only Abstract chains are supported");
    }
    let a = g.find(o => o.id === i);
    if (!a) {
      throw Error("Chain not configured");
    }
    await r.switchChain(a.id);
    let c = await r.getEthereumProvider();
    let m = n({
      account: r.address,
      transport: t(c)
    });
    let p = e({
      address: r.address,
      signMessage: m.signMessage,
      signTransaction: m.signTransaction,
      signTypedData: m.signTypedData
    });
    return await o({
      chain: {
        ...a,
        rpcUrls: {
          default: {
            http: [l(a, y, f)]
          }
        }
      },
      signer: p
    });
  };
  return {
    signMessage: async ({
      message: o
    }) => {
      let n = await C();
      return new Promise(async (t, e) => {
        let {
          entropyId: s,
          entropyIdVerifier: r
        } = i(u);
        j.current = true;
        I({
          connectWallet: {
            entropyId: s,
            entropyIdVerifier: r,
            onCompleteNavigateTo: p.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN,
            onFailure: () => {}
          },
          signMessage: {
            method: "personal_sign",
            data: o,
            confirmAndSign: () => n.signMessage({
              message: o
            }),
            onSuccess: o => t(o),
            onFailure: e,
            uiOptions: {}
          }
        });
        E(p.EMBEDDED_WALLET_CONNECTING_SCREEN);
      }).finally(() => {
        j.current = false;
      });
    },
    signTypedData: async o => {
      let n = await C();
      return new Promise(async (t, e) => {
        j.current = true;
        let {
          entropyId: s,
          entropyIdVerifier: r
        } = i(u);
        I({
          connectWallet: {
            entropyId: s,
            entropyIdVerifier: r,
            onCompleteNavigateTo: p.EMBEDDED_WALLET_SIGN_REQUEST_SCREEN,
            onFailure: () => {}
          },
          signMessage: {
            method: "eth_signTypedData_v4",
            data: o,
            confirmAndSign: () => n.signTypedData(o),
            onSuccess: o => t(o),
            onFailure: e,
            uiOptions: {}
          }
        });
        E(p.EMBEDDED_WALLET_CONNECTING_SCREEN);
      }).finally(() => {
        j.current = false;
      });
    },
    sendTransaction: async o => {
      let n = await C(o.chainId);
      let t = [];
      let e = "calls" in o && o.calls !== undefined;
      t = e ? [...o.calls] : [o];
      return new Promise(async (s, r) => {
        j.current = true;
        let {
          entropyId: a,
          entropyIdVerifier: c
        } = i(u);
        I({
          connectWallet: {
            entropyId: a,
            entropyIdVerifier: c,
            onCompleteNavigateTo: p.EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN,
            onFailure: () => {}
          },
          sendTransaction: {
            transactionRequests: h({
              calls: t,
              chain: n.chain,
              maxPriorityFeePerGas: o.maxPriorityFeePerGas,
              maxFeePerGas: o.maxFeePerGas,
              nonce: o.nonce ? BigInt(o.nonce) : undefined
            }),
            entropyId: a,
            entropyIdVerifier: c,
            transactingWallet: {
              address: n.account.address,
              walletIndex: null
            },
            signOnly: false,
            getIsSponsored: async () => o.paymaster !== undefined && o.paymasterInput !== undefined,
            onConfirm: () => e ? n.sendTransactionBatch(o) : n.sendTransaction(o),
            onSuccess: o => s(o.hash),
            onFailure: r,
            uiOptions: {}
          }
        });
        E(p.EMBEDDED_WALLET_CONNECTING_SCREEN);
      }).finally(() => {
        j.current = false;
      });
    }
  };
}
export { u as useAbstractSmartWallets };
