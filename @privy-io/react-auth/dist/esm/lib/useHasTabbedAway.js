import { useState as e, useCallback as t, useEffect as i } from "react";
function n() {
  let [n, r] = e(false);
  let d = t(() => {
    if (document.hidden) {
      r(true);
    }
  }, []);
  i(() => {
    document.addEventListener("visibilitychange", d);
    return () => document.removeEventListener("visibilitychange", d);
  }, [d]);
  return {
    hasTabbedAway: n,
    reset: () => r(false)
  };
}
export { n as useHasTabbedAway };
