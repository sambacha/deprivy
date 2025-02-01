import { PrivyErrorCode as t, PrivyClientError as o } from "../errors.mjs";
import { useEmitPrivyEvent as e, usePrivyEventSubscription as n } from "./events-context.mjs";
import { usePrivyInternal as r } from "./internal-context.mjs";
import { usePrivyContext as i } from "./privy-context.mjs";
import "ofetch";
import "react";
import "./index.mjs";
function c(t) {
  let {
    authenticated: o,
    user: c
  } = i();
  let {
    initLoginWithOAuth: u
  } = r();
  let a = e();
  n("oAuthAuthorization", t);
  return {
    reauthorize: t => m(o, c, u, a, t.provider)
  };
}
let m = async (e, n, r, i, c) => {
  if (!e) {
    i("linkAccount", "onError", t.MUST_BE_AUTHENTICATED, {
      linkMethod: c
    });
    throw new o("User must be authenticated before linking an account.");
  }
  if (!n?.linkedAccounts.some(t => t.type.includes(c))) {
    throw new o(`OAuth account of type ${c} not linked to the account.`);
  }
  await r(c);
};
export { c as useOAuthTokens };
