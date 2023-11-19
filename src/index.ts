import fetch from "node-fetch";

import * as api from "./api/index";
import { EventCapture } from "./events";

const fetchApi: api.FetchAPI = fetch as unknown as api.FetchAPI;

export interface Schematic {
  Accounts: api.AccountsApi;
  Companies: api.CompaniesApi;
  EventCapture: EventCapture;
  Events: api.EventsApi;
  Features: api.FeaturesApi;
  Plans: api.PlansApi;
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
    Accounts: new api.AccountsApi(config),
    Companies: new api.CompaniesApi(config),
    EventCapture: new EventCapture(config),
    Events: new api.EventsApi(config),
    Features: new api.FeaturesApi(config),
    Plans: new api.PlansApi(config),
  };
}

export * from "./api/index";
