const t = {
  id: 8453,
  network: "base",
  name: "Base",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    privy: {
      http: ["https://base-mainnet.rpc.privy.systems"]
    },
    blast: {
      http: ["https://base-mainnet.blastapi.io"],
      webSocket: ["wss://base-mainnet.blastapi.io"]
    },
    default: {
      http: ["https://mainnet.base.org"]
    },
    public: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Basescan",
      url: "https://basescan.org"
    },
    default: {
      name: "Basescan",
      url: "https://basescan.org"
    }
  }
};
export { t as base };
