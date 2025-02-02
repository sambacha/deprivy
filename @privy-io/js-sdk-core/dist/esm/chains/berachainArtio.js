const t = {
  id: 80085,
  network: "berachain-artio",
  name: "Berachain Artio",
  nativeCurrency: {
    name: "BERA",
    symbol: "BERA",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://berachain-artio.rpc.privy.systems"]
    },
    public: {
      http: ["https://berachain-artio.rpc.privy.systems"]
    }
  },
  blockExplorers: {
    default: {
      name: "Beratrail",
      url: "https://artio.beratrail.io"
    }
  },
  testnet: true
};
export { t as berachainArtio };
