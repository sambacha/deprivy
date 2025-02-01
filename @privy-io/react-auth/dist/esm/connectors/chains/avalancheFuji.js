const t = {
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"]
    },
    public: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io"
    },
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io"
    }
  },
  testnet: true
};
export { t as avalancheFuji };
