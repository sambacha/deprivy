import { useContext as t } from "react";
import { PrivyContext as n } from "./privy-context.mjs";
import "./index.mjs";
function l() {
  let {
    initEnrollmentWithSms: l,
    initEnrollmentWithTotp: i,
    initEnrollmentWithPasskey: o,
    submitEnrollmentWithSms: m,
    submitEnrollmentWithTotp: e,
    submitEnrollmentWithPasskey: r,
    unenroll: s,
    enrollInMfa: h
  } = t(n);
  return {
    initEnrollmentWithSms: l,
    initEnrollmentWithTotp: i,
    initEnrollmentWithPasskey: o,
    submitEnrollmentWithSms: m,
    submitEnrollmentWithTotp: e,
    submitEnrollmentWithPasskey: r,
    unenrollWithSms: () => s("sms"),
    unenrollWithTotp: () => s("totp"),
    unenrollWithPasskey: () => s("passkey"),
    showMfaEnrollmentModal: () => h(true),
    closeMfaEnrollmentModal: () => h(false)
  };
}
export { l as useMfaEnrollment };
