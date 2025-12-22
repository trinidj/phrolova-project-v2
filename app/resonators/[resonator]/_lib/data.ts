import fs from "fs";
import path from "path";
import resonatorsIndex from "@/data/resonators/index.json";
import developmentMaterialsIndex from "@/data/development_materials.json";
import type { AscensionMaterials, Resonator } from "@/types/resonator";
import type { DevelopmentMaterialRarity } from "@/types/development_material";
import { marked } from "marked";

type ResonatorIndexEntry = Resonator & {
  variants?: Array<Partial<Resonator> & { id: string }>;
};

const resonators = resonatorsIndex.resonators as ResonatorIndexEntry[];
const developmentMaterials = developmentMaterialsIndex.development_materials;

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

export function getResonatorAscension(resonator: string): AscensionMaterials[] {
  try {
    const folderName = resonator.toLowerCase().replace(/\s+/g, '-');
    const filePath = path.join(process.cwd(), 'data', 'resonators', folderName, 'ascension.json');

    if (!fs.existsSync(filePath)) {
      return [];
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const rawMaterials: { level: number; materials: { name: string; amount: number; type?: string }[] }[] = JSON.parse(fileContent);

    const materials: AscensionMaterials[] = rawMaterials.map(phase => ({
      materials: phase.materials.map(m => {
        const materialInfo = developmentMaterials.find(dm => dm.name === m.name);
        // Default to Basic if not found in the registry, or if it's Shell Credits
        let rarity: DevelopmentMaterialRarity = "Basic";
        
        if (materialInfo) {
          rarity = materialInfo.rarity as DevelopmentMaterialRarity;
        } else if (m.name === "Shell Credits") {
             // Shell credits usually don't have a specific rarity in this context or are treated specially, 
             // but if we want a color, maybe Basic or a specific currency color is fine. 
             // Leaving as Basic for now as per previous logic default.
             rarity = "Basic";
        }

        return {
          item: {
            name: m.name,
            rarity: rarity,
            type: m.type
          },
          amount: m.amount
        };
      })
    }));

    return materials;
  } catch (error) {
    console.error(`Error loading materials for ${resonator}:`, error);
    return [];
  }
}

export function parseTalentsMarkdown(resonator: string): string {
  try {
    const folderName = resonator.toLowerCase().replace(/\s+/g, '-')
    const filePath = path.join(process.cwd(), 'data', 'resonators', folderName, 'talents.md')

    if (!fs.existsSync(filePath)) {
      return "";
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')

    return marked.parse(fileContent) as string
    
  } catch (error) {
    return ""
  }
}