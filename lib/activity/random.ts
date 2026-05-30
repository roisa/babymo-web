// Tiny seeded PRNG (mulberry32). Good enough for picking words and shuffling
// items deterministically so the same seed reproduces the same worksheet.

export function createRng(seed: number): () => number {
  let a = seed >>> 0;
  if (a === 0) a = 1;
  return function rand() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)]!;
}

export function shuffle<T>(arr: T[], rng: () => number): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = out[i]!;
    out[i] = out[j]!;
    out[j] = tmp;
  }
  return out;
}

export function randomSeed(): number {
  return (Math.random() * 0xffffffff) >>> 0;
}
