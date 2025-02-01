const o = {
  id: 80002,
  name: "Polygon Amoy",
  network: "polygon-amoy",
  nativeCurrency: {
    name: "POL",
    symbol: "POL",
    decimals: 18
  },
  rpcUrls: {
    privy: {
      http: ["https://polygon-amoy.rpc.privy.systems"]
    },
    infura: {
      http: ["https://polygon-amoy.infura.io/v3"],
      webSocket: ["wss://polygon-amoy.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc-amoy.polygon.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "OK LINK",
      url: "https://www.oklink.com/amoy"
    }
  },
  testnet: true
};
export { o as polygonAmoy };
