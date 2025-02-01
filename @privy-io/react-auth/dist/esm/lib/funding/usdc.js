import { arbitrum as c } from "../../connectors/chains/arbitrum.mjs";
import { arbitrumSepolia as o } from "../../connectors/chains/arbitrumSepolia.mjs";
import { avalanche as i } from "../../connectors/chains/avalanche.mjs";
import { avalancheFuji as e } from "../../connectors/chains/avalancheFuji.mjs";
import { base as m } from "../../connectors/chains/base.mjs";
import { baseSepolia as n } from "../../connectors/chains/baseSepolia.mjs";
import { mainnet as s } from "../../connectors/chains/mainnet.mjs";
import { optimism as a } from "../../connectors/chains/optimism.mjs";
import { optimismSepolia as r } from "../../connectors/chains/optimismSepolia.mjs";
import { polygon as f } from "../../connectors/chains/polygon.mjs";
import { polygonAmoy as t } from "../../connectors/chains/polygonAmoy.mjs";
import { sepolia as d } from "../../connectors/chains/sepolia.mjs";
const b = {
  [s.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  [d.id]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
  [a.id]: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
  [r.id]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
  [f.id]: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
  [t.id]: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
  [m.id]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  [n.id]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  [i.id]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  [e.id]: "0x5425890298aed601595a70ab815c96711a31bc65",
  [c.id]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  [o.id]: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"
};
const p = (c, o) => c === b[o.id];
export { b as UsdcAddressMap, p as getIsTokenUsdc };
