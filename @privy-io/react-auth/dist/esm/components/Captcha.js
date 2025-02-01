import { jsx as e } from "react/jsx-runtime";
import { Turnstile as r } from "@marsidev/react-turnstile";
import { useMemo as t, useEffect as o } from "react";
import { useCaptcha as i } from "../hooks/captcha-context.mjs";
import "../hooks/index.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
const n = n => {
  let {
    enabled: s,
    siteKey: c,
    appId: p,
    setError: a,
    setToken: m,
    setExecuting: d,
    ref: l
  } = i();
  let [, u] = t(() => c?.split("t:") || [], [c]);
  o(() => l.current?.remove, []);
  if (!s) {
    return null;
  }
  if (!u) {
    throw Error("Unsupported captcha site key");
  } /*#__PURE__*/
  return e("div", {
    className: "hidden h-0 w-0",
    children: /*#__PURE__*/e(r, {
      ...n,
      ref: l,
      siteKey: u,
      options: {
        action: p,
        size: "invisible",
        ...(n.delayedExecution ? {
          appearance: "execute",
          execution: "execute"
        } : {
          appearance: "always",
          execution: "render"
        })
      },
      onUnsupported: () => {
        n.onUnsupported?.();
        console.warn("Browser does not support Turnstile.");
      },
      onError: () => {
        n.onError?.();
        a("Captcha failed");
        d(false);
      },
      onSuccess: e => {
        n.onSuccess?.(e);
        m(e);
        d(false);
      },
      onExpire: () => {
        n.onExpire?.();
        try {
          l.current?.reset();
          a(undefined);
          m(undefined);
        } catch (e) {
          a("expired_and_failed_reset");
        }
      }
    })
  });
};
export { n as Captcha };
