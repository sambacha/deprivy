import { z as o } from "zod";
import { PrivyErrorCode as r } from "../constants/error-codes.mjs";
const t = o.object({
  error: o.string(),
  cause: o.string().optional(),
  code: o.nativeEnum(r).optional()
});
export { t as APIError };
