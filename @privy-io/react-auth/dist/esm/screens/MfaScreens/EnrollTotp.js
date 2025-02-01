import { jsxs as o, Fragment as e, jsx as r } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/CheckCircleIcon";
import n from "@heroicons/react/24/outline/DevicePhoneMobileIcon";
import { useState as i } from "react";
import { PrimaryButton as c } from "../../components/Button.mjs";
import { CopytoClipboardButton as s } from "../../components/CopyToClipboard.mjs";
import { CenteredItemWithPadding as m, CenteredItem as a } from "../../components/Layouts.mjs";
import { ModalFooter as p } from "../../components/ModalFooter.mjs";
import { ModalHeader as l } from "../../components/ModalHeader.mjs";
import { NumericPinInput as h } from "../../components/PinInput.mjs";
import { errorIndicatesMfaRateLimit as d, errorIndicatesMfaVerificationFailed as j, errorIndicatesMfaTimeout as u, errorIndicatesMfaCanceled as f } from "../../embedded-wallets/errors.mjs";
import { usePrivyModal as y } from "../../hooks/modal-context.mjs";
import { useMfaEnrollment as g } from "../../hooks/useMfaEnrollment.mjs";
import { AddTotpProviderQr as v } from "../../svg/qr-codes.mjs";
import { Title as b, SubTitle as C, BottomSection as k, IconWrapper as w, Container as x } from "./StyledComponents.mjs";
import "styled-components";
import "../../components/Loader.mjs";
import "../../svg/checkmark.mjs";
import "../../svg/copy.mjs";
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
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
import "react-device-detect";
import "../../embedded-wallets/types.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "../../hooks/privy-context.mjs";
import "@heroicons/react/24/solid/ShieldCheckIcon";
import "../../components/QrCode.mjs";
import "qrcode";
import "../../svg/black-rounded-square.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../svg/coinbase-wallet.mjs";
const I = ({
  onComplete: I,
  onClose: E,
  onReset: S,
  totpInfo: P
}) => {
  let [A, F] = i("enroll");
  let [M, T] = i(false);
  let {
    submitEnrollmentWithTotp: z
  } = g();
  let {
    data: Q
  } = y();
  function R() {
    Q?.mfaEnrollmentFlow?.onSuccess();
    I();
  } /*#__PURE__*/
  return o(e, A === "enroll" ? {
    children: [/*#__PURE__*/r(l, {
      backFn: S,
      onClose: E
    }, "header"), /*#__PURE__*/r(b, {
      children: "Scan QR code"
    }), /*#__PURE__*/r(C, {
      children: "Open your authenticator app and scan the QR code to continue."
    }), /*#__PURE__*/r(m, {
      children: /*#__PURE__*/r(v, {
        authUrl: P.authUrl,
        size: 200
      })
    }), /*#__PURE__*/o(k, {
      children: [/*#__PURE__*/r(a, {
        children: /*#__PURE__*/r(s, {
          itemName: "secret",
          text: P.secret
        })
      }), /*#__PURE__*/r(c, {
        onClick: function () {
          F("verify");
        },
        children: "Continue"
      })]
    }), /*#__PURE__*/r(p, {})]
  } : M ? {
    children: [/*#__PURE__*/r(l, {
      onClose: R
    }, "header"), /*#__PURE__*/r(w, {
      style: {
        marginBottom: "1.5rem"
      },
      children: /*#__PURE__*/r(t, {})
    }), /*#__PURE__*/r(b, {
      children: "Authenticator app verification added"
    }), /*#__PURE__*/r(C, {
      children: "From now on, you'll enter the verification code generated by your authenticator app whenever you use your Privy wallet."
    }), /*#__PURE__*/r(k, {
      children: /*#__PURE__*/r(c, {
        onClick: R,
        children: "Done"
      })
    }), /*#__PURE__*/r(p, {})]
  } : {
    children: [/*#__PURE__*/r(l, {
      backFn: function () {
        if (A === "verify") {
          F("enroll");
        } else {
          S();
        }
      },
      onClose: E
    }, "header"), /*#__PURE__*/r(w, {
      style: {
        marginBottom: "1.5rem"
      },
      children: /*#__PURE__*/r(n, {})
    }), /*#__PURE__*/r(b, {
      children: "Enter enrollment code"
    }), /*#__PURE__*/r(x, {
      children: /*#__PURE__*/r(h, {
        onChange: async function (o) {
          try {
            if (!o) {
              return;
            }
            await z({
              mfaCode: o
            });
            T(true);
          } catch (o) {
            if (d(o)) {
              throw Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.");
            }
            if (j(o)) {
              throw Error("The code you entered is not valid");
            }
            if (u(o)) {
              throw Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.");
            }
            throw f(o) ? Error("Verification canceled") : Error("Unknown error");
          }
        }
      })
    }), /*#__PURE__*/o(C, {
      children: ["To continue, enter the 6-digit code generated from your ", /*#__PURE__*/r("strong", {
        children: "authenticator app"
      })]
    }), /*#__PURE__*/r(p, {})]
  });
};
export { I as EnrollTotp };
