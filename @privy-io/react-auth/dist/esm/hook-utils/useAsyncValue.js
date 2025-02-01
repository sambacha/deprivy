import { useState as t, useEffect as r } from "react";
const e = e => {
  let [c, o] = t();
  r(() => {
    e().then(t => {
      o(t);
    }).catch(() => {});
  }, []);
  return c;
};
export { e as useAsyncValue };
