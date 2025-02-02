const t = {
  id: 17069,
  name: "Garnet Holesky",
  network: "garnet-holesky",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.garnetchain.com"]
    },
    public: {
      http: ["https://rpc.garnetchain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.garnetchain.com"
    }
  }
};
export { t as garnetHolesky };
