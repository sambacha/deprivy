import { RecoveryOAuthInit as t, RecoveryOAuthAuthenticate as e } from "@privy-io/public-api";
import { PrivyClientError as r } from "../../Error.mjs";
import { createCodeVerifier as i, createStateCode as a, deriveCodeChallengeFromCodeVerifier as o, CODE_VERIFIER_KEY as s, STATE_CODE_KEY as c } from "../../pkce.mjs";
import "jose";
class h {
  async generateURL(e) {
    let r = i();
    let h = a();
    let _ = await o({
      codeVerifier: r,
      digest: this._crypto?.digest
    });
    await Promise.all([this._storage.put(s, r), this._storage.put(c, h)]);
    return this._privyInternal.fetch(t, {
      body: {
        redirect_to: e,
        code_challenge: _,
        state_code: h
      }
    });
  }
  async authorize(t, i) {
    let [a, o] = await Promise.all([this._storage.get(s), this._storage.get(c)]);
    if (o !== i) {
      this._privyInternal.createAnalyticsEvent("possible_phishing_attempt", {
        flow: "recovery_oauth",
        storedStateCode: o ?? "",
        returnedStateCode: i ?? ""
      });
      throw new r({
        code: "pkce_state_code_mismatch",
        error: "Unexpected auth flow. This may be a phishing attempt."
      });
    }
    let h = await this._privyInternal.fetch(e, {
      body: {
        authorization_code: t,
        state_code: o,
        code_verifier: a
      }
    });
    await Promise.all([this._storage.del(s), this._storage.del(c)]);
    return h;
  }
  constructor(t, e, r) {
    this._privyInternal = t;
    this._storage = e;
    this._crypto = r;
  }
}
export { h as default };
