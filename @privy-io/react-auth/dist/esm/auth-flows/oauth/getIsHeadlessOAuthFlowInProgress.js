import { HEADLESS_OAUTH_KEY as t, OAUTH_DISABLE_SIGNUP_KEY as r } from "../../constants.mjs";
import o from "../../storage.mjs";
function n() {
  return !!o.get(t);
}
function e() {
  return !!o.get(r);
}
export { n as getIsHeadlessOAuthFlowInProgress, e as getIsOAuthDisabledSignupFlow };
