import { jsxs as o, Fragment as e, jsx as i } from "react/jsx-runtime";
import n from "@heroicons/react/24/outline/ChevronRightIcon";
import r from "@heroicons/react/24/outline/DevicePhoneMobileIcon";
import t from "@heroicons/react/24/outline/FingerPrintIcon";
import s from "@heroicons/react/24/outline/MinusCircleIcon";
import c from "@heroicons/react/24/outline/PhoneIcon";
import m from "@heroicons/react/24/outline/ShieldCheckIcon";
import { styled as a } from "styled-components";
import { Loader as l } from "../../components/Loader.mjs";
import { ModalFooter as h } from "../../components/ModalFooter.mjs";
import { ModalHeader as p } from "../../components/ModalHeader.mjs";
import { Chip as d } from "../../components/ui/chips/Chip.mjs";
import { LoginMethodButton as j } from "../LandingScreen/styles.mjs";
import { IconWrapper as u, Title as y, SubTitle as f, ErrorMessage as g, MethodList as k, MethodListItem as b, SmsInsecureText as C, MethodText as v, ExtraText as M, RemoveMethodButton as I } from "./StyledComponents.mjs";
import "../../configuration/context.mjs";
import "react";
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
import "../../components/ui/animation/LoadingSkeleton.mjs";
const S = ({
  showIntro: a,
  userMfaMethods: d,
  appMfaMethods: S,
  userHasAuthSms: A,
  isTotpLoading: x,
  isPasskeyLoading: L,
  error: T,
  onClose: P,
  onBackToIntro: F,
  handleSelectMethod: H,
  setRemovingMfaMethod: R
}) => {
  let z = d.reduce((o, e) => ({
    ...o,
    [e]: true
  }), {});
  let E = S.reduce((o, e) => ({
    ...o,
    [e]: true
  }), {});
  /*#__PURE__*/
  return o(e, {
    children: [/*#__PURE__*/i(p, {
      backFn: a ? F : undefined,
      onClose: P
    }, "header"), /*#__PURE__*/i(u, {
      style: {
        marginBottom: "1.5rem"
      },
      children: /*#__PURE__*/i(m, {})
    }), /*#__PURE__*/i(y, {
      children: "Choose a verification method"
    }), d.length > 0 ? /*#__PURE__*/i(f, {
      children: "To add or delete verification methods, verification is required."
    }) : /*#__PURE__*/i(f, {
      children: "How would you like to verify your identity? You can change this later."
    }), T && /*#__PURE__*/i(g, {
      style: {
        marginTop: "1.25rem"
      },
      children: T.message
    }), /*#__PURE__*/o(k, {
      children: [(E.totp || z.totp) && /*#__PURE__*/o(b, {
        children: [/*#__PURE__*/i(j, {
          style: {
            justifyContent: "center"
          },
          disabled: z.totp || x,
          onClick: () => H("totp"),
          children: x ? /*#__PURE__*/i(l, {
            style: {
              height: 24,
              width: 24,
              borderWidth: 2
            },
            color: "var(--privy-color-foreground-3)"
          }) : /*#__PURE__*/o(C, {
            children: [/*#__PURE__*/o(v, {
              children: [/*#__PURE__*/i(r, {}), "Authenticator app"]
            }), z.totp ? /*#__PURE__*/i(w, {
              color: "green",
              children: "Enabled"
            }) : /*#__PURE__*/i(M, {
              children: "Recommended"
            })]
          })
        }), z.totp && /*#__PURE__*/i(I, {
          style: {
            position: "absolute",
            right: 0
          },
          onClick: () => R("totp"),
          children: /*#__PURE__*/i(s, {})
        })]
      }, "totp"), (E.sms || z.sms) && /*#__PURE__*/o(b, {
        children: [/*#__PURE__*/i(j, {
          disabled: z.sms || A,
          onClick: () => H("sms"),
          children: /*#__PURE__*/o(C, {
            children: [/*#__PURE__*/o(v, {
              children: [/*#__PURE__*/i(c, {}), "SMS"]
            }), z.sms && /*#__PURE__*/i(w, {
              color: "green",
              children: "Enabled"
            }), A && /*#__PURE__*/i(M, {
              children: "Disabled"
            })]
          })
        }), z.sms && /*#__PURE__*/i(I, {
          style: {
            position: "absolute",
            right: 0
          },
          onClick: () => R("sms"),
          children: /*#__PURE__*/i(s, {})
        })]
      }, "sms"), (E.passkey || z.passkey) && /*#__PURE__*/o(b, {
        children: [/*#__PURE__*/i(j, {
          style: {
            justifyContent: "center"
          },
          onClick: () => H("passkey"),
          disabled: z.passkey || L,
          children: L ? /*#__PURE__*/i(l, {
            style: {
              height: 24,
              width: 24,
              borderWidth: 2
            },
            color: "var(--privy-color-foreground-3)"
          }) : /*#__PURE__*/o(C, {
            children: [/*#__PURE__*/o(v, {
              children: [/*#__PURE__*/i(t, {}), "Passkey"]
            }), z.passkey ? /*#__PURE__*/i(w, {
              color: "green",
              children: "Enabled"
            }) : /*#__PURE__*/i(M, {
              isAccent: true,
              children: /*#__PURE__*/i(n, {})
            })]
          })
        }), z.passkey && /*#__PURE__*/i(I, {
          style: {
            position: "absolute",
            right: 0
          },
          onClick: () => R("passkey"),
          children: /*#__PURE__*/i(s, {})
        })]
      }, "passkey")]
    }), /*#__PURE__*/i(h, {})]
  });
};
let w = /*#__PURE__*/a(d).withConfig({
  displayName: "StyledChip",
  componentId: "sc-998ca5bc-0"
})(["margin-right:1.5rem;"]);
export { S as EnrollLandingScreen };
