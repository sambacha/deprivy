import{Brave as o}from"../../svg/brave-browser-icon.mjs";import{Bybit as s}from"../../svg/bybit.mjs";import{CoinbaseWallet as n}from"../../svg/coinbase-wallet.mjs";import{CryptoCom as i}from"../../svg/cryptocom.mjs";import{Metamask as m}from"../../svg/metamask.mjs";import{Phantom as a}from"../../svg/phantom.mjs";import{Rabby as t}from"../../svg/rabby.mjs";import{Rainbow as e}from"../../svg/rainbow.mjs";import{Safe as r}from"../../svg/safe.mjs";import{Uniswap as c}from"../../svg/uniswap.mjs";import{UniversalProfile as l}from"../../svg/universal-profile.mjs";import{WalletConnect as p}from"../../svg/wallet-connect.mjs";import{Zerion as j}from"../../svg/zerion.mjs";import"react/jsx-runtime";import"../../hooks/modal-context.mjs";import"react";import"../../components/PrefetchedImage.mjs";import"../../configuration/context.mjs";import"../../config.mjs";import"../../configuration/defaultClientConfig.mjs";import"../../constants.mjs";import"../../configuration/login-methods.mjs";import"../../configuration/wallets.mjs";import"../../connectors/chains/index.mjs";import"../../connectors/chains/arbitrum.mjs";import"../../connectors/chains/arbitrumSepolia.mjs";import"../../connectors/chains/avalanche.mjs";import"../../connectors/chains/avalancheFuji.mjs";import"../../connectors/chains/base.mjs";import"../../connectors/chains/baseSepolia.mjs";import"../../connectors/chains/berachainArtio.mjs";import"../../connectors/chains/celo.mjs";import"../../connectors/chains/celoAlfajores.mjs";import"../../connectors/chains/filecoin.mjs";import"../../connectors/chains/filecoinCalibration.mjs";import"../../connectors/chains/garnetHolesky.mjs";import"../../connectors/chains/holesky.mjs";import"../../connectors/chains/linea.mjs";import"../../connectors/chains/lineaTestnet.mjs";import"../../connectors/chains/lukso.mjs";import"../../connectors/chains/mainnet.mjs";import"../../connectors/chains/optimism.mjs";import"../../connectors/chains/optimismSepolia.mjs";import"../../connectors/chains/polygon.mjs";import"../../connectors/chains/polygonAmoy.mjs";import"../../connectors/chains/redstone.mjs";import"../../connectors/chains/sepolia.mjs";import"../../connectors/chains/zora.mjs";import"../../connectors/chains/zoraSepolia.mjs";import"../../connectors/chains/zoraTestnet.mjs";import"../../connectors/chains/utils.mjs";import"../solana/index.mjs";import"../../theme.mjs";import"tinycolor2";import"../cybr53.mjs";import"../../screens/index.mjs";import"../../hooks/index.mjs";const A={coinbase_wallet:{logo:n,displayName:"Coinbase Wallet",rdns:"com.coinbase.wallet"},coinbase_smart_wallet:{logo:n,displayName:"Coinbase Smart Wallet",rdns:"com.coinbase.wallet"},metamask:{logo:m,displayName:"MetaMask",rdns:"io.metamask"},phantom:{logo:a,displayName:"Phantom"},rainbow:{logo:e,displayName:"Rainbow",rdns:"me.rainbow"},wallet_connect:{logo:p,displayName:"WalletConnect"},zerion:{logo:j,displayName:"Zerion",rdns:"io.zerion.wallet"},brave_wallet:{logo:o,displayName:"Brave Wallet",rdns:"com.brave.wallet"},cryptocom:{logo:i,displayName:"Crypto.com Onchain",rdns:"com.crypto.wallet"},uniswap:{logo:c,displayName:"Uniswap Wallet",rdns:"org.uniswap.app"},okx_wallet:{displayName:"OKX Wallet",rdns:"com.okex.wallet",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII="},rabby_wallet:{logo:t,displayName:"Rabby Wallet",rdns:"io.rabby.wallet"},safe:{displayName:"Safe",logo:r},universal_profile:{displayName:"Universal Profile",logo:l},bybit_wallet:{displayName:"Bybit Wallet",logo:s}},g=(o,s,n)=>A[o]?.displayName?"coinbase_wallet"===o?A[n].displayName:A[o].displayName:"wallet_connect_v2"===s&&"wallet_connect"===o?"Wallet Connect":void 0,h=(o,s,n)=>A[o]?.logo?"coinbase_wallet"===o?A[n].logo:A[o].logo:"wallet_connect_v2"===s&&"wallet_connect"===o?p:void 0;export{A as WALLET_UI_MAP,g as toDisplayName,h as toLogo};
