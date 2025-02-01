import { useEffect as o, useMemo as t } from "react";
import { useAppConfig as n } from "../../configuration/context.mjs";
import { useWallets as s } from "../../hooks/useWallets.mjs";
import i from "../../storage.mjs";
import { useActiveWalletStore as r, toActiveWalletKey as e, open as m } from "./state.mjs";
import { useSolanaWallets as c } from "../../hooks/solana/useSolanaWallets.mjs";
import "react/jsx-runtime";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
import "../../constants.mjs";
import "../../configuration/login-methods.mjs";
import "../../configuration/wallets.mjs";
import "../../connectors/chains/index.mjs";
import "../../connectors/chains/arbitrum.mjs";
import "../../connectors/chains/arbitrumSepolia.mjs";
import "../../connectors/chains/avalanche.mjs";
import "../../connectors/chains/avalancheFuji.mjs";
import "../../connectors/chains/base.mjs";
import "../../connectors/chains/baseSepolia.mjs";
import "../../connectors/chains/berachainArtio.mjs";
import "../../connectors/chains/celo.mjs";
import "../../connectors/chains/celoAlfajores.mjs";
import "../../connectors/chains/filecoin.mjs";
import "../../connectors/chains/filecoinCalibration.mjs";
import "../../connectors/chains/garnetHolesky.mjs";
import "../../connectors/chains/holesky.mjs";
import "../../connectors/chains/linea.mjs";
import "../../connectors/chains/lineaTestnet.mjs";
import "../../connectors/chains/lukso.mjs";
import "../../connectors/chains/mainnet.mjs";
import "../../connectors/chains/optimism.mjs";
import "../../connectors/chains/optimismSepolia.mjs";
import "../../connectors/chains/polygon.mjs";
import "../../connectors/chains/polygonAmoy.mjs";
import "../../connectors/chains/redstone.mjs";
import "../../connectors/chains/sepolia.mjs";
import "../../connectors/chains/zora.mjs";
import "../../connectors/chains/zoraSepolia.mjs";
import "../../connectors/chains/zoraTestnet.mjs";
import "../../connectors/chains/utils.mjs";
import "../../lib/solana/index.mjs";
import "../../theme.mjs";
import "tinycolor2";
import "../../lib/cybr53.mjs";
import "zustand";
import "zustand/shallow";
import "zustand/traditional";
import "../../hooks/internal-context.mjs";
import "../../hooks/index.mjs";
const a = () => {
  let a = n();
  let {
    wallets: l
  } = s();
  let {
    wallets: p
  } = c();
  let j = r(o => o.wallet);
  o(() => {
    if (!a.id) {
      return;
    }
    let o = i.get(e(a.id));
    r.setState({
      wallet: o
    });
  }, [a.id]);
  let h = t(() => {
    if (!j) {
      return;
    }
    let [, o] = j.split(":");
    return l.find(t => t.address === o) || p.find(t => t.address === o);
  }, [j, l, p]);
  let d = t(() => h ? h.type === "ethereum" ? h.chainId : "solana" : undefined, [h]);
  return {
    connect: async o => {
      if (o?.reset) {
        i.del(e(a.id));
        r.setState({
          wallet: undefined
        });
      }
      let {
        wallet: t
      } = await m();
      if (!t) {
        return {};
      }
      let [, n] = t.split(":");
      let s = l.find(o => o.address === n);
      if (s) {
        return {
          wallet: s,
          network: s.chainId
        };
      }
      let c = p.find(o => o.address === n);
      if (c) {
        return {
          wallet: c,
          network: "solana"
        };
      } else {
        return {};
      }
    },
    wallet: h,
    network: d
  };
};
export { a as useActiveWallet };
