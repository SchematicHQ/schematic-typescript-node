import { setTimeout, clearTimeout } from "timers";

interface CacheProvider<T> {
  get(key: string): Promise<T | undefined>;
  set(key: string, value: T, ttlOverride?: number): Promise<void>;
}

type CacheItem<T> = {
  value: T;
  accessCounter: number;
  size: number;
  expiration: number;
  timeoutId?: ReturnType<typeof setTimeout>;
};

export interface CacheOptions {
  size?: number;
  ttl?: number;
}

class LocalCache<T> implements CacheProvider<T> {
  private cache: Map<string, CacheItem<T>>;
  private maxSize: number;
  private currentSize: number = 0;
  private accessCounter: number = 0;
  private defaultTTL: number;

  constructor({ size = 10 * 1024, ttl = 5000 }: CacheOptions = {}) {
    this.cache = new Map();
    this.maxSize = size;
    this.defaultTTL = ttl;
  }

  async get(key: string): Promise<T | undefined> {
    const item = this.cache.get(key);
    if (!item) return undefined;

    // Check if the item has expired
    if (item.expiration <= Date.now()) {
      this.evictItem(key, item);
      return undefined;
    }

    // Update the access counter for LRU eviction
    this.accessCounter++;
    item.accessCounter = this.accessCounter;
    this.cache.set(key, item);

    return item.value;
  }

  async set(key: string, value: T, ttlOverride?: number): Promise<void> {
    // If maxSize is 0, caching is disabled
    if (this.maxSize === 0) return;

    const ttl = ttlOverride ?? this.defaultTTL;
    const size = this.getObjectSize(value);

    // Check if the key already exists in the cache
    const existingItem = this.cache.get(key);
    if (existingItem) {
      this.evictItem(key, existingItem);
    }

    // Evict expired items
    this.evictExpiredItems();

    // Evict records if the cache size exceeds the max size
    this.evictLRUItems(size);

    // Add the new item to the cache
    this.accessCounter++;
    const newItem: CacheItem<T> = {
      value,
      accessCounter: this.accessCounter,
      size,
      expiration: Date.now() + ttl,
      timeoutId: setTimeout(() => this.evictItem(key, newItem), ttl),
    };
    this.cache.set(key, newItem);
    this.currentSize += size;
  }

  resetCache(): void {
    this.cache.forEach((item) => {
      if (item.timeoutId) {
        clearTimeout(item.timeoutId);
      }
    });
    this.cache.clear();
    this.currentSize = 0;
    this.accessCounter = 0;
  }

  private getObjectSize(value: T): number {
    const clone = structuredClone(value);
    return new Blob([JSON.stringify(clone)]).size;
  }

  private evictItem(key: string, item: CacheItem<T>): void {
    if (item.timeoutId) {
      clearTimeout(item.timeoutId);
    }
    this.cache.delete(key);
    this.currentSize -= item.size;
  }

  private evictExpiredItems(): void {
    this.cache.forEach((item, key) => {
      if (item.expiration <= Date.now()) {
        this.evictItem(key, item);
      }
    });
  }

  private evictLRUItems(size: number): void {
    while (this.currentSize + size > this.maxSize) {
      let oldestKey: string | undefined;
      let oldestAccessCounter = Number.MAX_SAFE_INTEGER;

      this.cache.forEach((item, k) => {
        if (item.accessCounter < oldestAccessCounter) {
          oldestKey = k;
          oldestAccessCounter = item.accessCounter;
        }
      });

      if (oldestKey) {
        this.evictItem(oldestKey, this.cache.get(oldestKey)!);
      }
    }
  }
}

export { CacheProvider, LocalCache };
