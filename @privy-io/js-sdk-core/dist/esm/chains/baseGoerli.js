const e = {
  id: 84531,
  network: "base-goerli",
  name: "Base Goerli Testnet",
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://goerli.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://goerli.basescan.org"
    }
  },
  testnet: true
};
export { e as baseGoerli };
