import { v4 as t } from "uuid";
class e {
  async invokeRpc({
    method: e,
    params: n
  }) {
    let r = await fetch(this.cluster.rpcUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: t(),
        method: e,
        params: n
      })
    });
    return await r.json();
  }
  async getBalance(t) {
    try {
      let e = await this.invokeRpc({
        method: "getBalance",
        params: [t]
      });
      if (e.error) {
        return null;
      } else {
        return BigInt(e.result.value);
      }
    } catch (t) {
      return null;
    }
  }
  async getTokenAccountsByOwner(t, e) {
    try {
      let n = await this.invokeRpc({
        method: "getTokenAccountsByOwner",
        params: [t, {
          mint: e
        }, {
          encoding: "jsonParsed"
        }]
      });
      if (n.error) {
        return null;
      }
      let r = n.result.value.at(0)?.account?.data?.parsed?.info?.tokenAmount;
      if (r) {
        return {
          amount: BigInt(r.amount),
          decimals: r.decimals
        };
      } else {
        return null;
      }
    } catch (t) {
      return null;
    }
  }
  async getAccountInfo(t) {
    try {
      let e = await this.invokeRpc({
        method: "getAccountInfo",
        params: [t, {
          encoding: "jsonParsed"
        }]
      });
      if (e.error) {
        return null;
      }
      let n = e.result.value?.data?.parsed?.info;
      if (n) {
        return {
          decimals: n.decimals
        };
      } else {
        return null;
      }
    } catch (t) {
      return null;
    }
  }
  constructor(t) {
    this.cluster = t;
  }
}
export { e as SolanaClient };
