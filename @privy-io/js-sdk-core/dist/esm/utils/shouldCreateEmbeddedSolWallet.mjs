import{getAllUserEmbeddedSolanaWallets as e}from"./getAllUserEmbeddedSolanaWallets.mjs";const l=(l,t)=>!("off"===t||e(l).length>0||l.linked_accounts.filter((e=>"wallet"===e.type&&"solana"===e.chain_type)).length>0&&"all-users"!==t);export{l as shouldCreateEmbeddedSolWallet};
