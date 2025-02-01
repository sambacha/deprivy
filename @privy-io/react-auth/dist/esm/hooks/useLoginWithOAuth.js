import { useCallback as o, useEffect as t } from "react";
import { useIsServerConfigLoaded as r } from "../configuration/context.mjs";
import { PrivyErrorCode as s } from "../errors.mjs";
import { useCaptcha as i, CaptchaError as n } from "./captcha-context.mjs";
import { usePrivyEventSubscription as e } from "./events-context.mjs";
import { usePrivyInternal as c } from "./internal-context.mjs";
import { usePrivyContext as m } from "./privy-context.mjs";
import { detectCompletingOAuthFlow as a } from "../auth-flows/oauth/detectCompletingOAuthFlow.mjs";
import { stripUrlOAuthParamsAndRemoveStateCode as p } from "../auth-flows/oauth/stripUrlOAuthParamsAndRemoveStateCode.mjs";
import "react/jsx-runtime";
import "../config.mjs";
import "../configuration/defaultClientConfig.mjs";
import "../constants.mjs";
import "../configuration/login-methods.mjs";
import "../configuration/wallets.mjs";
import "../connectors/chains/index.mjs";
import "../connectors/chains/arbitrum.mjs";
import "../connectors/chains/arbitrumSepolia.mjs";
import "../connectors/chains/avalanche.mjs";
import "../connectors/chains/avalancheFuji.mjs";
import "../connectors/chains/base.mjs";
import "../connectors/chains/baseSepolia.mjs";
import "../connectors/chains/berachainArtio.mjs";
import "../connectors/chains/celo.mjs";
import "../connectors/chains/celoAlfajores.mjs";
import "../connectors/chains/filecoin.mjs";
import "../connectors/chains/filecoinCalibration.mjs";
import "../connectors/chains/garnetHolesky.mjs";
import "../connectors/chains/holesky.mjs";
import "../connectors/chains/linea.mjs";
import "../connectors/chains/lineaTestnet.mjs";
import "../connectors/chains/lukso.mjs";
import "../connectors/chains/mainnet.mjs";
import "../connectors/chains/optimism.mjs";
import "../connectors/chains/optimismSepolia.mjs";
import "../connectors/chains/polygon.mjs";
import "../connectors/chains/polygonAmoy.mjs";
import "../connectors/chains/redstone.mjs";
import "../connectors/chains/sepolia.mjs";
import "../connectors/chains/zora.mjs";
import "../connectors/chains/zoraSepolia.mjs";
import "../connectors/chains/zoraTestnet.mjs";
import "../connectors/chains/utils.mjs";
import "../lib/solana/index.mjs";
import "../theme.mjs";
import "tinycolor2";
import "../lib/cybr53.mjs";
import "ofetch";
import "./index.mjs";
import "../utils/index.mjs";
import "../connectors/get-legacy-injected-providers.mjs";
import "../connectors/is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
import "../auth-flows/oauth/getIsHeadlessOAuthFlowInProgress.mjs";
import "../storage.mjs";
const l = l => {
  e("login", l);
  let h = i();
  let j = r();
  let {
    ready: u,
    user: g
  } = m();
  let {
    initLoginWithHeadlessOAuth: f,
    loginWithHeadlessOAuth: d,
    oAuthState: w,
    setOAuthState: A,
    isHeadlessOAuthLoading: y
  } = c();
  let b = o(async o => {
    try {
      if (h.enabled && h.status !== "success") {
        throw new n(h.error, null, s.CAPTCHA_FAILURE);
      }
      return await f(o.provider, h.token, o.disableSignup);
    } catch (o) {
      A({
        status: "error",
        error: o
      });
      throw o;
    }
  }, [f, h]);
  let x = o(async () => {
    let o = a();
    try {
      if (g) {
        console.warn("Cannot login with OAuth when already logged in");
        return g;
      }
      if (!o.inProgress) {
        throw Error("Cannot login with OAuth because no OAuth flow is in progress");
      }
      if (o.popupFlow) {
        return;
      }
    } catch (o) {
      A({
        status: "error",
        error: o
      });
      throw o;
    }
    try {
      return await d(o);
    } catch (o) {
      A({
        status: "error",
        error: o
      });
      throw o;
    } finally {
      p();
    }
  }, [d]);
  t(() => {
    let o = a();
    if (u && j && o.inProgress && !o.withPrivyUi && !o.popupFlow) {
      x().catch(() => {});
    }
  }, [u, j]);
  return {
    initOAuth: b,
    loading: y,
    state: w
  };
};
export { l as useLoginWithOAuth };
