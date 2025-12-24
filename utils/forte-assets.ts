import { Resonator } from "@/types/resonator"
import { ForteAssets } from "@/types/forte"

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
    outroSkill: `${basePath}/outro_skill.png`
  }
}