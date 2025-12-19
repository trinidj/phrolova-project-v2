import resonatorsIndex from "@/data/resonators/index.json";
import type { Resonator } from "@/types/resonator";

type ResonatorIndexEntry = Resonator & {
  variants?: Array<Partial<Resonator> & { id: string }>;
};

const resonators = resonatorsIndex.resonators as ResonatorIndexEntry[];

export function getResonatorBySlug(slug: string): Resonator | undefined {
  const normalizedSlug = slug.toLowerCase();

  const baseMatch = resonators.find(
    (entry) => entry.id.toLowerCase() === normalizedSlug
  );
  if (baseMatch) return baseMatch;

  for (const entry of resonators) {
    if (!entry.variants) continue;

    const variantMatch = entry.variants.find(
      (variant) => variant.id.toLowerCase() === normalizedSlug
    );

    if (variantMatch) {
      const { variants, ...base } = entry;
      return {
        ...base,
        ...variantMatch,
      };
    }
  }

  return undefined;
}
