import { Connection as e, PublicKey as a, Transaction as t, SystemProgram as r, TransactionInstruction as s, VersionedTransaction as n, TransactionMessage as o } from "@solana/web3.js";
import { getSolanaRpcEndpointForCluster as i } from "@privy-io/js-sdk-core";
import { SOLANA_FUNDING_PLUGIN_ID as c } from "./id.mjs";
var l = {
  id: c,
  getBalance: ({
    address: t,
    cluster: r
  }) => new e(i(r)).getBalance(new a(t)),
  createTransferTransaction: async ({
    from: s,
    to: n,
    amount: o,
    cluster: c
  }) => {
    let l = new a(s);
    let m = new t();
    m.add(r.transfer({
      fromPubkey: l,
      toPubkey: new a(n),
      lamports: o
    }));
    let d = new e(i(c));
    let u = await d.getLatestBlockhash();
    m.recentBlockhash = u.blockhash;
    m.feePayer = l;
    return {
      transaction: m,
      connection: d
    };
  },
  createBridgeTransactionFromRelayQuote: async ({
    quote: t,
    from: r,
    cluster: c
  }) => {
    let l = t.steps[0]?.items?.[0];
    if (!l) {
      return;
    }
    let m = l.data.instructions.map(({
      keys: e,
      programId: t,
      data: r
    }) => new s({
      keys: e.map(({
        pubkey: e,
        isSigner: t,
        isWritable: r
      }) => ({
        pubkey: new a(e),
        isSigner: t,
        isWritable: r
      })),
      programId: new a(t),
      data: Buffer.from(r, "hex")
    }));
    let d = l.data.addressLookupTableAddresses?.map(e => new a(e));
    let u = new e(i(c));
    let p = await Promise.all((d ?? []).map(async e => u.getAddressLookupTable(e).then(e => e.value)));
    let {
      blockhash: w
    } = await u.getLatestBlockhash();
    return {
      transaction: new n(new o({
        payerKey: new a(r),
        instructions: m,
        recentBlockhash: w
      }).compileToV0Message(p)),
      connection: u
    };
  }
};
export { l as default };
