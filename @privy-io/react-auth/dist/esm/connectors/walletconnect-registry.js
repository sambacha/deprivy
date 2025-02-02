import { PrivyClientError as e } from "../errors.mjs";
import a from "../storage.mjs";
import { stripEmoji as i } from "../utils/index.mjs";
import "ofetch";
import "./get-legacy-injected-providers.mjs";
import "./is-wallet-installed.mjs";
import "../utils/eth/getPublicClient.mjs";
import "viem";
const t = e => {
  let a;
  try {
    a = new URL(e).hostname;
  } catch (e) {
    return;
  }
  for (let [e, i] of Object.entries(d)) {
    if (a.includes(i.hostname)) {
      return {
        walletClientType: e,
        entry: i
      };
    }
  }
};
const l = e => i(e).toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "_");
const d = {
  metamask: {
    id: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    displayName: "MetaMask",
    hostname: "metamask.io",
    mobile: {
      native: "metamask://",
      universal: "https://metamask.app.link"
    }
  },
  trust: {
    id: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    displayName: "Trust",
    hostname: "trustwallet.com",
    mobile: {
      universal: "https://link.trustwallet.com"
    }
  },
  safe: {
    id: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    displayName: "Safe",
    hostname: "safe.global",
    mobile: {
      universal: "https://app.safe.global/"
    }
  },
  rainbow: {
    id: "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
    displayName: "Rainbow",
    hostname: "rainbow.me",
    mobile: {
      native: "rainbow://",
      universal: "https://rnbwapp.com"
    }
  },
  uniswap: {
    id: "c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",
    displayName: "Uniswap",
    hostname: "uniswap.org",
    mobile: {
      universal: "https://uniswap.org/app",
      native: "uniswap://"
    }
  },
  zerion: {
    id: "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",
    displayName: "Zerion",
    hostname: "zerion.io",
    mobile: {
      native: "zerion://",
      universal: "https://wallet.zerion.io"
    }
  },
  argent: {
    id: "bc949c5d968ae81310268bf9193f9c9fb7bb4e1283e1284af8f2bd4992535fd6",
    displayName: "Argent",
    hostname: "www.argent.xyz",
    mobile: {
      universal: "https://www.argent.xyz/app"
    }
  },
  spot: {
    id: "74f8092562bd79675e276d8b2062a83601a4106d30202f2d509195e30e19673d",
    displayName: "Spot",
    hostname: "www.spot-wallet.com",
    mobile: {
      universal: "https://spot.so"
    }
  },
  omni: {
    id: "afbd95522f4041c71dd4f1a065f971fd32372865b416f95a0b1db759ae33f2a7",
    displayName: "Omni",
    hostname: "omni.app",
    mobile: {
      universal: "https://links.omni.app"
    }
  },
  cryptocom: {
    id: "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",
    displayName: "Crypto.com",
    hostname: "crypto.com",
    mobile: {
      universal: "https://wallet.crypto.com",
      native: "dfw://"
    }
  },
  blockchain: {
    id: "84b43e8ddfcd18e5fcb5d21e7277733f9cccef76f7d92c836d0e481db0c70c04",
    displayName: "Blockchain",
    hostname: "www.blockchain.com",
    mobile: {
      universal: "https://www.blockchain.com"
    }
  },
  safepal: {
    id: "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",
    displayName: "SafePal",
    hostname: "safepal.com",
    mobile: {
      universal: "https://link.safepal.io"
    }
  },
  bitkeep: {
    id: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
    displayName: "BitKeep",
    hostname: "bitkeep.com",
    mobile: {
      universal: "https://bkapp.vip"
    }
  },
  zengo: {
    id: "9414d5a85c8f4eabc1b5b15ebe0cd399e1a2a9d35643ab0ad22a6e4a32f596f0",
    displayName: "ZenGo",
    hostname: "zengo.com",
    mobile: {
      universal: "https://get.zengo.com/"
    }
  },
  "1inch": {
    id: "c286eebc742a537cd1d6818363e9dc53b21759a1e8e5d9b263d0c03ec7703576",
    displayName: "1inch",
    hostname: "wallet.1inch.io",
    mobile: {
      universal: "https://wallet.1inch.io/wc/"
    }
  },
  binance: {
    id: "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
    displayName: "Binance",
    hostname: "www.binance.com",
    mobile: {
      universal: "https://app.binance.com/cedefi"
    }
  },
  exodus: {
    id: "e9ff15be73584489ca4a66f64d32c4537711797e30b6660dbcb71ea72a42b1f4",
    displayName: "Exodus",
    hostname: "exodus.com",
    mobile: {
      universal: "https://exodus.com/m"
    }
  },
  mew_wallet: {
    id: "f5b4eeb6015d66be3f5940a895cbaa49ef3439e518cd771270e6b553b48f31d2",
    displayName: "MEW wallet",
    hostname: "mewwallet.com",
    mobile: {
      universal: "https://mewwallet.com"
    }
  },
  alphawallet: {
    id: "138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98",
    displayName: "AlphaWallet",
    hostname: "alphawallet.com",
    mobile: {
      universal: "https://aw.app"
    }
  },
  keyring_pro: {
    id: "47bb07617af518642f3413a201ec5859faa63acb1dd175ca95085d35d38afb83",
    displayName: "KEYRING PRO",
    hostname: "keyring.app",
    mobile: {
      universal: "https://keyring.app/"
    }
  },
  mathwallet: {
    id: "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26",
    displayName: "MathWallet",
    hostname: "mathwallet.org",
    mobile: {
      universal: "https://www.mathwallet.org"
    }
  },
  unstoppable: {
    id: "8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3",
    displayName: "Unstoppable",
    hostname: "unstoppabledomains.com",
    mobile: {
      universal: "https://unstoppabledomains.com/mobile"
    }
  },
  obvious: {
    id: "031f0187049b7f96c6f039d1c9c8138ff7a17fd75d38b34350c7182232cc29aa",
    displayName: "Obvious",
    hostname: "obvious.technology",
    mobile: {
      universal: "https://wallet.obvious.technology"
    }
  },
  ambire: {
    id: "2c81da3add65899baeac53758a07e652eea46dbb5195b8074772c62a77bbf568",
    displayName: "Ambire",
    hostname: "www.ambire.com",
    mobile: {
      universal: "https://mobile.ambire.com"
    }
  },
  internet_money_wallet: {
    id: "dd43441a6368ec9046540c46c5fdc58f79926d17ce61a176444568ca7c970dcd",
    displayName: "Internet Money Wallet",
    hostname: "internetmoney.io",
    mobile: {
      universal: "https://internetmoney.io"
    }
  },
  coin98: {
    id: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
    displayName: "Coin98",
    hostname: "coin98.com",
    mobile: {
      universal: "https://coin98.services"
    }
  },
  abc_wallet: {
    id: "b956da9052132e3dabdcd78feb596d5194c99b7345d8c4bd7a47cabdcb69a25f",
    displayName: "ABC Wallet",
    hostname: "myabcwallet.io",
    mobile: {
      universal: "https://abcwalletconnect.page.link"
    }
  },
  arculus_wallet: {
    id: "0e4915107da5b3408b38e248f7a710f4529d54cd30e9d12ff0eb886d45c18e92",
    displayName: "Arculus Wallet",
    hostname: "www.getarculus.com",
    mobile: {
      universal: "https://gw.arculus.co/app"
    }
  },
  haha: {
    id: "719bd888109f5e8dd23419b20e749900ce4d2fc6858cf588395f19c82fd036b3",
    displayName: "HaHa",
    hostname: "www.haha.me",
    mobile: {
      universal: "https://haha.me"
    }
  },
  cling_wallet: {
    id: "942d0e22a7e6b520b0a03abcafc4dbe156a1fc151876e3c4a842f914277278ef",
    displayName: "Cling Wallet",
    hostname: "clingon.io",
    mobile: {
      universal: "https://cling.carrieverse.com/apple-app-site-association"
    }
  },
  broearn: {
    id: "8ff6eccefefa7506339201bc33346f92a43118d6ff7d6e71d499d8187a1c56a2",
    displayName: "Broearn",
    hostname: "www.broearn.com",
    mobile: {
      universal: "https://www.broearn.com/link/wallet/"
    }
  },
  copiosa: {
    id: "07f99a5d9849bb049d74830012b286f8b238e72b0337933ef22b84947409db80",
    displayName: "Copiosa",
    hostname: "copiosa.io",
    mobile: {
      universal: "https://copiosa.io/action/"
    }
  },
  burrito_wallet: {
    id: "8821748c25de9dbc4f72a691b25a6ddad9d7df12fa23333fd9c8b5fdc14cc819",
    displayName: "Burrito Wallet",
    hostname: "burritowallet.com",
    mobile: {
      universal: "https://burritowallet.com/wc?uri="
    }
  },
  enjin_wallet: {
    id: "bdc9433ffdaee55d31737d83b931caa1f17e30666f5b8e03eea794bac960eb4a",
    displayName: "Enjin Wallet",
    hostname: "enjin.io",
    mobile: {
      universal: "https://deeplink.wallet.enjin.io/"
    }
  },
  plasma_wallet: {
    id: "cbe13eb482c76f1fa401ff4c84d9acd0b8bc9af311ca0620a0b192fb28359b4e",
    displayName: "Plasma Wallet",
    hostname: "plasma-wallet.com",
    mobile: {
      universal: "https://plasma-wallet.com"
    }
  },
  avacus: {
    id: "94f785c0c8fb8c4f38cd9cd704416430bcaa2137f27e1468782d624bcd155a43",
    displayName: "Avacus",
    hostname: "avacus.cc",
    mobile: {
      universal: "https://avacus.app.link"
    }
  },
  bee: {
    id: "2cca8c1b0bea04ba37dee4017991d348cdb7b826804ab2bd31073254f345b715",
    displayName: "Bee",
    hostname: "www.beewallet.app",
    mobile: {
      universal: "https://beewallet.app/wc"
    }
  },
  pitaka: {
    id: "14e5d957c6eb62d3ee8fc6239703ac2d537d7e3552154836ca0beef775f630bc",
    displayName: "Pitaka",
    hostname: "pitaka.io",
    mobile: {
      universal: "https://app.pitaka.io"
    }
  },
  pltwallet: {
    id: "576c90ceaea34f29ff0104837cf2b2e23d201be43be1433feeb18d375430e1fd",
    displayName: "PLTwallet",
    hostname: "pltwallet.io",
    mobile: {
      universal: "https://pltwallet.io/"
    }
  },
  minerva: {
    id: "49bb9d698dbdf2c3d4627d66f99dd9fe90bba1eec84b143f56c64a51473c60bd",
    displayName: "Minerva",
    hostname: "minerva.digital",
    mobile: {
      universal: "https://minerva.digital"
    }
  },
  kryptogo: {
    id: "19418ecfd44963883e4d6abca1adeb2036f3b5ffb9bee0ec61f267a9641f878b",
    displayName: "KryptoGO",
    hostname: "kryptogo.com",
    mobile: {
      universal: "https://kryptogo.page.link"
    }
  },
  prema: {
    id: "5b8e33346dfb2a532748c247876db8d596734da8977905a27b947ba1e2cf465b",
    displayName: "PREMA",
    hostname: "premanft.com",
    mobile: {
      universal: "https://premanft.com"
    }
  },
  slingshot: {
    id: "d23de318f0f56038c5edb730a083216ff0cce00c1514e619ab32231cc9ec484b",
    displayName: "Slingshot",
    hostname: "slingshot.finance",
    mobile: {
      universal: "https://app.slingshot.finance"
    }
  },
  kriptonio: {
    id: "50df7da345f84e5a79aaf617df5167335a4b6751626df2e8a38f07029b3dde7b",
    displayName: "Kriptonio",
    hostname: "kriptonio.com",
    mobile: {
      universal: "https://app.kriptonio.com/mobile"
    }
  },
  timeless: {
    id: "9751385960bca290c13b443155288f892f62ee920337eda8c5a8874135daaea8",
    displayName: "Timeless",
    hostname: "timelesswallet.xyz",
    mobile: {
      universal: "https://timelesswallet.xyz"
    }
  },
  secux: {
    id: "6464873279d46030c0b6b005b33da6be5ed57a752be3ef1f857dc10eaf8028aa",
    displayName: "SecuX",
    hostname: "secuxtech.com",
    mobile: {
      universal: "https://wsweb.secuxtech.com"
    }
  },
  bitizen: {
    id: "41f20106359ff63cf732adf1f7dc1a157176c9b02fd266b50da6dcc1e9b86071",
    displayName: "Bitizen",
    hostname: "bitizen.org",
    mobile: {
      universal: "https://bitizen.org/wallet"
    }
  },
  blocto: {
    id: "14e7176536cb3706e221daaa3cfd7b88b7da8c7dfb64d1d241044164802c6bdd",
    displayName: "Blocto",
    hostname: "blocto.io",
    mobile: {
      universal: "https://blocto.app"
    }
  },
  safemoon: {
    id: "a0e04f1086aac204d4ebdd5f985c12ed226cd0006323fd8143715f9324da58d1",
    displayName: "SafeMoon",
    hostname: "safemoon.com",
    mobile: {
      universal: "https://safemoon.com/wc"
    }
  },
  okx_wallet: {
    id: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
    displayName: "OKX Wallet",
    hostname: "okx.com",
    mobile: {
      native: "okex://main"
    }
  },
  rabby_wallet: {
    id: "18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1",
    displayName: "Rabby Wallet",
    hostname: "rabby.io",
    mobile: {}
  },
  bybit_wallet: {
    id: "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f",
    displayName: "Bybit Wallet",
    hostname: "bybit.com",
    mobile: {}
  }
};
function o(e) {
  return {
    name: e.displayName || "",
    universalLink: e.mobile.universal,
    deepLink: e.mobile.native
  };
}
const c = e => e in d;
const b = e => {
  let a = d[e].mobile;
  if ("native" in a) {
    return a.native;
  }
};
function s(a, i) {
  let t = o(i);
  if (t.deepLink) {
    return u(t.deepLink, a);
  }
  if (t.universalLink) {
    return w(t.universalLink, a);
  }
  throw new e(`Unsupported wallet ${i.id}`);
}
function n(e, a) {
  let i = o(a);
  if (i.universalLink) {
    return w(i.universalLink, e);
  }
}
let m = "WALLETCONNECT_DEEPLINK_CHOICE";
function f(e) {
  let i = e.href.split("?")[0];
  a.put(m, {
    ...e,
    href: i
  });
}
function p() {
  try {
    localStorage.removeItem(m);
  } catch {}
}
function r({
  href: e,
  name: a
}) {
  try {
    localStorage.setItem(m, JSON.stringify({
      href: e,
      name: a
    }));
  } catch {}
}
function h(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}
function u(e, a) {
  if (h(e)) {
    return w(e, a);
  }
  let i = e;
  if (!i.includes("://")) {
    i = e.replaceAll("/", "").replaceAll(":", "");
    i = `${i}://`;
  }
  if (!i.endsWith("/")) {
    i = `${i}/`;
  }
  return {
    redirect: `${i}wc?uri=${encodeURIComponent(a)}`,
    href: i
  };
}
function w(e, a) {
  if (!h(e)) {
    return u(e, a);
  }
  let i = e;
  if (!i.endsWith("/")) {
    i = `${i}/`;
  }
  return {
    redirect: `${i}wc?uri=${encodeURIComponent(a)}`,
    href: i
  };
}
function y(e, a) {
  window.open(e, a, "noreferrer noopener");
}
export { d as WALLET_CONNECT_REGISTRY, s as buildTargetUrl, n as buildUniversalFallbackUrl, p as deleteWalletConnectDeepLink, u as formatNativeUrl, w as formatUniversalUrl, b as getDeepLink, t as getWalletEntryByUrl, c as isWCWalletClientType, l as normalizeWalletShortName, y as openHref, f as saveMobileLinkInfo, r as setWalletConnectDeepLink };
