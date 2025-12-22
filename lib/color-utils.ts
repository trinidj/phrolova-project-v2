import { ResonatorRarity, Attribute } from "@/types/resonator";
import { DevelopmentMaterialRarity } from "@/types/development_material";

export function getResonatorRarityColor(rarity: ResonatorRarity) {
  const colors = {
    5: "rarity-5",
    4: "rarity-4"
  }

  return colors[rarity]
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
    "Basic": "rarity-basic"
  }

  return colors[rarity]
}