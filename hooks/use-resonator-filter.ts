import { useState, useMemo } from "react"
import { Resonator } from "@/types/resonator"
import { ResonatorFilters } from "@/app/resonators/filter-dialog"

export function useResonatorFilters(resonators: Resonator[]) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<ResonatorFilters>({
    rarities: [],
    attributes: [],
    weaponTypes: [],
  })

  const filteredResonators = useMemo(() => {
    return resonators.filter((resonator) => {
      const matchesSearch = resonator.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesRarity = filters.rarities.length === 0 || filters.rarities.includes(String(resonator.rarity))
      const matchesAttribute = filters.attributes.length === 0 || filters.attributes.includes(resonator.attribute.toLowerCase())
      
      const matchesWeaponType = filters.weaponTypes.length === 0 ||
        filters.weaponTypes.some((weapon) => {
          const normalized = weapon.endsWith("s") ? weapon.slice(0, -1) : weapon
          return normalized === resonator.weaponType.toLowerCase()
        })

      return matchesSearch && matchesRarity && matchesAttribute && matchesWeaponType
    })
  }, [resonators, searchQuery, filters])

  return { searchQuery, setSearchQuery, filters, setFilters, filteredResonators }
}