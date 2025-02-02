import { jsx as n } from "react/jsx-runtime";
import { PrimaryButton as r } from "../../components/Button.mjs";
import "styled-components";
import "../../components/Loader.mjs";
const e = ({
  onTransfer: e,
  isTransferring: o,
  transferSuccess: s
}) => /*#__PURE__*/n(r, {
  ...(s ? {
    success: true,
    children: "Success!"
  } : {
    warn: true,
    loading: o,
    onClick: e,
    children: "Transfer and delete account"
  })
});
export { e as AccountTransferButton };
