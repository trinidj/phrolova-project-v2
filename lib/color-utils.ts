import { ResonatorRarity, Attribute } from "@/types/resonator";
import { DevelopmentMaterialRarity } from "@/types/development-material";

export function getResonatorRarityColor(rarity: ResonatorRarity) {
  const colors = {
    5: "rarity-5",
    4: "rarity-4"
  }

  return colors[rarity]
}

export function colorizeText(text: string): string {
  if (!text) return "";
  
  const attributes = ["Electro", "Aero", "Fusion", "Glacio", "Havoc", "Spectro"];
  let colorized = text;

  attributes.forEach((attr) => {
    const regex = new RegExp(`\\b(${attr}(?:[ \\t\\n\\r]+(?:DMG(?:[ \\t\\n\\r]+Bonus)?|Erosion|Bane|Flare|Burst|Chafe|Frazzle))?)\\b`, "gi");
    
    colorized = colorized.replace(
      regex,
      `<span style="color: var(--${attr.toLowerCase()}); font-weight: 500;">$1</span>`
    );
  });

  return colorized;
}

export function getAttributeColor(attribute: Attribute) {
  const colors = {
    Electro: "electro",
    Aero: "aero",
    Fusion: "fusion",
    Glacio: "glacio",
    Havoc: "havoc",
    Spectro: "spectro"
  }

  return colors[attribute]
}

export function getDevelopmentMaterialRarityColor(rarity: DevelopmentMaterialRarity) {
  const colors = {
    "Premium": "rarity-premium",
    "Advanced": "rarity-advanced",
    "Medium": "rarity-medium",
    "Basic": "rarity-basic",
    "Local": "rarity-local"
  }

  return colors[rarity]
}