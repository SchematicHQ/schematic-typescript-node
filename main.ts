import * as api from './src/index';

interface SchematicClient {
  Customers: api.CustomersApi;
  Entitlements: api.EntitlementsApi;
  Events: api.EventsApi;
};

export function init(apiKey: string, basePath?: string): SchematicClient {
  const headers = {
    'User-Agent': 'Schematic TypeScript NodeJS Client', // TODO version
  }
  const config = new api.Configuration({apiKey, basePath, headers});

  return {
    Customers: new api.CustomersApi(config),
    Entitlements: new api.EntitlementsApi(config),
    Events: new api.EventsApi(config),
  };
}

