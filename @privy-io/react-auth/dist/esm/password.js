import t from "fast-password-entropy";
import * as e from "secure-password-utilities";
import { DEFAULT_WORDLIST as r } from "secure-password-utilities/wordlists";
let s = /[a-z]/;
let n = /[A-Z]/;
let i = /[0-9]/;
let a = "!@#$%^&*()\\-_+.";
let o = `a-zA-Z0-9${a}`;
let l = RegExp(`[${a}]`);
let u = RegExp(`[${o}]`);
const p = RegExp(`^[${o}]{6,}$`);
const f = (t = "") => [...new Set(t.split("").filter(t => !u.test(t)).map(t => t.replace(" ", "SPACE")))];
const m = () => e.generatePassphrase(4, r);
const c = t => {
  let e = t.split("-");
  return !((e?.length ?? 0) < 4) && e.every(t => r.includes(t));
};
function g(t) {
  if (t > 0.9) {
    return "Strong";
  } else if (t > 0.5) {
    return "Medium";
  } else {
    return "Weak";
  }
}
function d(t) {
  if (t.length < 8) {
    return 0;
  }
  let e = 0;
  if (s.test(t)) {
    e += 1;
  }
  if (n.test(t)) {
    e += 1;
  }
  if (i.test(t)) {
    e += 1;
  }
  if (l.test(t)) {
    e += 1;
  }
  return Math.max(0, Math.min(1, e / 3));
}
function $(e = "") {
  return (d(e) * 0.3 + t(e) / 95) / 2;
}
function h(t = "") {
  let e = $(t);
  return {
    value: e,
    label: g(e)
  };
}
export { d as calculatePasswordDiversityScore, m as generatePassphrase, f as getInvalidCharacters, $ as getPasswordStrength, g as getPasswordStrengthLabel, h as getPasswordSummary, c as isPassphrase, p as validPasswordRegex };
