import { useReducer as n } from "react";
let r = (n, r) => {
  switch (n) {
    case "creating":
      if (r === "back") {
        return n;
      } else {
        return "saving";
      }
    case "saving":
      if (r === "back") {
        return "creating";
      } else {
        return "confirming";
      }
    case "confirming":
      if (r === "back") {
        return "saving";
      } else {
        return "finalizing";
      }
    case "finalizing":
      if (r === "back") {
        return "confirming";
      } else {
        return "done";
      }
    default:
      return n;
  }
};
const e = () => {
  let [e, i] = n(r, "creating");
  return {
    send: i,
    state: e
  };
};
export { e as useSetWalletPasswordState };
