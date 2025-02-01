import { toHex as e } from "viem";
import { PrivyClientError as r } from "../../errors.mjs";
import { triggerPopup as t } from "../popup/triggerPopup.mjs";
import { getProviderAppMetadata as a } from "./authFlow.mjs";
import "ofetch";
import "../../auth-flows/cross-app.mjs";
import "../../paths.mjs";
import "../pkce.mjs";
import "jose";
import "../../constants.mjs";
import "../../crypto.mjs";
import "../../storage.mjs";
const s = async ({
  user: e,
  address: s,
  client: n,
  request: i,
  requesterAppId: d,
  reconnect: p
}) => {
  n.createAnalyticsEvent({
    eventName: "cross_app_request_started",
    payload: {
      address: s,
      method: i.method
    }
  });
  let c = e?.linkedAccounts.find(e => e.type === "cross_app" && (e.embeddedWallets.some(e => e.address === s) || e.smartWallets.some(e => e.address === s)));
  if (!e || !c) {
    n.createAnalyticsEvent({
      eventName: "cross_app_request_error",
      payload: {
        error: "Cannot request a signature with this wallet address",
        address: s
      }
    });
    throw new r("Cannot request a signature with this wallet address");
  }
  let l = n.getProviderAccessToken(c.providerApp.id);
  let m = await a({
    api: n.api,
    requesterAppId: d,
    providerAppId: c.providerApp.id
  });
  if (!l) {
    if (m.readOnly) {
      console.error("cannot transact against a read-only provider app");
      throw new r("Cannot transact against a read-only provider app");
    }
    if (await p({
      appId: c.providerApp.id,
      action: "link"
    })) {
      l = n.getProviderAccessToken(c.providerApp.id);
    }
  }
  if (!l) {
    n.createAnalyticsEvent({
      eventName: "cross_app_request_error",
      payload: {
        error: "Transactions require a valid token",
        address: s
      }
    });
    throw new r("Transactions require a valid token");
  }
  let u = t();
  if (!u) {
    n.createAnalyticsEvent({
      eventName: "cross_app_request_error",
      payload: {
        error: "Missing token",
        address: s
      }
    });
    throw new r("Failed to initialize signature request");
  }
  let v = new URL(`${m.apiUrl}/oauth/transact`);
  v.searchParams.set("token", l || "");
  v.searchParams.set("request", o(i));
  u.location = v.href;
  return new Promise((e, t) => {
    let a = setTimeout(() => {
      p();
      t(new r("Request timeout"));
      n.createAnalyticsEvent({
        eventName: "cross_app_request_error",
        payload: {
          error: "Request timeout",
          address: s
        }
      });
    }, 120000);
    let o = setInterval(() => {
      if (u.closed) {
        p();
        t(new r("User rejected request"));
        n.createAnalyticsEvent({
          eventName: "cross_app_request_error",
          payload: {
            error: "User rejected request",
            address: s
          }
        });
      }
    }, 300);
    let d = r => {
      if (r.data) {
        if (r.data.token?.action === "set" && r.data.token?.value !== undefined) {
          n.storeProviderAccessToken(c.providerApp.id, r.data.token.value);
        } else if (r.data.token?.action === "clear") {
          n.storeProviderAccessToken(c.providerApp.id, null);
        }
        if (r.data.type === "PRIVY_CROSS_APP_ACTION_RESPONSE" && r.data.result) {
          p();
          e(r.data.result);
          n.createAnalyticsEvent({
            eventName: "cross_app_request_success",
            payload: {
              address: s,
              method: i.method
            }
          });
        }
        if (r.data.type === "PRIVY_CROSS_APP_ACTION_ERROR" && r.data.error) {
          p();
          t(r.data.error);
          n.createAnalyticsEvent({
            eventName: "cross_app_request_error",
            payload: {
              error: r.data.error,
              address: s
            }
          });
        }
      }
    };
    window.addEventListener("message", d);
    let p = () => {
      u.close();
      clearInterval(o);
      clearTimeout(a);
      window.removeEventListener("message", d);
    };
  });
};
let o = r => JSON.stringify({
  content: {
    request: {
      request: n(r, e)
    }
  },
  timestamp: Date.now(),
  callbackUrl: window.origin
});
const n = (e, r) => typeof e == "bigint" ? r(e) : Array.isArray(e) ? e.map(e => n(e, r)) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, n(t, r)])) : e;
export { n as replaceBigInts, s as sendCrossAppRequest };
