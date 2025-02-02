import { getAddress as e } from "viem/utils";
function t(e) {
  if (e) {
    return new Date(e * 1000);
  } else {
    return null;
  }
}
function i(e, t) {
  return e.slice().sort((e, t) => (e.firstVerifiedAt ?? e.verifiedAt).getTime() - (t.firstVerifiedAt ?? t.verifiedAt).getTime()).find(e => e.type === t);
}
const a = e => e?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy" && !e.imported && e.chainType === "ethereum" && e.walletIndex === 0) || null;
const r = e => (e?.linkedAccounts ?? []).filter(e => e.type === "wallet" && e.walletClientType === "privy" && !e.imported && e.chainType === "ethereum");
const s = e => r(e).reduce((e, t) => !e || e.walletIndex < t.walletIndex ? t : e, null);
const l = (e, t) => (e?.linkedAccounts ?? []).filter(e => e.type === "wallet" && e.walletClientType === "privy" && e.chainType === t);
const d = e => (e?.linkedAccounts ?? []).filter(e => e.type === "wallet" && e.walletClientType === "privy" && !e.imported && e.chainType === "solana");
const n = e => e?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy" && !e.imported && e.chainType === "solana" && e.walletIndex === 0) || null;
const f = e => d(e).reduce((e, t) => !e || e.walletIndex < t.walletIndex ? t : e, null);
const u = e => e?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy" && e.imported && e.chainType === "ethereum") || null;
const p = e => e?.linkedAccounts.find(e => e.type === "wallet" && e.imported && e.walletClientType === "privy" && e.chainType === "solana") || null;
const m = (e, t) => e?.linkedAccounts.find(e => e.type === "wallet" && e.walletClientType === "privy" && e.address === t) || null;
const c = e => a(e) ?? n(e);
const _ = e => {
  if (e.chainType === "ethereum") {
    return {
      entropyId: e.address,
      entropyIdVerifier: "ethereum-address-verifier"
    };
  }
  if (e.chainType === "solana") {
    return {
      entropyId: e.address,
      entropyIdVerifier: "solana-address-verifier"
    };
  }
  throw Error("Failed to get account entropy details");
};
const o = e => {
  let t = c(e);
  if (!t) {
    throw Error("Failed to find primary wallet");
  }
  return _(t);
};
const y = (t, i) => {
  let r = l(t, "ethereum").find(t => e(t.address) === e(i));
  return {
    signingWallet: r,
    rootWallet: r ? r.imported ? r : a(t) : undefined
  };
};
const v = (e, t) => {
  let i = l(e, "solana").find(e => e.address === t);
  if (i) {
    if (i.imported || i.walletIndex === 0) {
      return {
        signingWallet: i,
        rootWallet: i
      };
    } else {
      return {
        signingWallet: i,
        rootWallet: n(e)
      };
    }
  } else {
    return {};
  }
};
const h = (e, t) => !a(e) && !n(e) && (t === "all-users" || t === "users-without-wallets" && !(e => e.linkedAccounts.filter(e => e.type === "wallet"))(e)?.length);
function A(e) {
  if (!e) {
    return null;
  }
  let a = function (e) {
    let i = [];
    for (let a of e) {
      let e = a.type;
      switch (a.type) {
        case "wallet":
          let r = {
            address: a.address,
            type: a.type,
            imported: a.imported,
            delegated: a.delegated,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at),
            chainType: a.chain_type,
            walletClientType: a.wallet_client_type,
            connectorType: a.connector_type,
            recoveryMethod: a.recovery_method,
            walletIndex: a.wallet_index
          };
          i.push(r);
          break;
        case "smart_wallet":
          let s = {
            address: a.address,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at),
            smartWalletType: a.smart_wallet_type
          };
          i.push(s);
          break;
        case "cross_app":
          let l = {
            type: a.type,
            subject: a.subject,
            embeddedWallets: a.embedded_wallets,
            smartWallets: a.smart_wallets,
            providerApp: {
              id: a.provider_app_id
            },
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(l);
          break;
        case "email":
          let d = {
            address: a.address,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(d);
          break;
        case "phone":
          let n = {
            number: a.phoneNumber,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(n);
          break;
        case "google_oauth":
          let f = {
            subject: a.subject,
            email: a.email,
            name: a.name,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(f);
          break;
        case "spotify_oauth":
          let u = {
            subject: a.subject,
            email: a.email,
            name: a.name,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(u);
          break;
        case "instagram_oauth":
          let p = {
            subject: a.subject,
            username: a.username,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(p);
          break;
        case "twitter_oauth":
          let m = {
            subject: a.subject,
            username: a.username,
            name: a.name,
            type: a.type,
            profilePictureUrl: a.profile_picture_url,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(m);
          break;
        case "discord_oauth":
          let c = {
            subject: a.subject,
            username: a.username,
            email: a.email,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(c);
          break;
        case "github_oauth":
          let _ = {
            subject: a.subject,
            username: a.username,
            name: a.name,
            email: a.email,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(_);
          break;
        case "tiktok_oauth":
          let o = {
            subject: a.subject,
            username: a.username,
            name: a.name,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(o);
          break;
        case "linkedin_oauth":
          let y = {
            subject: a.subject,
            name: a.name,
            email: a.email,
            vanityName: a.vanity_name,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(y);
          break;
        case "apple_oauth":
          let v = {
            subject: a.subject,
            email: a.email,
            type: a.type,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(v);
          break;
        case "custom_auth":
          i.push({
            type: a.type,
            customUserId: a.custom_user_id,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          });
          break;
        case "farcaster":
          let h = {
            type: a.type,
            fid: a.fid,
            ownerAddress: a.owner_address,
            displayName: a.display_name,
            username: a.username,
            bio: a.bio,
            pfp: a.profile_picture_url,
            url: a.homepage_url,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at),
            signerPublicKey: a.signer_public_key
          };
          i.push(h);
          break;
        case "passkey":
          let A = {
            type: a.type,
            enrolledInMfa: a.enrolled_in_mfa,
            credentialId: a.credential_id,
            authenticatorName: a.authenticator_name,
            createdWithDevice: a.created_with_device,
            createdWithOs: a.created_with_os,
            createdWithBrowser: a.created_with_browser,
            verifiedAt: t(a.verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(A);
          break;
        case "telegram":
          let b = {
            type: a.type,
            telegramUserId: a.telegram_user_id,
            firstName: a.first_name,
            lastName: a.last_name,
            username: a.username,
            photoUrl: a.photo_url,
            verifiedAt: t(a.first_verified_at),
            firstVerifiedAt: t(a.first_verified_at),
            latestVerifiedAt: t(a.latest_verified_at)
          };
          i.push(b);
          break;
        default:
          console.warn(`Unrecognized account type: ${e}. Please consider upgrading the Privy SDK.`);
      }
    }
    return i;
  }(e.linked_accounts);
  let r = i(a, "wallet");
  let s = i(a, "smart_wallet");
  let l = i(a, "email");
  let d = i(a, "phone");
  let n = i(a, "google_oauth");
  let f = i(a, "twitter_oauth");
  let u = i(a, "discord_oauth");
  let p = i(a, "github_oauth");
  let m = i(a, "spotify_oauth");
  let c = i(a, "instagram_oauth");
  let _ = i(a, "tiktok_oauth");
  let o = i(a, "linkedin_oauth");
  let y = i(a, "apple_oauth");
  let v = i(a, "farcaster");
  let h = i(a, "telegram");
  let A = e.mfa_methods.map(({
    type: e,
    verified_at: i
  }) => ({
    type: e,
    verifiedAt: t(i)
  }));
  return {
    id: e.id,
    createdAt: t(e.created_at),
    linkedAccounts: a,
    email: l && {
      address: l?.address
    },
    phone: d && {
      number: d?.number
    },
    wallet: r && {
      address: r.address,
      chainType: r.chainType,
      walletClientType: r.walletClientType,
      connectorType: r.connectorType,
      recoveryMethod: r.recoveryMethod,
      imported: r.imported,
      delegated: r.delegated,
      walletIndex: r.walletIndex
    },
    smartWallet: s && {
      address: s.address,
      smartWalletType: s.smartWalletType
    },
    google: n && {
      subject: n.subject,
      email: n.email,
      name: n.name
    },
    twitter: f && {
      subject: f.subject,
      username: f.username,
      name: f.name,
      profilePictureUrl: f.profilePictureUrl
    },
    discord: u && {
      subject: u.subject,
      username: u.username,
      email: u.email
    },
    github: p && {
      subject: p.subject,
      username: p.username,
      name: p.name,
      email: p.email
    },
    spotify: m && {
      subject: m.subject,
      email: m.email,
      name: m.name
    },
    instagram: c && {
      subject: c.subject,
      username: c.username
    },
    tiktok: _ && {
      subject: _.subject,
      username: _.username,
      name: _.name
    },
    linkedin: o && {
      subject: o.subject,
      name: o.name,
      email: o.email,
      vanityName: o.vanityName
    },
    apple: y && {
      subject: y.subject,
      email: y.email
    },
    farcaster: v && {
      fid: v.fid,
      ownerAddress: v.ownerAddress,
      displayName: v.displayName,
      username: v.username,
      bio: v.bio,
      pfp: v.pfp,
      url: v.url,
      signerPublicKey: v.signerPublicKey
    },
    telegram: h && {
      telegramUserId: h.telegramUserId,
      firstName: h.firstName,
      lastName: h.lastName,
      username: h.username,
      photoUrl: h.photoUrl
    },
    delegatedWallets: [],
    mfaMethods: A.map(e => e.type),
    hasAcceptedTerms: e.has_accepted_terms ?? false,
    isGuest: e.is_guest,
    customMetadata: e.custom_metadata
  };
}
export { A as convertUserResponseToUser, l as getAllPrivyWalletsForChainType, _ as getEntropyDetailsFromAccount, o as getEntropyDetailsFromUser, y as getEthereumSigningAndRootWallet, u as getImportedPrivyEthereumWallet, p as getImportedPrivySolanaWallet, s as getLatestPrivyEthereumWallet, f as getLatestPrivySolanaWallet, r as getPrivyEthereumHDWallets, a as getPrivyEthereumWallet, c as getPrivyPrimaryWallet, d as getPrivySolanaHDWallets, n as getPrivySolanaWallet, m as getPrivyWalletWithAddress, v as getSolanaSigningAndRootWallet, h as shouldProceedtoEmbeddedWalletCreationFlow };
