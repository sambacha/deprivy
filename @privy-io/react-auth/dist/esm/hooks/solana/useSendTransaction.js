import { usePrivyEventSubscription as n } from "../events-context.mjs";
import { usePrivyInternal as t } from "../internal-context.mjs";
import "react";
import "../index.mjs";
function o(o) {
  let {
    sendSolanaTransaction: r
  } = t();
  n("sendSolanaTransaction", o);
  return {
    sendTransaction: r
  };
}
export { o as useSendTransaction };
