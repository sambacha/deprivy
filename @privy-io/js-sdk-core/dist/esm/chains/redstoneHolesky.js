const e = {
  id: 17001,
  name: "Redstone Holesky",
  network: "redstone-holesky",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.holesky.redstone.xyz"]
    },
    public: {
      http: ["https://rpc.holesky.redstone.xyz"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "EtherScan",
      url: "https://explorer.holesky.redstone.xyz"
    },
    default: {
      name: "EtherScan",
      url: "https://explorer.holesky.redstone.xyz"
    }
  }
};
export { e as redstoneHolesky };
