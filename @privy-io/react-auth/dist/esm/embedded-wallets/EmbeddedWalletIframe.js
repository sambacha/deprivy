import { jsx as e } from "react/jsx-runtime";
import { useRef as r, useState as t, useEffect as i } from "react";
import { useEmitPrivyEvent as a } from "../hooks/events-context.mjs";
import { invokeUntilSettled as o, constructURL as n } from "../utils/index.mjs";
import { PrivyIframeError as s } from "./errors.mjs";
import { EventCallbacksQueue as l } from "./eventCallbacksQueue.mjs";
import { invokeWithMfa as m } from "./invokeWithMfa.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../errors.mjs";
import "ofetch";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "./types.mjs";
var c;
c = 0;
let d = () => "id-" + c++;
function u(e) {
  return e.error !== undefined;
}
let v = new l();
let p = new Map();
let f = (e, r) => typeof r == "bigint" ? r.toString() : r;
let y = (e, r) => `${e}${JSON.stringify(r, f)}`;
function g(e, r, t, i) {
  let a = t.contentWindow;
  if (!a) {
    throw Error("iframe not initialized");
  }
  let o = y(e, r);
  if (e === "privy:wallet:create") {
    let e = p.get(o);
    if (e) {
      return e;
    }
  }
  let n = new Promise((t, o) => {
    let n = d();
    v.enqueue(n, {
      resolve: t,
      reject: o
    });
    a.postMessage({
      id: n,
      event: e,
      data: r
    }, i);
  }).finally(() => {
    p.delete(o);
  });
  p.set(o, n);
  return n;
}
function w(l) {
  let c = r(null);
  let d = r(l.mfaMethods);
  let p = a();
  let [f, y] = t(false);
  i(() => {
    d.current = l.mfaMethods;
  }, [l.mfaMethods]);
  i(() => {
    if (!f) {
      return;
    }
    let e = c.current;
    if (!e) {
      return;
    }
    function r(e) {
      var r;
      if (e && e.origin === l.origin && typeof (r = e.data).event == "string" && /^privy:.+/.test(r.event)) {
        (function (e) {
          switch (e.event) {
            case "privy:iframe:ready":
              let r = v.dequeue(e.event, e.id);
              if (u(e)) {
                return r.reject(new s(e.error.type, e.error.message));
              } else {
                return r.resolve(e.data);
              }
            case "privy:wallets:create":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:wallets:add":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:wallets:set-recovery":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:wallets:connect":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:wallets:recover":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:wallets:rpc":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:wallet:create":
              let t = v.dequeue(e.event, e.id);
              if (u(e)) {
                return t.reject(new s(e.error.type, e.error.message));
              } else {
                return t.resolve(e.data);
              }
            case "privy:wallets:import":
              let i = v.dequeue(e.event, e.id);
              if (u(e)) {
                return i.reject(new s(e.error.type, e.error.message));
              } else {
                return i.resolve(e.data);
              }
            case "privy:mfa:verify":
              let a = v.dequeue(e.event, e.id);
              if (u(e)) {
                return a.reject(new s(e.error.type, e.error.message));
              } else {
                return a.resolve(e.data);
              }
            case "privy:mfa:init-enrollment":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:mfa:submit-enrollment":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:mfa:unenroll":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:mfa:clear":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:solana-wallet:create":
              let o = v.dequeue(e.event, e.id);
              if (u(e)) {
                return o.reject(new s(e.error.type, e.error.message));
              } else {
                return o.resolve(e.data);
              }
            case "privy:farcaster:init-signer":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:farcaster:sign":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            case "privy:delegated-actions:consent":
              {
                let r = v.dequeue(e.event, e.id);
                if (u(e)) {
                  return r.reject(new s(e.error.type, e.error.message));
                } else {
                  return r.resolve(e.data);
                }
              }
            default:
              console.warn("Unsupported wallet proxy method:", e);
          }
        })(e.data);
      }
    }
    let t = {
      createWallet: r => m(t => g("privy:wallets:create", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      addWallet: r => m(t => g("privy:wallets:add", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      setRecovery: r => m(t => g("privy:wallets:set-recovery", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      connect: r => m(t => g("privy:wallets:connect", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      recover: r => m(t => g("privy:wallets:recover", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p, !r.recoveryAccessToken && !r.recoveryPassword && !r.recoverySecretOverride),
      rpc: r => m(t => g("privy:wallets:rpc", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      create: r => g("privy:wallet:create", r, e, l.origin),
      importWallet: r => g("privy:wallets:import", r, e, l.origin),
      createSolana: r => m(t => g("privy:solana-wallet:create", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      createDelegatedAction: r => g("privy:delegated-actions:consent", r, e, l.origin),
      verifyMfa: r => m(t => g("privy:mfa:verify", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p, true),
      initEnrollMfa: r => m(t => g("privy:mfa:init-enrollment", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      submitEnrollMfa: r => m(t => g("privy:mfa:submit-enrollment", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      unenrollMfa: r => m(t => g("privy:mfa:unenroll", {
        ...r,
        ...t
      }, e, l.origin), d.current, l.mfaPromise, l.mfaSubmitPromise, p),
      clearMfa: r => g("privy:mfa:clear", r, e, l.origin),
      initFarcasterSigner: r => g("privy:farcaster:init-signer", r, e, l.origin),
      signFarcasterMessage: r => g("privy:farcaster:sign", r, e, l.origin)
    };
    window.addEventListener("message", r);
    let i = new AbortController();
    o(() => g("privy:iframe:ready", {}, e, l.origin), {
      abortSignal: i.signal
    }).then(() => l.onLoad(t), (...e) => {
      console.warn("Privy iframe failed to load: ", ...e);
      l.onLoadFailed();
    });
    return () => {
      window.removeEventListener("message", r);
      i.abort();
    };
  }, [f]);
  return /*#__PURE__*/e("iframe", {
    ref: c,
    width: "0",
    height: "0",
    style: {
      display: "none",
      height: "0px",
      width: "0px"
    },
    onLoad: () => y(true),
    src: n(l.origin, `/apps/${l.appId}/embedded-wallets`, {
      caid: l.clientAnalyticsId,
      client_id: l.appClientId
    })
  });
}
export { w as EmbeddedWalletIframe };
