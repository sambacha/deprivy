import { toViemTransactionSerializable as r, STRING_TO_NUMBER_TXN_TYPE as t } from "./toViemTransactionSerializable.mjs";
import "viem";
import "../../errors.mjs";
import "ofetch";
async function e(e, o, a) {
  let i = r(e);
  let p = await o.prepareTransactionRequest({
    ...i,
    account: {
      address: a,
      type: "json-rpc"
    }
  });
  return {
    ...p,
    type: t[p.type]
  };
}
export { e as prepareTransactionRequest };
