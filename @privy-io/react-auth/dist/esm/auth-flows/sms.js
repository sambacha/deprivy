import { PrivyClientError as e, formatApiError as t } from "../errors.mjs";
import { passwordlessSmsAuthenticatePath as o, passwordlessSmsLinkPath as n, passwordlessSmsInitPath as h, updatePhonePath as a } from "../paths.mjs";
import { getUiHeader as s } from "./getUiHeader.mjs";
import "ofetch";
class i {
  async authenticate() {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    if (!this.meta.phoneNumber || !this.meta.smsCode) {
      throw new e("phone number and sms code must be set prior to calling authenticate.");
    }
    try {
      return await this.api.post(o, {
        phoneNumber: this.meta.phoneNumber,
        code: this.meta.smsCode,
        mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up"
      });
    } catch (e) {
      throw t(e);
    }
  }
  async link() {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    if (!this.meta.phoneNumber || !this.meta.smsCode) {
      throw new e("phone number and sms code must be set prior to calling authenticate.");
    }
    try {
      return await this.api.post(n, {
        phoneNumber: this.meta.phoneNumber,
        code: this.meta.smsCode
      });
    } catch (e) {
      throw t(e);
    }
  }
  async sendSmsCode({
    phoneNumber: o,
    captchaToken: n,
    withPrivyUi: a
  }) {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    if (o) {
      this.meta.phoneNumber = o;
    }
    if (n) {
      this.meta.captchaToken = n;
    }
    if (!this.meta.phoneNumber) {
      throw new e("phone nNumber must be set when initialzing authentication.");
    }
    let i = s(a);
    try {
      return await this.api.post(h, {
        phoneNumber: this.meta.phoneNumber,
        token: this.meta.captchaToken
      }, {
        headers: {
          ...i
        }
      });
    } catch (e) {
      throw t(e);
    }
  }
  constructor({
    phoneNumber: e,
    captchaToken: t,
    disableSignup: o
  }) {
    this.meta = {
      phoneNumber: e,
      captchaToken: t,
      disableSignup: o ?? false
    };
  }
}
class r extends i {
  async link() {
    if (!this.api) {
      throw new e("Auth flow has no API instance");
    }
    if (!this.meta.phoneNumber || !this.meta.smsCode || !this.meta.oldPhoneNumber) {
      throw new e("Phone number, sms code, and an old phone number must be set prior to calling update.");
    }
    try {
      return await this.api.post(a, {
        old_phone_number: this.meta.oldPhoneNumber,
        new_phone_number: this.meta.phoneNumber,
        code: this.meta.smsCode
      });
    } catch (e) {
      throw t(e);
    }
  }
  constructor(e, t, o) {
    super({
      phoneNumber: t,
      captchaToken: o
    });
    this.meta = {
      phoneNumber: t,
      captchaToken: o,
      oldPhoneNumber: e,
      disableSignup: false
    };
  }
}
export { i as SmsFlow, r as UpdateSmsFlow };
