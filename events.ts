import zlib from "zlib";
import querystring from "querystring";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";

import { Configuration } from "./src/index";

type EventType = "identify" | "track";

type EventBodyCompany = {
  keys: Record<string, string>;
  name?: string;
  traits: Record<string, any>;
};

type EventBodyIdentify = {
  company?: EventBodyCompany;
  keys: Record<string, string>;
  name?: string;
  traits: Record<string, any>;
};

type EventBodyTrack = {
  event: string;
  traits: Record<string, any>;
  company?: Record<string, string>;
  user?: Record<string, string>;
};

type EventBody = EventBodyIdentify | EventBodyTrack;

export class EventCapture {
  private apiKey: string;
  private basePath: string;

  constructor(config: Configuration) {
    const apiKey = config.apiKey && config.apiKey("X-Schematic-Api-Key");
    if (!apiKey) throw new Error("Missing API key");

    this.apiKey = apiKey;
    this.basePath = config.basePath;
  }

  private async sendEvent(
    eventType: EventType,
    eventBody: EventBody,
  ): Promise<void> {
    const event = {
      api_key: this.apiKey,
      body: eventBody,
      sent_at: new Date().toISOString(),
      tracker_event_id: uuidv4(),
      tracker_user_id: uuidv4(),
      type: eventType,
    };
    const payload = JSON.stringify(event);

    const compressedData = await new Promise<Buffer>((resolve, reject) => {
      zlib.deflate(payload, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const base64EncodedData = compressedData.toString("base64");
    const escapedData = querystring.escape(base64EncodedData);
    const requestUrl = `${this.basePath}/e?p=${escapedData}`;

    await fetch(requestUrl);
  }

  identify(body: EventBodyIdentify): void {
    this.sendEvent("identify", body);
  }

  track(body: EventBodyTrack): void {
    this.sendEvent("track", body);
  }
}
