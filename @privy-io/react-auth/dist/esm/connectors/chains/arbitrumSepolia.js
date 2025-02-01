const r = {
  id: 421614,
  name: "Arbitrum Sepolia",
  network: "arbitrum-sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    privy: {
      http: ["https://arbitrum-sepolia.rpc.privy.systems"]
    },
    default: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-explorer.arbitrum.io"
    }
  },
  testnet: true
};
export { r as arbitrumSepolia };
