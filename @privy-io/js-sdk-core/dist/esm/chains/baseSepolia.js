const e = {
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    privy: {
      http: ["https://base-sepolia.rpc.privy.systems"]
    },
    default: {
      http: ["https://sepolia.base.org"]
    },
    public: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://base-sepolia.blockscout.com"
    }
  },
  testnet: true
};
export { e as baseSepolia };
