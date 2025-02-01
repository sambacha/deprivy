import { createContext as o, useEffect as n, useContext as e } from "react";
const r = {
  login: {
    onComplete: [],
    onError: []
  },
  logout: {
    onSuccess: []
  },
  connectWallet: {
    onSuccess: [],
    onError: []
  },
  createWallet: {
    onSuccess: [],
    onError: []
  },
  linkAccount: {
    onSuccess: [],
    onError: []
  },
  update: {
    onSuccess: [],
    onError: []
  },
  configureMfa: {
    onMfaRequired: []
  },
  setWalletPassword: {
    onSuccess: [],
    onError: []
  },
  setWalletRecovery: {
    onSuccess: [],
    onError: []
  },
  signMessage: {
    onSuccess: [],
    onError: []
  },
  signTypedData: {
    onSuccess: [],
    onError: []
  },
  sendTransaction: {
    onSuccess: [],
    onError: []
  },
  signTransaction: {
    onSuccess: [],
    onError: []
  },
  sendSolanaTransaction: {
    onSuccess: [],
    onError: []
  },
  accessToken: {
    onAccessTokenGranted: [],
    onAccessTokenRemoved: []
  },
  oAuthAuthorization: {
    onOAuthTokenGrant: []
  },
  fundWallet: {
    onUserExited: []
  },
  fundSolanaWallet: {
    onUserExited: []
  },
  customAuth: {
    onAuthenticated: [],
    onUnauthenticated: []
  }
};
const t = /*#__PURE__*/o(undefined);
let c = () => e(t);
function s(o, e) {
  if (!e) {
    return;
  }
  let r = c().current[o];
  return n(() => {
    for (let [n, t] of Object.entries(e)) {
      if (!Object.prototype.hasOwnProperty.call(r, n)) {
        console.warn(`Invalid event type "${n}" for action "${o}"`);
      }
      r[n]?.push(t);
    }
    return () => {
      for (let [n, t] of Object.entries(e)) {
        if (!Object.prototype.hasOwnProperty.call(r, n)) {
          console.warn(`Invalid event type "${n}" for action "${o}"`);
        }
        r[n] = r[n]?.filter(o => o !== t);
      }
    };
  }, [e]);
}
function a(o, n, e, ...r) {
  for (let t of o.current[n][e]) {
    t(...r);
  }
}
function u() {
  let o = c();
  return (n, e, ...r) => a(o, n, e, ...r);
}
export { t as PrivyEventsContext, a as emitPrivyEvent, r as privyEventsDefault, u as useEmitPrivyEvent, s as usePrivyEventSubscription };
