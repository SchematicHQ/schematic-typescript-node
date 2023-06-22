import * as api from './src/index';

export function init(apiKey: string, basePath?: string): any {
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

