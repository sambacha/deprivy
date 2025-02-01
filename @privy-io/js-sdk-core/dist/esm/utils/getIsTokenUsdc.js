import { arbitrum as i } from "../chains/arbitrum.mjs";
import { arbitrumSepolia as m } from "../chains/arbitrumSepolia.mjs";
import { avalanche as a } from "../chains/avalanche.mjs";
import { avalancheFuji as c } from "../chains/avalancheFuji.mjs";
import { base as o } from "../chains/base.mjs";
import { baseSepolia as f } from "../chains/baseSepolia.mjs";
import { mainnet as e } from "../chains/mainnet.mjs";
import { optimism as r } from "../chains/optimism.mjs";
import { optimismSepolia as d } from "../chains/optimismSepolia.mjs";
import { polygon as s } from "../chains/polygon.mjs";
import { polygonAmoy as b } from "../chains/polygonAmoy.mjs";
import { sepolia as n } from "../chains/sepolia.mjs";
const p = {
  [e.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  [n.id]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
  [r.id]: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
  [d.id]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
  [s.id]: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
  [b.id]: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
  [o.id]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  [f.id]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  [a.id]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  [c.id]: "0x5425890298aed601595a70ab815c96711a31bc65",
  [i.id]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  [m.id]: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"
};
function t(i, m) {
  return i === p[m.id];
}
export { p as UsdcAddressMap, t as getIsTokenUsdc };
