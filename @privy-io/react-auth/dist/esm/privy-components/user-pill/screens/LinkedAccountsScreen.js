import { jsxs as t, jsx as o, Fragment as e } from "react/jsx-runtime";
import i from "@heroicons/react/24/outline/EllipsisHorizontalIcon";
import { styled as r } from "styled-components";
import { usePrivyContext as n } from "../../../hooks/privy-context.mjs";
import { Account as l } from "../Account.mjs";
import { MenuContent as s, MenuItem as m, WalletItemContainer as c, AccountContainer as p } from "../Menu.mjs";
import { useMenu as a } from "../MenuProvider.mjs";
import "react";
import "../../../hooks/index.mjs";
import "../../../components/CopyableText.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "../../../svg/copy.mjs";
import "../../../components/LoginMethodIcon.mjs";
import "../../../icons/KeyRound.mjs";
import "../../../icons/Login.mjs";
import "../../../icons/Mail.mjs";
import "../../../icons/Phone.mjs";
import "../../../icons/Socials.mjs";
import "../../../icons/TicketCheck.mjs";
import "../../../icons/WalletCards.mjs";
import "../../../icons/Wallets.mjs";
import "../../../utils/index.mjs";
import "../../../connectors/get-legacy-injected-providers.mjs";
import "../../../connectors/is-wallet-installed.mjs";
import "../../../errors.mjs";
import "ofetch";
import "../../../utils/eth/getPublicClient.mjs";
import "viem";
import "../../shared/X.mjs";
import "../Popover.mjs";
import "@floating-ui/react";
let d = /*#__PURE__*/r.div.withConfig({
  displayName: "MenuTitle",
  componentId: "sc-5d7f3e05-0"
})(["padding:0px 24px;font-size:14px;font-weight:500;line-height:22px;"]);
const h = /*#__PURE__*/r.div.withConfig({
  displayName: "WalletSectionContainer",
  componentId: "sc-5d7f3e05-1"
})(["display:flex;flex-direction:column;gap:0.5rem;&:not(:last-child){padding-bottom:0.5rem;border-bottom:1px solid var(--privy-color-foreground-4);}"]);
function u() {
  let {
    user: r
  } = n();
  let {
    setScreen: u,
    setMenuData: j
  } = a();
  let f = r?.linkedAccounts.filter(t => t.type === "wallet" && t.walletClientType === "privy") || [];
  let y = r?.linkedAccounts.filter(t => t.type === "smart_wallet") || [];
  let g = r?.linkedAccounts.filter(t => t.walletClientType !== "privy" && t.type !== "smart_wallet") || [];
  let w = ({
    title: e,
    accounts: r
  }) => /*#__PURE__*/t(h, {
    children: [e && /*#__PURE__*/o(d, {
      children: e
    }), r.map((e, r) => /*#__PURE__*/o(m, {
      children: /*#__PURE__*/t(c, {
        children: [/*#__PURE__*/o(p, {
          children: /*#__PURE__*/o(l, {
            account: e,
            isCopyable: true
          })
        }), (e.type === "wallet" || e.type === "smart_wallet") && /*#__PURE__*/o(i, {
          style: {
            cursor: "pointer"
          },
          width: 16,
          height: 16,
          strokeWidth: "2",
          onClick: () => {
            j({
              walletData: e
            });
            u("Wallet Actions");
          }
        })]
      })
    }, r))]
  });
  /*#__PURE__*/
  return t(s, {
    children: [g.length > 0 && /*#__PURE__*/o(e, {
      children: /*#__PURE__*/o(w, {
        accounts: g
      })
    }), y.length > 0 && /*#__PURE__*/o(e, {
      children: /*#__PURE__*/o(w, {
        title: "Smart Wallet",
        accounts: y
      })
    }), f.length > 0 && /*#__PURE__*/o(w, {
      title: "Embedded Wallets",
      accounts: f
    })]
  });
}
export { u as LinkedAccountsScreen, h as WalletSectionContainer };
