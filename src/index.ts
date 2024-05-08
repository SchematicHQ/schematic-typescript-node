import * as api from "./api";
import { CacheProvider, LocalCache } from "./cache";
import { ConsoleLogger, Logger } from "./logger";
import { EventBuffer } from "./events";
import { fetchApi, offlineFetchApi } from "./fetch";

export interface SchematicOptions {
  apiKey: string;
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

export class Schematic {
  public Accounts: api.AccountsApi;
  public Billing: api.BillingApi;
  public Companies: api.CompaniesApi;
  public Entitlements: api.EntitlementsApi;
  public Events: api.EventsApi;
  public Features: api.FeaturesApi;
  public Plans: api.PlansApi;

  private flagDefaults: { [key: string]: boolean };
  private flagCheckCacheProviders: CacheProvider<boolean>[];
  private logger: Logger;
  private offline: boolean;
  private eventBuffer: EventBuffer;

  constructor(apiKey: string, opts?: SchematicOptions) {
    const { offline = false } = opts ?? {};
    const { basePath, flagDefaults = {} } = opts ?? {};
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

    this.eventBuffer = new EventBuffer(new api.EventsApi(config), {
      interval: opts?.eventBufferInterval,
    });

    this.flagCheckCacheProviders = opts?.cacheProviders?.flagChecks ?? [
      new LocalCache<boolean>(),
    ];
    this.logger = opts?.logger || new ConsoleLogger();

    if (offline) {
      if (apiKey !== "") {
        this.logger.debug("Offline mode enabled, ignoring API key");
      }
    } else if (apiKey === "") {
      this.logger.warn("No API key was provided, running in offline mode");
      this.offline = true;
    }

    this.offline = offline;
    this.flagDefaults = flagDefaults;

    this.Accounts = new api.AccountsApi(config);
    this.Billing = new api.BillingApi(config);
    this.Companies = new api.CompaniesApi(config);
    this.Entitlements = new api.EntitlementsApi(config);
    this.Events = new api.EventsApi(config);
    this.Features = new api.FeaturesApi(config);
    this.Plans = new api.PlansApi(config);
  }

  async checkFlag(
    evalCtx: api.CheckFlagRequestBody,
    key: string,
  ): Promise<boolean> {
    if (this.offline) {
      return this.getFlagDefault(key);
    }

    try {
      const cacheKey = JSON.stringify({ evalCtx, key });
      for (const provider of this.flagCheckCacheProviders) {
        const cachedValue = await provider.get(cacheKey);
        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }

      const response = await this.Features.checkFlag({
        key,
        checkFlagRequestBody: evalCtx,
      });
      if (!response.data.value) {
        return this.getFlagDefault(key);
      }

      for (const provider of this.flagCheckCacheProviders) {
        await provider.set(cacheKey, response.data.value);
      }

      return response.data.value;
    } catch (err) {
      this.logger.error(`Error checking flag ${key}: ${err}`);
      return this.getFlagDefault(key);
    }
  }

  async close(): Promise<void> {
    return this.eventBuffer.stop();
  }

  async identify(body: api.EventBodyIdentify): Promise<void> {
    if (this.offline) return;

    try {
      await this.enqueueEvent("identify", body);
    } catch (err) {
      this.logger.error(`Error sending identify event: ${err}`);
    }
  }

  async track(body: api.EventBodyTrack): Promise<void> {
    if (this.offline) return;

    try {
      await this.enqueueEvent("track", body);
    } catch (err) {
      this.logger.error(`Error sending track event: ${err}`);
    }
  }

  setFlagDefault(flag: string, value: boolean): void {
    this.flagDefaults[flag] = value;
  }

  setFlagDefaults(values: { [key: string]: boolean }): void {
    Object.assign(this.flagDefaults, values);
  }

  private getFlagDefault(flag: string): boolean {
    return this.flagDefaults[flag] ?? false;
  }

  private async enqueueEvent(
    eventType: "identify" | "track",
    body: api.EventBodyIdentify | api.EventBodyTrack,
  ): Promise<void> {
    try {
      this.eventBuffer.push({
        eventType,
        body,
        sentAt: new Date(),
      });
    } catch (err) {
      this.logger.error(`Error enqueueing ${eventType} event: ${err}`);
    }
  }
}

// for backwards compatibility
export function init(apiKey: string, opts?: SchematicOptions): Schematic {
  return new Schematic(apiKey, opts);
}

export * from "./api/index";
