const e = {
  id: 17000,
  name: "Holesky",
  network: "holesky",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky.publicnode.com"]
    },
    public: {
      http: ["https://ethereum-holesky.publicnode.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "EtherScan",
      url: "https://holesky.etherscan.io"
    },
    default: {
      name: "EtherScan",
      url: "https://holesky.etherscan.io"
    }
  }
};
export { e as holesky };
