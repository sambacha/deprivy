import { PrivyClientError as t, formatApiError as e } from "../errors.mjs";
import { passwordlessAuthenticatePath as a, passwordlessLinkPath as i, passwordlessInitPath as s, updateEmailPath as o } from "../paths.mjs";
import { getUiHeader as h } from "./getUiHeader.mjs";
import "ofetch";
class m {
  async authenticate() {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    if (!this.meta.email || !this.meta.emailCode) {
      throw new t("Email and email code must be set prior to calling authenticate.");
    }
    try {
      return await this.api.post(a, {
        email: this.meta.email,
        code: this.meta.emailCode,
        mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up"
      });
    } catch (t) {
      throw e(t);
    }
  }
  async link() {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    if (!this.meta.email || !this.meta.emailCode) {
      throw new t("Email and email code must be set prior to calling authenticate.");
    }
    try {
      return await this.api.post(i, {
        email: this.meta.email,
        code: this.meta.emailCode
      });
    } catch (t) {
      throw e(t);
    }
  }
  async sendCodeEmail({
    email: a,
    captchaToken: i,
    withPrivyUi: o
  }) {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    if (a) {
      this.meta.email = a;
    }
    if (i) {
      this.meta.captchaToken = i;
    }
    if (!this.meta.email) {
      throw new t("Email must be set when initialzing authentication.");
    }
    let m = h(o);
    try {
      return await this.api.post(s, {
        email: this.meta.email,
        token: this.meta.captchaToken
      }, {
        headers: {
          ...m
        }
      });
    } catch (t) {
      throw e(t);
    }
  }
  constructor({
    email: t,
    captchaToken: e,
    disableSignup: a
  }) {
    this.meta = {
      email: t,
      captchaToken: e,
      disableSignup: a ?? false
    };
  }
}
class n extends m {
  async link() {
    if (!this.api) {
      throw new t("Auth flow has no API instance");
    }
    if (!this.meta.email || !this.meta.emailCode || !this.meta.oldAddress) {
      throw new t("Email, email code, and an old email address must be set prior to calling update.");
    }
    try {
      return await this.api.post(o, {
        oldAddress: this.meta.oldAddress,
        newAddress: this.meta.email,
        code: this.meta.emailCode
      });
    } catch (t) {
      throw e(t);
    }
  }
  constructor(t, e, a) {
    super({
      email: e,
      captchaToken: a
    });
    this.meta = {
      email: e,
      captchaToken: a,
      oldAddress: t,
      disableSignup: false
    };
  }
}
export { m as EmailFlow, n as UpdateEmailFlow };
