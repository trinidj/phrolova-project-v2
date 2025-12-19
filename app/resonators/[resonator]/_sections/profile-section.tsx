import { Resonator } from "@/types/resonator"
import { getResonatorAssets } from "@/utils/resonator-assets"
import Image from "next/image"

import {
  Card,
  CardContent
} from "@/components/ui/card"

interface ProfileSectionProps {
  resonator: Resonator
}

export default function Profile({ resonator }: ProfileSectionProps) {
  const assets = getResonatorAssets(resonator)

  return (
    <section id="profile" className="flex lg:flex-row">
      {/* Sprite */}
      <div>
        <Card className="p-0 gap-0">
          <CardContent className="relative p-0 ">
            <Image 
              src={assets.sprite}
              alt={resonator.name}
              width={524}
              height={600}
              quality={100}
              className="object-contain"
            />
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div>

      </div>
    </section>
  )
}