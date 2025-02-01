import { jsx as o, jsxs as e, Fragment as n } from "react/jsx-runtime";
import r from "@heroicons/react/24/outline/CheckCircleIcon";
import t from "@heroicons/react/24/outline/PhoneIcon";
import { useState as i } from "react";
import { lastFourDigits as m } from "@privy-io/js-sdk-core";
import { PrimaryButton as s } from "../../components/Button.mjs";
import { ConnectPhoneNumberForm as c } from "../../components/ConnectPhoneForm.mjs";
import { ModalFooter as a } from "../../components/ModalFooter.mjs";
import { ModalHeader as l } from "../../components/ModalHeader.mjs";
import { NumericPinInput as p } from "../../components/PinInput.mjs";
import { errorIndicatesMfaRateLimit as h, errorIndicatesMfaVerificationFailed as d, errorIndicatesMfaTimeout as j, errorIndicatesMfaCanceled as u } from "../../embedded-wallets/errors.mjs";
import { usePrivyModal as f } from "../../hooks/modal-context.mjs";
import { useMfaEnrollment as y } from "../../hooks/useMfaEnrollment.mjs";
import { ErrorScreenView as g } from "../ErrorScreen.mjs";
import { IconWrapper as v, Title as b, SubTitle as k, Container as w, TermsText as C, BottomSection as x } from "./StyledComponents.mjs";
import "styled-components";
import "../../components/Loader.mjs";
import "../../recent-login/context.mjs";
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
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
import "../../components/PhoneCountryDropdown.mjs";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "../../hooks/index.mjs";
import "../../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/internal-context.mjs";
import "react-device-detect";
import "../../embedded-wallets/types.mjs";
import "../../hooks/privy-context.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "../../components/CircleBorder.mjs";
import "../../components/layout/StackedContainer.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../hooks/captcha-context.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../svg/lock-closed.mjs";
const S = ({
  onComplete: S,
  onReset: E,
  onClose: P
}) => {
  let [I, F] = i("");
  let [M, B] = i(false);
  let [A, T] = i(null);
  let [z, L] = i("enroll");
  let {
    initEnrollmentWithSms: N,
    submitEnrollmentWithSms: R
  } = y();
  let {
    app: W,
    data: D
  } = f();
  function H() {
    D?.mfaEnrollmentFlow?.onSuccess();
    S();
  }
  if (A) {
    return /*#__PURE__*/o(g, {
      error: A,
      backFn: () => T(null),
      onClick: () => T(null)
    });
  } else {
    return /*#__PURE__*/e(n, z === "enroll" ? {
      children: [/*#__PURE__*/o(l, {
        backFn: E,
        onClose: P
      }, "header"), /*#__PURE__*/o(v, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/o(t, {})
      }), /*#__PURE__*/o(b, {
        children: "Set up SMS verification"
      }), /*#__PURE__*/o(k, {
        children: "We'll text a verification code to this mobile device whenever you use your Privy wallet."
      }), /*#__PURE__*/e(w, {
        children: [/*#__PURE__*/o(c, {
          onSubmit: async function ({
            qualifiedPhoneNumber: o
          }) {
            try {
              await N({
                phoneNumber: o
              });
              F(o);
              L("verify");
            } catch (o) {
              T(o);
            }
          },
          hideRecent: true
        }), /*#__PURE__*/e(C, {
          children: ["By providing your mobile number, you agree to receive text messages from ", W?.name, ". Some carrier charges may apply"]
        })]
      }), /*#__PURE__*/o(a, {})]
    } : M ? {
      children: [/*#__PURE__*/o(l, {
        onClose: H
      }, "header"), /*#__PURE__*/o(v, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/o(r, {})
      }), /*#__PURE__*/o(b, {
        children: "SMS verification added"
      }), /*#__PURE__*/o(k, {
        children: "From now on, you'll enter the verification code sent to your mobile device whenever you use your Privy wallet."
      }), /*#__PURE__*/o(x, {
        children: /*#__PURE__*/o(s, {
          onClick: H,
          children: "Done"
        })
      }), /*#__PURE__*/o(a, {})]
    } : {
      children: [/*#__PURE__*/o(l, {
        backFn: function () {
          if (z === "verify") {
            L("enroll");
          } else {
            E();
          }
        },
        onClose: P
      }, "header"), /*#__PURE__*/o(v, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/o(t, {})
      }), /*#__PURE__*/o(b, {
        children: "Enter enrollment code"
      }), /*#__PURE__*/e(w, {
        children: [/*#__PURE__*/o(p, {
          onChange: async function (o) {
            try {
              if (!o) {
                return;
              }
              await R({
                phoneNumber: I,
                mfaCode: o
              });
              B(true);
            } catch (o) {
              if (h(o)) {
                throw Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.");
              }
              if (d(o)) {
                throw Error("The code you entered is not valid");
              }
              if (j(o)) {
                throw Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.");
              }
              throw u(o) ? Error("Verification canceled") : Error("Unknown error");
            }
          }
        }), /*#__PURE__*/e(k, {
          children: ["To continue, enter the 6-digit code sent to ", /*#__PURE__*/o("strong", {
            children: m(I)
          })]
        })]
      }), /*#__PURE__*/o(a, {})]
    });
  }
};
export { S as EnrollSms };
