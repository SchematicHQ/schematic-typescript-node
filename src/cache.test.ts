/* eslint @typescript-eslint/no-explicit-any: 0 */

import { LocalCache } from "./cache";

jest.useFakeTimers();

describe("LocalCache", () => {
  let cache: LocalCache<any>;

  beforeEach(() => {
    cache = new LocalCache(100, 5000); // maxSize: 100 bytes, defaultTTL: 5 seconds
  });

  afterEach(() => {
    cache.resetCache();
    jest.clearAllTimers();
  });

  it("should store and retrieve a value", async () => {
    await cache.set("key1", { data: "value1" });
    const value = await cache.get("key1");
    expect(value).toEqual({ data: "value1" });
  });

  it("should return undefined for expired items", async () => {
    await cache.set("key1", { data: "value1" }, 1000); // TTL: 1 second
    jest.advanceTimersByTime(1001); // Advance time by 1 second and 1 millisecond
    const value = await cache.get("key1");
    expect(value).toBeUndefined();
  });

  it("should evict least recently used item when maxSize is exceeded", async () => {
    const smallCache = new LocalCache(60, 5000); // Small maxSize to force eviction

    await smallCache.set("key1", { data: "value1" });
    await smallCache.set("key2", { data: "value2" });
    await smallCache.set("key3", { data: "value3" });

    // Access key1 and key3 to make key2 the least recently used
    await smallCache.get("key1");
    await smallCache.get("key3");

    // Add another item to exceed maxSize
    await smallCache.set("key4", { data: "value4" });

    // Log values after eviction
    const value1 = await smallCache.get("key1");
    const value2 = await smallCache.get("key2");
    const value3 = await smallCache.get("key3");
    const value4 = await smallCache.get("key4");

    expect(value1).toEqual({ data: "value1" });
    expect(value2).toBeUndefined(); // key2 should be evicted
    expect(value3).toEqual({ data: "value3" });
    expect(value4).toEqual({ data: "value4" });
    smallCache.resetCache();
  });

  it("should update the access counter on get", async () => {
    await cache.set("key1", { data: "value1" });

    const initialItem = (cache as any).cache.get("key1");
    const initialAccessCounter = initialItem.accessCounter;

    await cache.get("key1");

    const item = (cache as any).cache.get("key1");
    expect(item.accessCounter).toBe(initialAccessCounter + 1); // Ensure the counter is incremented by 1
  });

  it("should remove the correct size when item is evicted", async () => {
    await cache.set("key1", { data: "value1" });

    const item = (cache as any).cache.get("key1");
    const initialSize = (cache as any).currentSize;

    cache["evictItem"]("key1", item);

    const currentSize = (cache as any).currentSize;
    expect(currentSize).toBe(initialSize - item.size);
  });

  it("should not store items if maxSize is 0", async () => {
    const zeroSizeCache = new LocalCache(0, 5000);
    await zeroSizeCache.set("key1", { data: "value1" });
    const value = await zeroSizeCache.get("key1");
    expect(value).toBeUndefined();
    zeroSizeCache.resetCache();
  });
});
