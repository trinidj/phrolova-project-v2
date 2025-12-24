import { getAllWeaponSlugs, getWeaponBySlug, getWeaponRefinementSkill, parseWeaponRefinementSkill } from "./_lib/data"
import parse from "html-react-parser"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { getWeaponAssets } from "@/utils/weapon-assets"
import { WeaponImage } from "./_components/weapon-image"
import { getWeaponTypeIcon } from "@/utils/weapon-assets"
import { getRarityColor } from "@/lib/color-utils"

export const dynamicParam = false

export async function generateStaticParams() {
  const slugs = getAllWeaponSlugs()

  return slugs.map((slug) => ({
    weapon: slug
  }))
}

export default async function Weapon({ params }: { params: Promise<{ weapon: string }> }) {
  const { weapon: slug } = await params
  const weaponData = await getWeaponBySlug(slug)

  if (!weaponData) {
    return <div>Weapon not found</div>
  }

  const weaponRarityColor = getRarityColor(weaponData.rarity)
  const assets = getWeaponAssets(weaponData)
  const weaponTypeIcon = getWeaponTypeIcon(weaponData.weaponType)
  const refinementSkill = getWeaponRefinementSkill(weaponData)

  return (
    <section className="flex h-[675px] flex-col lg:flex-row gap-14">
      {/* Icon */}
      <Card 
        className="relative lg:w-[256px] lg:h-[256px] border-2 p-0 overflow-hidden shadow-none bg-linear-to-t from-background to-card"
        style={{
          borderColor: `var(--${weaponRarityColor})`,
          boxShadow: `inset 0 -40px 40px -40px var(--${weaponRarityColor})`
        }}
      >
        <CardContent className="h-full p-0">
          <div className="flex flex-col h-full">
            <div className="flex-1 flex overflow-hidden relative">
              <WeaponImage src={assets.icon} alt={weaponData.name} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-6">
        <header className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="flex gap-4">
            <div
              className="border-2 flex items-center justify-center rounded-xl border-primary"
            >
              <Image 
                src={weaponTypeIcon}
                alt={assets.weaponType}
                width={256}
                height={256}
                className="size-15 scale-80"
              />
            </div>

            <div className="text-center lg:text-left">
              <h1 className="font-bold text-3xl">{weaponData.name}</h1>
              <span className="text-muted-foreground font-medium text-sm">{weaponData.weaponType}</span>
            </div>
          </div>

          <Badge variant="secondary" className="h-8">
            <Image 
              src={`/assets/rarity/${weaponData.rarity}_star.png`}
              alt={`${weaponData.rarity}`}
              width={90}
              height={40}
            />
          </Badge>
        </header>

        <Separator />

        <Card className="p-6 gap-4">
          <CardHeader className="px-0">
            <CardTitle className="text-xl font-bold text-rarity-5">{refinementSkill?.name}</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="description">
              {parse(parseWeaponRefinementSkill(refinementSkill?.description ?? ""))}
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader className="px-0">
            <CardTitle className="text-xl">Ascension</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
