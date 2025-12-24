import type { 
  Weapon,
  WeaponAssets,
  WeaponType,
} from "@/types/weapon";

export function getWeaponAssets(weapon: Weapon): WeaponAssets {
  const weaponIconMap: Record<WeaponType, string> = {
    Pistols: "Pistols_Icon.png",
    Sword: "Sword_Icon.png",
    Broadblade: "Broadblade_Icon.png",
    Rectifier: "Rectifier_Icon.png",
    Gauntlets: "Gauntlets_Icon.png",
  };

  const fileName = weapon.id.toLowerCase().replace(/ /g, "_");

  return {
    icon: `/assets/weapons/${weapon.rarity}_star/${fileName}.png`,
    weaponType: `/assets/weapons/${weaponIconMap[weapon.weaponType]}`,
  };
}

const WEAPON_TYPE_ICON_MAP: Record<WeaponType, string> = {
  Broadblade: "/assets/weapons/Broadblade_Icon.png",
  Gauntlets: "/assets/weapons/Gauntlets_Icon.png",
  Pistols: "/assets/weapons/Pistols_Icon.png",
  Rectifier: "/assets/weapons/Rectifier_Icon.png",
  Sword: "/assets/weapons/Sword_Icon.png"
}

export function getWeaponTypeIcon(weaponType: WeaponType) {
  return WEAPON_TYPE_ICON_MAP[weaponType]
}

const STAT_ICON_MAP: Record<string, string> = {
  atk: "/assets/stats/stat_atk.png",
  hp: "/assets/stats/stat_hp.png",
  def: "/assets/stats/stat_def.png",
  crit_rate: "/assets/stats/stat_cr.png",
  crit_dmg: "/assets/stats/stat_cd.png",
  energy_regen: "/assets/stats/stat_energy.png"
}

/**
 * Returns the stat icon path for a given secondary stat name.
 * Accepts several common variants (e.g. "crit rate", "crit_rate", "CR", "atk").
 */
export function getStatIcon(statName?: string) {
  if (!statName) return STAT_ICON_MAP.atk

  const key = statName.toLowerCase().replace(/[^a-z0-9]/g, "")

  // Core stats
  if (key.includes("atk") || key === "attack") return STAT_ICON_MAP.atk
  if (key === "hp" || key.includes("hp")) return STAT_ICON_MAP.hp
  if (key.includes("def")) return STAT_ICON_MAP.def

  // Crit Rate / Crit DMG
  if (key.includes("critrate") || key === "cr" || (key.includes("crit") && key.includes("rate"))) return STAT_ICON_MAP.crit_rate
  if (key.includes("critdmg") || key === "cd" || (key.includes("crit") && (key.includes("dmg") || key.includes("damage")))) return STAT_ICON_MAP.crit_dmg

  // Energy (recharge/regeneration)
  if (key.includes("energy") || key.includes("er") || key.includes("energyr")) return STAT_ICON_MAP.energy_regen

  // Fallback
  return STAT_ICON_MAP.atk
}