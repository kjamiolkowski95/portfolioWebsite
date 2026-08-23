const cache = new Map<string, Promise<void>>();

/**
 * Loads and decodes an image before the caller continues. Resolves immediately
 * on the server and never rejects, so it can gate a route loader safely.
 */
export function preloadImage(src: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const existing = cache.get(src);
  if (existing) return existing;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.src = src;
    const done = () => resolve();
    if (img.decode) {
      img.decode().then(done, done);
    } else {
      img.onload = done;
      img.onerror = done;
    }
  });

  cache.set(src, promise);
  return promise;
}
