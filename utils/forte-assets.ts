import { Resonator } from "@/types/resonator"
import { ForteAssets } from "@/types/forte"
import { WeaponType } from "@/types/resonator";

const TUNE_BREAK_ICON_MAP: Record<WeaponType, string> = {
  Pistols: "/assets/tune_break/pistols_tune_break.png",
  Sword: "/assets/tune_break/sword_tune_break.png",
  Broadblade: "/assets/tune_break/broadblade_tune_break.png",
  Rectifier: "/assets/tune_break/rectifier_tune_break.png",
  Gauntlets: "/assets/tune_break/gauntlets_tune_break.png",
};

export function getTuneBreakIcon(weaponType: WeaponType): string {
  return TUNE_BREAK_ICON_MAP[weaponType];
}

export function getForteAssets(resonator: Resonator): ForteAssets {
  const assetFolderName = resonator.id.startsWith("rover") ? "Rover" : resonator.name
  const roverVariantPath = resonator.id.startsWith("rover") ? `/${resonator.attribute}` : ""
  const basePath = `/assets/resonators/${resonator.rarity}_star/${assetFolderName}${roverVariantPath}`

  return {
    normalAttack: `${basePath}/normal_attack.png`,
    resonanceSkill: `${basePath}/resonance_skill.png`,
    resonanceLiberation: `${basePath}/resonance_liberation.png`,
    forteCircuit: `${basePath}/forte_circuit.png`,
    inheritSkill1: `${basePath}/inherent_skill_1.png`,
    inheritSkill2: `${basePath}/inherent_skill_2.png`,
    introSkill: `${basePath}/intro_skill.png`,
    outroSkill: `${basePath}/outro_skill.png`,
    tuneBreak: getTuneBreakIcon(resonator.weaponType)
  }
}