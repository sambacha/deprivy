import { styled as o } from "styled-components";
import { ErrorMessage as r } from "../typography/ErrorMessage.mjs";
let i = /*#__PURE__*/o.label.withConfig({
  displayName: "BaseEmailForm",
  componentId: "sc-d081b0e2-0"
})(["display:block;position:relative;width:100%;> svg{position:absolute;margin:13px 17px;height:24px;width:24px;color:var(--privy-color-foreground-3);}&& > input{background-color:#f00;font-size:16px;line-height:24px;padding:12px 88px 12px 52px;flex-grow:1;background:var(--privy-color-background);border:1px solid ", ";border-radius:var(--privy-border-radius-mdlg);width:100%;@media (min-width:441px){font-size:14px;padding-right:78px;}:focus{outline:none;border-color:", ";box-shadow:", ";}:autofill,:-webkit-autofill{background:var(--privy-color-background);}&& > input::placeholder{color:var(--privy-color-foreground-3);}&:disabled{opacity:0.4;cursor:not-allowed;}&:disabled,&:disabled:hover,&:disabled > span{color:var(--privy-color-foreground-3);}}&& > button:last-child{right:0px;line-height:24px;padding:13px 17px;:focus{outline:none;}&:disabled{opacity:0.4;cursor:not-allowed;}&:disabled,&:disabled:hover,&:disabled > span{color:var(--privy-color-foreground-3);}}"], ({
  $error: o
}) => o ? "var(--privy-color-error) !important" : "var(--privy-color-foreground-4)", ({
  $error: o
}) => o ? "var(--privy-color-error) !important" : "var(--privy-color-accent-light)", ({
  $error: o
}) => o ? "none" : "0 0 0 1px var(--privy-color-accent-light)");
const e = /*#__PURE__*/o(i).withConfig({
  displayName: "EmailUpdateForm",
  componentId: "sc-d081b0e2-1"
})(["background-color:var(--privy-color-background);transition:background-color 200ms ease;&& > button{right:0;line-height:24px;position:absolute;padding:13px 17px;background-color:#090;:focus{outline:none;border-color:var(--privy-color-accent);}}"]);
const a = /*#__PURE__*/o(i).withConfig({
  displayName: "EmailInputForm",
  componentId: "sc-d081b0e2-2"
})(["&& > input{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:", ";border:1px solid ", ";&& > input::placeholder{color:var(--privy-color-foreground-3);}}&& > :last-child{right:16px;position:absolute;top:50%;transform:translate(0,-50%);}&& > button:last-child{right:0px;line-height:24px;padding:13px 17px;:focus{outline:none;}}"], o => o.stacked ? "16px" : "88px", ({
  $error: o
}) => o ? "var(--privy-color-error) !important" : "var(--privy-color-foreground-4)");
const p = /*#__PURE__*/o.div.withConfig({
  displayName: "InputContainerForm",
  componentId: "sc-d081b0e2-3"
})(["width:100%;&& > ", "{display:block;text-align:left;padding-left:var(--privy-border-radius-mdlg);padding-bottom:5px;}"], r);
export { a as EmailInputForm, e as EmailUpdateForm, p as InputContainerForm };
