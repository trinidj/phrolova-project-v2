"use client"

import { Search } from "lucide-react"

import { 
  InputGroup, 
  InputGroupInput, 
  InputGroupAddon
} from "@/components/ui/input-group"

export default function ResonatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Resonators</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Browse all Resonators in Wuthering Waves</p>
        </div>

        <InputGroup>
          <InputGroupInput placeholder="Search Resonators..." />
          <InputGroupAddon>
            <Search />            
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section>

      </section>
    </div>
  )
}