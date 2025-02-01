import { jsx as o } from "react/jsx-runtime";
import { useCallback as t, useEffect as i } from "react";
import { DEFAULT_SUCCESS_SCREEN_DURATION_MS as r } from "../../../constants.mjs";
import { usePrivyModal as n } from "../../../hooks/modal-context.mjs";
import { ModalScreen as s } from "../../../screens/index.mjs";
import { ConfirmWalletPasswordForm as e } from "./ConfimWalletPasswordForm.mjs";
import { ConfirmWalletPasswordSaved as m } from "./ConfimWalletPasswordSaved.mjs";
import { CreateWalletPassword as c } from "./CreateWalletPassword.mjs";
import { SaveWalletPassword as a } from "./SaveWalletPassword.mjs";
import { SetWalletPasswordComplete as p } from "./SetWalletPasswordComplete.mjs";
import { useSetWalletPasswordState as l } from "./setWalletPassword.hooks.mjs";
import "../../PrefetchedImage.mjs";
import "../../../configuration/context.mjs";
import "../../../config.mjs";
import "../../../configuration/defaultClientConfig.mjs";
import "../../../configuration/login-methods.mjs";
import "../../../configuration/wallets.mjs";
import "../../../connectors/chains/index.mjs";
import "../../../connectors/chains/arbitrum.mjs";
import "../../../connectors/chains/arbitrumSepolia.mjs";
import "../../../connectors/chains/avalanche.mjs";
import "../../../connectors/chains/avalancheFuji.mjs";
import "../../../connectors/chains/base.mjs";
import "../../../connectors/chains/baseSepolia.mjs";
import "../../../connectors/chains/berachainArtio.mjs";
import "../../../connectors/chains/celo.mjs";
import "../../../connectors/chains/celoAlfajores.mjs";
import "../../../connectors/chains/filecoin.mjs";
import "../../../connectors/chains/filecoinCalibration.mjs";
import "../../../connectors/chains/garnetHolesky.mjs";
import "../../../connectors/chains/holesky.mjs";
import "../../../connectors/chains/linea.mjs";
import "../../../connectors/chains/lineaTestnet.mjs";
import "../../../connectors/chains/lukso.mjs";
import "../../../connectors/chains/mainnet.mjs";
import "../../../connectors/chains/optimism.mjs";
import "../../../connectors/chains/optimismSepolia.mjs";
import "../../../connectors/chains/polygon.mjs";
import "../../../connectors/chains/polygonAmoy.mjs";
import "../../../connectors/chains/redstone.mjs";
import "../../../connectors/chains/sepolia.mjs";
import "../../../connectors/chains/zora.mjs";
import "../../../connectors/chains/zoraSepolia.mjs";
import "../../../connectors/chains/zoraTestnet.mjs";
import "../../../connectors/chains/utils.mjs";
import "../../../lib/solana/index.mjs";
import "../../../theme.mjs";
import "tinycolor2";
import "../../../lib/cybr53.mjs";
import "../../../hooks/index.mjs";
import "@heroicons/react/24/outline/ExclamationTriangleIcon";
import "../../Layouts.mjs";
import "styled-components";
import "../../ModalFooter.mjs";
import "../../../svg/protected-by-privy.mjs";
import "../../ModalHeader.mjs";
import "@heroicons/react/24/outline/ArrowLeftIcon";
import "@heroicons/react/24/outline/ArrowRightIcon";
import "@heroicons/react/24/outline/QuestionMarkCircleIcon";
import "@heroicons/react/24/outline/XMarkIcon";
import "../../../hooks/internal-context.mjs";
import "./shared.mjs";
import "@heroicons/react/24/outline/ArrowPathIcon";
import "@heroicons/react/24/outline/EyeIcon";
import "@heroicons/react/24/outline/EyeSlashIcon";
import "../../Button.mjs";
import "../../Loader.mjs";
import "../../Checkbox.mjs";
import "@heroicons/react/24/outline/KeyIcon";
import "@heroicons/react/24/solid/CheckCircleIcon";
import "../../../password.mjs";
import "fast-password-entropy";
import "secure-password-utilities";
import "secure-password-utilities/wordlists";
import "@heroicons/react/24/outline/ArrowDownTrayIcon";
import "@heroicons/react/24/outline/ClipboardDocumentCheckIcon";
import "@heroicons/react/24/outline/DocumentDuplicateIcon";
import "@heroicons/react/24/solid/XCircleIcon";
import "../../ScreenHeader.mjs";
const j = ({
  onSubmit: j,
  ...h
}) => {
  let {
    lastScreen: u,
    navigate: d
  } = n();
  let {
    send: f,
    state: E
  } = l();
  let g = t(async () => {
    if (E === "finalizing") {
      await j();
    }
    f("next");
  }, [E, f, j]);
  i(() => {
    let o;
    if (E === "done" && h.config.initiatedBy === "automatic") {
      o = setTimeout(() => h.onClose?.(), r);
    }
    return () => {
      if (o) {
        clearTimeout(o);
      }
    };
  }, [E, h.config.initiatedBy, h.onClose]);
  let C = t(() => {
    f("back");
  }, [f]);
  let S = t(() => {
    d(s.EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN);
  }, [u, d]);
  if (E === "creating") {
    return /*#__PURE__*/o(c, {
      ...h,
      onSubmit: g,
      onBack: u === s.EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN ? S : undefined
    });
  } else if (E === "saving") {
    return /*#__PURE__*/o(a, {
      ...h,
      onSubmit: g,
      onBack: C
    });
  } else if (E === "confirming") {
    return /*#__PURE__*/o(e, {
      ...h,
      onSubmit: g,
      onBack: C
    });
  } else if (E === "finalizing") {
    return /*#__PURE__*/o(m, {
      ...h,
      onSubmit: g,
      onBack: C
    });
  } else if (E === "done") {
    return /*#__PURE__*/o(p, {
      ...h,
      onSubmit: g
    });
  } else {
    return null;
  }
};
export { j as SetWalletPasswordForm };
