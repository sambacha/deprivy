import { PrivyErrorCode as s } from "../constants/error-codes.mjs";
class t extends Error {
  toString() {
    return `${this.constructor.name}: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
  }
  constructor(s, t, e, r) {
    super(t);
    this.code = e;
    this.status = s;
    this.responseData = r;
  }
}
class e extends t {
  constructor(t, e) {
    super(400, t, e || s.INVALID_DATA);
  }
}
class r extends t {
  constructor(s, t) {
    super(401, s, t);
  }
}
class c extends r {
  constructor(t) {
    super(t || "User is not allowed to login to this app.", s.ALLOWLIST_REJECTED);
  }
}
class o extends t {
  constructor(s, t) {
    super(403, s, t);
  }
}
class n extends t {
  constructor(s) {
    super(404, s);
  }
}
class a extends t {
  constructor(s, t) {
    super(408, s, t);
  }
}
class u extends t {
  constructor(s) {
    super(415, s);
  }
}
class i extends t {
  constructor(s, t) {
    super(422, s, t);
  }
}
class l extends t {
  constructor(t) {
    super(429, t || "Too many requests. Please wait to try again.", s.TOO_MANY_REQUESTS);
  }
}
class d extends t {
  constructor(s) {
    super(500, s || "Service unavailable.");
  }
}
class p extends t {
  constructor(t) {
    super(400, "Account transfer required", s.ACCOUNT_TRANSFER_REQUIRED, t);
    this.data = t;
  }
}
export { p as AccountTransferRequiredError, c as AllowlistRejectedError, o as ForbiddenError, t as HttpError, d as InternalServerError, e as InvalidInputError, i as LegacyInvalidInputError, n as NotFoundError, a as RequestTimeoutError, l as TooManyRequestsError, r as UnauthorizedError, u as UnsupportedMediaType };
