import { PrivyClientError as e } from "../Error.mjs";
class t {
  async sign({
    message: e
  }) {
    return await this.request({
      method: "sign",
      params: {
        message: new TextDecoder("utf8").decode(e)
      }
    });
  }
  async signTransaction({
    psbt: e
  }) {
    return await this.request({
      method: "signTransaction",
      params: {
        psbt: e
      }
    });
  }
  async request(t) {
    if (!(await this._privyInternal.getAccessToken())) {
      throw new e({
        error: "Missing access token",
        code: "attempted_rpc_call_before_logged_in"
      });
    }
    return this.handleIFrameRpc(t);
  }
  async handleIFrameRpc(t) {
    try {
      let e = await this._privyInternal.getAccessToken();
      if (!e) {
        throw Error("Missing access token. User must be authenticated.");
      }
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_started", {
        method: t.method,
        address: this._account.address
      });
      let r = await this._proxy.rpcWallet({
        accessToken: e,
        request: t,
        entropyId: this._entropyId,
        entropyIdVerifier: this._entropyIdVerifier,
        hdWalletIndex: this._account.wallet_index,
        chainType: this._account.chain_type
      });
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_completed", {
        method: t.method,
        address: this._account.address
      });
      return r.response.data;
    } catch (r) {
      console.error(r);
      let s = r instanceof Error ? r.message : "Unable to make wallet request";
      this._privyInternal.createAnalyticsEvent("embedded_wallet_sdk_rpc_failed", {
        method: t.method,
        address: this._account.address,
        error: s
      });
      throw new e({
        code: "embedded_wallet_request_error",
        error: s
      });
    }
  }
  toJSON() {
    return `PrivyEmbeddedBitcoinProvider { address: '${this._account.address}', request: [Function] }`;
  }
  constructor({
    proxy: e,
    privyInternal: t,
    account: r,
    entropyId: s,
    entropyIdVerifier: a
  }) {
    this._proxy = e;
    this._privyInternal = t;
    this._account = r;
    this._entropyId = s;
    this._entropyIdVerifier = a;
  }
}
export { t as EmbeddedBitcoinWalletProvider };
