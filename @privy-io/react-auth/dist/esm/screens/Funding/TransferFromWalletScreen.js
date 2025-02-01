import { jsx as e, jsxs as o, Fragment as t } from "react/jsx-runtime";
import { useState as n, useEffect as i } from "react";
import { BlobbyFooter as r } from "../../components/ModalFooter.mjs";
import { ModalHeader as s } from "../../components/ModalHeader.mjs";
import { CenteredScreenHeader as m } from "../../components/ScreenHeader.mjs";
import a from "../../components/embedded-wallets/FundWalletMethodHeader.mjs";
import { Chip as c } from "../../components/ui/chips/Chip.mjs";
import { Subtitle as l } from "../../components/ui/typography/Subtitle.mjs";
import { usePrivyInternal as p } from "../../hooks/internal-context.mjs";
import { usePrivyModal as h } from "../../hooks/modal-context.mjs";
import { useWallets as d } from "../../hooks/useWallets.mjs";
import { WalletOverflowButton as j } from "../LandingScreen/WalletOverflowButton.mjs";
import { ModalScreen as u } from "../index.mjs";
import { toWalletButtons as g } from "../LandingScreen/WalletButtonList.mjs";
import { LoginMethodContainer as y, LoginMethodButton as f } from "../LandingScreen/styles.mjs";
import { IconContainer as C } from "./styles.mjs";
import { useSolanaWallets as T } from "../../hooks/solana/useSolanaWallets.mjs";
import "styled-components";
import "../../configuration/context.mjs";
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
import "../../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/PrefetchedImage.mjs";
import "@heroicons/react/24/outline/ChevronRightIcon";
import "@heroicons/react/24/outline/WalletIcon";
import "../LandingScreen/EmptyWalletView.mjs";
import "../LandingScreen/WalletButton.mjs";
import "react-device-detect";
import "../../components/external-wallets/InjectedWalletIcon.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
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
import "../../recent-login/context.mjs";
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
import "../../components/Button.mjs";
import "../../components/Loader.mjs";
import "../LinkPasskeyScreen.mjs";
import "@heroicons/react/24/outline/CheckCircleIcon";
import "@heroicons/react/24/outline/ClockIcon";
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/CheckBadgeIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
import "../../errors.mjs";
import "ofetch";
import "../../hooks/privy-context.mjs";
import "../../svg/face-id.mjs";
import "../../svg/fingerprint.mjs";
import "../MfaScreens/StyledComponents.mjs";
const w = () => {
  let c;
  let {
    connectors: f
  } = p();
  let {
    app: C,
    setModalData: w,
    data: I,
    navigate: N
  } = h();
  let {
    wallets: _
  } = d();
  let {
    wallets: E
  } = T();
  let [S, b] = n("default");
  let k = I?.funding?.chainType === "solana";
  let A = !!I?.funding?.crossChainBridgingEnabled;
  c = I?.funding?.chainType === "ethereum" ? I.funding.erc20Address && !I.funding.isUSDC ? "ethereum-only" : A && !I.funding.chain.testnet ? "ethereum-and-solana" : "ethereum-only" : A ? "ethereum-and-solana" : "solana-only";
  let L = _.filter(e => e.walletClientType !== "privy");
  let W = L.map(e => e.walletClientType);
  let x = E.filter(e => e.walletClientType !== "privy");
  let R = x.map(e => e.walletClientType);
  let M = [];
  let F = {
    ...I.funding
  };
  F.usingDefaultFundingMethod &&= false;
  let D = ({
    address: e,
    walletChainType: o
  }) => {
    w({
      ...I,
      funding: {
        ...F,
        connectedWalletAddress: e,
        onContinueWithExternalWallet: () => N(O({
          destChainType: k ? "solana" : "ethereum",
          sourceChainType: o
        }))
      }
    });
    N(u.FUNDING_EDIT_AMOUNT_SCREEN);
  };
  if (c !== "solana-only") {
    M.push(...L.map((o, t) => /*#__PURE__*/e(v, {
      onClick: () => D({
        address: o.address,
        walletChainType: "ethereum"
      }),
      icon: o.meta.icon,
      name: o.meta.name,
      chainType: o.type
    }, t)));
  }
  if (c !== "ethereum-only") {
    M.push(...x.map((o, t) => /*#__PURE__*/e(v, {
      onClick: () => D({
        address: o.address,
        walletChainType: "solana"
      }),
      icon: o.meta.icon,
      name: o.meta.name,
      chainType: o.type
    }, t)));
  }
  M.push(...g({
    walletList: C.appearance.walletList.filter(e => !L.some(o => o.walletClientType === e) && !x.some(o => o.walletClientType === e)),
    walletChainType: c,
    connectors: f,
    connectOnly: true,
    ignore: [...C.appearance.walletList, ...W, ...R],
    walletConnectEnabled: C.externalWallets.walletConnect.enabled
  }));
  let G = /*#__PURE__*/e(j, {
    text: "More wallets",
    onClick: () => b("overflow")
  });
  let O = ({
    sourceChainType: e,
    destChainType: o
  }) => e === "ethereum" && o === "solana" ? u.FUNDING_AWAITING_EVM_TO_SOL_BRIDGING_SCREEN : e === "ethereum" && o === "ethereum" ? u.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN : e === "solana" && o === "ethereum" ? u.FUNDING_AWAITING_SOL_TO_EVM_BRIDGING_SCREEN : u.FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_SOLANA_WALLET_SCREEN;
  i(() => {
    w({
      ...I,
      externalConnectWallet: {
        onCompleteNavigateTo: ({
          walletChainType: e
        }) => {
          w({
            ...I,
            funding: {
              ...F,
              onContinueWithExternalWallet: () => {
                N(O({
                  destChainType: k ? "solana" : "ethereum",
                  sourceChainType: e ?? "ethereum"
                }));
              }
            }
          });
          return u.FUNDING_EDIT_AMOUNT_SCREEN;
        }
      }
    });
  }, []);
  return /*#__PURE__*/o(t, S === "overflow" ? {
    children: [/*#__PURE__*/e(s, {
      backFn: () => b("default")
    }, "header"), /*#__PURE__*/o(y, {
      children: [/*#__PURE__*/e(l, {
        style: {
          color: "var(--privy-color-foreground-3)",
          textAlign: "left"
        },
        children: "More wallets"
      }), M]
    }), /*#__PURE__*/e(r, {})]
  } : {
    children: [/*#__PURE__*/e(a, {}), /*#__PURE__*/e(m, {
      title: "Transfer from wallet",
      description: "Connect a wallet to deposit funds or send funds manually to your wallet address."
    }), /*#__PURE__*/o(y, {
      children: [M.length > 4 ? M.slice(0, 3) : M, M.length > 4 && G]
    }), /*#__PURE__*/e(r, {})]
  });
};
let v = ({
  onClick: t,
  icon: n,
  name: i,
  chainType: r
}) => /*#__PURE__*/o(f, {
  onClick: t,
  children: [/*#__PURE__*/e(C, {
    style: {
      width: 20
    },
    children: /*#__PURE__*/e("img", {
      src: n
    })
  }), i, /*#__PURE__*/e(c, {
    color: "gray",
    style: {
      marginLeft: "auto"
    },
    children: "Connected"
  }), r === "solana" && /*#__PURE__*/e(c, {
    color: "gray",
    children: "Solana"
  })]
});
export { w as TransferFromWalletScreen };
