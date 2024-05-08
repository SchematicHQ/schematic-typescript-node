import { CreateEventRequestBody, EventsApi } from "./api";
import { ConsoleLogger, Logger } from "./logger";

const DEFAULT_FLUSH_INTERVAL = 1000; // 1 second
const DEFAULT_MAX_SIZE = 10 * 1024; // 10 KB

interface EventBufferOptions {
  interval?: number;
  logger?: Logger;
  maxSize?: number;
}

class EventBuffer {
  private currentSize: number = 0;
  private events: CreateEventRequestBody[] = [];
  private eventsApi: EventsApi;
  private interval: number;
  private logger: Logger;
  private maxSize: number;
  private shutdown: boolean = false;
  private stopped: boolean = false;

  constructor(eventsApi: EventsApi, opts?: EventBufferOptions) {
    const { logger, maxSize, interval } = opts || {};
    this.eventsApi = eventsApi;
    this.interval = interval || DEFAULT_FLUSH_INTERVAL;
    this.logger = logger || new ConsoleLogger();
    this.maxSize = maxSize || DEFAULT_MAX_SIZE;

    this.startPeriodicFlush();
  }

  public async flush(): Promise<void> {
    if (this.events.length === 0) {
      return;
    }

    const events = [...this.events];
    this.events = [];
    this.currentSize = 0;

    try {
      await this.eventsApi.createEventBatch({
        createEventBatchRequestBody: { events },
      });
    } catch (err) {
      this.logger.error("Failed to flush events", err);
    }
  }

  public async push(event: CreateEventRequestBody): Promise<void> {
    if (this.stopped) {
      this.logger.error("Event buffer is stopped, not accepting new events");
      return;
    }

    const eventSize = Buffer.byteLength(JSON.stringify(event));
    if (this.currentSize + eventSize > this.maxSize) {
      await this.flush();
    }

    this.events.push(event);
    this.currentSize += eventSize;
  }

  public async stop(): Promise<void> {
    this.shutdown = true;
    this.stopped = true;
    await this.flush();
  }

  private startPeriodicFlush(): void {
    setInterval(async () => {
      if (this.shutdown) return;
      await this.flush();
    }, this.interval);
  }
}

export { EventBuffer };
