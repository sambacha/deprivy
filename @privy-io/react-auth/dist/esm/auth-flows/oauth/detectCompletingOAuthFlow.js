import { getIsHeadlessOAuthFlowInProgress as o, getIsOAuthDisabledSignupFlow as r } from "./getIsHeadlessOAuthFlowInProgress.mjs";
import "../../constants.mjs";
import "../../storage.mjs";
function t() {
  let t = new URLSearchParams(window.location.search);
  let e = t.get("privy_oauth_code");
  let i = t.get("privy_oauth_state");
  let n = t.get("privy_oauth_provider");
  if (!e || !i || !n) {
    return {
      inProgress: false
    };
  }
  let s = false;
  try {
    s = !!window.opener.location.origin;
  } catch {}
  return {
    inProgress: true,
    authorizationCode: e,
    stateCode: i,
    provider: n,
    withPrivyUi: !o(),
    popupFlow: window.opener !== null && s,
    disableSignup: r()
  };
}
export { t as detectCompletingOAuthFlow };
