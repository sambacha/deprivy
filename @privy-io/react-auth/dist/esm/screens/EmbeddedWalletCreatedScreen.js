import { jsxs as o, Fragment as t, jsx as n } from "react/jsx-runtime";
import r from "@heroicons/react/24/solid/CheckCircleIcon";
import { useEffect as s } from "react";
import { getPrivyEthereumWallet as i } from "../client/user.mjs";
import { RefactorSpacerTop as e, CenteredItemWithGap as c, RefactorSpacerBottom as m } from "../components/Layouts.mjs";
import { BlobbyFooter as a } from "../components/ModalFooter.mjs";
import { ModalHeader as p } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as l } from "../components/ScreenHeader.mjs";
import { DEFAULT_SUCCESS_SCREEN_LONG_DURATION_MS as h } from "../constants.mjs";
import { usePrivyInternal as j } from "../hooks/internal-context.mjs";
import { usePrivyModal as u } from "../hooks/modal-context.mjs";
import { usePrivyContext as d } from "../hooks/privy-context.mjs";
import "viem/utils";
import "styled-components";
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
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
import "./index.mjs";
const f = () => {
  let {
    user: f
  } = d();
  let {
    closePrivyModal: y,
    isNewUserThisSession: g,
    updateWallets: x
  } = j();
  let {
    app: b,
    data: k,
    onUserCloseViaDialogOrKeybindRef: v
  } = u();
  let {
    onSuccess: C,
    onFailure: S,
    callAuthOnSuccessOnClose: A
  } = k.createWallet;
  let w = () => {
    let o = i(f);
    if (o) {
      x();
      C(o);
    } else {
      S(Error("Failed to create wallet"));
    }
    y({
      shouldCallAuthOnSuccess: A
    });
  };
  s(() => {
    let o = setTimeout(w, h);
    return () => clearTimeout(o);
  }, []);
  v.current = w;
  return /*#__PURE__*/o(t, {
    children: [/*#__PURE__*/n(p, {
      onClose: w
    }), /*#__PURE__*/n(e, {}), /*#__PURE__*/o(c, {
      children: [/*#__PURE__*/n(r, {
        fill: "var(--privy-color-accent)",
        width: "64px",
        height: "64px"
      }), /*#__PURE__*/n(l, {
        title: g ? "Welcome" + (b?.name ? ` to ${b?.name}` : "") : "All set!",
        description: g ? "You’ve successfully created an account." : "Your account is secured."
      })]
    }), /*#__PURE__*/n(m, {}), /*#__PURE__*/n(a, {})]
  });
};
export { f as EmbeddedWalletCreatedScreen };
