import { PasskeyLinkInit as e, PasskeyAuthenticateInit as t, PasskeyRegisterInit as s, PasskeyAuthenticate as a, PasskeyRegister as n, PasskeyLink as i } from "@privy-io/public-api";
import { maybeCreateWalletOnLogin as r } from "./maybeCreateWalletOnLogin.mjs";
import "../../utils/getUserEmbeddedEthereumWallet.mjs";
import "../../utils/getAllUserEmbeddedEthereumWallets.mjs";
import "../../utils/getUserEmbeddedSolanaWallet.mjs";
import "../../utils/getAllUserEmbeddedSolanaWallets.mjs";
import "../../utils/shouldCreateEmbeddedEthWallet.mjs";
import "../../utils/shouldCreateEmbeddedSolWallet.mjs";
class o {
  async generateRegistrationOptions(t) {
    return await this._privyInternal.fetch(e, {
      body: {
        relying_party: t
      }
    });
  }
  async generateAuthenticationOptions(e) {
    return await this._privyInternal.fetch(t, {
      body: {
        relying_party: e
      }
    });
  }
  async generateSignupOptions(e) {
    return await this._privyInternal.fetch(s, {
      body: {
        relying_party: e
      }
    });
  }
  async loginWithPasskey(e, t, s, n) {
    let i = await this._privyInternal.fetch(a, {
      body: {
        relying_party: s,
        challenge: t,
        authenticator_response: this._transformAuthenticationResponseToSnakeCase(e)
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(i);
    let o = await r(this._embedded, i, n?.embedded);
    this._privyInternal.callbacks?.setUser?.(o.user);
    return o;
  }
  async signupWithPasskey(e, t, s) {
    let a = await this._privyInternal.fetch(n, {
      body: {
        relying_party: t,
        authenticator_response: this._transformRegistrationResponseToSnakeCase(e)
      }
    });
    await this._privyInternal.session.updateWithTokensResponse(a);
    let i = await r(this._embedded, a, s?.embedded);
    this._privyInternal.callbacks?.setUser?.(i.user);
    return i;
  }
  async linkWithPasskey(e, t) {
    await this._privyInternal.fetch(i, {
      body: {
        relying_party: t,
        authenticator_response: this._transformRegistrationResponseToSnakeCase(e)
      }
    });
    return (await this._privyInternal.refreshSession()).user;
  }
  _transformRegistrationResponseToSnakeCase(e) {
    return {
      type: e.type,
      id: e.id,
      raw_id: e.rawId,
      response: {
        client_data_json: e.response.clientDataJSON,
        attestation_object: e.response.attestationObject,
        authenticator_data: e.response.authenticatorData || undefined,
        transports: e.response.transports || undefined,
        public_key: e.response.publicKey || undefined,
        public_key_algorithm: e.response.publicKeyAlgorithm || undefined
      },
      authenticator_attachment: e.authenticatorAttachment || undefined,
      client_extension_results: {
        app_id: e.clientExtensionResults.appid || undefined,
        cred_props: e.clientExtensionResults.credProps || undefined,
        hmac_create_secret: e.clientExtensionResults.hmacCreateSecret || undefined
      }
    };
  }
  _transformAuthenticationResponseToSnakeCase(e) {
    return {
      type: e.type,
      id: e.id,
      raw_id: e.rawId,
      response: {
        signature: e.response.signature,
        client_data_json: e.response.clientDataJSON,
        authenticator_data: e.response.authenticatorData,
        user_handle: e.response.userHandle || undefined
      },
      authenticator_attachment: e.authenticatorAttachment || undefined,
      client_extension_results: {
        app_id: e.clientExtensionResults.appid || undefined,
        cred_props: e.clientExtensionResults.credProps || undefined,
        hmac_create_secret: e.clientExtensionResults.hmacCreateSecret || undefined
      }
    };
  }
  constructor(e, t) {
    this._privyInternal = e;
    this._embedded = t;
  }
}
export { o as default };
