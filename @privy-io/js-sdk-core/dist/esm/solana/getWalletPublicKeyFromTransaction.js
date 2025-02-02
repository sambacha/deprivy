import { isVersionedTransaction as o } from "./isVersionedTransaction.mjs";
function e(e, t) {
  let n = (o(e) ? e.message : e.compileMessage()).staticAccountKeys.find(o => o.toBase58() === t);
  if (!n) {
    throw Error(`Transaction does not contain public key ${t}`);
  }
  return n;
}
export { e as getWalletPublicKeyFromTransaction };
