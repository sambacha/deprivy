import { jsxs as o, Fragment as r, jsx as e } from "react/jsx-runtime";
import t from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import n from "@heroicons/react/24/outline/LockClosedIcon";
import { useState as i } from "react";
import { getPrivyWalletWithAddress as s } from "../../client/user.mjs";
import { PrimaryButtonWithoutGray as c } from "../../components/Button.mjs";
import { BlobbyFooter as m } from "../../components/ModalFooter.mjs";
import { ModalHeader as a } from "../../components/ModalHeader.mjs";
import { WithCircleBorder as l } from "../../components/ui/icons/WithCircleBorder.mjs";
import { Subtitle as p } from "../../components/ui/typography/Subtitle.mjs";
import { Title as h } from "../../components/ui/typography/Title.mjs";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as d } from "../../constants.mjs";
import { usePrivyInternal as j } from "../../hooks/internal-context.mjs";
import { usePrivyModal as y } from "../../hooks/modal-context.mjs";
import { usePrivyContext as u } from "../../hooks/privy-context.mjs";
import { Grow as f } from "../LandingScreen/styles.mjs";
import "viem/utils";
import "styled-components";
import "../../components/Loader.mjs";
import "../../configuration/context.mjs";
import "../../config.mjs";
import "../../configuration/defaultClientConfig.mjs";
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
import "../../svg/protected-by-privy.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../hooks/index.mjs";
import "../../components/PrefetchedImage.mjs";
import "../index.mjs";
const g = () => {
  let {
    user: g,
    getAccessToken: v
  } = u();
  let {
    walletProxy: w,
    refreshUser: b,
    closePrivyModal: k
  } = j();
  let x = y();
  let {
    entropyId: C,
    entropyIdVerifier: I
  } = x.data?.recoverWallet;
  let [S, T] = i(false);
  let [M, A] = i(null);
  let [P, U] = i(null);
  function W() {
    if (!S) {
      if (P) {
        x.data?.setWalletPassword?.onFailure(P);
        k();
        return;
      }
      if (!M) {
        x.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow"));
        k();
        return;
      }
    }
  }
  x.onUserCloseViaDialogOrKeybindRef.current = W;
  let E = !!S || !!M; /*#__PURE__*/
  return o(r, P ? {
    children: [/*#__PURE__*/e(a, {
      onClose: W
    }, "header"), /*#__PURE__*/e(l, {
      $color: "var(--privy-color-error)",
      style: {
        alignSelf: "center"
      },
      children: /*#__PURE__*/e(t, {
        height: 38,
        width: 38,
        stroke: "var(--privy-color-error)"
      })
    }), /*#__PURE__*/e(h, {
      style: {
        marginTop: "0.5rem"
      },
      children: "Something went wrong"
    }), /*#__PURE__*/e(f, {
      style: {
        minHeight: "2rem"
      }
    }), /*#__PURE__*/e(c, {
      onClick: () => U(null),
      children: "Try again"
    }), /*#__PURE__*/e(m, {})]
  } : {
    children: [/*#__PURE__*/e(a, {
      onClose: W
    }, "header"), /*#__PURE__*/e(n, {
      style: {
        width: "3rem",
        height: "3rem",
        alignSelf: "center"
      }
    }), /*#__PURE__*/e(h, {
      style: {
        marginTop: "0.5rem"
      },
      children: "Automatically secure your account"
    }), /*#__PURE__*/e(p, {
      style: {
        marginTop: "1rem"
      },
      children: "When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."
    }), /*#__PURE__*/e(f, {
      style: {
        minHeight: "2rem"
      }
    }), /*#__PURE__*/e(c, {
      loading: S,
      disabled: E,
      onClick: () => async function () {
        T(true);
        try {
          let o = await v();
          let r = s(g, C);
          if (!o || !w || !r) {
            return;
          }
          if (!(await w.setRecovery({
            accessToken: o,
            entropyId: C,
            entropyIdVerifier: I,
            existingRecoveryMethod: r.recoveryMethod,
            recoveryMethod: "privy"
          })).entropyId) {
            throw Error("Unable to set recovery on wallet");
          }
          let e = await b();
          if (!e) {
            throw Error("Unable to set recovery on wallet");
          }
          let t = s(e, r.address);
          if (!t) {
            throw Error("Unabled to set recovery on wallet");
          }
          A(!!e);
          setTimeout(() => {
            x.data?.setWalletPassword?.onSuccess(t);
            k();
          }, d);
        } catch (o) {
          U(o);
        } finally {
          T(false);
        }
      }(),
      children: M ? "Success" : "Confirm"
    }), /*#__PURE__*/e(m, {})]
  });
};
export { g as SetAutomaticRecoveryScreen };
