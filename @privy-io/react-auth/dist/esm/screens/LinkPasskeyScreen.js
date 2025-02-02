import { jsxs as e, Fragment as o, jsx as n } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/CheckCircleIcon";
import t from "@heroicons/react/24/outline/ClockIcon";
import r from "@heroicons/react/24/outline/TrashIcon";
import c from "@heroicons/react/24/solid/CheckBadgeIcon";
import s from "@heroicons/react/24/solid/LockClosedIcon";
import { useState as a, useEffect as m } from "react";
import { styled as l, css as p } from "styled-components";
import { PrimaryButton as d } from "../components/Button.mjs";
import { ButtonLoader as h } from "../components/Loader.mjs";
import { ModalFooter as f } from "../components/ModalFooter.mjs";
import { ModalHeader as g } from "../components/ModalHeader.mjs";
import { PrivyError as y, PrivyErrorCode as u } from "../errors.mjs";
import { usePrivyInternal as j } from "../hooks/internal-context.mjs";
import { usePrivyContext as v } from "../hooks/privy-context.mjs";
import { FaceId as k } from "../svg/face-id.mjs";
import { FingerPrint as x } from "../svg/fingerprint.mjs";
import { IconWrapper as w, BottomSection as b, AppLogoContainer as I, ListItem as C, ListItemIcon as N } from "./MfaScreens/StyledComponents.mjs";
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
import "../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../hooks/index.mjs";
import "ofetch";
let S = ({
  passkeys: o,
  expanded: i,
  onUnlink: t,
  onExpand: c
}) => {
  let [s, m] = a([]);
  let l = i ? o.length : 2;
  /*#__PURE__*/
  return e("div", {
    children: [/*#__PURE__*/n(F, {
      children: "Your passkeys"
    }), /*#__PURE__*/e(P, {
      children: [o.slice(0, l).map(o => {
        /*#__PURE__*/return e($, {
          children: [/*#__PURE__*/e("div", {
            children: [/*#__PURE__*/n(O, {
              children: (i = o, i.authenticatorName ? i.createdWithBrowser ? `${i.authenticatorName} on ${i.createdWithBrowser}` : i.authenticatorName : i.createdWithBrowser ? i.createdWithOs ? `${i.createdWithBrowser} on ${i.createdWithOs}` : `${i.createdWithBrowser}` : "Unknown device")
            }), /*#__PURE__*/e(U, {
              children: ["Last used: ", (o.latestVerifiedAt ?? o.verifiedAt).toLocaleString()]
            })]
          }), /*#__PURE__*/n(H, {
            disabled: s.includes(o.credentialId),
            onClick: () => (async e => {
              m(o => o.concat([e]));
              await t(e);
              m(o => o.filter(o => o !== e));
            })(o.credentialId),
            children: s.includes(o.credentialId) ? /*#__PURE__*/n(h, {}) : /*#__PURE__*/n(r, {
              height: "1.6em"
            })
          })]
        }, o.credentialId);
        var i;
      }), o.length > 2 && !i && /*#__PURE__*/n(E, {
        onClick: c,
        children: "View all"
      })]
    })]
  });
};
let A = () => /*#__PURE__*/e(P, {
  children: [/*#__PURE__*/e(C, {
    children: [/*#__PURE__*/n(N, {
      children: /*#__PURE__*/n(c, {})
    }), "Log in with Touch ID, Face ID, or a security key."]
  }), /*#__PURE__*/e(C, {
    children: [/*#__PURE__*/n(N, {
      children: /*#__PURE__*/n(s, {})
    }), "More secure than a password."]
  }), /*#__PURE__*/e(C, {
    children: [/*#__PURE__*/n(N, {
      children: /*#__PURE__*/n(t, {})
    }), "Takes seconds to set up and use."]
  })]
});
const L = () => {
  let {
    user: t,
    unlinkPasskey: r
  } = v();
  let {
    linkWithPasskey: c,
    closePrivyModal: s
  } = j();
  let l = t?.linkedAccounts.filter(e => e.type === "passkey");
  let [p, h] = a(false);
  let [C, N] = a("");
  let [L, M] = a(false);
  let [E, P] = a(false);
  m(() => {
    if (l.length === 0) {
      P(false);
    }
  }, [l.length]);
  let F = async e => {
    h(true);
    return await r(e).then(() => M(true)).catch(e => {
      if (e instanceof y && e.privyErrorCode === u.MISSING_MFA_CREDENTIALS) {
        N("Cannot unlink a passkey enrolled in MFA");
      } else {
        N("Unknown error occurred.");
      }
    }).finally(() => {
      h(false);
    });
  }; /*#__PURE__*/
  return e(o, L ? {
    children: [/*#__PURE__*/n(g, {
      onClose: () => s()
    }, "header"), /*#__PURE__*/n(w, {
      style: {
        marginBottom: "1.5rem"
      },
      children: /*#__PURE__*/n(i, {})
    }), /*#__PURE__*/n(B, {
      style: {
        marginBottom: "1.5rem"
      },
      children: "Passkeys updated"
    }), /*#__PURE__*/n(W, {
      children: " "
    }), /*#__PURE__*/n(b, {
      children: /*#__PURE__*/n(d, {
        onClick: () => s(),
        children: "Done"
      })
    }), /*#__PURE__*/n(f, {})]
  } : E ? {
    children: [/*#__PURE__*/n(g, {
      backFn: () => P(false),
      onClose: () => s()
    }, "header"), /*#__PURE__*/n(S, {
      passkeys: l,
      expanded: E,
      onUnlink: F,
      onExpand: () => P(true)
    }), /*#__PURE__*/n(f, {})]
  } : {
    children: [/*#__PURE__*/n(g, {
      onClose: () => s()
    }, "header"), /*#__PURE__*/n(I, {
      children: /*#__PURE__*/e(T, {
        children: [/*#__PURE__*/n(k, {}), /*#__PURE__*/n(x, {})]
      })
    }), /*#__PURE__*/n(B, {
      children: "Secure your account with a passkey"
    }), /*#__PURE__*/n(_, {}), l.length === 0 ? /*#__PURE__*/n(A, {}) : /*#__PURE__*/n(S, {
      passkeys: l,
      expanded: E,
      onUnlink: F,
      onExpand: () => P(true)
    }), /*#__PURE__*/e(b, {
      style: {
        marginTop: "12px"
      },
      children: [C && /*#__PURE__*/n(z, {
        $fail: true,
        children: C
      }), /*#__PURE__*/n(d, {
        onClick: () => {
          h(true);
          c().then(() => M(true)).catch(e => {
            if (e instanceof y) {
              if (e.privyErrorCode === u.CANNOT_LINK_MORE_OF_TYPE) {
                N("Cannot link more passkeys to account.");
                return;
              }
              if (e.privyErrorCode === u.PASSKEY_NOT_ALLOWED) {
                N("Passkey request timed out or rejected by user.");
                return;
              }
            }
            N("Unknown error occurred.");
          }).finally(() => {
            h(false);
          });
        },
        loading: p,
        children: "Add new passkey"
      })]
    }), /*#__PURE__*/n(f, {})]
  });
};
const T = /*#__PURE__*/l.div.withConfig({
  displayName: "DoubleIconWrapper",
  componentId: "sc-302702bc-0"
})(["display:flex;align-items:center;justify-content:center;width:180px;height:90px;border-radius:50%;svg + svg{margin-left:12px;}> svg{z-index:2;color:var(--privy-color-accent) !important;stroke:var(--privy-color-accent) !important;fill:var(--privy-color-accent) !important;}"]);
let z = /*#__PURE__*/l.div.withConfig({
  displayName: "InputHelp",
  componentId: "sc-302702bc-1"
})(["line-height:20px;height:20px;font-size:13px;color:", ";display:flex;justify-content:flex-beginngin;width:100%;"], e => e.$fail ? "var(--privy-color-error)" : "var(--privy-color-foreground-3)");
let M = /*#__PURE__*/p(["&&{width:100%;font-size:0.875rem;line-height:1rem;@media (min-width:440px){font-size:14px;}display:flex;gap:12px;justify-content:center;padding:6px 8px;background-color:var(--privy-color-background);transition:background-color 200ms ease;color:var(--privy-color-accent) !important;:focus{outline:none;box-shadow:none;}}"]);
const E = /*#__PURE__*/l.button.withConfig({
  displayName: "LinkButton",
  componentId: "sc-302702bc-2"
})(["", ""], M);
let P = /*#__PURE__*/l.div.withConfig({
  displayName: "List",
  componentId: "sc-302702bc-3"
})(["display:flex;flex-direction:column;align-items:stretch;gap:0.8rem;padding:0.5rem 0rem 0rem;flex-grow:1;width:100%;"]);
let B = /*#__PURE__*/l.div.withConfig({
  displayName: "ModalTitle",
  componentId: "sc-302702bc-4"
})(["font-size:18px;line-height:18px;text-align:center;font-weight:600;"]);
let W = /*#__PURE__*/l.div.withConfig({
  displayName: "ModalSubTitle",
  componentId: "sc-302702bc-5"
})(["font-size:0.875rem;text-align:center;margin-top:10px;"]);
let _ = /*#__PURE__*/l.div.withConfig({
  displayName: "SectionSpacer",
  componentId: "sc-302702bc-6"
})(["height:32px;"]);
let F = /*#__PURE__*/l.div.withConfig({
  displayName: "PasskeyListTitle",
  componentId: "sc-302702bc-7"
})(["line-height:20px;height:20px;font-size:1em;font-weight:450;display:flex;justify-content:flex-beginning;width:100%;"]);
let O = /*#__PURE__*/l.div.withConfig({
  displayName: "PasskeyItemTitle",
  componentId: "sc-302702bc-8"
})(["font-size:1em;line-height:1.3em;font-weight:500;color:var(--privy-color-foreground-2);padding:0.2em 0;"]);
let U = /*#__PURE__*/l.div.withConfig({
  displayName: "PasskeyItemSubtitle",
  componentId: "sc-302702bc-9"
})(["font-size:0.875rem;line-height:1rem;color:#64668b;padding:0.2em 0;"]);
let $ = /*#__PURE__*/l.div.withConfig({
  displayName: "PasskeyListItem",
  componentId: "sc-302702bc-10"
})(["display:flex;align-items:center;justify-content:space-between;padding:1em;gap:10px;font-size:0.875rem;line-height:1rem;text-align:left;border-radius:8px;border:1px solid #e2e3f0 !important;width:100%;height:5em;"]);
let D = /*#__PURE__*/p([":focus,:hover,:active{outline:none;}display:flex;width:2em;height:2em;justify-content:center;align-items:center;svg{color:var(--privy-color-error);}svg:hover{color:var(--privy-color-foreground-3);}"]);
let H = /*#__PURE__*/l.button.withConfig({
  displayName: "PasskeyItemUnlinkButton",
  componentId: "sc-302702bc-11"
})(["", ""], D);
export { T as DoubleIconWrapper, E as LinkButton, L as LinkPasskeyScreen };
