import { jsx as o, jsxs as e, Fragment as n } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/ArrowRightEndOnRectangleIcon";
import r from "@heroicons/react/24/outline/CheckCircleIcon";
import t from "@heroicons/react/24/outline/ClockIcon";
import s from "@heroicons/react/24/outline/ShieldCheckIcon";
import { useState as c, useMemo as m } from "react";
import { styled as a } from "styled-components";
import { PrimaryButton as l } from "../../components/Button.mjs";
import { Loader as p } from "../../components/Loader.mjs";
import { ModalFooter as d } from "../../components/ModalFooter.mjs";
import { ModalHeader as h } from "../../components/ModalHeader.mjs";
import { usePrivyInternal as u } from "../../hooks/internal-context.mjs";
import { usePrivyModal as y } from "../../hooks/modal-context.mjs";
import { usePrivyContext as j } from "../../hooks/privy-context.mjs";
import { useMfaEnrollment as f } from "../../hooks/useMfaEnrollment.mjs";
import { FaceId as k } from "../../svg/face-id.mjs";
import { FingerPrint as g } from "../../svg/fingerprint.mjs";
import { ErrorScreenView as C } from "../ErrorScreen.mjs";
import { DoubleIconWrapper as w } from "../LinkPasskeyScreen.mjs";
import { AppLogoContainer as b, Title as v, List as I, ListItem as x, ListItemIcon as S, IconWrapper as P, SubTitle as A, BottomSection as W } from "./StyledComponents.mjs";
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
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "@heroicons/react/24/outline/PhoneIcon";
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
import "@heroicons/react/24/outline/TrashIcon";
import "@heroicons/react/24/solid/CheckBadgeIcon";
import "@heroicons/react/24/solid/LockClosedIcon";
const E = ({
  onComplete: e,
  onClose: n,
  onReset: i
}) => {
  let {
    user: r
  } = j();
  let {
    data: t
  } = y();
  let {
    initLinkWithPasskey: s,
    linkWithPasskey: a
  } = u();
  let {
    initEnrollmentWithPasskey: l,
    submitEnrollmentWithPasskey: p
  } = f();
  let [d, h] = c(false);
  let [k, g] = c(false);
  let [w, b] = c(false);
  let [v, I] = c(null);
  let x = m(() => r?.linkedAccounts.filter(o => o.type === "passkey") ?? [], [r]);
  let S = () => {
    t?.mfaEnrollmentFlow?.onSuccess();
    e();
  };
  let P = async o => {
    h(true);
    try {
      await l();
      await p({
        credentialIds: o
      });
      b(true);
    } catch (o) {
      I(o);
    } finally {
      h(false);
    }
  };
  let A = async () => {
    g(true);
    I(null);
    try {
      await s();
      let o = await a();
      let e = o?.linkedAccounts.filter(o => o.type === "passkey").map(o => o.credentialId) ?? [];
      await P(e);
    } catch (o) {
      I(o);
    } finally {
      g(false);
    }
  };
  if (x.length === 0 || k) {
    return /*#__PURE__*/o(T, {
      onReset: i,
      onClose: n,
      onClick: A,
      isCreating: k
    });
  } else if (w) {
    return /*#__PURE__*/o(F, {
      onClick: S,
      onClose: S
    });
  } else if (v) {
    return /*#__PURE__*/o(C, {
      error: v,
      backFn: () => I(null),
      onClick: () => I(null)
    });
  } else {
    return /*#__PURE__*/o(B, {
      passkeys: x,
      isSubmitting: d,
      isCreating: k,
      onReset: i,
      onClose: n,
      onSubmitEnrollment: () => P(x.map(o => o.credentialId)),
      onAddPasskey: A
    });
  }
};
let T = ({
  onReset: r,
  onClose: c,
  onClick: m,
  isCreating: a
}) => /*#__PURE__*/e(n, {
  children: [/*#__PURE__*/o(h, {
    backFn: r,
    onClose: c
  }, "header"), /*#__PURE__*/o(b, {
    children: /*#__PURE__*/e(w, {
      children: [/*#__PURE__*/o(k, {}), /*#__PURE__*/o(g, {})]
    })
  }), /*#__PURE__*/o(v, {
    children: "Set up passkey verification"
  }), /*#__PURE__*/e(I, {
    children: [/*#__PURE__*/e(x, {
      children: [/*#__PURE__*/o(S, {
        children: /*#__PURE__*/o(s, {})
      }), "Verify with Touch ID, Face ID, PIN, or hardware key"]
    }), /*#__PURE__*/e(x, {
      children: [/*#__PURE__*/o(S, {
        children: /*#__PURE__*/o(t, {})
      }), "Takes seconds to set up and use"]
    }), /*#__PURE__*/e(x, {
      children: [/*#__PURE__*/o(S, {
        children: /*#__PURE__*/o(i, {})
      }), "Use your passkey to verify transactions and login to your account"]
    })]
  }), /*#__PURE__*/o(l, {
    style: {
      marginTop: "2.25rem"
    },
    onClick: m,
    loading: a,
    children: "Add a new passkey"
  }), /*#__PURE__*/o(d, {})]
});
let B = ({
  onReset: i,
  onClose: r,
  onAddPasskey: t,
  onSubmitEnrollment: s,
  passkeys: m,
  isSubmitting: a,
  isCreating: u
}) => {
  let [y, j] = c(false);
  let f = y ? m.length : m.length > 3 ? 2 : 3;
  /*#__PURE__*/
  return e(n, {
    children: [/*#__PURE__*/o(h, {
      backFn: y ? () => j(false) : i,
      onClose: r
    }, "header"), !y && /*#__PURE__*/o(b, {
      children: /*#__PURE__*/e(w, {
        children: [/*#__PURE__*/o(k, {}), /*#__PURE__*/o(g, {})]
      })
    }), /*#__PURE__*/o(v, {
      children: "Enable your passkeys for verification"
    }), /*#__PURE__*/e(I, {
      children: [m.slice(0, f).map(n => /*#__PURE__*/e(L, {
        children: [/*#__PURE__*/o(N, {
          children: z(n)
        }), /*#__PURE__*/e(R, {
          children: ["Last used: ", n.latestVerifiedAt?.toLocaleString()]
        })]
      }, n.credentialId)), !y && m.length > 3 && /*#__PURE__*/o(M, {
        onClick: () => j(true),
        children: "View All"
      })]
    }), /*#__PURE__*/o(l, {
      style: {
        marginTop: "1.5rem"
      },
      onClick: s,
      loading: a,
      children: "Enable passkeys"
    }), m.length < 5 && /*#__PURE__*/o(M, {
      style: {
        marginTop: "0.5rem"
      },
      onClick: t,
      disabled: u,
      children: u ? /*#__PURE__*/o(p, {
        style: {
          height: "1rem",
          width: "1rem",
          borderWidth: 2
        }
      }) : "Add new passkey"
    }), /*#__PURE__*/o(d, {})]
  });
};
let F = ({
  onClick: i,
  onClose: t
}) => /*#__PURE__*/e(n, {
  children: [/*#__PURE__*/o(h, {
    onClose: t
  }, "header"), /*#__PURE__*/o(P, {
    style: {
      marginBottom: "1.5rem"
    },
    children: /*#__PURE__*/o(r, {})
  }), /*#__PURE__*/o(v, {
    children: "Passkey verification added"
  }), /*#__PURE__*/o(A, {
    children: "From now on, you'll use the passkey whenever you use your Privy wallet."
  }), /*#__PURE__*/o(W, {
    children: /*#__PURE__*/o(l, {
      onClick: i,
      children: "Done"
    })
  }), /*#__PURE__*/o(d, {})]
});
let L = /*#__PURE__*/a.div.withConfig({
  displayName: "PasskeyItem",
  componentId: "sc-926c6706-0"
})(["&&{padding:0.75rem 1rem;text-align:left;border-radius:0.5rem;border:1px solid var(--privy-color-foreground-4);width:100%;}"]);
let N = /*#__PURE__*/a.div.withConfig({
  displayName: "PasskeyItemTitle",
  componentId: "sc-926c6706-1"
})(["font-size:0.875rem;line-height:1.375rem;font-weight:500;color:var(--privy-color-foreground-1);"]);
let R = /*#__PURE__*/a.div.withConfig({
  displayName: "PasskeyItemSubtitle",
  componentId: "sc-926c6706-2"
})(["font-size:0.75rem;font-weight:400;line-height:1.125rem;color:var(--privy-color-foreground-2);"]);
let z = o => o.authenticatorName ? o.createdWithBrowser ? `${o.authenticatorName} on ${o.createdWithBrowser}` : o.authenticatorName : o.createdWithBrowser ? o.createdWithOs ? `${o.createdWithBrowser} on ${o.createdWithOs}` : `${o.createdWithBrowser}` : "Unknown device";
const M = /*#__PURE__*/a.button.withConfig({
  displayName: "StyledLink",
  componentId: "sc-926c6706-3"
})(["&&{width:100%;font-size:0.875rem;line-height:1rem;@media (min-width:440px){font-size:14px;}display:flex;gap:12px;justify-content:center;padding:0.75rem 1rem;background-color:var(--privy-color-background);transition:background-color 200ms ease;color:var(--privy-color-accent);:focus{outline:none;box-shadow:none;}}"]);
export { E as EnrollPasskey, M as StyledLink };
