import { jsxs as e, Fragment as o, jsx as n } from "react/jsx-runtime";
import { DialogTitle as t } from "@headlessui/react";
import { MagnifyingGlassIcon as i } from "@heroicons/react/24/outline";
import r from "@heroicons/react/24/outline/ArrowLeftIcon";
import { useState as s, useEffect as a, useMemo as c } from "react";
import { isMobile as l } from "react-device-detect";
import { styled as m } from "styled-components";
import { PrimaryButton as p } from "../../components/Button.mjs";
import { QrCode as d } from "../../components/QrCode.mjs";
import { EmailUpdateForm as h } from "../../components/ui/forms/EmailInputForm.mjs";
import { Subtitle as g } from "../../components/ui/typography/Subtitle.mjs";
import { Title as w } from "../../components/ui/typography/Title.mjs";
import { useAppConfig as u } from "../../configuration/context.mjs";
import { WalletConnectClient as j } from "../../connectors/walletconnect-client.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as f } from "../../constants.mjs";
import { usePrivyInternal as y } from "../../hooks/internal-context.mjs";
import { WalletLoading as v } from "../../screens/ConnectionStatusScreen.mjs";
import { WalletConnect as b } from "../../svg/wallet-connect.mjs";
import { X as C } from "../shared/X.mjs";
import { WC_REGISTRY_PATCH as k } from "./data/wcRegistryPatch.mjs";
import B from "./icons/EVM.mjs";
import x from "./icons/Solana.mjs";
import { setActiveWallet as T } from "./state.mjs";
import { Header as L, CloseButton as _, ScrollContainer as I, WalletIcon as S, WalletIconContainer as W } from "./styles.mjs";
import "../../components/Loader.mjs";
import "qrcode";
import "../../svg/black-rounded-square.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zora.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "../../hooks/index.mjs";
import "../../auth-flows/siwe.mjs";
import "../../effect.mjs";
import "../../lib/siwe.mjs";
import "../../auth-flows/siws.mjs";
import "../../lib/siws.mjs";
import "../../client/user.mjs";
import "viem/utils";
import "../../components/Layouts.mjs";
import "../../components/ModalFooter.mjs";
import "../../svg/protected-by-privy.mjs";
import "../../components/ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../connectors/errors.mjs";
import "@privy-io/js-sdk-core";
import "../../connectors/userAlreadyHasConnectedCoinbaseWallet.mjs";
import "../../connectors/walletconnect-v2.mjs";
import "@walletconnect/ethereum-provider";
import "../../svg/metamask.mjs";
import "../../connectors/ethereum/index.mjs";
import "../../storage.mjs";
import "../../connectors/areWalletArraysEqual.mjs";
import "../../connectors/isBaseConnectedEthereumWallet.mjs";
import "../../connectors/base.mjs";
import "eventemitter3";
import "../../connectors/getRpcTimeout.mjs";
import "../../connectors/privyProxyProvider.mjs";
import "../../connectors/walletconnect-registry.mjs";
import "../../hook-utils/useInterval.mjs";
import "../../hooks/captcha-context.mjs";
import "../../hooks/modal-context.mjs";
import "../../components/PrefetchedImage.mjs";
import "../../screens/index.mjs";
import "../../hooks/privy-context.mjs";
import "../../lib/external-wallets/displayHelpers.mjs";
import "../../svg/brave-browser-icon.mjs";
import "../../svg/bybit.mjs";
import "../../svg/coinbase-wallet.mjs";
import "../../svg/cryptocom.mjs";
import "../../svg/phantom.mjs";
import "../../svg/rabby.mjs";
import "../../svg/rainbow.mjs";
import "../../svg/safe.mjs";
import "../../svg/uniswap.mjs";
import "../../svg/universal-profile.mjs";
import "../../svg/zerion.mjs";
import "../../lib/useHasTabbedAway.mjs";
import "../../svg/browser-extension-wallet-icon.mjs";
import "zustand";
import "zustand/shallow";
import "zustand/traditional";
var z = ({
  onBack: m,
  onClose: z
}) => {
  let H = u();
  let {
    connectors: q
  } = y();
  let [F, O] = s([]);
  let [U, Q] = s();
  let [X, D] = s();
  let [G, V] = s();
  let [J, K] = s("");
  let [Y, Z] = s();
  a(() => {
    new j(H.walletConnectCloudProjectId).fetchListings().then(e => O(e.listings)).catch(console.error);
  }, []);
  let ee = q.filter(e => e.connectorType === "injected");
  let oe = q.filter(e => e.chainType === "solana");
  let ne = ee.map(e => {
    let o = oe.find(o => o.walletClientType.replace("_wallet", "") === e.walletClientType.replace("_wallet", ""));
    if (o) {
      return {
        eth: e,
        sol: o
      };
    }
  }).filter(e => !!e);
  let te = q.find(e => e.connectorType === "wallet_connect_v2");
  let ie = q.find(e => e.connectorType === "coinbase_wallet");
  let re = async (e, o) => {
    if (e) {
      Z("loading");
      if (typeof e == "string") {
        V({
          connector: e,
          name: o?.name ?? "Wallet",
          icon: o?.icon
        });
        window.open(e, "_blanlk");
        return;
      }
      V({
        connector: e,
        name: o?.name ?? e?.walletBranding.name ?? "Wallet",
        icon: o?.icon ?? e?.walletBranding.icon
      });
      try {
        let o = await e.connect({
          showPrompt: true
        });
        if (!o) {
          Z("error");
          return;
        }
        Z("success");
        T({
          address: o.address,
          client: o.walletClientType,
          appId: H.id
        });
        setTimeout(() => {
          m();
        }, f);
      } catch (e) {
        Z("error");
      }
    }
  };
  let se = !U && !X && !G;
  let ae = c(() => G?.connector === te && X && l ? `Go to ${G.name} to continue` : G?.connector === te && X ? `Scan code to connect to ${G.name}` : typeof G?.connector == "string" ? `Open or install ${G.name}` : U && !G ? "Select network" : G ? null : "Connect wallet", [U, G, X]);
  let ce = [...ee, ...oe, ...ne.map(e => e.eth), ie, ...F.map(e => ({
    walletBranding: e
  }))].filter(e => e.walletBranding.name.toLowerCase().includes(J.toLowerCase()));
  /*#__PURE__*/
  return e(o, {
    children: [/*#__PURE__*/e(L, {
      children: [/*#__PURE__*/n(_, {
        onClick: () => X ? (Z(undefined), V(undefined), void D(undefined)) : G ? (Z(undefined), void V(undefined)) : U ? (Z(undefined), V(undefined), void Q(undefined)) : Y === "error" || Y === "loading" ? (Z(undefined), void V(undefined)) : void m(),
        children: /*#__PURE__*/n(r, {
          height: "1rem",
          width: "1rem",
          strokeWidth: 1.5
        })
      }), /*#__PURE__*/n(_, {
        onClick: z,
        children: /*#__PURE__*/n(C, {})
      })]
    }), ae && /*#__PURE__*/n(t, {
      as: w,
      style: {
        display: "block",
        width: "100%"
      },
      children: ae
    }), G && !X && typeof G.connector == "string" && /*#__PURE__*/e(g, {
      style: {
        textAlign: "center",
        display: "block"
      },
      children: ["To connect to ", G.name, ", install and open the app. Then confirm the connection when prompted."]
    }), se && /*#__PURE__*/e(o, {
      children: [/*#__PURE__*/e(h, {
        style: {
          marginTop: "0.5rem",
          background: "transparent"
        },
        children: [/*#__PURE__*/n(i, {}), /*#__PURE__*/n("input", {
          className: "login-method-button",
          type: "text",
          placeholder: "Search wallets",
          onChange: e => K(e.target.value),
          value: J
        })]
      }), /*#__PURE__*/n(M, {})]
    }), /*#__PURE__*/e(I, {
      $colorScheme: H.appearance.palette.colorScheme,
      style: {
        paddingTop: se ? "0rem" : "1.5rem",
        marginBottom: X ? "0.5rem" : undefined
      },
      children: [X && /*#__PURE__*/e(o, {
        children: [l ? /*#__PURE__*/e($, {
          children: [G?.icon ? /*#__PURE__*/n(v, {
            walletLogo: G.icon,
            success: Y === "success",
            fail: Y === "error"
          }) : null, /*#__PURE__*/e("h3", {
            children: ["Waiting for ", G?.name ?? "connection"]
          })]
        }) : /*#__PURE__*/n(d, {
          size: 280,
          url: X.universal ?? X.native,
          squareLogoElement: G?.icon ? typeof G.icon == "string" ? e => /*#__PURE__*/n("svg", {
            ...e,
            children: /*#__PURE__*/n("image", {
              href: G.icon,
              height: e.height,
              width: e.width
            })
          }) : G.icon : b
        }), l && Y === "loading" && /*#__PURE__*/n(p, {
          style: {
            marginTop: "0.5rem"
          },
          onClick: () => window.open(X.universal ?? X.native, "_blank"),
          children: "Open in app"
        })]
      }), G && !X && typeof G.connector != "string" && /*#__PURE__*/e($, {
        children: [G.icon ? /*#__PURE__*/n(v, {
          walletLogo: G.icon,
          success: Y === "success",
          fail: Y === "error"
        }) : null, /*#__PURE__*/e("h3", {
          children: ["Waiting for ", G.name]
        }), /*#__PURE__*/n(g, {
          children: Y === "error" ? "Please try connecting again." : "For the best experience, connect only one wallet at a time."
        }), Y === "error" && /*#__PURE__*/n(p, {
          style: {
            marginTop: "1.5rem"
          },
          onClick: () => re(G.connector, {
            name: G.name,
            icon: G.icon
          }),
          children: "Retry"
        })]
      }), G && !X && typeof G.connector == "string" && /*#__PURE__*/n(o, {
        children: /*#__PURE__*/e(N, {
          onClick: () => window.open(G.connector, "_blank"),
          children: [G.icon && (typeof G.icon == "string" ? /*#__PURE__*/n(S, {
            src: G.icon
          }) : /*#__PURE__*/n(G.icon, {})), G.name]
        })
      }), U?.eth && !G && /*#__PURE__*/e(N, {
        onClick: () => re(U.eth, {
          name: U.name,
          icon: U.icon
        }),
        children: [U.icon && (typeof U.icon == "string" ? /*#__PURE__*/n(S, {
          src: U.icon
        }) : /*#__PURE__*/n(U.icon, {})), U.name, /*#__PURE__*/n(P, {
          children: /*#__PURE__*/n(B, {})
        })]
      }), U?.sol && !G && /*#__PURE__*/e(N, {
        onClick: () => re(U.sol, {
          name: U.name,
          icon: U.icon
        }),
        children: [U.icon && (typeof U.icon == "string" ? /*#__PURE__*/n(S, {
          src: U.icon
        }) : /*#__PURE__*/n(U.icon, {})), U.name, /*#__PURE__*/n(P, {
          children: /*#__PURE__*/n(x, {})
        })]
      }), se && /*#__PURE__*/e(o, {
        children: [!ce.length && /*#__PURE__*/n(R, {
          children: "No wallets found. Try another search."
        }), ee.filter(e => !ne.some(o => e === o.eth)).filter(e => e.walletBranding.name.toLowerCase().includes(J.toLowerCase())).map((o, t) => /*#__PURE__*/e(N, {
          onClick: () => re(o),
          children: [/*#__PURE__*/n(W, {
            children: o.walletBranding.icon && (typeof o.walletBranding.icon == "string" ? /*#__PURE__*/n(S, {
              src: o.walletBranding.icon
            }) : /*#__PURE__*/n(o.walletBranding.icon, {}))
          }), o.walletBranding.name, /*#__PURE__*/n(P, {
            children: /*#__PURE__*/n(B, {})
          })]
        }, t)), ne.filter(e => e.eth.walletBranding.name.toLowerCase().includes(J.toLowerCase())).map((o, t) => /*#__PURE__*/e(N, {
          onClick: () => {
            Q({
              eth: o.eth,
              sol: o.sol,
              name: o.eth.walletBranding.name,
              icon: o.eth.walletBranding.icon
            });
          },
          children: [/*#__PURE__*/n(W, {
            children: o.eth.walletBranding.icon && (typeof o.eth.walletBranding.icon == "string" ? /*#__PURE__*/n(S, {
              src: o.eth.walletBranding.icon
            }) : /*#__PURE__*/n(o.eth.walletBranding.icon, {}))
          }), o.eth.walletBranding.name, /*#__PURE__*/e(P, {
            children: [/*#__PURE__*/n(B, {}), /*#__PURE__*/n(x, {})]
          })]
        }, t)), oe.filter(e => !ne.some(o => e === o.sol)).filter(e => e.walletBranding.name.toLowerCase().includes(J.toLowerCase())).map((o, t) => /*#__PURE__*/e(N, {
          onClick: () => re(o),
          children: [/*#__PURE__*/n(W, {
            children: o.walletBranding.icon && (typeof o.walletBranding.icon == "string" ? /*#__PURE__*/n(S, {
              src: o.walletBranding.icon
            }) : /*#__PURE__*/n(o.walletBranding.icon, {}))
          }), o.walletBranding.name, /*#__PURE__*/n(P, {
            children: /*#__PURE__*/n(x, {})
          })]
        }, t)), ie && ("coinbase wallet".includes(J.toLowerCase()) || "coinbase smart wallet".includes(J.toLowerCase())) && !ee.find(e => e.walletClientType === "coinbase_wallet" || e.walletClientType === "coinbase_smart_wallet") && /*#__PURE__*/e(N, {
          onClick: () => re(ie),
          children: [ie.walletBranding.icon && /*#__PURE__*/n(S, {
            src: ie.walletBranding.icon
          }), ie.walletBranding.name, /*#__PURE__*/n(P, {
            children: /*#__PURE__*/n(B, {})
          })]
        }), F.filter(e => !ee.find(o => o.walletClientType.replace("_wallet", "") === e.slug.replace("-wallet", "")) && !oe.find(o => o.walletClientType.replace("_wallet", "") === e.slug.replace("-wallet", "")) && (!ie || e.slug !== "coinbase-wallet")).filter(e => e.name.toLowerCase().includes(J.toLowerCase())).map((o, t) => {
          let i = E(o);
          let r = A(o);
          if (r || i) {
            return /*#__PURE__*/e(N, {
              onClick: async () => {
                let e = k[o.slug]?.mobile.native ?? o.mobile.native;
                let n = k[o.slug]?.mobile.universal ?? o.mobile.universal;
                te.setWalletEntry({
                  id: o.id,
                  displayName: o.name,
                  imageUrl: o.image_url?.sm,
                  mobile: {
                    native: e,
                    universal: n
                  },
                  hostname: "deprecated",
                  isWalletEntryOverriden: true
                }, D);
                await te.resetConnection(o.slug);
                let t = n || e;
                let s = t ? `${t}browse/${encodeURIComponent(window.location.href)}?ref=${encodeURIComponent(window.location.href)}` : o.homepage;
                if (i && r) {
                  Q({
                    eth: te,
                    sol: s,
                    name: o.name,
                    icon: o.image_url?.sm
                  });
                } else if (i) {
                  await re(s, {
                    name: o.name,
                    icon: o.image_url?.sm
                  });
                } else {
                  await re(te, {
                    name: o.name,
                    icon: o.image_url?.sm
                  });
                }
              },
              children: [o.image_url && /*#__PURE__*/n(S, {
                src: o.image_url.sm
              }), o.name, /*#__PURE__*/e(P, {
                children: [r && /*#__PURE__*/n(B, {}), i && /*#__PURE__*/n(x, {})]
              })]
            }, t);
          } else {
            return null;
          }
        })]
      })]
    })]
  });
};
let A = e => e.chains.some(e => e.startsWith("eip155:"));
let E = e => e.chains.some(e => e.startsWith("solana:"));
let N = /*#__PURE__*/m.button.withConfig({
  displayName: "Button",
  componentId: "sc-ad1dbdbe-0"
})(["gap:1rem;align-items:center;display:flex;width:100%;padding:1rem;border-radius:var(--privy-border-radius-lg);background:var(--privy-color-background-2);position:relative;text-align:left;font-weight:500;transition:background 200ms ease-in;svg{stroke-width:2.5;width:100%;max-height:1rem;max-width:1rem;flex-shrink:0;}&:hover{background:var(--privy-color-background-3);}"]);
let P = /*#__PURE__*/m.span.withConfig({
  displayName: "ButtonBadge",
  componentId: "sc-ad1dbdbe-1"
})(["display:flex;align-items:center;justify-content:end;margin-left:auto;position:relative;& > svg{border-radius:var(--privy-border-radius-full);}& > svg:not(:last-child){border-radius:var(--privy-border-radius-full);margin-right:-0.375rem;}"]);
let $ = /*#__PURE__*/m.div.withConfig({
  displayName: "ConnectContainer",
  componentId: "sc-ad1dbdbe-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;h3{margin-top:1.5rem;font-size:1rem;font-weight:500;line-height:1.5rem;}"]);
let M = /*#__PURE__*/m.div.withConfig({
  displayName: "SearchDivider",
  componentId: "sc-ad1dbdbe-3"
})(["width:100%;height:20px;background:radial-gradient(circle at bottom center,transparent 50%,white 100%);"]);
let R = /*#__PURE__*/m.div.withConfig({
  displayName: "EmptyContainer",
  componentId: "sc-ad1dbdbe-4"
})(["height:60px;display:flex;align-items:center;justify-content:center;text-align:center;"]);
export { z as default };
