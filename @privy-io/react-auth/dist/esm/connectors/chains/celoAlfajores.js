const e = {
  id: 44787,
  name: "Celo Alfajores Testnet",
  network: "celo-alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    },
    infura: {
      http: ["https://celo-alfajores.infura.io/v3"]
    },
    public: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/alfajores"
    },
    etherscan: {
      name: "CeloScan",
      url: "https://alfajores.celoscan.io/"
    }
  },
  testnet: true
};
export { e as celoAlfajores };
