import { ofetch as t } from "ofetch";
import { VERSION as e } from "./constants.mjs";
import { formatApiError as s, PrivyTimeoutError as r } from "./errors.mjs";
import { sessionsRefreshPath as i, recoverForkedSessionsPath as a, sessionsLogoutPath as n, analyticsEventsPath as o } from "./paths.mjs";
let c = [i, a, n, o];
class h {
  async get(t, e) {
    try {
      return await this.baseFetch(t, e);
    } catch (t) {
      throw s(t);
    }
  }
  async post(t, e, r) {
    try {
      return await this.baseFetch(t, {
        method: "POST",
        ...(e ? {
          body: e
        } : {}),
        ...r
      });
    } catch (t) {
      throw s(t);
    }
  }
  async delete(t, e) {
    try {
      return await this.baseFetch(t, {
        method: "DELETE",
        ...e
      });
    } catch (t) {
      throw s(t);
    }
  }
  constructor({
    appId: s,
    appClientId: i,
    client: a,
    defaults: n
  }) {
    this.appId = s;
    this.appClientId = i;
    this.clientAnalyticsId = a.clientAnalyticsId;
    this.sdkVersion = e;
    this.client = a;
    this.defaults = n;
    this.fallbackApiUrl = a.fallbackApiUrl;
    this.baseFetch = t.create({
      baseURL: this.defaults.baseURL,
      timeout: this.defaults.timeout,
      retry: 3,
      retryDelay: 500,
      retryStatusCodes: [408, 409, 425, 500, 502, 503, 504],
      credentials: "include",
      onRequest: async ({
        request: t,
        options: e
      }) => {
        let s = new Headers(e.headers);
        s.set("privy-app-id", this.appId);
        if (this.appClientId) {
          s.set("privy-client-id", this.appClientId);
        }
        s.set("privy-ca-id", this.clientAnalyticsId || "");
        s.set("privy-client", `react-auth:${this.sdkVersion}`);
        let r = c.includes(t.toString());
        if (!s.has("authorization")) {
          let t = await this.client.getAccessToken({
            disableAutoRefresh: r
          });
          if (t !== null) {
            s.set("authorization", `Bearer ${t}`);
          }
        }
        e.headers = s;
        e.retryDelay &&= e.retryDelay * 3;
      },
      onRequestError: ({
        error: t
      }) => {
        if (t instanceof DOMException && t.name === "AbortError") {
          throw new r();
        }
      }
    });
  }
}
export { h as Http };
