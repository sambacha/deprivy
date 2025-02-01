import { usePrivyInternal as e } from "./internal-context.mjs";
import "react";
import "./index.mjs";
const t = () => {
  let {
    revokeDelegatedWallets: t,
    delegateWallet: a
  } = e();
  return {
    delegateWallet: async ({
      address: e,
      chainType: t
    }) => await a({
      address: e,
      chainType: t,
      showDelegationUIs: false
    }),
    revokeWallets: async () => await t({
      showDelegationUIs: false
    })
  };
};
export { t as useHeadlessDelegatedActions };
