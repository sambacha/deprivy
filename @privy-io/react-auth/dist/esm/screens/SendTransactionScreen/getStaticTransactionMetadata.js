import { decodeFunctionData as r, decodeAbiParameters as s } from "viem";
import { DEPLOY_ACCOUNT_INITIALIZER_ARGS as a, DEPLOY_ACCOUNT_STUB_ABI as t } from "../../lib/deployAccount/actions/abis/deployAccount.mjs";
import { ERC20_APPROVE_ABI_STUB as n } from "../../lib/erc20/actions/abis/approve.mjs";
import { ERC20_TRANSFER_ABI_STUB as e } from "../../lib/erc20/actions/abis/transfer.mjs";
import { MINT_ABI_STUBS as i } from "../../lib/erc721/actions/abis/mint.mjs";
import { ERC721_SAFE_TRANSFER_FROM_ABI_STUB as o } from "../../lib/erc721/actions/abis/safeTransferFrom.mjs";
import { ERC721_SET_APPROVAL_FOR_ALL_ABI_STUB as c } from "../../lib/erc721/actions/abis/setApprovalForAll.mjs";
import { ERC721_TRANSFER_FROM_ABI_STUB as f } from "../../lib/erc721/actions/abis/transferFrom.mjs";
import { ERC1155_SAFE_BATCH_TRANSFER_FROM_ABI_STUB as m } from "../../lib/erc1155/actions/abis/safeBatchTransferFrom.mjs";
import { ERC1155_SAFE_TRANSFER_FROM_ABI_STUB as l } from "../../lib/erc1155/actions/abis/safeTransferFrom.mjs";
const u = (r, s) => {
  let a = p(n, r);
  if (a) {
    return {
      action: "approve",
      functionName: "approve",
      isErc20Ish: true,
      isNFTIsh: false,
      spender: a.args[0],
      amount: a.args[1]
    };
  }
  let I = p(e, r);
  if (I) {
    return {
      action: "transfer",
      functionName: "transfer",
      isErc20Ish: true,
      isNFTIsh: false,
      transferTo: I.args[0],
      amount: I.args[1]
    };
  }
  if (!s) {
    return {
      action: "transaction",
      functionName: "",
      isErc20Ish: false,
      isNFTIsh: false
    };
  }
  let h = p(t, r);
  if (h && typeof h.args[1] == "string") {
    let r = g(h.args[1]);
    if (r && r[4].encodedInitData) {
      return u(r[4].encodedInitData, s);
    }
  }
  let F = p(c, r);
  if (F) {
    return {
      action: "approve",
      functionName: "setApprovalForAll",
      isNFTIsh: true,
      isErc20Ish: false,
      operator: F.args[0],
      approved: F.args[1]
    };
  }
  let N = p(f, r);
  if (N) {
    return {
      action: "transfer",
      functionName: "transferFrom",
      isNFTIsh: true,
      isErc20Ish: false,
      transferFrom: N.args[0],
      transferTo: N.args[1],
      tokenId: N.args[2]
    };
  }
  let T = p(o, r);
  if (T) {
    return {
      action: "transfer",
      functionName: "safeTransferFrom",
      isNFTIsh: true,
      isErc20Ish: false,
      transferFrom: T.args[0],
      transferTo: T.args[1],
      tokenId: T.args[2]
    };
  }
  let b = p(l, r);
  if (b) {
    return {
      action: "transfer",
      functionName: "safeTransferFrom",
      isNFTIsh: true,
      isErc20Ish: false,
      transferFrom: b.args[0],
      transferTo: b.args[1],
      tokenId: b.args[2],
      amount: b.args[3]
    };
  }
  let d = p(m, r);
  if (d) {
    return {
      action: "batch transfer",
      functionName: "safeBatchTransferFrom",
      isNFTIsh: true,
      isErc20Ish: false,
      transferFrom: d.args[0],
      transferTo: d.args[1],
      tokenIds: d.args[2],
      amounts: d.args[3]
    };
  }
  let E = p(i, r);
  if (E) {
    return {
      action: "mint",
      functionName: E.functionName,
      isNFTIsh: true,
      isErc20Ish: false,
      args: E.args
    };
  } else {
    return {
      action: "transaction",
      isErc20Ish: false,
      isNFTIsh: false
    };
  }
};
let p = (s, a) => {
  try {
    let t = r({
      abi: s,
      data: a
    });
    return {
      functionName: t.functionName,
      args: t.args || []
    };
  } catch (s) {
    return null;
  }
};
let g = r => {
  try {
    if (typeof r == "string") {
      return s(a, `0x${r.slice(10)}`);
    }
  } catch (r) {
    return null;
  }
};
export { u as getStaticTransactionMetadata };
