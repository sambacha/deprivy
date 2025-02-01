import { base64url as t } from "jose";
import { getGuestCredentialStorageKey as e } from "../constants.mjs";
import { randomBytes as r } from "../crypto.mjs";
import { PrivyClientError as o, formatApiError as s } from "../errors.mjs";
import { guestAccountAuthenticatePath as i } from "../paths.mjs";
import a, { isLocalStorageAccessible as n } from "../storage.mjs";
import "ofetch";
class m {
  getOrCreateGuestCredential(o) {
    let s = e(o);
    if (n()) {
      if (a.get(s)) {
        return a.get(s);
      }
      {
        let e = t.encode(r(32));
        a.put(s, e);
        return e;
      }
    }
    return t.encode(r(32));
  }
  async authenticate() {
    if (!this.api) {
      throw new o("Auth flow has no API instance");
    }
    try {
      return await this.api.post(i, {
        guest_credential: this.meta.guestCredential
      });
    } catch (t) {
      throw s(t);
    }
  }
  async link() {
    throw Error("Linking is not supported for the guest flow");
  }
  constructor(t) {
    this.meta = {
      guestCredential: this.getOrCreateGuestCredential(t)
    };
  }
}
export { m as GuestFlow };
