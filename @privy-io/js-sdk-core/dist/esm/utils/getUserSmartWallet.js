const t = t => t?.linked_accounts.find(t => t.type === "smart_wallet") ?? null;
export { t as getUserSmartWallet };
