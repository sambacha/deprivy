import { jsx as e } from "react/jsx-runtime";
import { notImplemented as t } from "./index.mjs";
import { createContext as r, useRef as s, useState as o, useMemo as i, useContext as a } from "react";
import { PrivyError as n, PrivyErrorCode as c } from "../errors.mjs";
import { pollForResult as u } from "../utils/index.mjs";
import "ofetch";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
const d = /*#__PURE__*/r({
  siteKey: "",
  enabled: false,
  appId: undefined,
  token: undefined,
  error: undefined,
  status: "disabled",
  setToken: t,
  setError: t,
  setExecuting: t,
  waitForResult: () => Promise.resolve(""),
  ref: {
    current: null
  },
  remove: t,
  reset: t,
  execute: t
});
class l extends n {
  constructor(e, t, r) {
    super(e || "Captcha failed");
    this.type = "Captcha";
    if (t instanceof Error) {
      this.cause = t;
    }
    this.privyErrorCode = r;
  }
}
const m = ({
  children: t,
  id: r,
  captchaSiteKey: a,
  captchaEnabled: n
}) => {
  let m = s(null);
  let [p, v] = o();
  let [h, f] = o();
  let [x, y] = o(false);
  let j = i(() => n ? x || p || h ? !x || p || h ? p && !h ? {
    status: "success",
    token: p
  } : h ? {
    status: "error",
    error: h
  } : {
    status: "ready"
  } : {
    status: "loading"
  } : {
    status: "ready"
  } : {
    status: "disabled"
  }, [n, p, h, x]);
  /*#__PURE__*/
  return e(d.Provider, {
    value: {
      ...j,
      ref: m,
      enabled: n,
      siteKey: a,
      appId: r,
      setToken: v,
      setError: f,
      setExecuting: y,
      remove() {
        if (n) {
          m.current?.remove();
          y(false);
          f(undefined);
          v(undefined);
        }
      },
      reset() {
        if (n) {
          m.current?.reset();
          y(false);
          f(undefined);
          v(undefined);
        }
      },
      execute() {
        if (n) {
          y(true);
          m.current?.execute();
        }
      },
      async waitForResult() {
        if (!n) {
          return "";
        }
        try {
          return await u(() => m.current?.getResponse(), {
            interval: 200,
            timeout: 20000
          });
        } catch (e) {
          throw new l("Captcha failed", null, c.CAPTCHA_TIMEOUT);
        }
      }
    },
    children: t
  });
};
const p = () => a(d);
export { d as CaptchaContext, l as CaptchaError, m as CaptchaProvider, p as useCaptcha };
