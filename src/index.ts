import * as api from "./api";
import { CacheProvider, LocalCache } from "./cache";
import { ConsoleLogger, Logger } from "./logger";
import { EventBuffer } from "./events";
import { fetchApi, offlineFetchApi } from "./fetch";

export interface Schematic {
  Accounts: api.AccountsApi;
  Billing: api.BillingApi;
  Companies: api.CompaniesApi;
  Entitlements: api.EntitlementsApi;
  Events: api.EventsApi;
  Features: api.FeaturesApi;
  Plans: api.PlansApi;

  checkFlag(
    evalCtx: api.CheckFlagRequestBody | null,
    flagKey: string,
  ): Promise<boolean>;
  close(): Promise<void>;
  identify(body: api.EventBodyIdentify): Promise<void>;
  track(body: api.EventBodyTrack): Promise<void>;
  setFlagDefault(flag: string, value: boolean): void;
  setFlagDefaults(values: { [key: string]: boolean }): void;
}

export interface SchematicOptions {
  basePath?: string;
  cacheProviders?: {
    flagChecks?: CacheProvider<boolean>[];
  };
  environmentId?: string;
  eventBufferInterval?: number;
  flagDefaults?: { [key: string]: boolean };
  headers?: Record<string, string>;
  logger?: Logger;
  offline?: boolean;
}

export function init(apiKey: string, opts?: SchematicOptions): Schematic {
  let { offline = false } = opts || {};
  const { basePath, flagDefaults = {} } = opts || {};
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
    fetchApi: offline ? offlineFetchApi : fetchApi,
    headers,
    basePath,
  });

  const eventsAPI = new api.EventsApi(config);
  const featuresAPI = new api.FeaturesApi(config);
  const eventBuffer = new EventBuffer(eventsAPI, {
    interval: opts?.eventBufferInterval,
  });
  const flagCheckCacheProviders = opts?.cacheProviders?.flagChecks ?? [
    new LocalCache<boolean>(),
  ];
  const logger: Logger = opts?.logger || new ConsoleLogger();

  if (offline) {
    if (apiKey !== "") {
      logger.debug("Offline mode enabled, ignoring API key");
    }
  } else if (apiKey === "") {
    logger.warn("No API key was provided, running in offline mode");

    offline = true;
  }

  return {
    Accounts: new api.AccountsApi(config),
    Billing: new api.BillingApi(config),
    Companies: new api.CompaniesApi(config),
    Entitlements: new api.EntitlementsApi(config),
    Events: eventsAPI,
    Features: featuresAPI,
    Plans: new api.PlansApi(config),

    checkFlag: async (evalCtx: api.CheckFlagRequestBody, key: string) => {
      if (offline) {
        return getFlagDefault(key, flagDefaults);
      }

      try {
        const cacheKey = JSON.stringify({ evalCtx, key });
        for (const provider of flagCheckCacheProviders) {
          const cachedValue = await provider.get(cacheKey);
          if (cachedValue !== undefined) {
            return cachedValue;
          }
        }

        const response = await featuresAPI.checkFlag({
          key,
          checkFlagRequestBody: evalCtx,
        });
        if (!response.data.value) {
          return getFlagDefault(key, flagDefaults);
        }

        for (const provider of flagCheckCacheProviders) {
          await provider.set(cacheKey, response.data.value);
        }

        return response.data.value;
      } catch (err) {
        logger.error(`Error checking flag ${key}: ${err}`);
        return getFlagDefault(key, flagDefaults);
      }
    },
    close: async () => {
      return eventBuffer.stop();
    },
    identify: async (body: api.EventBodyIdentify) => {
      if (offline) return;

      try {
        await enqueueEvent(eventBuffer, "identify", body, logger);
      } catch (err) {
        logger.error(`Error sending identify event: ${err}`);
      }
    },
    setFlagDefault: (flag: string, value: boolean) => {
      flagDefaults[flag] = value;
    },
    setFlagDefaults: (values: { [key: string]: boolean }) => {
      Object.assign(flagDefaults, values);
    },
    track: async (body: api.EventBodyTrack) => {
      if (offline) return;

      try {
        await enqueueEvent(eventBuffer, "track", body, logger);
      } catch (err) {
        logger.error(`Error sending track event: ${err}`);
      }
    },
  };
}

function getFlagDefault(
  flag: string,
  flagDefaults: { [key: string]: boolean },
): boolean {
  return flagDefaults[flag] ?? false;
}

async function enqueueEvent(
  eventBuffer: EventBuffer,
  eventType: "identify" | "track",
  body: api.EventBodyIdentify | api.EventBodyTrack,
  logger: Logger,
) {
  try {
    eventBuffer.push({
      eventType,
      body,
      sentAt: new Date(),
    });
  } catch (err) {
    logger.error(`Error enqueueing ${eventType} event: ${err}`);
  }
}

export * from "./api/index";
