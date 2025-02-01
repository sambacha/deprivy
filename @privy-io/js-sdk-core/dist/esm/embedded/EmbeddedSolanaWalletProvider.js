import { PrivyClientError as e } from "../Error.mjs";
import { getWalletPublicKeyFromTransaction as t } from "../solana/getWalletPublicKeyFromTransaction.mjs";
import { isVersionedTransaction as r } from "../solana/isVersionedTransaction.mjs";
class s {
  async request(t) {
    if (!(await this._privyInternal.getAccessToken())) {
      throw new e({
        error: "Missing access token",
        code: "attempted_rpc_call_before_logged_in"
      });
    }
    switch (t.method) {
      case "signAndSendTransaction":
        return await this.handleSignAndSendTransaction(t);
      case "signTransaction":
        return await this.handleSignTransaction(t);
      default:
        return await this.handleIFrameRpc(t);
    }
  }
  async handleIFrameRpc(t) {
    try {
      let e = await this._privyInternal.getAccessToken();
      if (!e) {
        throw Error("Missing privy token. User must be logged in");
      }
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_started", {
        method: t.method,
        address: this._publicKey
      });
      let r = await this._proxy.rpcWallet({
        accessToken: e,
        request: t,
        chainType: "solana",
        hdWalletIndex: this._hdWalletIndex,
        entropyId: this._entropyId,
        entropyIdVerifier: this._entropyIdVerifier
      });
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_completed", {
        method: t.method,
        address: this._publicKey
      });
      return r.response.data;
    } catch (r) {
      console.error(r);
      let s = r instanceof Error ? r.message : "Unable to make wallet request";
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_failed", {
        method: t.method,
        address: this._publicKey,
        error: s
      });
      throw new e({
        code: "embedded_wallet_request_error",
        error: s
      });
    }
  }
  async handleSignAndSendTransaction(s) {
    try {
      let e = await this._privyInternal.getAccessToken();
      if (!e) {
        throw Error("Missing privy token. User must be logged in");
      }
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_started", {
        method: s.method,
        address: this._publicKey
      });
      let {
        transaction: a,
        connection: n,
        options: i
      } = s.params;
      let d = t(a, this._publicKey);
      let o = r(a) ? Buffer.from(a.message.serialize()) : a.serializeMessage();
      let l = (await this._proxy.rpcWallet({
        accessToken: e,
        chainType: "solana",
        hdWalletIndex: this._hdWalletIndex,
        entropyId: this._entropyId,
        entropyIdVerifier: this._entropyIdVerifier,
        request: {
          method: "signMessage",
          params: {
            message: o.toString("base64")
          }
        }
      })).response.data.signature;
      a.addSignature(d, Buffer.from(l, "base64"));
      let c = await n.sendRawTransaction(a.serialize(), i);
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_completed", {
        method: s.method,
        address: this._publicKey
      });
      return {
        signature: c
      };
    } catch (t) {
      console.error(t);
      let r = t instanceof Error ? t.message : "Unable to make wallet request";
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_failed", {
        method: s.method,
        address: this._publicKey,
        error: r
      });
      throw new e({
        code: "embedded_wallet_request_error",
        error: r
      });
    }
  }
  async handleSignTransaction(s) {
    try {
      let e = await this._privyInternal.getAccessToken();
      if (!e) {
        throw Error("Missing privy token. User must be logged in");
      }
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_started", {
        method: s.method,
        address: this._publicKey
      });
      let {
        transaction: a
      } = s.params;
      let n = t(a, this._publicKey);
      let i = r(a) ? Buffer.from(a.message.serialize()) : a.serializeMessage();
      let d = (await this._proxy.rpcWallet({
        accessToken: e,
        chainType: "solana",
        hdWalletIndex: this._hdWalletIndex,
        entropyId: this._entropyId,
        entropyIdVerifier: this._entropyIdVerifier,
        request: {
          method: "signMessage",
          params: {
            message: i.toString("base64")
          }
        }
      })).response.data.signature;
      a.addSignature(n, Buffer.from(d, "base64"));
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_completed", {
        method: s.method,
        address: this._publicKey
      });
      return {
        signedTransaction: a
      };
    } catch (t) {
      console.error(t);
      let r = t instanceof Error ? t.message : "Unable to make wallet request";
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_failed", {
        method: s.method,
        address: this._publicKey,
        error: r
      });
      throw new e({
        code: "embedded_wallet_request_error",
        error: r
      });
    }
  }
  toJSON() {
    return `PrivyEmbeddedSolanaProvider { address: '${this._publicKey}', request: [Function] }`;
  }
  constructor({
    proxy: e,
    privyInternal: t,
    publicKey: r,
    hdWalletIndex: s,
    entropyId: a,
    entropyIdVerifier: n
  }) {
    this._proxy = e;
    this._privyInternal = t;
    this._publicKey = r;
    this._hdWalletIndex = s;
    this._entropyId = a;
    this._entropyIdVerifier = n;
  }
}
export { s as EmbeddedSolanaWalletProvider };
