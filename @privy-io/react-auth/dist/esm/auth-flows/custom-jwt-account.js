import { PrivyClientError as t, formatApiError as o } from "../errors.mjs";
import { customJwtAccountAuthenticatePath as r } from "../paths.mjs";
import "ofetch";
class e {
  async authenticate() {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    try {
      return await this.api.post(r, {
        token: this.meta.token
      });
    } catch (t) {
      throw o(t);
    }
  }
  async link() {
    throw Error("Unimplemented");
  }
  constructor(t) {
    this.meta = {
      token: t
    };
  }
}
export { e as CustomJwtAccountFlow };
