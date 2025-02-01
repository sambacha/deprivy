import { jsx as o, jsxs as e, Fragment as t } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/DevicePhoneMobileIcon";
import r from "@heroicons/react/24/outline/FingerPrintIcon";
import i from "@heroicons/react/24/outline/PhoneIcon";
import s from "@heroicons/react/24/outline/ShieldCheckIcon";
import { useState as c, useEffect as m, useRef as a } from "react";
import { SecondaryButton as l } from "../../components/Button.mjs";
import { ModalFooter as p } from "../../components/ModalFooter.mjs";
import { ModalHeader as d } from "../../components/ModalHeader.mjs";
import { NumericPinInput as h } from "../../components/PinInput.mjs";
import { TransactionDetailsWrapper as u } from "../../components/embedded-wallets/TransactionDetailsWrapper.mjs";
import { errorIndicatesMaxMfaRetries as j, errorIndicatesMfaVerificationFailed as f, errorIndicatesMfaTimeout as y } from "../../embedded-wallets/errors.mjs";
import { usePrivyInternal as g } from "../../hooks/internal-context.mjs";
import { usePrivyModal as k } from "../../hooks/modal-context.mjs";
import { usePrivyContext as b } from "../../hooks/privy-context.mjs";
import { useMfa as C } from "../../hooks/useMfa.mjs";
import { LoginMethodButton as w } from "../LandingScreen/styles.mjs";
import { IconWrapper as v, Title as S, SubTitle as M, MethodList as x, Container as I, PrimaryTextButton as T } from "./StyledComponents.mjs";
import { VerifyWithPasskey as A } from "./VerifyWithPasskey.mjs";
import "styled-components";
import "../../components/Loader.mjs";
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
import "react-device-detect";
import "viem";
import "../../hooks/useGetTokenPrice.mjs";
import "../../hooks/useGetSolPrice.mjs";
import "../../hooks/useWallets.mjs";
import "../../lib/viem/prepareTransactionRequest.mjs";
import "../../lib/viem/toViemTransactionSerializable.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "../../components/embedded-wallets/TransactionDetails.mjs";
import "../../components/embedded-wallets/DisplayInfoItem.mjs";
import "../../components/embedded-wallets/PriceDisplay.mjs";
import "../../lib/ethers.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../lib/solana/transaction.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
import "../../components/embedded-wallets/TransactionTotal.mjs";
import "../../components/Layouts.mjs";
import "../../components/primitives/Accordion/index.mjs";
import "@heroicons/react/24/outline/ChevronDownIcon";
import "../../components/primitives/Accordion/AccordionContext.mjs";
import "../../components/embedded-wallets/WalletLink.mjs";
import "../../embedded-wallets/types.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "@heroicons/react/24/outline/CalendarIcon";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "../../components/layout/StackedContainer.mjs";
import "../../svg/face-id.mjs";
const P = ({
  open: l,
  onClose: h
}) => {
  let {
    user: u
  } = b();
  let [g, k] = c(u?.mfaMethods[0] ?? null);
  let {
    init: I,
    cancel: T,
    submit: P
  } = C();
  let [B, D] = c(false);
  let [L, V] = c(false);
  let [z, W] = c(null);
  let [F, G] = c(null);
  m(() => {
    k(u?.mfaMethods[0] ?? null);
  }, [u?.mfaMethods]);
  let H = a(false);
  m(() => {
    if (!H.current && g && l) {
      H.current = true;
      R(g).finally(() => {
        H.current = false;
      });
    }
  }, [l]);
  let N = o => j(o) ? (D(true), Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.")) : f(o) ? (D(false), Error("The code you entered is not valid")) : y(o) ? (D(true), Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.")) : (console.error(o), D(false), Error("Something went wrong."));
  async function O(o) {
    G(null);
    try {
      if (!o || !g) {
        return;
      }
      await P(g, o);
      V(true);
      D(false);
      h();
    } catch (o) {
      throw N(o);
    }
  }
  async function R(o) {
    if (o !== "passkey") {
      try {
        k(o);
        await I(o);
      } catch (o) {
        console.error(o);
      }
    } else {
      try {
        k(o);
        let e = await I(o);
        if (!e) {
          throw Error("something went wrong");
        }
        W(e);
        await P(o, e);
        V(true);
        D(false);
        h();
      } catch (o) {
        G(N(o));
      }
    }
  }
  let Y = () => {
    k(null);
    G(null);
    T();
    h();
  };
  if (l && u) {
    if (g === "passkey") {
      return /*#__PURE__*/o(A, {
        account: u.linkedAccounts.filter(o => o.type === "passkey" && o.enrolledInMfa).sort((o, e) => e.firstVerifiedAt.valueOf() - o.firstVerifiedAt.valueOf())[0],
        selectedMethod: g,
        submitSuccess: L,
        hasBlockingError: B,
        error: F,
        onClose: Y,
        onBack: () => {
          k(null);
          G(null);
        },
        handleSubmit: () => O(z).catch(G)
      });
    } else if (g) {
      return /*#__PURE__*/o(E, {
        submitSuccess: L,
        hasBlockingError: B,
        handleSubmitCode: O,
        selectedMethod: g,
        onClose: Y,
        onBack: u.mfaMethods.length > 1 ? () => k(null) : undefined
      });
    } else {
      return /*#__PURE__*/e(t, {
        children: [/*#__PURE__*/o(d, {
          onClose: Y
        }, "header"), /*#__PURE__*/o(v, {
          style: {
            marginBottom: "1.5rem"
          },
          children: /*#__PURE__*/o(s, {})
        }), /*#__PURE__*/o(S, {
          children: "Verify your identity"
        }), /*#__PURE__*/o(M, {
          children: "Choose a verification method"
        }), /*#__PURE__*/e(x, {
          children: [u.mfaMethods.includes("totp") && /*#__PURE__*/e(w, {
            onClick: () => R("totp"),
            children: [/*#__PURE__*/o(n, {}), "Authenticator App"]
          }, "totp"), u.mfaMethods.includes("sms") && /*#__PURE__*/e(w, {
            onClick: () => R("sms"),
            children: [/*#__PURE__*/o(i, {}), "SMS"]
          }, "sms"), u.mfaMethods.includes("passkey") && /*#__PURE__*/e(w, {
            onClick: () => R("passkey"),
            children: [/*#__PURE__*/o(r, {}), "Passkey"]
          }, "passkey")]
        }), /*#__PURE__*/o(p, {})]
      });
    }
  } else {
    return null;
  }
};
let E = ({
  selectedMethod: r,
  submitSuccess: s,
  hasBlockingError: c,
  onClose: m,
  onBack: a,
  handleSubmitCode: j
}) => {
  let {
    app: f
  } = k();
  let {
    pendingTransaction: y
  } = g();
  switch (r) {
    case "sms":
      /*#__PURE__*/return e(t, {
        children: [/*#__PURE__*/o(d, {
          onClose: m
        }, "header"), /*#__PURE__*/o(v, {
          style: {
            marginBottom: "1.5rem"
          },
          children: /*#__PURE__*/o(i, {})
        }), /*#__PURE__*/o(S, {
          children: "Enter verification code"
        }), /*#__PURE__*/e(I, {
          children: [/*#__PURE__*/o(h, {
            success: s,
            disabled: c,
            onChange: j
          }), /*#__PURE__*/e(M, {
            children: ["To continue, please enter the 6-digit code sent to your ", /*#__PURE__*/o("strong", {
              children: "mobile device"
            })]
          }), y && /*#__PURE__*/o(u, {
            pendingTransaction: y
          })]
        }), a && /*#__PURE__*/o(T, {
          theme: f?.appearance.palette.colorScheme,
          onClick: a,
          children: "Choose another method"
        }), /*#__PURE__*/o(l, {
          onClick: m,
          children: "Not now"
        }), /*#__PURE__*/o(p, {})]
      });
    case "totp":
      /*#__PURE__*/return e(t, {
        children: [/*#__PURE__*/o(d, {
          onClose: m
        }, "header"), /*#__PURE__*/o(v, {
          style: {
            marginBottom: "1.5rem"
          },
          children: /*#__PURE__*/o(n, {})
        }), /*#__PURE__*/o(S, {
          children: "Enter verification code"
        }), /*#__PURE__*/e(I, {
          children: [/*#__PURE__*/o(h, {
            success: s,
            disabled: c,
            onChange: j
          }), /*#__PURE__*/e(M, {
            children: ["To continue, please enter the 6-digit code generated from your", " ", /*#__PURE__*/o("strong", {
              children: "authenticator app"
            })]
          }), y && /*#__PURE__*/o(u, {
            pendingTransaction: y
          })]
        }), a && /*#__PURE__*/o(T, {
          theme: f?.appearance.palette.colorScheme,
          onClick: a,
          children: "Choose another method"
        }), /*#__PURE__*/o(l, {
          onClick: m,
          children: "Not now"
        }), /*#__PURE__*/o(p, {})]
      });
    default:
      return null;
  }
};
export { P as MfaVerifyFlowScreen };
