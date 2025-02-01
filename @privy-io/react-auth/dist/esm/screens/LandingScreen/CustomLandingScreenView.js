import { jsxs as o, Fragment as t, jsx as e } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/UserCircleIcon";
import { useState as r, useEffect as s } from "react";
import { styled as n } from "styled-components";
import { TermsAndConditions as m, BlobbyFooter as p } from "../../components/ModalFooter.mjs";
import { ModalHeader as a } from "../../components/ModalHeader.mjs";
import { useAppConfig as c } from "../../configuration/context.mjs";
import { usePrivyInternal as l } from "../../hooks/internal-context.mjs";
import { usePrivyModal as j } from "../../hooks/modal-context.mjs";
import { toDisplayFromAccountType as d } from "../../lib/toDisplayFromAccountType.mjs";
import { useRecentlyUsedLogin as h } from "../../recent-login/context.mjs";
import { splitAtIndex as g } from "../../utils/index.mjs";
import { AppLogoHeader as f } from "./AppLogoHeader.mjs";
import { CrossAppButton as u } from "./CrossAppButton.mjs";
import { EmailButton as v } from "./EmailButton.mjs";
import { FarcasterButton as y } from "./FarcasterButton.mjs";
import { PasskeyLink as b } from "./PasskeyLink.mjs";
import { SmsButton as w } from "./SmsButton.mjs";
import { SocialButton as k } from "./SocialButton.mjs";
import { TelegramButton as x } from "./TelegramButton.mjs";
import { toWalletButtons as C } from "./WalletButtonList.mjs";
import { Web2OverflowButton as M } from "./Web2OverflowButton.mjs";
import { Subtitle as I, AlignBottom as A, LoginMethodContainerWithScrollShadows as E } from "./styles.mjs";
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
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../components/AppLogo.mjs";
import "../../components/Loader.mjs";
import "../../components/ProviderAppLogo.mjs";
import "../../hooks/privy-context.mjs";
import "@heroicons/react/24/outline/EnvelopeIcon";
import "../../components/ConnectEmailForm.mjs";
import "../../hooks/captcha-context.mjs";
import "../../components/Button.mjs";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/ui/forms/EmailInputForm.mjs";
import "../../components/ui/typography/ErrorMessage.mjs";
import "../../svg/farcaster.mjs";
import "@heroicons/react/24/outline/PhoneIcon";
import "../../components/ConnectPhoneForm.mjs";
import "@privy-io/js-sdk-core";
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
import "./EmptyWalletView.mjs";
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
let L = o => `${o.props.provider}:${o.props.displayName}`;
const S = ({
  connectOnly: n
}) => {
  let {
    closePrivyModal: f,
    connectors: S
  } = l();
  let {
    app: W,
    onUserCloseViaDialogOrKeybindRef: O,
    data: F
  } = j();
  let {
    appearance: {
      palette: {
        colorScheme: P
      }
    }
  } = c();
  let {
    accountType: H,
    walletClientType: z,
    chainType: V
  } = h();
  let D = H ? d(H) : null;
  let R = W.loginMethodsAndOrder?.primary ?? [];
  let $ = W.loginMethodsAndOrder?.overflow ?? [];
  let N = [...R, ...$];
  let U = W.loginMethods.passkey;
  let K = F?.login;
  let Q = [];
  if (z && N.includes(z)) {
    Q.push(z);
  } else if (H && N.includes(D?.loginMethod)) {
    Q.push(D?.loginMethod);
  }
  let [X, Y] = r("default");
  let [q, G] = r(H === "phone" ? "sms" : "email");
  s(() => {
    if (H === "phone") {
      G("sms");
    }
    let o = N.indexOf("sms");
    let t = N.indexOf("email");
    if (o > -1 && o < t) {
      G("sms");
    }
  }, [H, R, $]);
  let J = () => {
    f({
      shouldCallAuthOnSuccess: true
    });
    setTimeout(() => {
      Y("default");
    }, 150);
  };
  O.current = J;
  let Z = o => o === "email" ? /*#__PURE__*/e(v, {
    isEditable: q === "email",
    setIsEditable: () => {
      G("email");
    },
    defaultValue: K?.prefill?.type === "email" ? K.prefill.value : undefined
  }, o) : o === "sms" ? /*#__PURE__*/e(w, {
    isEditable: q === "sms",
    setIsEditable: () => {
      G("sms");
    },
    defaultValue: K?.prefill?.type === "phone" ? K.prefill.value : undefined
  }, o) : o === "apple" ? /*#__PURE__*/e(k, {
    provider: "apple"
  }, o) : o === "discord" ? /*#__PURE__*/e(k, {
    provider: "discord"
  }, o) : o === "farcaster" ? /*#__PURE__*/e(y, {}, o) : o === "github" ? /*#__PURE__*/e(k, {
    provider: "github"
  }, o) : o === "google" ? /*#__PURE__*/e(k, {
    provider: "google"
  }, o) : o === "linkedin" ? /*#__PURE__*/e(k, {
    provider: "linkedin"
  }, o) : o === "spotify" ? /*#__PURE__*/e(k, {
    provider: "spotify"
  }, o) : o === "instagram" ? /*#__PURE__*/e(k, {
    provider: "instagram"
  }, o) : o === "tiktok" ? /*#__PURE__*/e(k, {
    provider: "tiktok"
  }, o) : o === "twitter" ? /*#__PURE__*/e(k, {
    provider: "twitter"
  }, o) : o === "telegram" ? /*#__PURE__*/e(x, {}, o) : o.startsWith("privy:") ? /*#__PURE__*/e(u, {
    appId: o.replace("privy:", "")
  }, o) : C({
    walletList: W.appearance.walletList,
    walletChainType: W.appearance.walletChainType,
    connectors: S,
    connectOnly: n,
    ignore: [],
    walletConnectEnabled: W.externalWallets.walletConnect.enabled,
    forceWallet: {
      wallet: o,
      chainType: V ?? "ethereum"
    }
  });
  let _ = Q.flatMap(Z);
  let oo = R.filter(o => o !== z && o !== D?.loginMethod).flatMap(Z);
  let to = $.filter(o => o !== z && o !== D?.loginMethod).flatMap(Z);
  let eo = to.filter(o => !oo.map(L).includes(L(o)));
  let [io, ro] = g([..._, ...oo, ...eo], T({
    primary: oo.length + _.length,
    overflow: to.length
  }));
  /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/e(a, {
      title: W.appearance.landingHeader,
      onClose: J,
      backFn: X === "default" ? undefined : () => {
        Y("default");
      }
    }), X === "default" && /*#__PURE__*/e(B, {}), X === "default" && (typeof W.appearance.loginMessage == "string" ? /*#__PURE__*/e(I, {
      children: W.appearance.loginMessage
    }) : W.appearance.loginMessage), /*#__PURE__*/e(A, {
      style: {
        overflow: "hidden"
      },
      children: /*#__PURE__*/o(E, {
        $colorScheme: P,
        style: {
          maxHeight: 400,
          overflowY: "scroll",
          padding: 2
        },
        children: [X === "default" && /*#__PURE__*/o(t, {
          children: [io, ro.length > 0 && /*#__PURE__*/e(M, {
            text: "More options",
            icon: /*#__PURE__*/e(i, {}),
            onClick: () => Y("overflow")
          })]
        }), X === "overflow" && /*#__PURE__*/e(t, {
          children: ro
        }), U && X === "default" && /*#__PURE__*/e(b, {})]
      })
    }), W && /*#__PURE__*/e(m, {
      app: W
    }), /*#__PURE__*/e(p, {})]
  });
};
let T = ({
  primary: o,
  overflow: t
}) => o < 5 ? o : o === 5 && t === 0 ? 5 : 4;
let B = /*#__PURE__*/n(f).withConfig({
  displayName: "StyledAppLogoHeader",
  componentId: "sc-5bf511fb-0"
})(["margin-bottom:16px;"]);
export { S as CustomLandingScreenView };
