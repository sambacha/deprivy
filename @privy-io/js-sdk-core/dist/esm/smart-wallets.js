import { createSmartAccountClient as e } from "permissionless";
import { toLightSmartAccount as r, toBiconomySmartAccount as t, toEcdsaKernelSmartAccount as n, toSafeSmartAccount as i } from "permissionless/accounts";
import { createPimlicoClient as s } from "permissionless/clients/pimlico";
import { http as a } from "viem";
import { toCoinbaseSmartAccount as o, entryPoint06Address as c, entryPoint07Address as l } from "viem/account-abstraction";
import { COINBASE_SMART_WALLET as p, LIGHT_ACCOUNT as m, BICONOMY as u, KERNEL as y, SAFE as d } from "@privy-io/public-api";
let w = {
  address: c,
  version: "0.6"
};
let P = {
  address: l,
  version: "0.7"
};
let v = ({
  owner: e,
  smartWalletType: s,
  publicClient: a
}) => {
  switch (s) {
    case d:
      return i({
        client: a,
        entryPoint: P,
        owners: [e],
        version: "1.4.1"
      });
    case y:
      return n({
        client: a,
        version: "0.3.1",
        entryPoint: P,
        owners: [e]
      });
    case u:
      return t({
        client: a,
        owners: [e],
        entryPoint: w
      });
    case m:
      return r({
        client: a,
        entryPoint: w,
        owner: e,
        version: "1.1.0"
      });
    case p:
      return async function ({
        client: e,
        owner: r
      }) {
        let [t] = await r.request({
          method: "eth_accounts"
        });
        if (!t) {
          throw Error("Unable to request embedded owner for eth_accounts");
        }
        return await o({
          client: e,
          owners: [{
            type: "local",
            source: "privy",
            address: t,
            sign: async ({
              hash: e
            }) => await r.request({
              method: "secp256k1_sign",
              params: [e]
            })
          }]
        });
      }({
        client: a,
        owner: e
      });
    default:
      throw Error(`Invalid smart account type: ${s}.`);
  }
};
let f = ["rpc.zerodev.app", "public.pimlico.io", "api.pimlico.io"];
const h = async ({
  owner: r,
  smartWalletType: t,
  chain: n,
  publicClient: i,
  bundlerUrl: o,
  paymasterUrl: c,
  paymasterContext: l
}) => {
  let p = await v({
    owner: r,
    smartWalletType: t,
    publicClient: i
  });
  let m = s({
    transport: a(o),
    entryPoint: p.entryPoint
  });
  let u = c ? s({
    transport: a(c),
    entryPoint: p.entryPoint
  }) : undefined;
  return e({
    account: p,
    chain: n,
    paymaster: u,
    paymasterContext: l,
    bundlerTransport: a(o),
    userOperation: {
      estimateFeesPerGas: async () => {
        if (f.some(e => o.includes(e))) {
          return await m.getUserOperationGasPrice().then(e => e.fast);
        }
        {
          let e = await i.estimateFeesPerGas();
          let r = o.includes("api.developer.coinbase.com") ? 175n : 150n;
          return {
            ...e,
            maxFeePerGas: e.maxFeePerGas * r / 100n,
            maxPriorityFeePerGas: e.maxPriorityFeePerGas * r / 100n
          };
        }
      }
    }
  });
};
export { h as signerToSmartAccountClient };
