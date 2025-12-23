"use client"

import { Search } from "lucide-react"
import dynamic from "next/dynamic"

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon
} from "@/components/ui/input-group"

export default function WeaponsPage() {
  const WeaponFilterDialog = dynamic(() => import("./weapon-filter-dialog"), {
    ssr: false
  })

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <section className="container flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Weapons</h1>
          <p className="text-sm text-muted-foreground sm:text-base md:text-lg">Browse all Weapons in Wuthering Waves</p>
        </div>

        <div className="flex gap-2">
          <InputGroup>
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput 
              placeholder="Search Weapons..."
            />
          </InputGroup>

          <WeaponFilterDialog />
        </div>
      </section>

      <section className="container">
        
      </section>
    </div>
  )
}