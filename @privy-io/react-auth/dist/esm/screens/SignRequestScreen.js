import { jsxs as o, Fragment as t, jsx as e } from "react/jsx-runtime";
import { useState as i, useEffect as n } from "react";
import { styled as r } from "styled-components";
import { isHex as s, hexToString as c } from "viem";
import { ProviderErrors as m } from "@privy-io/js-sdk-core";
import { PrimaryButtonWithoutGray as a } from "../components/Button.mjs";
import { CopytoClipboardButton as p } from "../components/CopyToClipboard.mjs";
import { RefactorSpacerTop as l, RefactorSpacerBottom as d } from "../components/Layouts.mjs";
import { BlobbyFooter as h } from "../components/ModalFooter.mjs";
import { ModalHeader as g } from "../components/ModalHeader.mjs";
import { StyledLogo as f } from "../components/embedded-wallets/StyledLogo.mjs";
import { Subtitle as j } from "../components/ui/typography/Subtitle.mjs";
import { Title as u } from "../components/ui/typography/Title.mjs";
import { PrivyProviderRpcError as y, ProviderRpcError as b } from "../connectors/errors.mjs";
import { WALLET_PROXY_TIMEOUT as w, DEFAULT_SUCCESS_SCREEN_DURATION_MS as x } from "../constants.mjs";
import { usePrivyInternal as v } from "../hooks/internal-context.mjs";
import { usePrivyModal as C } from "../hooks/modal-context.mjs";
import { usePrivyContext as S } from "../hooks/privy-context.mjs";
import { Checkmark as T } from "../svg/checkmark.mjs";
import { ModalScreen as k } from "./index.mjs";
import "../components/Loader.mjs";
import "../svg/copy.mjs";
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
import "../errors.mjs";
import "ofetch";
import "../components/PrefetchedImage.mjs";
let I = o => {
  if (!s(o)) {
    return o;
  }
  try {
    return c(o);
  } catch {
    return o;
  }
};
let E = ({
  data: t
}) => {
  let i = t => typeof t == "object" && t !== null ? /*#__PURE__*/e(_, {
    children: Object.entries(t).map(([t, e]) => /*#__PURE__*/o("li", {
      children: [/*#__PURE__*/o("strong", {
        children: [t, ":"]
      }), " ", i(e)]
    }, t))
  }) : /*#__PURE__*/e("span", {
    children: String(t)
  }); /*#__PURE__*/
  return e("div", {
    children: i(t)
  });
};
let A = i => {
  let {
    types: n,
    primaryType: r,
    ...s
  } = i.typedData; /*#__PURE__*/
  return o(t, {
    children: [/*#__PURE__*/e(R, {
      children: /*#__PURE__*/e(E, {
        data: s
      })
    }), /*#__PURE__*/e(p, {
      text: (c = i.typedData, JSON.stringify(c, null, 2)),
      itemName: "full payload to clipboard"
    }), " "]
  });
  var c;
};
const N = () => {
  let {
    authenticated: r
  } = S();
  let {
    initializeWalletProxy: s,
    closePrivyModal: c
  } = v();
  let {
    navigate: p,
    data: E,
    onUserCloseViaDialogOrKeybindRef: N
  } = C();
  let [_, O] = i(true);
  let [z, F] = i("");
  let [H, P] = i();
  let [W, G] = i(null);
  let [J, Q] = i(false);
  let $ = W !== null;
  n(() => {
    if (!r) {
      p(k.LANDING);
    }
  }, [r]);
  n(() => {
    s(w).then(o => {
      O(false);
      if (!o) {
        F("An error has occurred, please try again.");
        P(new y(new b(z, m.E32603_DEFAULT_INTERNAL_ERROR.eipCode)));
      }
    });
  }, []);
  let {
    method: q,
    data: B,
    confirmAndSign: K,
    onSuccess: V,
    onFailure: X,
    uiOptions: Y
  } = E.signMessage;
  let Z = {
    title: Y.title || "Sign message",
    description: Y.description || "Signing this message will not cost you any fees.",
    buttonText: Y.buttonText || "Sign and continue"
  };
  let oo = o => {
    if (o) {
      V(o);
    } else {
      X(H || new y(new b("The user rejected the request.", m.E4001_USER_REJECTED_REQUEST.eipCode)));
    }
    c({
      shouldCallAuthOnSuccess: false
    });
    setTimeout(() => {
      G(null);
      F("");
      P(undefined);
    }, 200);
  };
  N.current = () => {
    oo(W);
  };
  return /*#__PURE__*/o(t, {
    children: [/*#__PURE__*/e(g, {
      onClose: () => oo(W)
    }), /*#__PURE__*/e(l, {}), Y.iconUrl && typeof Y.iconUrl == "string" ? /*#__PURE__*/e(M, {
      children: /*#__PURE__*/e(f, {
        size: "sm",
        src: Y.iconUrl,
        alt: "app image"
      })
    }) : null, /*#__PURE__*/e(u, {
      children: Z.title
    }), /*#__PURE__*/e(j, {
      children: Z.description
    }), q === "personal_sign" && /*#__PURE__*/e(R, {
      children: I(B)
    }), q === "eth_signTypedData_v4" && /*#__PURE__*/e(A, {
      typedData: B
    }), q === "solana_signMessage" && /*#__PURE__*/e(R, {
      children: B
    }), /*#__PURE__*/e(U, {}), /*#__PURE__*/e(L, {
      $fail: true,
      children: z
    }), /*#__PURE__*/e(a, {
      disabled: J || $ || _,
      loading: J,
      onClick: async () => {
        Q(true);
        F("");
        try {
          let o = await K();
          G(o);
          Q(false);
          setTimeout(() => {
            oo(o);
          }, x);
        } catch (o) {
          console.error(o);
          F("An error has occurred, please try again.");
          P(new y(new b(z, m.E32603_DEFAULT_INTERNAL_ERROR.eipCode)));
          Q(false);
        }
      },
      children: J ? "Signing..." : $ ? /*#__PURE__*/o(D, {
        children: [/*#__PURE__*/e(T, {
          style: {
            height: "0.9rem",
            width: "0.9rem"
          },
          strokeWidth: 2
        }), " ", /*#__PURE__*/e("span", {
          children: "Success"
        })]
      }) : Z.buttonText
    }), /*#__PURE__*/e(d, {}), /*#__PURE__*/e(h, {})]
  });
};
let R = /*#__PURE__*/r.div.withConfig({
  displayName: "Message",
  componentId: "sc-4e0c7b60-0"
})(["margin-top:1.5rem;background-color:var(--privy-color-background-2);border-radius:var(--privy-border-radius-md);padding:12px;text-align:left;max-height:310px;overflow:scroll;white-space:pre-wrap;width:100%;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}}"]);
let _ = /*#__PURE__*/r.ul.withConfig({
  displayName: "MessageList",
  componentId: "sc-4e0c7b60-1"
})(["margin-left:12px !important;white-space:nowrap;&:first-child{margin-left:0 !important;}strong{font-weight:500 !important;}}"]);
let L = /*#__PURE__*/r.div.withConfig({
  displayName: "InputHelp",
  componentId: "sc-4e0c7b60-2"
})(["line-height:20px;height:20px;font-size:13px;color:", ";display:flex;justify-content:flex-start;width:100%;margin-top:16px;margin-bottom:4px;"], o => o.$fail ? "var(--privy-color-error)" : "var(--privy-color-foreground-3)");
let D = /*#__PURE__*/r.span.withConfig({
  displayName: "ContentWithIcon",
  componentId: "sc-4e0c7b60-3"
})(["display:flex;align-items:center;gap:8px;"]);
let M = /*#__PURE__*/r.div.withConfig({
  displayName: "IconContainer",
  componentId: "sc-4e0c7b60-4"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:82px;"]);
let U = /*#__PURE__*/r.div.withConfig({
  displayName: "Grow",
  componentId: "sc-4e0c7b60-5"
})(["flex-grow:1;"]);
export { N as SignRequestScreen };
