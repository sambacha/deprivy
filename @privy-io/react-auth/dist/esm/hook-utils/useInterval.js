import { useRef as r, useEffect as e } from "react";
var t = (t, l) => {
  let a = r(() => {});
  e(() => {
    a.current = t;
  });
  e(() => {
    if (l !== null) {
      let r = setInterval(() => a.current(), l || 0);
      return () => clearInterval(r);
    }
  }, [l]);
};
export { t as default };
