import fetch from "node-fetch";

import * as api from "./src/index";

const fetchApi: api.FetchAPI = fetch as unknown as api.FetchAPI;

export interface Schematic {
  Companies: api.CompaniesApi;
  Entitlements: api.EntitlementsApi;
  Events: api.EventsApi;
  Features: api.FeaturesApi;
}

export interface SchematicOptions {
  basePath?: string;
  environmentId?: string;
}

export function init(apiKey: string, opts?: SchematicOptions): Schematic {
  const headers: api.HTTPHeaders = {
    "User-Agent": "Schematic TypeScript NodeJS Client", // TODO version
  };
  if (opts?.environmentId) {
    headers["X-Schematic-Environment-Id"] = opts.environmentId;
  }

  const config = new api.Configuration({
    apiKey,
    fetchApi,
    headers,
    basePath: opts?.basePath,
  });

  return {
    Companies: new api.CompaniesApi(config),
    Entitlements: new api.EntitlementsApi(config),
    Events: new api.EventsApi(config),
    Features: new api.FeaturesApi(config),
  };
}

export * from "./src/index";
