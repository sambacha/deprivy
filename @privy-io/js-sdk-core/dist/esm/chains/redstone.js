const e = {
  id: 690,
  name: "Redstone",
  network: "redstone",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.redstonechain.com"]
    },
    public: {
      http: ["https://rpc.redstonechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.redstone.xyz/"
    }
  }
};
export { e as redstone };
