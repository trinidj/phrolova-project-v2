export type DevelopmentMaterialRarity = "Premium" | "Advanced" | "Medium" | "Basic"

export interface DevelopmentMaterial {
  name: string;
  rarity: DevelopmentMaterialRarity;
  type?: string;
}