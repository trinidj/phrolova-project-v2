import fs from "fs"
import path from "path"
import Profile from "./_sections/profile-section";
import { Forte } from "./_sections/forte-section";
import { ResonanceChain } from "./_sections/resonance-chain-section";
import { getResonatorAscension, getResonatorBySlug, getAllResonatorSlugs, getForteAscension, getResonanceChain } from "@/app/resonators/[resonator]/_lib/data";
import { getResonatorAssets } from "@/utils/resonator-assets";
 
export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = getAllResonatorSlugs()

  return slugs.map((slug) => ({
    resonator: slug,
  }))
}

export default async function Resonator({ params }: { params: Promise<{ resonator: string }> }) {
  const { resonator: slug } = await params
  const resonatorData = await getResonatorBySlug(slug)

  if (!resonatorData) {
    return <div>Resonator not found</div>
  }

  const assets = getResonatorAssets(resonatorData)
  const splashArtPath = path.join(process.cwd(), "public", assets.splashArt.slice(1))
  const hasSplashArt = fs.existsSync(splashArtPath)
  const resonatorAscensionMaterials = getResonatorAscension(resonatorData)
  const forteAscensionMaterials = getForteAscension(resonatorData)

  return (
    <div className="min-h-screen flex flex-col gap-35">
      <Profile
        resonator={resonatorData}
        hasSplashArt={hasSplashArt}
        resonatorAscensionMaterials={resonatorAscensionMaterials}
      />
      <Forte resonator={resonatorData} forteAscensionMaterials={forteAscensionMaterials} />
      <ResonanceChain resonator={resonatorData} />
    </div>
  );
}
