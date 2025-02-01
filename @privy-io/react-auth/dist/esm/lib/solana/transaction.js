import { getSolanaNetworkFromRpcEndpoint as e } from "./index.mjs";
import { readBigInt64LEFromUint8Array as t, readBigInt64LE as n } from "../../utils/buffer/readBigInt64LE.mjs";
const r = 1000000000;
const a = "11111111111111111111111111111111";
const o = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
const s = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
const i = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
let c = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});
function u(e, t = 6, n = false, r = false) {
  let a = (parseFloat(e.toString()) / 1000000000).toFixed(t).replace(/0+$/, "").replace(/\.$/, "");
  let o = r ? "" : " SOL";
  if (n) {
    return `${a}${o}`;
  } else {
    return `${a === "0" ? "<0.001" : a}${o}`;
  }
}
function l(e, t) {
  let n = parseFloat(e.toString()) / 1000000000;
  let r = c.format(t * n);
  if (r === "$0.00") {
    return "<$0.01";
  } else {
    return r;
  }
}
function f({
  amount: e,
  fee: t,
  tokenPrice: n
}) {
  let r = BigInt(parseFloat(e) * 1000000000);
  let a = r + t;
  return {
    fundingAmountInBaseUnit: r,
    fundingAmountInUsd: n ? l(r, n) : undefined,
    totalPriceInUsd: n ? l(a, n) : undefined,
    totalPriceInNativeCurrency: u(a),
    feePriceInNativeCurrency: u(t),
    feePriceInUsd: n ? l(t, n) : undefined
  };
}
function d(e) {
  return "version" in e;
}
function m(e, t) {
  let n = (d(e) ? e.message : e.compileMessage()).staticAccountKeys.find(e => e.toBase58() === t);
  if (!n) {
    throw Error(`Transaction does not contain public key ${t}`);
  }
  return n;
}
async function p(e, t) {
  return BigInt((d(e) ? (await t.getFeeForMessage(e.message)).value : await e.getEstimatedFee(t)) ?? 0);
}
function y(e, t) {
  return {
    signature: e,
    parsedTransaction: t,
    fees: BigInt(t?.meta?.fee || 0)
  };
}
async function A(e, t) {
  let {
    value: n
  } = await t.simulateTransaction(e);
  return n.err == null && n.logs?.every(e => !/insufficient funds/gi.test(e));
}
async function g({
  tx: e,
  connection: t,
  client: n
}) {
  let r = d(e) ? e.message : e.compileMessage();
  let a = r.staticAccountKeys[0]?.toBase58() ?? "";
  let o = await p(e, t);
  let s = {};
  let i = {};
  let c = [];
  for (let e of r.compiledInstructions) {
    let a = r.staticAccountKeys[e.programIdIndex]?.toBase58() || "";
    if (a !== "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" && a !== "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb") {
      if (a !== "11111111111111111111111111111111") {
        if (a !== "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL") {
          c.push({
            type: "unknown",
            program: a
          });
        } else {
          let t = function (e, t) {
            let [n, r, a, o] = e.accountKeyIndexes.map(e => t.staticAccountKeys[e]);
            if (n && r && a && o) {
              return {
                type: "ata-creation",
                payer: n.toBase58(),
                ata: r.toBase58(),
                owner: a.toBase58(),
                mint: o.toBase58()
              };
            }
          }(e, r);
          if (t) {
            c.push(t);
            i[t.ata] = {
              owner: t.owner,
              mint: t.mint
            };
          }
        }
      } else {
        c.push(await b(e, r));
      }
    } else {
      let a = await I(e, r, t, n, s, i);
      c.push(a);
      s[a.token.address] = a.token;
      i[a.fromAta] ??= {
        owner: a.fromAccount,
        mint: a.token.address
      };
      if (a.toAccount) {
        i[a.toAta] ??= {
          owner: a.toAccount,
          mint: a.token.address
        };
      }
    }
  }
  let u = c.filter(({
    type: e
  }) => ["spl-transfer", "sol-transfer"].includes(e));
  return {
    spender: a,
    fee: o,
    instructions: u.length ? u : c
  };
}
function B(e, r) {
  try {
    return t(e, r);
  } catch {}
  try {
    return e.readBigInt64LE(r);
  } catch {}
  let a = Buffer.from(e);
  try {
    return n(a);
  } catch {}
  try {
    return a.subarray(r).readBigInt64LE();
  } catch {}
  try {
    return a.readBigInt64LE(r);
  } catch {}
  return 0n;
}
async function I(t, n, r, a, o, s) {
  let i;
  let c;
  let [u, l, f] = t.accountKeyIndexes.map(e => n.staticAccountKeys[e]);
  if (!u || !l || !f) {
    throw Error("Invalid instruction");
  }
  let d = "";
  let m = s[l.toBase58()];
  if (m) {
    i = m.owner;
    d = m.mint;
  } else {
    let e = await r.getParsedAccountInfo(l, "confirmed");
    let t = e.value?.data;
    i = t?.parsed?.info?.owner;
    d = t?.parsed?.info?.mint ?? "";
    c = t?.parsed?.info?.tokenAmount?.decimals;
  }
  if (!d) {
    let e = await r.getParsedAccountInfo(u, "confirmed");
    let t = e.value?.data;
    d = t?.parsed?.info?.mint ?? "";
  }
  let p = o[d];
  if (d && !p) {
    let t = await a.getSplTokenMetadata({
      mintAddress: d,
      cluster: e(r.rpcEndpoint)
    });
    if (t) {
      p = {
        address: d,
        symbol: t.symbol,
        decimals: t.decimals
      };
    }
  }
  let y = p?.symbol ?? "";
  c ??= p?.decimals ?? 9;
  let A = B(t.data, 1);
  return {
    type: "spl-transfer",
    fromAta: u.toBase58(),
    fromAccount: f.toBase58(),
    toAta: l.toBase58(),
    toAccount: i,
    value: A,
    token: {
      symbol: y,
      decimals: c,
      address: d
    }
  };
}
async function b(e, t) {
  let [n, r] = e.accountKeyIndexes.map(e => t.staticAccountKeys[e]);
  if (!n || !r) {
    throw Error("Invalid instruction");
  }
  let a = B(e.data, 4);
  return {
    type: "sol-transfer",
    fromAccount: n.toBase58(),
    toAccount: r.toBase58(),
    value: a,
    token: {
      symbol: "SOL",
      decimals: 9
    }
  };
}
export { i as ASSOCIATED_TOKEN_PROGRAM_ID, r as LAMPORTS_PER_SOL, a as SYSTEM_PROGRAM_ID, s as TOKEN_2022_PROGRAM_ID, o as TOKEN_PROGRAM_ID, y as createSolanaTransactionReceipt, l as getDollarsFromLamport, u as getNativeCurrencyFromLamports, f as getSolanaFormattedAmounts, p as getTransactionFees, m as getWalletPublicKeyFromTransaction, A as hasSufficientFunds, d as isVersionedTransaction, g as parseSolanaTransaction };
