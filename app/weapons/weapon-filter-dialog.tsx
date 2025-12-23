"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { RARITIES } from "@/constants/rarities"
import { WEAPON_TYPES } from "@/constants/weapon-types"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { 
  FieldGroup, 
  FieldSet, 
  Field, 
  FieldLabel,
} from "@/components/ui/field"

export type WeaponFilters = {
  rarities: string[]
  weaponTypes: string[]
}

type WeaponDialogProps = {
  value: WeaponFilters
  onApply: (filters: WeaponFilters) => void
}

export default function WeaponFilterDialog() {
  // const [isOpen, setIsOpen] = useState(false)
  // const [filters, setFilters] = useState<WeaponFilters>(value)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="secondary" aria-label="Open filters">
          <Filter />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4 border-4 gap-0">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <form>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-base">Rarity</FieldLabel>
                <div className="flex gap-1.5">
                  {RARITIES.map((rarity) => {
                    // const isCurrentActive = filters.rarities.includes(rarity.value)

                    return (
                      <Toggle
                        key={rarity.value}
                        value={rarity.value}
                        variant="outline"
                        size="lg"
                        // style={
                        //   isCurrentActive ? {
                        //     borderColor: "var(--primary)",
                        //   } : {}
                        // }
                        className="border-2"
                      >
                        {rarity.label}
                      </Toggle>
                    )
                  })}
                </div>
              </Field>

              <Field>
                <FieldLabel className="text-base">Weapon Type</FieldLabel>
                <div className="flex gap-1.5">
                  {WEAPON_TYPES.map((weaponType) => {
                    // const isCurrentActive = filters.weaponTypes.includes(weaponType.value)

                    return (
                      <Toggle
                        key={weaponType.value}
                        value={weaponType.value}
                        variant="outline"
                        size="lg"
                        // style={
                        //   isCurrentActive ? {
                        //     borderColor: "var(--primary)",
                        //   } : {}
                        // }
                        className="border-2"
                      >
                        <Image
                          src={weaponType.icon}
                          alt={weaponType.label}
                          width={24}
                          height={24}
                          quality={100}
                        />
                      </Toggle>
                    )
                  })}
                </div>
              </Field>
            </FieldGroup>

            <Field className="flex gap-2">
              <Button type="submit">Save</Button>

              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldSet>
        </form>
      </DialogContent>
    </Dialog>
  )
}