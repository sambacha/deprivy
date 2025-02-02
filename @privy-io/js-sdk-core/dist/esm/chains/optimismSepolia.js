const t = {
  id: 11155420,
  name: "Optimism Sepolia",
  network: "optimism-sepolia",
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    privy: {
      http: ["https://optimism-sepolia.rpc.privy.systems"]
    },
    default: {
      http: ["https://sepolia.optimism.io"]
    },
    public: {
      http: ["https://sepolia.optimism.io"]
    },
    infura: {
      http: ["https://optimism-sepolia.infura.io/v3"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com"
    }
  },
  testnet: true
};
export { t as optimismSepolia };
