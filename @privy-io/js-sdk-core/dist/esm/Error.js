class r extends Error {
  constructor({
    error: r,
    code: e
  }) {
    super(r);
    this.error = r;
    this.code = e;
  }
}
class e extends Error {
  constructor({
    error: r,
    code: e
  }) {
    super(r);
    this.code = e;
    this.error = r;
  }
}
class o extends Error {
  constructor({
    error: r,
    code: e,
    response: o
  }) {
    super(r);
    this.code = e;
    this.error = r;
    this.response = o;
  }
}
const s = o => s => o[s instanceof r || s instanceof e ? s.code : "unknown_error"] ?? o.default;
function c(r) {
  return r && typeof r == "object" && "code" in r && r.code === "mfa_canceled";
}
export { o as MoonpayApiError, r as PrivyApiError, e as PrivyClientError, s as createErrorFormatter, c as errorIndicatesMfaCanceled };
