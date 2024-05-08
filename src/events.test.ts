/* eslint @typescript-eslint/no-explicit-any: 0 */

import { EventBuffer } from "./events";
import { CreateEventRequestBody, EventsApi } from "./api";
import { Logger } from "./logger";

jest.useFakeTimers();

describe("EventBuffer", () => {
  let mockEventsApi: jest.Mocked<EventsApi>;
  let mockLogger: jest.Mocked<Logger>;

  beforeEach(() => {
    mockEventsApi = {
      createEventBatch: jest.fn().mockResolvedValue(undefined),
    } as any;

    mockLogger = {
      error: jest.fn(),
      log: jest.fn(),
    } as any;
  });

  it("should push and flush events correctly", async () => {
    const event1: CreateEventRequestBody = {
      body: {
        company: { id: "test-company" },
        event: "test-event",
        user: { id: "test-user" },
      },
      eventType: "track",
      sentAt: new Date(),
    };
    const event2: CreateEventRequestBody = {
      body: {
        company: { id: "test-company" },
        event: "test-event-2",
        user: { id: "test-user" },
      },
      eventType: "track",
      sentAt: new Date(),
    };
    const eventSize = Buffer.byteLength(JSON.stringify(event1));
    const buffer = new EventBuffer(mockEventsApi, {
      logger: mockLogger,
      maxSize: eventSize - 1,
      interval: 1000,
    });

    await buffer.push(event1);

    expect(mockEventsApi.createEventBatch).not.toHaveBeenCalled();

    // Force first flush by exceeding max size
    await buffer.push(event2);

    // Wait for the next periodic flush
    jest.advanceTimersByTime(1001);
    expect(mockEventsApi.createEventBatch).toHaveBeenCalledTimes(2);
    expect(mockEventsApi.createEventBatch).toHaveBeenCalledWith({
      createEventBatchRequestBody: { events: [event1] },
    });
    expect(mockEventsApi.createEventBatch).toHaveBeenCalledWith({
      createEventBatchRequestBody: { events: [event2] },
    });
  });

  it("should log error if flushing fails", async () => {
    mockEventsApi.createEventBatch.mockRejectedValue(new Error("Flush error"));
    const buffer = new EventBuffer(mockEventsApi, {
      logger: mockLogger,
      interval: 1000,
    });

    const event: CreateEventRequestBody = {
      body: {
        company: { id: "test-company" },
        event: "test-event",
        user: { id: "test-user" },
      },
      eventType: "track",
      sentAt: new Date(),
    };
    await buffer.push(event);
    await buffer.push(event);

    // Manually trigger flush
    await buffer.flush();

    expect(mockLogger.error).toHaveBeenCalledWith(
      "Failed to flush events",
      expect.any(Error),
    );
  });

  it("should stop accepting events after stop is called", async () => {
    const buffer = new EventBuffer(mockEventsApi, {
      interval: 1000,
      logger: mockLogger,
    });

    const event: CreateEventRequestBody = {
      body: {
        company: { id: "test-company" },
        event: "test-event",
        user: { id: "test-user" },
      },
      eventType: "track",
      sentAt: new Date(),
    };
    await buffer.push(event);

    await buffer.stop();

    await buffer.push(event);

    expect(mockLogger.error).toHaveBeenCalledWith(
      "Event buffer is stopped, not accepting new events",
    );
    expect(mockEventsApi.createEventBatch).toHaveBeenCalledTimes(1);
  });

  it("should periodically flush events", async () => {
    const buffer = new EventBuffer(mockEventsApi, {
      interval: 1000,
      logger: mockLogger,
    });

    const event: CreateEventRequestBody = {
      body: {
        company: { id: "test-company" },
        event: "test-event",
        user: { id: "test-user" },
      },
      eventType: "track",
      sentAt: new Date(),
    };
    await buffer.push(event);

    jest.advanceTimersByTime(1000);

    expect(mockEventsApi.createEventBatch).toHaveBeenCalledTimes(1);
    expect(mockEventsApi.createEventBatch).toHaveBeenCalledWith({
      createEventBatchRequestBody: { events: [event] },
    });
  });

  it("should not flush events if shutdown", async () => {
    const buffer = new EventBuffer(mockEventsApi, {
      interval: 1000,
      logger: mockLogger,
    });

    const event: CreateEventRequestBody = {
      body: {
        company: { id: "test-company" },
        event: "test-event",
        user: { id: "test-user" },
      },
      eventType: "track",
      sentAt: new Date(),
    };
    await buffer.push(event);

    buffer["shutdown"] = true;

    jest.advanceTimersByTime(1000);

    expect(mockEventsApi.createEventBatch).not.toHaveBeenCalled();
  });
});
