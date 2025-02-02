const t = {
  id: 80001,
  name: "Mumbai",
  network: "maticmum",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://matic-mumbai.chainstacklabs.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }
  },
  testnet: true
};
export { t as polygonMumbai };
