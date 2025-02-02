const e = {
  id: 59144,
  network: "linea-mainnet",
  name: "Linea Mainnet",
  nativeCurrency: {
    name: "Linea Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    },
    public: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://lineascan.build"
    },
    etherscan: {
      name: "Etherscan",
      url: "https://lineascan.build"
    }
  },
  testnet: false
};
export { e as linea };
