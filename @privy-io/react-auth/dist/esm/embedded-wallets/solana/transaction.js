import { getWalletPublicKeyFromTransaction as e, isVersionedTransaction as a } from "../../lib/solana/transaction.mjs";
import "../../lib/solana/index.mjs";
import "../../utils/buffer/readBigInt64LE.mjs";
async function t({
  tx: t,
  accessToken: r,
  walletProxy: n,
  entropyId: s,
  entropyIdVerifier: i,
  transactingWalletAddress: o,
  transactingWalletIndex: l
}) {
  let c = e(t, o);
  let d = a(t) ? Buffer.from(t.message.serialize()) : t.serializeMessage();
  let {
    response: p
  } = await n.rpc({
    accessToken: r,
    entropyId: s,
    entropyIdVerifier: i,
    chainType: "solana",
    hdWalletIndex: l,
    request: {
      method: "signMessage",
      params: {
        message: d.toString("base64")
      }
    }
  });
  let f = p.data.signature;
  t.addSignature(c, Buffer.from(f, "base64"));
}
async function r({
  tx: e,
  connection: a,
  accessToken: r,
  walletProxy: n,
  entropyId: s,
  entropyIdVerifier: i,
  transactingWalletAddress: o,
  transactingWalletIndex: l,
  transactionOptions: c
}) {
  let d;
  try {
    await t({
      tx: e,
      accessToken: r,
      walletProxy: n,
      entropyId: s,
      entropyIdVerifier: i,
      transactingWalletAddress: o,
      transactingWalletIndex: l
    });
    let p = e.serialize();
    d = await a.sendRawTransaction(p, c);
    let f = await a.confirmTransaction(d);
    if (f.value.err || f.value.err) {
      let e = f.value.err || f.value.err;
      if (typeof e == "string") {
        throw Error(e);
      }
      throw e;
    }
    return {
      signature: d,
      receipt: await a.getParsedTransaction(d, {
        maxSupportedTransactionVersion: 0
      })
    };
  } catch (e) {
    e.txSignature = d;
    throw e;
  }
}
export { r as sendSolanaTransaction, t as signSolanaTransaction };
