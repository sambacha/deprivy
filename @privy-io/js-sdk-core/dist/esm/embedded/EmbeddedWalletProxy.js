import { sleep as e } from "../utils/sleep.mjs";
import { EventCallbacksQueue as t } from "./EventCallbackQueue.mjs";
import { PrivyIframeError as i } from "./errors.mjs";
import { withMfa as r } from "./withMfa.mjs";
import "./types.mjs";
var a;
const o = 15000;
a = 0;
let s = () => "id-" + a++;
let n = (e, t) => typeof t == "bigint" ? t.toString() : t;
let l = (t, {
  ms: i,
  msg: r
}) => Promise.race([t, e(i ?? 15000).then(() => Promise.reject(Error(r)))]);
let m = new t();
class h {
  invokeWithMfa(e, t) {
    return l(r(i => l(this.waitForReady().then(() => e(i)), {
      msg: t.timeoutMsg,
      ms: t.timeoutMs
    }), this.mfa.rootPromise, this.mfa.submitPromise, () => this.mfa.emit("mfaRequired"), t.mfaAlwaysRequired ?? false, 4, 300000), {
      msg: "Operation reached timeout: MFA verification",
      ms: 1260000
    });
  }
  ping(e = 15000) {
    return l(this.invoke("privy:iframe:ready", {}), {
      msg: "Ping reached timeout",
      ms: e
    });
  }
  create(e) {
    return l(this.waitForReady().then(() => this.invoke("privy:wallet:create", e)), {
      msg: "Operation reached timeout: create"
    });
  }
  rpc(e) {
    return this.invokeWithMfa(t => this.invoke("privy:wallet:rpc", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: rpc"
    });
  }
  createSolana(e) {
    return this.invokeWithMfa(t => this.invoke("privy:solana-wallet:create", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: create",
      timeoutMs: 60000
    });
  }
  createAdditionalSolana(e) {
    return l(this.waitForReady().then(() => this.invoke("privy:solana-wallet:create-additional", e)), {
      msg: "Operation reached timeout: create"
    });
  }
  solanaRpc(e) {
    return this.invokeWithMfa(t => this.invoke("privy:solana-wallet:rpc", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: solana-rpc"
    });
  }
  delegateWallets(e) {
    return l(this.waitForReady().then(() => this.invoke("privy:delegated-actions:consent", e)), {
      msg: "Operation reached timeout: delegated-actions:consent"
    });
  }
  verifyMfa(e) {
    return this.invokeWithMfa(t => this.invoke("privy:mfa:verify", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: mfa:verify",
      mfaAlwaysRequired: true
    });
  }
  initEnrollMfa(e) {
    return this.invokeWithMfa(t => this.invoke("privy:mfa:init-enrollment", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: mfa:init-enrollment"
    });
  }
  submitEnrollMfa(e) {
    return this.invokeWithMfa(t => this.invoke("privy:mfa:submit-enrollment", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: mfa:submit-enrollment"
    });
  }
  unenrollMfa(e) {
    return this.invokeWithMfa(t => this.invoke("privy:mfa:unenroll", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: mfa:unenroll",
      mfaAlwaysRequired: true
    });
  }
  clearMfa(e) {
    return l(this.waitForReady().then(() => this.invoke("privy:mfa:clear", e)), {
      msg: "Operation reached timeout: mfa:clear"
    });
  }
  createWallet(e) {
    return this.invokeWithMfa(t => this.invoke("privy:wallets:create", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: create",
      timeoutMs: 60000
    });
  }
  addWallet(e) {
    return l(this.waitForReady().then(() => this.invoke("privy:wallets:add", e)), {
      msg: "Operation reached timeout: wallets:add"
    });
  }
  setRecovery(e) {
    return this.invokeWithMfa(t => this.invoke("privy:wallets:set-recovery", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: wallets:set-recovery",
      timeoutMs: 60000
    });
  }
  connect(e) {
    return l(this.waitForReady().then(() => this.invoke("privy:wallets:connect", e)), {
      msg: "Operation reached timeout: wallets:connect"
    });
  }
  recover(e) {
    return this.invokeWithMfa(t => this.invoke("privy:wallets:recover", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: wallets:recover",
      timeoutMs: 60000
    });
  }
  rpcWallet(e) {
    return this.invokeWithMfa(t => this.invoke("privy:wallets:rpc", {
      ...t,
      ...e
    }), {
      timeoutMsg: "Operation reached timeout: wallets:rpc"
    });
  }
  handleEmbeddedWalletMessages(e) {
    let {
      reject: t,
      resolve: r
    } = m.dequeue(e.event, e.id);
    if (e.error !== undefined) {
      return t(new i(e.error.type, e.error.message));
    } else {
      return r(e.data);
    }
  }
  waitForReady() {
    if (this.ready) {
      return Promise.resolve();
    } else {
      return new Promise(async (t, i) => {
        while (!this.ready) {
          this.invoke("privy:iframe:ready", {}).then(() => {
            this.ready = true;
            t();
          }).catch(i);
          await e(150);
        }
      });
    }
  }
  invoke(e, t) {
    let i = ((e, t) => `${e}${JSON.stringify(t, n)}`)(e, t);
    if (e === "privy:wallet:create" || e === "privy:solana-wallet:create") {
      let e = this.cache.get(i);
      if (e) {
        return e;
      }
    }
    let r = new Promise((i, r) => {
      let a = s();
      m.enqueue(a, {
        resolve: i,
        reject: r
      });
      this._embeddedWalletMessagePoster.postMessage(JSON.stringify({
        id: a,
        event: e,
        data: t
      }), "*");
    }).finally(() => {
      this.cache.delete(i);
    });
    this.cache.set(i, r);
    return r;
  }
  constructor(e, t) {
    this.ready = false;
    this.cache = new Map();
    this._embeddedWalletMessagePoster = e;
    this.mfa = t;
  }
}
export { o as DEFAULT_WALLET_PROXY_TIMEOUT_MS, h as EmbeddedWalletProxy };
