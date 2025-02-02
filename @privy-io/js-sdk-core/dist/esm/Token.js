import * as e from "jose";
class t {
  static parse(e) {
    try {
      return new t(e);
    } catch (e) {
      return null;
    }
  }
  get subject() {
    return this._decoded.sub;
  }
  get expiration() {
    return this._decoded.exp;
  }
  get issuer() {
    return this._decoded.iss;
  }
  get audience() {
    return this._decoded.aud;
  }
  isExpired(e = 0) {
    return Date.now() >= (this.expiration - e) * 1000;
  }
  constructor(t) {
    this.value = t;
    this._decoded = e.decodeJwt(t);
  }
}
export { t as Token };
