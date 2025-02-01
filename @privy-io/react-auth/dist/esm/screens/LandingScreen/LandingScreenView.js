import { jsx as o, jsxs as e, Fragment as t } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/EnvelopeIcon";
import r from "@heroicons/react/24/outline/PhoneIcon";
import s from "@heroicons/react/24/outline/UserCircleIcon";
import { useMemo as n, useState as m, useEffect as l } from "react";
import { styled as a } from "styled-components";
import { toObjectKeys as p } from "@privy-io/js-sdk-core";
import { TermsAndConditions as c, BlobbyFooter as h } from "../../components/ModalFooter.mjs";
import { ModalHeader as g } from "../../components/ModalHeader.mjs";
import { useAppConfig as d } from "../../configuration/context.mjs";
import { usePrivyInternal as j } from "../../hooks/internal-context.mjs";
import { usePrivyModal as f } from "../../hooks/modal-context.mjs";
import { toDisplayFromAccountType as u } from "../../lib/toDisplayFromAccountType.mjs";
import { useRecentlyUsedLogin as y } from "../../recent-login/context.mjs";
import { EmailOrPhone as w } from "../../svg/email-or-phone.mjs";
import { AppLogoHeader as v } from "./AppLogoHeader.mjs";
import { EmailButton as b } from "./EmailButton.mjs";
import { EmptyWalletView as k } from "./EmptyWalletView.mjs";
import { FarcasterButton as C } from "./FarcasterButton.mjs";
import { PasskeyLink as T } from "./PasskeyLink.mjs";
import { SmsButton as x } from "./SmsButton.mjs";
import { SocialButton as A } from "./SocialButton.mjs";
import { TelegramButton as M } from "./TelegramButton.mjs";
import { toWalletButtons as I } from "./WalletButtonList.mjs";
import { WalletOverflowButton as L } from "./WalletOverflowButton.mjs";
import { Web2OverflowButton as E } from "./Web2OverflowButton.mjs";
import { Subtitle as W, AlignBottom as B, LoginMethodContainer as P } from "./styles.mjs";
import "../../svg/protected-by-privy.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../constants.mjs";
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
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
import "../../components/AppLogo.mjs";
import "../../components/ConnectEmailForm.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../hooks/captcha-context.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../hooks/privy-context.mjs";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/forms/EmailInputForm.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../svg/farcaster.mjs";
import "../../components/ConnectPhoneForm.mjs";
import "../../components/PhoneCountryDropdown.mjs";
import "../../svg/apple.mjs";
import "../../svg/discord.mjs";
import "../../svg/github.mjs";
import "../../svg/google.mjs";
import "../../svg/instagram.mjs";
import "../../svg/linkedin.mjs";
import "../../svg/spotify.mjs";
import "../../svg/tiktok.mjs";
import "../../svg/twitter.mjs";
import "../../svg/telegram.mjs";
import "./WalletButton.mjs";
import "react-device-detect";
import "../../components/external-wallets/InjectedWalletIcon.mjs";
import "@heroicons/react/24/outline/WalletIcon";
import "../../lib/external-wallets/displayHelpers.mjs";
import "../../svg/brave-browser-icon.mjs";
import "../../svg/bybit.mjs";
import "../../svg/coinbase-wallet.mjs";
import "../../svg/cryptocom.mjs";
import "../../svg/metamask.mjs";
import "../../svg/phantom.mjs";
import "../../svg/rabby.mjs";
import "../../svg/rainbow.mjs";
import "../../svg/safe.mjs";
import "../../svg/uniswap.mjs";
import "../../svg/universal-profile.mjs";
import "../../svg/wallet-connect.mjs";
import "../../svg/zerion.mjs";
import "../../lib/isEmbeddedWebview.mjs";
import "@heroicons/react/24/outline/ChevronRightIcon";
const O = ({
  connectOnly: i
}) => {
  let {
    closePrivyModal: r,
    connectors: s
  } = j();
  let {
    data: a,
    onUserCloseViaDialogOrKeybindRef: w
  } = f();
  let v = d();
  let {
    accountType: O,
    walletClientType: z,
    chainType: D
  } = y();
  let V = O ? u(O) : null;
  let G = a?.login;
  let {
    email: K,
    sms: N,
    google: Q,
    twitter: X,
    discord: q,
    github: J,
    spotify: Y,
    instagram: Z,
    tiktok: $,
    linkedin: _,
    apple: oo,
    wallet: eo,
    farcaster: to,
    telegram: io
  } = n(() => G?.loginMethods ? p(G.loginMethods, true) : null, [G]) ?? v.loginMethods;
  let {
    passkey: ro
  } = v.loginMethods;
  let so = [K && "email", N && "sms", Q && "google", X && "twitter", q && "discord", J && "github", Y && "spotify", Z && "instagram", $ && "tiktok", _ && "linkedin", oo && "apple", to && "farcaster", io && "telegram"].filter(o => o);
  let no = so.length > 0;
  let mo = n(() => eo && !no ? "web3-first" : eo && v?.appearance.loginGroupPriority || "web2-first", [eo, no, v?.appearance.loginGroupPriority]);
  let lo = v?.appearance.hideDirectWeb2Inputs;
  let [ao, po] = m("default");
  let [co, ho] = m(U({
    mostRecentlyUsedAccountType: O,
    smsAvailable: N,
    emailAvailable: K,
    prefilledType: G?.prefill?.type
  }));
  l(() => {
    ho(U({
      mostRecentlyUsedAccountType: O,
      smsAvailable: N,
      emailAvailable: K,
      prefilledType: G?.prefill?.type
    }));
  }, [K, N, O]);
  let go = () => {
    r({
      shouldCallAuthOnSuccess: true
    });
    setTimeout(() => {
      po("default");
    }, 150);
  };
  w.current = go;
  let jo = [];
  if (z && eo) {
    jo.push(z);
  } else if (V?.loginMethod && so.includes(V.loginMethod)) {
    jo.push(V.loginMethod);
  }
  let fo = e => e === "email" ? /*#__PURE__*/o(b, {
    isEditable: co === "email",
    setIsEditable: () => {
      ho("email");
    },
    defaultValue: G?.prefill?.type === "email" ? G.prefill.value : undefined
  }, e) : e === "sms" ? /*#__PURE__*/o(x, {
    isEditable: co === "sms",
    setIsEditable: () => {
      ho("sms");
    },
    defaultValue: G?.prefill?.type === "phone" ? G.prefill.value : undefined
  }, e) : e === "apple" ? /*#__PURE__*/o(A, {
    provider: "apple"
  }, e) : e === "discord" ? /*#__PURE__*/o(A, {
    provider: "discord"
  }, e) : e === "farcaster" ? /*#__PURE__*/o(C, {}, e) : e === "github" ? /*#__PURE__*/o(A, {
    provider: "github"
  }, e) : e === "google" ? /*#__PURE__*/o(A, {
    provider: "google"
  }, e) : e === "linkedin" ? /*#__PURE__*/o(A, {
    provider: "linkedin"
  }, e) : e === "tiktok" ? /*#__PURE__*/o(A, {
    provider: "tiktok"
  }, e) : e === "spotify" ? /*#__PURE__*/o(A, {
    provider: "spotify"
  }, e) : e === "instagram" ? /*#__PURE__*/o(A, {
    provider: "instagram"
  }, e) : e === "twitter" ? /*#__PURE__*/o(A, {
    provider: "twitter"
  }, e) : e === "telegram" ? /*#__PURE__*/o(M, {}, e) : I({
    walletList: v.appearance.walletList,
    walletChainType: v.appearance.walletChainType,
    connectors: s,
    connectOnly: i,
    ignore: [],
    walletConnectEnabled: v.externalWallets.walletConnect.enabled,
    forceWallet: {
      wallet: e,
      chainType: D ?? "ethereum"
    }
  });
  let uo = I({
    walletList: v.appearance.walletList.filter(o => o !== z),
    walletChainType: v.appearance.walletChainType,
    connectors: s,
    connectOnly: i,
    ignore: [...v.appearance.walletList, z],
    walletConnectEnabled: v.externalWallets.walletConnect.enabled
  });
  let yo = so.filter(o => o !== V?.loginMethod).flatMap(fo);
  let wo = jo.flatMap(fo);
  if (mo === "web3-first" && ao === "default") {
    uo.unshift(...wo);
  } else if (mo === "web2-first") {
    yo.unshift(...wo);
  }
  let vo = so.filter(o => o !== "email" && o !== "sms");
  let bo = F({
    priority: mo,
    email: K,
    sms: N,
    social: vo
  });
  let ko = H({
    priority: mo,
    email: K,
    sms: N,
    social: vo
  });
  let Co = /*#__PURE__*/o(L, {
    text: R({
      priority: mo
    }),
    onClick: () => po("web3-overflow")
  });
  let To = /*#__PURE__*/o(E, {
    text: bo,
    icon: ko,
    onClick: () => po("web2-overflow")
  });
  let xo = lo ? 0 : 1;
  let Ao = eo && uo.length > 0;
  let Mo = yo.length === 0 && eo && uo.length === 0;
  let Io = 5 - (Ao ? 1 : 0);
  let Lo = uo.length > 0 ? uo : /*#__PURE__*/o(k, {
    chainType: v.appearance.walletChainType,
    withPadding: true
  });
  /*#__PURE__*/
  return e(t, {
    children: [/*#__PURE__*/o(g, {
      title: v.appearance.landingHeader,
      onClose: go,
      backFn: ao === "default" ? undefined : () => {
        po("default");
      }
    }), ao === "default" && /*#__PURE__*/o(S, {}), ao === "default" && (typeof v.appearance.loginMessage == "string" ? /*#__PURE__*/o(W, {
      children: v.appearance.loginMessage
    }) : v.appearance.loginMessage), /*#__PURE__*/o(B, {
      style: {
        overflow: "hidden",
        padding: 2
      },
      children: /*#__PURE__*/e(P, {
        children: [ao === "default" && mo === "web2-first" && /*#__PURE__*/e(t, {
          children: [yo.length > Io ? yo.slice(0, Io - 1) : yo, yo.length > Io && To, Ao && Co, Mo && /*#__PURE__*/o(k, {
            chainType: v.appearance.walletChainType
          })]
        }), ao === "default" && mo === "web3-first" && /*#__PURE__*/e(t, {
          children: [eo && /*#__PURE__*/e(t, {
            children: [uo.length > Io ? uo.slice(0, Io - 1) : uo, uo.length > Io && Co]
          }), yo.length > xo && To, yo.length === xo && yo[0], Mo && /*#__PURE__*/o(k, {
            chainType: v.appearance.walletChainType
          })]
        }), ao === "web2-overflow" && /*#__PURE__*/o(t, {
          children: mo === "web3-first" ? yo : yo.slice(3)
        }), ao === "web3-overflow" ? Lo : [], ro && ao === "default" && /*#__PURE__*/o(T, {})]
      })
    }), v && /*#__PURE__*/o(c, {
      app: v
    }), /*#__PURE__*/o(h, {})]
  });
};
let S = /*#__PURE__*/a(v).withConfig({
  displayName: "StyledAppLogoHeader",
  componentId: "sc-4938a02-0"
})(["margin-bottom:16px;"]);
let F = ({
  priority: o,
  email: e,
  sms: t,
  social: i
}) => o === "web2-first" ? "Other socials" : e && t && i.length > 0 || e && i.length > 0 ? "Log in with email or socials" : t && i.length > 0 ? "Log in with sms or socials" : e && t ? "Continue with email or sms" : e ? "Continue with email" : t ? "Continue with sms" : "Log in with a social account";
let H = ({
  priority: e,
  email: t,
  sms: n,
  social: m
}) => e === "web2-first" || m.length > 0 ? /*#__PURE__*/o(s, {}) : t && n ? /*#__PURE__*/o(w, {}) : t ? /*#__PURE__*/o(i, {}) : n ? /*#__PURE__*/o(r, {}) : null;
let R = ({
  priority: o
}) => o === "web2-first" ? "Continue with a wallet" : "Other wallets";
let U = ({
  mostRecentlyUsedAccountType: o,
  smsAvailable: e,
  emailAvailable: t,
  prefilledType: i
}) => t && (o === "email" && i !== "phone" || i === "email") || !e || o !== "phone" && i !== "phone" ? "email" : "sms";
export { O as LandingScreenView };
