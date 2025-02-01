import { useState as e, useEffect as r } from "react";
const t = t => {
  let [n, u] = e("auto");
  r(() => {
    let e = new ResizeObserver(e => {
      u(e[0]?.contentRect.height ?? "auto");
    });
    if (t.current) {
      e.observe(t.current);
    }
    return () => {
      if (t.current) {
        e.unobserve(t.current);
      }
    };
  }, [t.current]);
  return n;
};
export { t as useElementHeight };
