import { STATE_CODE_KEY as e } from "../../constants.mjs";
import r from "../../storage.mjs";
function t() {
  let t = new URL(window.location.href);
  t.searchParams.delete("privy_oauth_code");
  t.searchParams.delete("privy_oauth_provider");
  t.searchParams.delete("privy_oauth_state");
  r.del(e);
  window.history.replaceState({}, "", t);
}
export { t as stripUrlOAuthParamsAndRemoveStateCode };
