import { jsxs as o, Fragment as n, jsx as t } from "react/jsx-runtime";
import { ModalScreen as r } from "./index.mjs";
import i from "@heroicons/react/24/outline/PhoneIcon";
import { ConnectPhoneNumberForm as e } from "../components/ConnectPhoneForm.mjs";
import { RefactorSpacerTop as s, BottomPusherContainer as m, RefactorSpacerBottom as c } from "../components/Layouts.mjs";
import { BlobbyFooter as a } from "../components/ModalFooter.mjs";
import { ModalHeader as p } from "../components/ModalHeader.mjs";
import { CenteredScreenHeader as h } from "../components/ScreenHeader.mjs";
import { usePrivyInternal as j } from "../hooks/internal-context.mjs";
import { usePrivyModal as l } from "../hooks/modal-context.mjs";
import "react";
import "styled-components";
import "@privy-io/js-sdk-core";
import "../recent-login/context.mjs";
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
import "../lib/solana/index.mjs";
import "../theme.mjs";
import "tinycolor2";
import "../lib/cybr53.mjs";
import "../hooks/events-context.mjs";
import "../storage.mjs";
import "../components/Button.mjs";
import "../components/Loader.mjs";
import "../components/PhoneCountryDropdown.mjs";
import "../components/ui/chips/Chip.mjs";
import "../components/ui/animation/LoadingSkeleton.mjs";
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../hooks/index.mjs";
import "../components/PrefetchedImage.mjs";
const u = () => {
  let {
    app: u,
    currentScreen: d,
    data: f,
    navigate: y,
    setModalData: g
  } = l();
  let {
    initLoginWithSms: S
  } = j();
  /*#__PURE__*/
  return o(n, {
    children: [/*#__PURE__*/t(p, {}, "header"), /*#__PURE__*/t(s, {}), /*#__PURE__*/t(h, {
      title: "Connect your phone",
      description: `Add your number to your ${u?.name} account`,
      icon: /*#__PURE__*/t(i, {
        color: "var(--privy-color-accent)",
        strokeWidth: 2,
        height: "40px",
        width: "40px"
      })
    }), /*#__PURE__*/t(m, {
      children: /*#__PURE__*/t(e, {
        stacked: true,
        onSubmit: async function ({
          qualifiedPhoneNumber: o
        }) {
          try {
            await S({
              phoneNumber: o,
              withPrivyUi: true
            });
            y(r.AWAITING_PASSWORDLESS_CODE);
          } catch (o) {
            g({
              errorModalData: {
                error: o,
                previousScreen: f?.errorModalData?.previousScreen || d || r.LINK_PHONE_SCREEN
              }
            });
            y(r.ERROR_SCREEN);
          }
        },
        hideRecent: true
      })
    }), /*#__PURE__*/t(c, {}), /*#__PURE__*/t(a, {})]
  });
};
export { u as LinkPhoneScreen };
