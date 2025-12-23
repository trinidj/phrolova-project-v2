import { DevelopmentMaterial } from "./development-material";
import { SequenceNode } from "./resonance-chain";
import { Forte } from "./forte";

export type Attribute = "Fusion" | "Aero" | "Glacio" | "Havoc" | "Electro" | "Spectro";
export type WeaponType = "Pistols" | "Sword" | "Broadblade" | "Rectifier" | "Gauntlets";
export type ResonatorRarity = 4 | 5;

export interface CombatRole {
  name: string;
  description: string;
  icon: string;
}

export interface StatRange {
  min: number;
  max: number;
}

export interface AscensionMaterial {
  item: DevelopmentMaterial;
  amount: number;
}

export interface AscensionMaterials {
  materials: AscensionMaterial[];
}

export interface ForteAscensionMaterials {
  materials: AscensionMaterial[];
}

export interface ResonatorAssets {
  icon: string;
  sprite: string;
  splashArt: string;
  attribute: string;
  weaponType: string;
}

export interface Resonator {
  id: string;
  name: string;
  rarity: ResonatorRarity;
  attribute: Attribute;
  weaponType: WeaponType;
  isNew?: boolean;
  description: string;
  combatRoles?: string[];
  stats: {
    hp: StatRange;
    atk: StatRange;
    def: StatRange;
  };
  nation: string;
  versionRelease: number,
  voiceActors: {
    english: string;
    chinese: string;
    japanese: string;
    korean: string;
  }
  forte?: {
    normalAttack?: Forte;
    resonanceSkill?: Forte;
    resonanceLiberation?: Forte;
    forteCircuit?: Forte;
    introSkill?: Forte;
    outroSkill?: Forte;
    inheritSkill1?: Forte;
    inheritSkill2?: Forte;
  };
  resonanceChain?: SequenceNode[];
  ascension?: AscensionMaterials[];
  variants?: Array<Partial<Resonator> & { id: string }>;
}
