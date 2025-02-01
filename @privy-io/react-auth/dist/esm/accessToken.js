import { Token as e } from "./token.mjs";
import "jose";
class t extends e {
  static parse(e) {
    try {
      return new t(e);
    } catch (e) {
      return null;
    }
  }
  get appId() {
    if (this._decoded.aid) {
      return this._decoded.aid;
    } else {
      return this.audience;
    }
  }
}
export { t as AccessToken };
