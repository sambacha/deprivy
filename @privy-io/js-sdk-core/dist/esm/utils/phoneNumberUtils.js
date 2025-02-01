import e from "libphonenumber-js/examples.mobile.json";
import { getCountries as n, getCountryCallingCode as o, isPossiblePhoneNumber as r, AsYouType as t, getExampleNumber as l } from "libphonenumber-js/min";
export { getCountryCallingCode } from "libphonenumber-js/min";
const i = (e, n) => r(String(e), n);
const m = (e, n) => `+${o(n)} ${e}`;
const p = e => `*${e.replaceAll("-", "").slice(-4)}`;
const a = e => new t(e);
const u = n().map(e => ({
  code: e,
  callCode: o(e)
}));
const s = n => {
  let o = l(n, e)?.formatInternational();
  return o?.substring(o.indexOf(" ") + 1);
};
const b = e => {
  let n = new t();
  n.input(e);
  let o = n.getCountry() || "US";
  let r = n.getCallingCode() || "1";
  return {
    countryCode: o,
    phone: e.replace("+" + r, "")
  };
};
export { u as countryCodesAndNumbers, m as formatPhoneNumber, b as getPhoneCountryCodeAndNumber, s as getPlaceholderPhoneNumber, p as lastFourDigits, a as phoneNumberTypingFormatter, i as validatePhoneNumber };
