import { jsx as e } from "react/jsx-runtime";
import { useFloating as t, autoUpdate as n, offset as r, flip as o, shift as l, useInteractions as i, useClick as a, useDismiss as d, useRole as s, useMergeRefs as c, useTransitionStyles as p, FloatingPortal as f, FloatingFocusManager as u } from "@floating-ui/react";
import * as m from "react";
function b({
  initialOpen: e = false,
  placement: c = "bottom",
  modal: p,
  onOpenChange: f
} = {}) {
  let [u, b] = m.useState(e);
  let [h, g] = m.useState();
  let [y, x] = m.useState();
  let w = e => {
    b(e);
    f?.(e);
  };
  let C = t({
    placement: c,
    open: u,
    onOpenChange: w,
    whileElementsMounted: n,
    middleware: [r(5), o({
      crossAxis: c.includes("-"),
      fallbackAxisSideDirection: "end",
      padding: 5
    }), l({
      padding: 5
    })]
  });
  let v = C.context;
  let I = i([a(v, {
    enabled: true
  }), d(v), s(v)]);
  return m.useMemo(() => ({
    open: u,
    setOpen: w,
    ...I,
    ...C,
    modal: p,
    labelId: h,
    descriptionId: y,
    setLabelId: g,
    setDescriptionId: x
  }), [u, w, I, C, p, h, y]);
}
let h = /*#__PURE__*/m.createContext(null);
const g = () => {
  let e = m.useContext(h);
  if (e == null) {
    throw Error("Popover components must be wrapped in <Popover />");
  }
  return e;
};
function y({
  children: t,
  modal: n = false,
  ...r
}) {
  let o = b({
    modal: n,
    ...r
  }); /*#__PURE__*/
  return e(h.Provider, {
    value: o,
    children: t
  });
}
const x = /*#__PURE__*/m.forwardRef(function ({
  children: t,
  asChild: n = false,
  ...r
}, o) {
  let l = g();
  let i = t.ref;
  let a = c([l.refs.setReference, o, i]);
  if (n && /*#__PURE__*/m.isValidElement(t)) {
    return /*#__PURE__*/m.cloneElement(t, l.getReferenceProps({
      ref: a,
      ...r,
      ...t.props,
      "data-state": l.open ? "open" : "closed"
    }));
  } else {
    return /*#__PURE__*/e("button", {
      ref: a,
      type: "button",
      "data-state": l.open ? "open" : "closed",
      ...l.getReferenceProps(r),
      children: t
    });
  }
});
const w = /*#__PURE__*/m.forwardRef(function ({
  style: t,
  ...n
}, r) {
  let {
    context: o,
    ...l
  } = g();
  let i = c([l.refs.setFloating, r]);
  let {
    isMounted: a,
    styles: d
  } = p(o, {
    initial: {
      opacity: 0,
      transform: "scale(0.9)",
      transformOrigin: "top right"
    }
  });
  /*#__PURE__*/
  return e(f, {
    children: /*#__PURE__*/e(u, {
      context: o,
      modal: l.modal,
      children: /*#__PURE__*/e("div", a ? {
        ref: i,
        style: {
          ...l.floatingStyles,
          ...t
        },
        "aria-labelledby": l.labelId,
        "aria-describedby": l.descriptionId,
        ...l.getFloatingProps(n),
        children: /*#__PURE__*/e("div", {
          style: d,
          children: n.children
        })
      } : {})
    })
  });
});
const C = /*#__PURE__*/m.forwardRef(function (t, n) {
  let {
    setOpen: r
  } = g(); /*#__PURE__*/
  return e("button", {
    type: "button",
    ref: n,
    ...t,
    onClick: e => {
      t.onClick?.(e);
      r(false);
    }
  });
});
export { y as Popover, C as PopoverClose, w as PopoverContent, x as PopoverTrigger, b as usePopover, g as usePopoverContext };
