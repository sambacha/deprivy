import { jsx as e, jsxs as o, Fragment as t } from "react/jsx-runtime";
import { useState as n, useEffect as r } from "react";
import { isMobile as i } from "react-device-detect";
import { styled as c } from "styled-components";
import { SiweFlow as s } from "../auth-flows/siwe.mjs";
import { SiwsFlow as a } from "../auth-flows/siws.mjs";
import { shouldProceedtoEmbeddedWalletCreationFlow as l } from "../client/user.mjs";
import { PrimaryButton as m } from "../components/Button.mjs";
import { FixedGappedContainer as p } from "../components/Layouts.mjs";
import { ConnectionLoader as d } from "../components/Loader.mjs";
import { ModalFooter as h } from "../components/ModalFooter.mjs";
import { ModalHeader as u } from "../components/ModalHeader.mjs";
import { ConnectorErrors as f, PrivyProviderRpcError as j, WalletTimeoutError as g, UserRejectedConnectionError as w } from "../connectors/errors.mjs";
import { isCoinbaseWalletInstalled as y } from "../connectors/is-wallet-installed.mjs";
import { userAlreadyHasConnectedCoinbaseWallet as E } from "../connectors/userAlreadyHasConnectedCoinbaseWallet.mjs";
import { WalletConnectV2WalletConnector as C } from "../connectors/walletconnect-v2.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as _ } from "../constants.mjs";
import { PrivyErrorCode as v, PrivyUserLimitReachedError as b } from "../errors.mjs";
import T from "../hook-utils/useInterval.mjs";
import { useCaptcha as R } from "../hooks/captcha-context.mjs";
import { usePrivyInternal as S } from "../hooks/internal-context.mjs";
import { usePrivyModal as N } from "../hooks/modal-context.mjs";
import { usePrivyContext as k } from "../hooks/privy-context.mjs";
import { WALLET_UI_MAP as A } from "../lib/external-wallets/displayHelpers.mjs";
import { useHasTabbedAway as O } from "../lib/useHasTabbedAway.mjs";
import { BrowserExtensionWallet as x } from "../svg/browser-extension-wallet-icon.mjs";
import { sleep as I } from "../utils/index.mjs";
import { ModalScreen as L } from "./index.mjs";
import "../effect.mjs";
import "../lib/siwe.mjs";
import "../lib/siws.mjs";
import "viem/utils";
import "../configuration/context.mjs";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
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
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "@privy-io/js-sdk-core";
import "../connectors/get-legacy-injected-providers.mjs";
import "viem";
import "@walletconnect/ethereum-provider";
import "../svg/metamask.mjs";
import "../svg/wallet-connect.mjs";
import "../connectors/ethereum/index.mjs";
import "../storage.mjs";
import "../connectors/areWalletArraysEqual.mjs";
import "../connectors/isBaseConnectedEthereumWallet.mjs";
import "../connectors/base.mjs";
import "eventemitter3";
import "../connectors/getRpcTimeout.mjs";
import "../connectors/privyProxyProvider.mjs";
import "../connectors/walletconnect-registry.mjs";
import "ofetch";
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
import "../svg/brave-browser-icon.mjs";
import "../svg/bybit.mjs";
import "../svg/coinbase-wallet.mjs";
import "../svg/cryptocom.mjs";
import "../svg/phantom.mjs";
import "../svg/rabby.mjs";
import "../svg/rainbow.mjs";
import "../svg/safe.mjs";
import "../svg/uniswap.mjs";
import "../svg/universal-profile.mjs";
import "../svg/zerion.mjs";
import "../utils/eth/getPublicClient.mjs";
const U = e => e?.privyErrorCode === v.LINKED_TO_ANOTHER_USER ? f.ERROR_USER_EXISTS : e instanceof j && !e.details.default ? e.details : e instanceof g ? f.ERROR_TIMED_OUT : e instanceof w ? f.ERROR_USER_REJECTED_CONNECTION : e?.privyErrorCode === v.CANNOT_LINK_MORE_OF_TYPE ? f.ERROR_USER_LIMIT_REACHED : f.ERROR_WALLET_CONNECTION;
const W = () => {
  let c;
  let [d, j] = n(false);
  let [g, w] = n(false);
  let [W, D] = n(undefined);
  let {
    authenticated: H,
    logout: B
  } = k();
  let {
    app: P,
    navigate: z,
    navigateBack: X,
    lastScreen: q,
    currentScreen: J,
    setModalData: K,
    data: $
  } = N();
  let {
    getAuthFlow: Q,
    walletConnectionStatus: Y,
    closePrivyModal: G,
    initLoginWithWallet: V,
    loginWithWallet: Z,
    updateWallets: ee,
    createAnalyticsEvent: oe
  } = S();
  let {
    walletConnectors: te
  } = k();
  let [ne, re] = n(0);
  let {
    user: ie
  } = k();
  let [ce] = n(ie?.linkedAccounts.length || 0);
  let [se, ae] = n("");
  let [le, me] = n("");
  let [pe, de] = n(false);
  let {
    hasTabbedAway: he
  } = O();
  let {
    enabled: ue,
    token: fe
  } = R();
  let je = i && Y?.connector?.connectorType === "wallet_connect_v2" || i && Y?.connector?.connectorType === "coinbase_wallet" || i && Y?.connector?.connectorType === "injected" && Y?.connector?.walletClientType === "phantom";
  let ge = Y?.status === "connected";
  let we = Y?.status === "switching_to_supported_chain";
  r(() => {
    let e = Q();
    let o = e instanceof s || e instanceof a ? e : undefined;
    if (ge && !o) {
      if (!ue || fe || H) {
        V(Y.connectedWallet, fe, $?.login?.disableSignup).then(() => {
          de(true);
        });
      } else {
        K({
          captchaModalData: {
            callback: e => V(Y.connectedWallet, e, $?.login?.disableSignup).then(() => {
              de(true);
            }),
            userIntentRequired: false,
            onSuccessNavigateTo: L.AWAITING_CONNECTION,
            onErrorNavigateTo: L.ERROR_SCREEN
          }
        });
        z(L.CAPTCHA_SCREEN, false);
      }
    }
    if (o && je && ge && !o.preparedMessage) {
      o.buildMessage();
    } else if (o && !je && ge) {
      if (!g) {
        (async () => {
          w(true);
          D(undefined);
          try {
            if (Y?.connector?.connectorType === "wallet_connect_v2" && Y?.connector?.walletClientType === "metamask") {
              await I(2500);
            }
            await Ee();
          } catch (e) {
            console.warn("Auto-prompted signature failed", e);
          } finally {
            w(false);
          }
        })();
      }
    }
  }, [ne, ge, pe]);
  r(() => {
    if (ie && d) {
      let e = _ - 500;
      if (P?.legal.requireUsersAcceptTerms && !ie.hasAcceptedTerms) {
        let o = setTimeout(() => {
          z(L.AFFIRMATIVE_CONSENT_SCREEN);
        }, e);
        return () => clearTimeout(o);
      }
      if (l(ie, P?.embeddedWallets?.createOnLogin)) {
        let o = setTimeout(() => {
          K({
            createWallet: {
              onSuccess: () => {},
              onFailure: e => {
                console.error(e);
                oe({
                  eventName: "embedded_wallet_creation_failure_logout",
                  payload: {
                    error: e,
                    screen: "ConnectionStatusScreen"
                  }
                });
                B();
              },
              callAuthOnSuccessOnClose: true
            }
          });
          z(L.EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN);
        }, e);
        return () => clearTimeout(o);
      }
      ee();
      let o = setTimeout(() => G({
        shouldCallAuthOnSuccess: true,
        isSuccess: true
      }), _);
      return () => clearTimeout(o);
    }
  }, [ie, d]);
  let ye = e => {
    if (e?.privyErrorCode !== v.ALLOWLIST_REJECTED) {
      if (e?.privyErrorCode === v.USER_LIMIT_REACHED) {
        console.error(new b(e).toString());
        z(L.USER_LIMIT_REACHED_SCREEN);
        return;
      }
      if (e?.privyErrorCode !== v.USER_DOES_NOT_EXIST) {
        if (e?.privyErrorCode === v.ACCOUNT_TRANSFER_REQUIRED && e.data?.data?.nonce) {
          K({
            accountTransfer: {
              nonce: e.data?.data?.nonce,
              account: Q()?.meta.address,
              displayName: e.data?.data?.account?.displayName,
              externalWalletMetadata: {
                walletClientType: Q()?.meta.walletClientType,
                chainId: Q()?.meta.chainId,
                connectorType: Q()?.meta.connectorType
              },
              linkMethod: "siwe",
              embeddedWalletAddress: e.data?.data?.otherUser?.embeddedWalletAddress
            }
          });
          z(L.LINK_CONFLICT_SCREEN);
          return;
        } else {
          D(U(e));
          return;
        }
      }
      z(L.ACCOUNT_NOT_FOUND_SCREEN);
    } else {
      z(L.ALLOWLIST_REJECTION_SCREEN);
    }
  };
  async function Ee() {
    try {
      await Z();
      j(true);
    } catch (e) {
      ye(e);
    } finally {
      w(false);
    }
  }
  r(() => {
    if (Y?.connectError) {
      ye(Y?.connectError);
    }
  }, [Y]);
  T(() => {
    let e = Ce === "wallet_connect_v2" && Y?.connector instanceof C ? Y.connector.redirectUri : undefined;
    if (e) {
      ae(e);
    }
    let o = Ce === "wallet_connect_v2" && Y?.connector instanceof C ? Y.connector.fallbackUniversalRedirectUri : undefined;
    if (o) {
      me(o);
    }
  }, Y?.connector instanceof C && !se ? 500 : null);
  let Ce = Y?.connector?.connectorType || "injected";
  let _e = Y?.connector?.walletClientType || "unknown";
  let ve = A[_e]?.displayName || Y?.connector?.walletBranding.name || "Browser Extension";
  let be = A[_e]?.logo || Y?.connector?.walletBranding.icon || (o => /*#__PURE__*/e(x, {
    ...o
  }));
  let Te = ve === "Browser Extension" ? ve.toLowerCase() : ve;
  c = d ? `Successfully connected with ${Te}` : W ? W.message : we ? "Switching networks" : ge ? g && je ? "Signing" : "Sign to verify" : `Waiting for ${Te}`;
  let Re = "Don’t see your wallet? Check your other browser windows.";
  if (d) {
    Re = ce === (ie?.linkedAccounts.length || 0) ? "Wallet was already linked." : "You’re good to go!";
  } else if (ne >= 2 && W) {
    Re = "Unable to connect wallet";
  } else if (W) {
    Re = W.detail;
  } else if (we) {
    Re = "Switch your wallet to the requested network.";
  } else if (ge && je) {
    Re = "Sign the message in your wallet to verify it belongs to you.";
  } else if (_e === "metamask" && i) {
    Re = "Click continue to open and connect MetaMask.";
  } else if (_e === "metamask") {
    Re = "For the best experience, connect only one wallet at a time.";
  } else if (Ce === "wallet_connect") {
    Re = "Open your mobile wallet app to continue";
  } else if (Ce === "coinbase_wallet" && !y()) {
    Re = E(ie) ? "Continue with the Coinbase app. Not the right wallet? Reset your connection below." : "Open the Coinbase app on your phone to continue.";
  }
  let Se = te?.walletConnectors?.find(e => e.walletClientType === "coinbase_wallet");
  let Ne = _e === "coinbase_wallet" && (E(ie) || W === f.ERROR_USER_EXISTS);
  /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/e(u, {
      backFn: q && J !== q ? X : undefined
    }), /*#__PURE__*/o(M, {
      children: [/*#__PURE__*/e(F, {
        walletLogo: be,
        success: d,
        fail: !!W
      }), /*#__PURE__*/o(p, {
        children: [/*#__PURE__*/e("h3", {
          children: c
        }), /*#__PURE__*/e("p", {
          children: Re
        }), ge || !se || he ? null : /*#__PURE__*/o("p", {
          children: ["Still here?", " ", /*#__PURE__*/e("a", {
            href: se,
            target: "_blank",
            style: {
              textDecoration: "underline"
            },
            children: "Try connecting again"
          }), le && /*#__PURE__*/o(t, {
            children: [" ", "or", " ", /*#__PURE__*/e("a", {
              href: le,
              target: "_blank",
              style: {
                textDecoration: "underline"
              },
              children: "use this different link"
            })]
          })]
        })]
      }), Ne ? /*#__PURE__*/e(m, {
        onClick: () => Se && Se?.disconnect(),
        disabled: d,
        children: "Use a different wallet"
      }) : W == f.ERROR_USER_EXISTS && J !== q ? /*#__PURE__*/e(m, {
        onClick: X,
        children: "Use a different wallet"
      }) : ge && !d && je ? /*#__PURE__*/e(m, {
        onClick: () => {
          w(true);
          Ee();
        },
        disabled: g,
        children: g ? "Signing" : "Sign with your wallet"
      }) : !d && W?.retryable && ne < 2 ? /*#__PURE__*/e(m, {
        onClick: () => {
          re(ne + 1);
          D(undefined);
          if (ge) {
            w(true);
            Ee();
          } else {
            Y?.connectRetry();
          }
        },
        disabled: !d && (!W?.retryable || ne >= 2),
        children: "Retry"
      }) : d || W ? null : /*#__PURE__*/e(m, {
        onClick: () => {},
        disabled: true,
        children: "Connecting"
      })]
    }), /*#__PURE__*/e(h, {})]
  });
};
let M = /*#__PURE__*/c.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-afad057-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;"]);
let D = /*#__PURE__*/c.div.withConfig({
  displayName: "StackedContainer",
  componentId: "sc-afad057-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:82px;> div{position:relative;}> div > span{position:absolute;left:-41px;top:-41px;}> div > :last-child{position:absolute;left:-19px;top:-19px;}"]);
const F = n => {
  let r = n.walletLogo; /*#__PURE__*/
  return e(t, {
    children: /*#__PURE__*/e(D, {
      children: /*#__PURE__*/o("div", {
        children: [/*#__PURE__*/e(d, {
          success: n.success,
          fail: n.fail
        }), typeof r == "string" ? /*#__PURE__*/e("span", {
          style: {
            background: `url('${r}')`,
            height: "38px",
            width: "38px",
            borderRadius: "6px",
            margin: "auto",
            backgroundSize: "cover"
          }
        }) : /*#__PURE__*/e(r, {
          style: {
            width: "38px",
            height: "38px"
          }
        })]
      })
    })
  });
};
export { W as ConnectionStatusScreen, F as WalletLoading, U as getErrorDetails };
