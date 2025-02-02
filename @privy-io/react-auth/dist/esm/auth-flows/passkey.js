import { RunEffectOnce as t } from "../effect.mjs";
import { PrivyClientError as e, PrivyErrorCode as i, formatApiError as s } from "../errors.mjs";
import { passkeyRegisterPath as n, passkeyAuthenticatePath as a, passkeyLinkPath as r, passkeyInitRegisterPath as o, passkeyInitAuthenticatePath as h, passkeyInitLinkPath as c } from "../paths.mjs";
import { getUiHeader as p } from "./getUiHeader.mjs";
import "ofetch";
class u {
  async initRegisterFlow(t) {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    this.authenticateForRegistration = true;
    this.meta.initRegisterResponse = await this.initRegisterOnce.execute(t);
  }
  async initAuthenticationFlow(t) {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    this.authenticateForRegistration = false;
    this.meta.initAuthenticateResponse = await this.initAuthenticateOnce.execute(t);
  }
  async initLinkFlow() {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    this.meta.initLinkResponse = await this.initLinkOnce.execute();
  }
  async register() {
    let t = await import("@simplewebauthn/browser");
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    if (!t.browserSupportsWebAuthn()) {
      throw new e("WebAuthn is not supported in this browser");
    }
    this.meta.initRegisterResponse ||= await this.initRegisterOnce.execute();
    try {
      let e = this.meta.initRegisterResponse.options;
      let i = await t.startRegistration(this._transformInitLinkOptionsToCamelCase(e));
      this.meta.setPasskeyAuthState?.({
        status: "submitting-response"
      });
      return await this.api.post(n, {
        relying_party: this.meta.initRegisterResponse.relying_party,
        authenticator_response: this._transformRegistrationResponseToSnakeCase(i)
      });
    } catch (t) {
      if (t.name === "NotAllowedError") {
        throw new e("Passkey request timed out or rejected by user.", undefined, i.PASSKEY_NOT_ALLOWED);
      }
      throw s(t);
    }
  }
  async authenticate() {
    if (this.authenticateForRegistration) {
      return this.register();
    }
    let t = await import("@simplewebauthn/browser");
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    if (!t.browserSupportsWebAuthn()) {
      throw new e("WebAuthn is not supported in this browser");
    }
    this.meta.initAuthenticateResponse ||= await this.initAuthenticateOnce.execute();
    try {
      let e = await t.startAuthentication(this._transformInitAuthenticateOptionsToCamelCase(this.meta.initAuthenticateResponse.options));
      this.meta.setPasskeyAuthState?.({
        status: "submitting-response"
      });
      return await this.api.post(a, {
        relying_party: this.meta.initAuthenticateResponse.relying_party,
        challenge: this.meta.initAuthenticateResponse.options.challenge,
        authenticator_response: this._transformAuthenticationResponseToSnakeCase(e)
      });
    } catch (t) {
      if (t.name === "NotAllowedError") {
        throw new e("Passkey request timed out or rejected by user.", undefined, i.PASSKEY_NOT_ALLOWED);
      }
      throw s(t);
    }
  }
  async link() {
    let t = await import("@simplewebauthn/browser");
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    if (!t.browserSupportsWebAuthn()) {
      throw new e("WebAuthn is not supported in this browser");
    }
    this.meta.initLinkResponse ||= await this.initLinkOnce.execute();
    try {
      let e = this.meta.initLinkResponse.options;
      let i = await t.startRegistration(this._transformInitLinkOptionsToCamelCase(e));
      this.meta.setPasskeyAuthState?.({
        status: "submitting-response"
      });
      return await this.api.post(r, {
        relying_party: this.meta.initLinkResponse.relying_party,
        authenticator_response: this._transformRegistrationResponseToSnakeCase(i)
      });
    } catch (t) {
      if (t.name === "NotAllowedError") {
        throw new e("Passkey request timed out or rejected by user.", undefined, i.PASSKEY_NOT_ALLOWED);
      }
      throw s(t);
    }
  }
  async _initRegisterOnce(t) {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    let i = p(t);
    return await this.api.post(o, {
      token: this.meta.captchaToken
    }, {
      headers: {
        ...i
      }
    });
  }
  async _initAuthenticateOnce(t) {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    let i = p(t);
    return await this.api.post(h, {
      token: this.meta.captchaToken
    }, {
      headers: {
        ...i
      }
    });
  }
  async _initLinkOnce() {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    return await this.api.post(c, {});
  }
  _transformInitLinkOptionsToCamelCase(t) {
    return {
      rp: t.rp,
      user: {
        id: t.user.id,
        name: t.user.name,
        displayName: t.user.display_name
      },
      challenge: t.challenge,
      pubKeyCredParams: t.pub_key_cred_params.map(t => ({
        type: t.type,
        alg: t.alg
      })),
      timeout: t.timeout,
      excludeCredentials: t.exclude_credentials?.map(t => ({
        id: t.id,
        type: t.type,
        transports: t.transports
      })),
      authenticatorSelection: {
        authenticatorAttachment: t.authenticator_selection?.authenticator_attachment,
        requireResidentKey: t.authenticator_selection?.require_resident_key,
        residentKey: t.authenticator_selection?.resident_key,
        userVerification: t.authenticator_selection?.user_verification
      },
      attestation: t.attestation,
      extensions: {
        appid: t.extensions?.app_id,
        credProps: t.extensions?.cred_props?.rk,
        hmacCreateSecret: t.extensions?.hmac_create_secret
      }
    };
  }
  _transformRegistrationResponseToSnakeCase(t) {
    return {
      id: t.id,
      raw_id: t.rawId,
      response: {
        client_data_json: t.response.clientDataJSON,
        attestation_object: t.response.attestationObject,
        authenticator_data: t.response.authenticatorData
      },
      authenticator_attachment: t.authenticatorAttachment,
      client_extension_results: {
        app_id: t.clientExtensionResults.appid,
        cred_props: t.clientExtensionResults.credProps,
        hmac_create_secret: t.clientExtensionResults.hmacCreateSecret
      },
      type: t.type
    };
  }
  _transformInitAuthenticateOptionsToCamelCase(t) {
    return {
      rpId: t.rp_id,
      challenge: t.challenge,
      allowCredentials: t.allow_credentials?.map(t => ({
        id: t.id,
        type: t.type,
        transports: t.transports
      })) || [],
      timeout: t.timeout,
      extensions: {
        appid: t.extensions?.app_id,
        credProps: t.extensions?.cred_props,
        hmacCreateSecret: t.extensions?.hmac_create_secret
      },
      userVerification: t.user_verification
    };
  }
  _transformAuthenticationResponseToSnakeCase(t) {
    return {
      id: t.id,
      raw_id: t.rawId,
      response: {
        client_data_json: t.response.clientDataJSON,
        authenticator_data: t.response.authenticatorData,
        signature: t.response.signature,
        user_handle: t.response.userHandle
      },
      authenticator_attachment: t.authenticatorAttachment,
      client_extension_results: {
        app_id: t.clientExtensionResults.appid,
        cred_props: t.clientExtensionResults.credProps,
        hmac_create_secret: t.clientExtensionResults.hmacCreateSecret
      },
      type: t.type
    };
  }
  constructor({
    captchaToken: e,
    setPasskeyAuthState: i
  }) {
    this.authenticateForRegistration = false;
    this.initRegisterOnce = new t(this._initRegisterOnce.bind(this));
    this.initAuthenticateOnce = new t(this._initAuthenticateOnce.bind(this));
    this.initLinkOnce = new t(this._initLinkOnce.bind(this));
    this.meta = {
      captchaToken: e,
      setPasskeyAuthState: i
    };
  }
}
export { u as PasskeyFlow };
