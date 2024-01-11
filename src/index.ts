import fetch from "node-fetch";

import * as api from "./api/index";

const fetchApi: api.FetchAPI = fetch as unknown as api.FetchAPI;

export interface SchematicOptions {
  basePath?: string;
  environmentId?: string;
}

export function init(apiKey: string, opts?: SchematicOptions): api.SchematicApi {
  const headers: api.HTTPHeaders = {
    "User-Agent": "Schematic NodeJS Client",
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

  return new api.SchematicApi(config);
}

export * from "./api/index";
