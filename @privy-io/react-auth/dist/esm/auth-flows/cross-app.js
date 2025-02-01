import { PrivyClientError as t, formatApiError as e } from "../errors.mjs";
import { oAuthAuthenticatePath as i, oAuthLinkPath as o } from "../paths.mjs";
import "ofetch";
class r {
  async authenticate() {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    try {
      return await this.api.post(i, {
        authorization_code: this.meta.authorizationCode,
        state_code: this.meta.stateCode,
        code_verifier: this.meta.codeVerifier,
        provider: this.meta.provider
      });
    } catch (t) {
      throw e(t);
    }
  }
  async link() {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    try {
      return await this.api.post(o, {
        authorization_code: this.meta.authorizationCode,
        state_code: this.meta.stateCode,
        code_verifier: this.meta.codeVerifier,
        provider: this.meta.provider
      });
    } catch (t) {
      throw e(t);
    }
  }
  constructor({
    authorizationCode: t,
    stateCode: e,
    codeVerifier: i,
    provider: o
  }) {
    this.meta = {
      authorizationCode: t,
      stateCode: e,
      codeVerifier: i,
      provider: o
    };
  }
}
export { r as CrossAppAuthFlow };
