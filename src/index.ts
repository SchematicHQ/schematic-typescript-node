import fetch from "node-fetch";

import * as api from "./api/index";

const fetchApi: api.FetchAPI = fetch as unknown as api.FetchAPI;

export interface Schematic {
  Accounts: api.AccountsApi;
  Companies: api.CompaniesApi;
  Entitlements: api.EntitlementsApi;
  Events: api.EventsApi;
  Features: api.FeaturesApi;
  Plans: api.PlansApi;
  Billing: api.BillingApi;
}

export interface SchematicOptions {
  basePath?: string;
  environmentId?: string;
  headers?: Record<string, string>;
}

export function init(apiKey: string, opts?: SchematicOptions): Schematic {
  const version = process.env.SCHEMATIC_CLIENT_VERSION || "unknown";
  const headers: api.HTTPHeaders = {
    "User-Agent": `schematic-typescript-node@v${version}`,
  };
  if (opts?.environmentId) {
    headers["X-Schematic-Environment-Id"] = opts.environmentId;
  }
  if (opts?.headers) {
    Object.assign(headers, opts.headers);
  }

  const config = new api.Configuration({
    apiKey,
    fetchApi,
    headers,
    basePath: opts?.basePath,
  });

  return {
    Accounts: new api.AccountsApi(config),
    Companies: new api.CompaniesApi(config),
    Entitlements: new api.EntitlementsApi(config),
    Events: new api.EventsApi(config),
    Features: new api.FeaturesApi(config),
    Plans: new api.PlansApi(config),
    Billing: new api.BillingApi(config),
  };
}

export * from "./api/index";
