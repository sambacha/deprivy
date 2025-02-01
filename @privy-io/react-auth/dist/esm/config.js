import { defaultClientConfig as e } from "./configuration/defaultClientConfig.mjs";
import { toCustomLoginMethodConfig as n } from "./configuration/login-methods.mjs";
import { toWalletListConfig as o } from "./configuration/wallets.mjs";
import { DEFAULT_SUPPORTED_CHAINS as t } from "./connectors/chains/index.mjs";
import { mainnet as a } from "./connectors/chains/mainnet.mjs";
import { addPrivyRpcToChain as l } from "./connectors/chains/utils.mjs";
import { SOLANA_MAINNET_RPC_URL as i, SOLANA_TESTNET_RPC_URL as s, SOLANA_DEVNET_RPC_URL as r } from "./lib/solana/index.mjs";
import { generatePalette as c } from "./theme.mjs";
import "./constants.mjs";
import "./connectors/chains/arbitrum.mjs";
import "./connectors/chains/arbitrumSepolia.mjs";
import "./connectors/chains/avalanche.mjs";
import "./connectors/chains/avalancheFuji.mjs";
import "./connectors/chains/base.mjs";
import "./connectors/chains/baseSepolia.mjs";
import "./connectors/chains/berachainArtio.mjs";
import "./connectors/chains/celo.mjs";
import "./connectors/chains/celoAlfajores.mjs";
import "./connectors/chains/filecoin.mjs";
import "./connectors/chains/filecoinCalibration.mjs";
import "./connectors/chains/garnetHolesky.mjs";
import "./connectors/chains/holesky.mjs";
import "./connectors/chains/linea.mjs";
import "./connectors/chains/lineaTestnet.mjs";
import "./connectors/chains/lukso.mjs";
import "./connectors/chains/optimism.mjs";
import "./connectors/chains/optimismSepolia.mjs";
import "./connectors/chains/polygon.mjs";
import "./connectors/chains/polygonAmoy.mjs";
import "./connectors/chains/redstone.mjs";
import "./connectors/chains/sepolia.mjs";
import "./connectors/chains/zora.mjs";
import "./connectors/chains/zoraSepolia.mjs";
import "./connectors/chains/zoraTestnet.mjs";
import "tinycolor2";
function d(t, a, l) {
  let d;
  let h;
  let m;
  let u;
  let g;
  let f;
  let C;
  let y;
  let b;
  let w;
  let A;
  let j;
  let W;
  let M;
  let O;
  let v = l ? console.warn : () => {};
  if (a?.loginMethods) {
    d = a.loginMethods.includes("email");
    h = a.loginMethods.includes("sms");
    u = a.loginMethods.includes("wallet");
    g = a.loginMethods.includes("google");
    f = a.loginMethods.includes("twitter");
    C = a.loginMethods.includes("discord");
    b = a.loginMethods.includes("spotify");
    w = a.loginMethods.includes("instagram");
    y = a.loginMethods.includes("tiktok");
    j = a.loginMethods.includes("github");
    A = a.loginMethods.includes("linkedin");
    W = a.loginMethods.includes("apple");
    M = a.loginMethods.includes("farcaster");
    O = a.loginMethods.includes("telegram");
  } else {
    d = t.emailAuth;
    h = t.smsAuth;
    u = t.walletAuth || t.solanaWalletAuth;
    g = t.googleOAuth;
    f = t.twitterOAuth;
    C = t.discordOAuth;
    j = t.githubOAuth;
    b = t.spotifyOAuth;
    w = t.instagramOAuth;
    y = t.tiktokOAuth;
    A = t.linkedinOAuth;
    W = t.appleOAuth;
    M = t.farcasterAuth;
    O = t.telegramAuth;
  }
  if (typeof window != "undefined" && typeof window.PublicKeyCredential != "function") {
    m = false;
  } else if (t.passkeyAuth) {
    m = true;
  }
  let U = [d, h].filter(Boolean);
  let k = [g, f, C, j, b, w, y, A, W, M, O].filter(Boolean);
  let x = [u].filter(Boolean);
  if (U.length + k.length + x.length === 0) {
    throw Error("You must enable at least one login method");
  }
  let P = a?.appearance?.showWalletLoginFirst !== undefined ? a?.appearance?.showWalletLoginFirst : t.showWalletLoginFirst;
  if (P && x.length === 0) {
    v("You should only enable `showWalletLoginFirst` when `wallet` logins are also enabled. `showWalletLoginFirst` has been set to false");
    P = false;
  } else if (!P && k.length + U.length === 0) {
    v("You should only disable `showWalletLoginFirst` when `email`, `sms`, or social logins are also enabled. `showWalletLoginFirst` has been set to true");
    P = true;
  }
  let S = a?.externalWallets?.walletConnect?.enabled ?? true;
  if (a?.loginMethods && a.loginMethodsAndOrder) {
    v("You should only configure one of `loginMethods` or `loginMethodsAndOrder`");
  }
  let F = o({
    input: a?.appearance?.walletList,
    overrides: a?.loginMethodsAndOrder
  });
  let L = n({
    input: a?.loginMethodsAndOrder
  });
  let E = a?.intl?.defaultCountry ?? "US";
  let {
    chains: T,
    defaultChain: I
  } = p({
    supportedChains: a?.supportedChains,
    defaultChainFromConfig: a?.defaultChain
  });
  let q = !!a?.defaultChain;
  let D = a?.customAuth?.getCustomAccessToken && a?.customAuth?.enabled !== false;
  let {
    requireUserPasswordOnCreate: R,
    ...H
  } = a?.embeddedWallets ?? {};
  let Y = a?.solanaClusters ?? [];
  if (t.solanaWalletAuth && !a?.externalWallets?.solana?.connectors) {
    console.warn("App configuration has Solana wallet login enabled, but no Solana wallet connectors have been passed to Privy. Make sure to pass Solana connectors to the `config.externalWallets.solana.connectors` field of the `PrivyProvider`");
  }
  return {
    id: t.id,
    name: t.name,
    allowlistConfig: t.allowlistConfig,
    legacyWalletUiConfig: t.legacyWalletUiConfig,
    appearance: {
      logo: a?.appearance?.logo ?? t.logoUrl,
      landingHeader: a?.appearance?.landingHeader ?? e.appearance.landingHeader,
      loginMessage: typeof a?.appearance?.loginMessage == "string" ? a?.appearance?.loginMessage.slice(0, 100) : a?.appearance?.loginMessage,
      footerLogo: a?.appearance?.footerLogo,
      palette: c({
        backgroundTheme: a?.appearance?.theme ?? e.appearance.theme,
        accentHex: a?.appearance?.accentColor ?? t.accentColor ?? e.appearance.accentColor
      }),
      loginGroupPriority: P ? "web3-first" : "web2-first",
      hideDirectWeb2Inputs: !!a?.appearance?.hideDirectWeb2Inputs,
      walletList: F,
      walletChainType: a?.appearance?.walletChainType ?? (({
        evmWalletAuth: e,
        solanaWalletAuth: n
      }) => e && n ? "ethereum-and-solana" : e ? "ethereum-only" : n ? "solana-only" : "ethereum-only")({
        evmWalletAuth: t.walletAuth ?? false,
        solanaWalletAuth: t.solanaWalletAuth ?? false
      })
    },
    loginMethods: {
      wallet: u,
      email: d,
      sms: h,
      passkey: m,
      google: g,
      twitter: f,
      discord: C,
      github: j,
      spotify: b,
      instagram: w,
      tiktok: y,
      linkedin: A,
      apple: W,
      farcaster: M,
      telegram: O
    },
    disablePlusEmails: t.disablePlusEmails,
    loginMethodsAndOrder: L,
    legal: {
      termsAndConditionsUrl: a?.legal?.termsAndConditionsUrl ?? t.termsAndConditionsUrl,
      privacyPolicyUrl: a?.legal?.privacyPolicyUrl ?? t.privacyPolicyUrl,
      requireUsersAcceptTerms: t.requireUsersAcceptTerms ?? false
    },
    walletConnectCloudProjectId: a?.walletConnectCloudProjectId ?? t.walletConnectCloudProjectId ?? e.walletConnectCloudProjectId,
    rpcConfig: {
      rpcUrls: {},
      rpcTimeouts: {}
    },
    chains: T,
    solanaClusters: {
      "mainnet-beta": Y.find(e => e.name === "mainnet-beta")?.rpcUrl || i,
      testnet: Y.find(e => e.name === "testnet")?.rpcUrl || s,
      devnet: Y.find(e => e.name === "devnet")?.rpcUrl || r
    },
    defaultChain: I,
    intl: {
      defaultCountry: E
    },
    shouldEnforceDefaultChainOnConnect: q,
    captchaEnabled: t.captchaEnabled ?? e.captchaEnabled,
    captchaSiteKey: t.captchaSiteKey,
    externalWallets: {
      coinbaseWallet: {
        connectionOptions: a?.externalWallets?.coinbaseWallet?.connectionOptions ?? e.externalWallets.coinbaseWallet.connectionOptions
      },
      walletConnect: {
        enabled: S
      },
      solana: {
        connectors: a?.externalWallets?.solana?.connectors
      }
    },
    embeddedWallets: {
      ...t.embeddedWalletConfig,
      ...(typeof R == "boolean" ? {
        requireUserOwnedRecoveryOnCreate: R
      } : {}),
      ...(D ? {
        createOnLogin: "all-users",
        requireUserOwnedRecoveryOnCreate: false,
        userOwnedRecoveryOptions: ["user-passcode"]
      } : {}),
      priceDisplay: {
        primary: "fiat-currency",
        secondary: "native-token"
      },
      ...H,
      showWalletUIs: a?.embeddedWallets?.showWalletUIs ?? t.enforceWalletUis ?? true,
      extendedCalldataDecoding: a?.embeddedWallets?.extendedCalldataDecoding
    },
    mfa: {
      methods: t.mfaMethods ?? [],
      noPromptOnMfaRequired: a?.mfa?.noPromptOnMfaRequired ?? false
    },
    customAuth: D ? {
      enabled: true,
      ...a.customAuth
    } : undefined,
    loginConfig: {
      telegramAuthConfiguration: t.telegramAuthConfiguration,
      passkeysForSignupEnabled: t.passkeysForSignupEnabled
    },
    headless: !!a?.headless,
    render: {
      standalone: a?._render?.standalone ?? e._render.standalone
    },
    fundingConfig: t.fundingConfig,
    fundingMethodConfig: {
      ...(a?.fundingMethodConfig ?? e.fundingMethodConfig),
      moonpay: {
        ...(a?.fundingMethodConfig?.moonpay ?? e.fundingMethodConfig.moonpay),
        useSandbox: a?.fundingMethodConfig?.moonpay.useSandbox ?? a?.fiatOnRamp?.useSandbox ?? e.fundingMethodConfig.moonpay.useSandbox
      }
    }
  };
}
function h(e) {
  if (!e) {
    return {};
  }
  let {
    appearance: n,
    supportedChains: o,
    defaultChain: t,
    externalWallets: a,
    ...l
  } = e;
  return {
    ...l,
    ...(o ? {
      supportedChains: o.map(e => e.id)
    } : undefined),
    ...(t ? {
      defaultChain: t.id
    } : undefined),
    ...(a ? {
      walletConnect: a.walletConnect,
      coinbaseWallet: a.coinbaseWallet,
      solana: {
        connectors: a.solana?.connectors?.get().map(e => e.walletClientType)
      }
    } : undefined)
  };
}
function p({
  supportedChains: e,
  defaultChainFromConfig: n
}) {
  let o;
  if (e) {
    if (e.length === 0) {
      throw Error("`supportedChains` must contain at least one chain");
    }
    o = e.map(e => {
      if (e.rpcUrls.privyWalletOverride) {
        return e;
      }
      let n = t.find(n => n.id === e.id);
      let o = n?.rpcUrls.privy?.http[0];
      if (o) {
        return l(e, o);
      } else {
        return e;
      }
    });
  } else {
    o = [...t];
  }
  let i = e ? o[0] : a;
  let s = n ?? i;
  if (!o.find(e => e.id === s.id)) {
    throw Error("`defaultChain` must be included in `supportedChains`");
  }
  return {
    chains: o,
    defaultChain: s
  };
}
export { p as buildChainsAndDefaultChain, d as generateAppConfig, h as generateClientConfigAnalyticsPayload };
