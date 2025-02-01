import { USE_BROADCAST_CHANNEL_EVENT_TYPE as e, CROSS_APP_BROADCAST_CHANNEL_NAME as t } from "./index.mjs";
import { PrivyClientError as a } from "../../errors.mjs";
import "ofetch";
async function o({
  url: o,
  popup: r
}) {
  r.location = o;
  return new Promise((o, n) => {
    let i;
    let s = setTimeout(() => {
      n(new a("Authorization request timed out after 2 minutes."));
      d();
    }, 120000);
    function d() {
      r?.close();
      window.removeEventListener("message", u);
    }
    let m = setInterval(() => {
      if (r?.closed && !i) {
        d();
        clearInterval(m);
        clearTimeout(s);
        n(new a("User rejected request"));
      }
    }, 300);
    function u(r) {
      if (r.data) {
        if (r.data.type === "PRIVY_OAUTH_RESPONSE" && r.data.stateCode && r.data.authorizationCode) {
          clearTimeout(s);
          o(r.data);
          d();
        }
        if (r.data.type === "PRIVY_OAUTH_ERROR") {
          clearTimeout(s);
          n(new a(r.data.error));
          d();
        }
        if (r.data.type === e) {
          (i = new BroadcastChannel(t)).onmessage = u;
        }
      }
    }
    window.addEventListener("message", u);
  });
}
export { o as popupCrossAppAuthFlow };
