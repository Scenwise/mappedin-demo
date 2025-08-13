// Simple 1d perlin noise function using a string id as seed
export function perlinNoise1D(seed: string, x: number): number {
  const hash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  const noise = Math.sin(hash(seed) + x * 0.1) * 0.5 + 0.5; // Normalize to [0, 1]
  return noise;
}