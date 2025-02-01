const e = {
  id: 420,
  name: "Optimism Goerli Testnet",
  network: "optimism-goerli",
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://goerli.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    }
  },
  testnet: true
};
export { e as optimismGoerli };
