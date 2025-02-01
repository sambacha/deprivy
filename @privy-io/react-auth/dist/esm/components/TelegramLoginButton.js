import { jsx as t } from "react/jsx-runtime";
import { useRef as e, useEffect as r } from "react";
function n(n) {
  let i = e(null);
  let a = e();
  r(() => {
    a.current?.remove();
    a.current = function ({
      botUsername: t,
      scriptHost: e
    }) {
      let r = document.createElement("script");
      let {
        origin: n
      } = new URL(e);
      r.async = true;
      r.src = `${n}/js/telegram-login.js`;
      r.setAttribute("data-telegram-login", t);
      r.setAttribute("data-request-access", "write");
      r.setAttribute("data-lang", "en");
      return r;
    }(n);
    i.current?.after(a.current);
  }, [n]);
  return /*#__PURE__*/t("div", {
    ref: i,
    hidden: true
  });
}
export { n as TelegramLoginButton };
