import { jsxs as o, Fragment as e, jsx as n } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import r from "@heroicons/react/24/outline/ShieldCheckIcon";
import i from "@heroicons/react/24/solid/CheckBadgeIcon";
import s from "@heroicons/react/24/solid/IdentificationIcon";
import { useState as c, useEffect as m } from "react";
import { PrimaryButton as a, SecondaryButton as l } from "../../components/Button.mjs";
import { Loader as p } from "../../components/Loader.mjs";
import { ModalFooter as h } from "../../components/ModalFooter.mjs";
import { ModalHeader as d } from "../../components/ModalHeader.mjs";
import { usePrivyInternal as u } from "../../hooks/internal-context.mjs";
import { usePrivyModal as j } from "../../hooks/modal-context.mjs";
import { usePrivyContext as f } from "../../hooks/privy-context.mjs";
import { useMfa as y } from "../../hooks/useMfa.mjs";
import { useMfaEnrollment as k } from "../../hooks/useMfaEnrollment.mjs";
import { MfaShieldIcon as g } from "../../svg/mfa-shield.mjs";
import { EnrollLandingScreen as C } from "./EnrollLandingScreen.mjs";
import { EnrollPasskey as v } from "./EnrollPasskey.mjs";
import { EnrollSms as M } from "./EnrollSms.mjs";
import { EnrollTotp as I } from "./EnrollTotp.mjs";
import { AppLogoContainer as b, Container as w, IconWrapper as S, Title as A, SubTitle as x, BottomSection as P, List as R, ListItem as E, ListItemIcon as F } from "./StyledComponents.mjs";
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
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "@heroicons/react/24/outline/ChevronRightIcon";
import "@heroicons/react/24/outline/DevicePhoneMobileIcon";
import "@heroicons/react/24/outline/FingerPrintIcon";
import "@heroicons/react/24/outline/MinusCircleIcon";
import "@heroicons/react/24/outline/PhoneIcon";
import "../../components/ui/chips/Chip.mjs";
import "../../components/ui/animation/LoadingSkeleton.mjs";
import "../LandingScreen/styles.mjs";
import "@heroicons/react/24/outline/ArrowRightEndOnRectangleIcon";
import "@heroicons/react/24/outline/CheckCircleIcon";
import "@heroicons/react/24/outline/ClockIcon";
import "../../svg/face-id.mjs";
import "../../svg/fingerprint.mjs";
import "../ErrorScreen.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "../../components/CircleBorder.mjs";
import "../../components/layout/StackedContainer.mjs";
import "../../embedded-wallets/errors.mjs";
import "../../embedded-wallets/types.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../hooks/captcha-context.mjs";
import "../../utils/index.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../svg/lock-closed.mjs";
import "../LinkPasskeyScreen.mjs";
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
import "@privy-io/js-sdk-core";
import "../../components/ConnectPhoneForm.mjs";
import "../../recent-login/context.mjs";
import "../../hooks/events-context.mjs";
import "../../storage.mjs";
import "../../components/PhoneCountryDropdown.mjs";
import "../../components/PinInput.mjs";
import "react-device-detect";
import "../../components/CopyToClipboard.mjs";
import "../../svg/checkmark.mjs";
import "../../svg/copy.mjs";
import "../../components/Layouts.mjs";
import "../../svg/qr-codes.mjs";
import "@heroicons/react/24/solid/ShieldCheckIcon";
import "../../components/QrCode.mjs";
import "qrcode";
import "../../svg/black-rounded-square.mjs";
import "../../svg/coinbase-wallet.mjs";
const T = () => {
  let {
    user: T,
    enrollInMfa: L
  } = f();
  let [B, W] = c(null);
  let {
    unenrollWithSms: q,
    unenrollWithTotp: z,
    unenrollWithPasskey: D
  } = k();
  let {
    app: H,
    ready: O,
    data: Q,
    onUserCloseViaDialogOrKeybindRef: Y
  } = j();
  let {
    closePrivyModal: K
  } = u();
  let {
    promptMfa: N
  } = y();
  let {
    initEnrollmentWithTotp: U
  } = k();
  let [V, X] = c(false);
  let [G, J] = c(null);
  let [Z, $] = c(null);
  let _ = () => {
    K({
      shouldCallAuthOnSuccess: true
    });
    L(false);
    setTimeout(() => {
      W(null);
      J(null);
    }, 500);
  };
  let {
    initEnrollmentWithPasskey: oo,
    submitEnrollmentWithPasskey: eo
  } = k();
  let [no, to] = c(false);
  let [ro, io] = c(null);
  Y.current = _;
  let so = T?.mfaMethods.includes("sms");
  let co = !!T?.phone;
  let mo = T?.mfaMethods.includes("totp");
  let ao = T?.mfaMethods.includes("passkey");
  let lo = so || mo || ao;
  let po = T?.linkedAccounts.filter(o => o.type === "passkey").map(o => o.credentialId) ?? [];
  function ho() {
    W(null);
    J(null);
  }
  m(() => {
    if (lo) {
      X(true);
    }
  }, [lo]);
  if (!O || !T || !H) {
    return o(e, {
      children: [/*#__PURE__*/n(d, {
        onClose: _
      }, "header"), /*#__PURE__*/n(b, {
        children: /*#__PURE__*/n(g, {})
      }), /*#__PURE__*/n(w, {
        children: /*#__PURE__*/n(p, {})
      }), /*#__PURE__*/n(h, {})]
    });
  }
  if (B === "sms") {
    /*#__PURE__*/return o(e, {
      children: [/*#__PURE__*/n(d, {
        backFn: ho,
        onClose: _
      }, "header"), /*#__PURE__*/n(S, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/n(t, {})
      }), /*#__PURE__*/n(A, {
        children: "Remove SMS verification?"
      }), /*#__PURE__*/o(x, {
        children: ["MFA adds an extra layer of security to your ", H?.name, " account. Make sure you have other methods to secure your account."]
      }), /*#__PURE__*/n(P, {
        children: /*#__PURE__*/n(a, {
          warn: true,
          onClick: async function () {
            W(null);
            try {
              await q();
            } catch (o) {
              W(null);
            }
          },
          children: "Remove SMS for MFA"
        })
      }), /*#__PURE__*/n(h, {})]
    });
  }
  if (B === "totp") {
    /*#__PURE__*/return o(e, {
      children: [/*#__PURE__*/n(d, {
        backFn: ho,
        onClose: _
      }, "header"), /*#__PURE__*/n(S, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/n(t, {})
      }), /*#__PURE__*/n(A, {
        children: "Remove Authenticator App verification?"
      }), /*#__PURE__*/o(x, {
        children: ["MFA adds an extra layer of security to your ", H?.name, " account. Make sure you have other methods to secure your account."]
      }), /*#__PURE__*/n(P, {
        children: /*#__PURE__*/n(a, {
          warn: true,
          onClick: async function () {
            W(null);
            try {
              await z();
            } catch (o) {
              W(null);
            }
          },
          children: "Remove Authenticator App for MFA"
        })
      }), /*#__PURE__*/n(h, {})]
    });
  }
  if (B === "passkey") {
    /*#__PURE__*/return o(e, {
      children: [/*#__PURE__*/n(d, {
        backFn: ho,
        onClose: _
      }, "header"), /*#__PURE__*/n(S, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/n(t, {})
      }), /*#__PURE__*/n(A, {
        children: "Are you sure you want to remove passkey verification?"
      }), /*#__PURE__*/n(x, {
        children: "Removing your passkey will remove as both a verification method and a login method."
      }), /*#__PURE__*/n(P, {
        children: /*#__PURE__*/n(a, {
          warn: true,
          onClick: async function () {
            W(null);
            try {
              await D();
            } catch (o) {
              W(null);
            }
          },
          children: "Yes, remove"
        })
      }), /*#__PURE__*/n(h, {})]
    });
  }
  if (Q.mfaEnrollmentFlow.mfaMethods.length === 0 && !lo) {
    /*#__PURE__*/return o(e, {
      children: [/*#__PURE__*/n(d, {
        onClose: _
      }, "header"), /*#__PURE__*/n(S, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/n(r, {})
      }), /*#__PURE__*/n(A, {
        children: "Add more security"
      }), /*#__PURE__*/o(x, {
        children: [H?.name, " does not have any verification methods enabled."]
      }), /*#__PURE__*/n(P, {
        children: /*#__PURE__*/n(a, {
          onClick: _,
          children: "Close"
        })
      }), /*#__PURE__*/n(h, {})]
    });
  }
  let uo = !lo && !V;
  if (uo) {
    return /*#__PURE__*/o(e, {
      children: [/*#__PURE__*/n(d, {
        onClose: _
      }, "header"), /*#__PURE__*/n(S, {
        style: {
          marginBottom: "1.5rem"
        },
        children: /*#__PURE__*/n(r, {})
      }), /*#__PURE__*/n(A, {
        children: "Transaction Protection"
      }), /*#__PURE__*/n(x, {
        children: "Set up transaction protection to add an extra layer of security to your account"
      }), /*#__PURE__*/o(R, {
        children: [/*#__PURE__*/o(E, {
          children: [/*#__PURE__*/n(F, {
            children: /*#__PURE__*/n(i, {})
          }), "Enable 2-Step verification for your ", H?.name, " wallet."]
        }), /*#__PURE__*/o(E, {
          children: [/*#__PURE__*/n(F, {
            children: /*#__PURE__*/n(s, {})
          }), "You'll be prompted to authenticate to complete transactions."]
        })]
      }), /*#__PURE__*/o(P, {
        children: [/*#__PURE__*/n(a, {
          onClick: () => X(true),
          children: "Continue"
        }), /*#__PURE__*/n(l, {
          onClick: _,
          children: "Not now"
        })]
      }), /*#__PURE__*/n(h, {})]
    });
  } else if (G === "sms") {
    return /*#__PURE__*/n(M, {
      onComplete: _,
      onReset: ho,
      onClose: _
    });
  } else if (G === "totp" && Z) {
    return /*#__PURE__*/n(I, {
      onComplete: _,
      onClose: _,
      onReset: ho,
      totpInfo: Z
    });
  } else if (G === "passkey") {
    return /*#__PURE__*/n(v, {
      onComplete: _,
      onReset: ho,
      onClose: _
    });
  } else {
    return /*#__PURE__*/n(C, {
      showIntro: uo,
      userMfaMethods: T.mfaMethods,
      appMfaMethods: H.mfa.methods,
      userHasAuthSms: co,
      onBackToIntro: function () {
        X(false);
      },
      handleSelectMethod: async function (o) {
        await N().catch(io);
        if (o === "totp") {
          J(o);
          $(null);
          U().then(o => {
            $(o);
          }).catch(() => {
            $(null);
            ho();
          });
          return;
        } else if (o === "passkey" && po.length === 1) {
          return await async function () {
            to(true);
            try {
              await oo();
              await eo({
                credentialIds: po
              });
            } catch (o) {
              io(o);
            } finally {
              to(false);
            }
          }();
        } else {
          J(o);
          return;
        }
      },
      isTotpLoading: G === "totp" && !Z,
      isPasskeyLoading: no,
      error: ro,
      onClose: _,
      setRemovingMfaMethod: async o => {
        await N().catch(io);
        W(o);
      }
    });
  }
};
export { T as MfaEnrollmentFlowScreen };
