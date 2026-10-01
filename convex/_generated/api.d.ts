/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth from "../auth.js";
import type * as emailVerification from "../emailVerification.js";
import type * as gratisSeedData from "../gratisSeedData.js";
import type * as http from "../http.js";
import type * as legalConsent from "../legalConsent.js";
import type * as localCatalogSeedData from "../localCatalogSeedData.js";
import type * as loops from "../loops.js";
import type * as products from "../products.js";
import type * as seed from "../seed.js";
import type * as signupProof from "../signupProof.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  emailVerification: typeof emailVerification;
  gratisSeedData: typeof gratisSeedData;
  http: typeof http;
  legalConsent: typeof legalConsent;
  localCatalogSeedData: typeof localCatalogSeedData;
  loops: typeof loops;
  products: typeof products;
  seed: typeof seed;
  signupProof: typeof signupProof;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
