import { createContext as o, useContext as r } from "react";
const t = /*#__PURE__*/o(undefined);
const e = () => {
  let o = r(t);
  if (o === undefined) {
    throw Error("useAccordionContext must be used within an Accordion");
  }
  return o;
};
const i = /*#__PURE__*/o(undefined);
const n = () => {
  let o = r(i);
  if (o === undefined) {
    throw Error("useAccordionPanelContext must be used within an AccordionPanel");
  }
  return o;
};
export { t as AccordionContext, i as AccordionPanelContext, e as useAccordionContext, n as useAccordionPanelContext };
