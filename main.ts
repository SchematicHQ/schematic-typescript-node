import fetch from 'node-fetch';

import * as api from './src/index';

const fetchApi: api.FetchAPI = fetch as unknown as api.FetchAPI;

export interface Schematic {
  Companies: api.CompaniesApi;
  Entitlements: api.EntitlementsApi;
  Events: api.EventsApi;
}

export function init(apiKey: string, basePath?: string): Schematic {
  const headers = {
    'User-Agent': 'Schematic TypeScript NodeJS Client', // TODO version
  };
  const config = new api.Configuration({ apiKey, basePath, headers, fetchApi });

  return {
    Companies: new api.CompaniesApi(config),
    Entitlements: new api.EntitlementsApi(config),
    Events: new api.EventsApi(config),
  };
}

export * from './src/index';
