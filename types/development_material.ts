export type Rarity = "Premium" | "Advanced" | "Medium" | "Basic"

export interface DevelopmentMaterial {
  name: string;
  rarity: Rarity;
  type?: string;
}