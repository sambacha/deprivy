import { jsxs as e, Fragment as o, jsx as t } from "react/jsx-runtime";
import { CopyableText as r } from "../../components/CopyableText.mjs";
import { LoginMethodIcon as s, getLinkedAccountLoginMethodName as i } from "../../components/LoginMethodIcon.mjs";
import { formatWalletAddress as m } from "../../utils/index.mjs";
import "@heroicons/react/24/outline/CheckIcon";
import "react";
import "styled-components";
import "../../svg/copy.mjs";
import "../../icons/KeyRound.mjs";
import "../../icons/Login.mjs";
import "../../icons/Mail.mjs";
import "../../icons/Phone.mjs";
import "../../icons/Socials.mjs";
import "../../icons/TicketCheck.mjs";
import "../../icons/WalletCards.mjs";
import "../../icons/Wallets.mjs";
import "../../connectors/get-legacy-injected-providers.mjs";
import "../../connectors/is-wallet-installed.mjs";
import "../../errors.mjs";
import "ofetch";
import "../../utils/eth/getPublicClient.mjs";
import "viem";
function n({
  account: r,
  isCopyable: m
}) {
  /*#__PURE__*/return e(o, {
    children: [/*#__PURE__*/t(s, {
      method: i(r)
    }), c(r, m)]
  });
}
function c(e, o) {
  switch (e.type) {
    case "email":
      return e.address;
    case "phone":
      return e.number;
    case "wallet":
    case "smart_wallet":
      if (o) {
        return /*#__PURE__*/t(r, {
          value: e.address,
          children: m(e.address)
        });
      } else {
        return m(e.address);
      }
    default:
      return e.email || e.username || e.subject || e.credentialId;
  }
}
export { n as Account, c as getLabel };
