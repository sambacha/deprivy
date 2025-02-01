const e = {
  id: 42220,
  name: "Celo Mainnet",
  network: "celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://forno.celo.org"]
    },
    infura: {
      http: ["https://celo-mainnet.infura.io/v3"]
    },
    public: {
      http: ["https://forno.celo.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/mainnet"
    },
    etherscan: {
      name: "CeloScan",
      url: "https://celoscan.io"
    }
  },
  testnet: false
};
export { e as celo };
