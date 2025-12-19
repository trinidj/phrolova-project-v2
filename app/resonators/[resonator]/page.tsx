import Profile from "./_sections/profile-section";
import { getResonatorBySlug } from "@/app/resonators/[resonator]/_lib/data";

export default async function Resonator({ params }: { params: Promise<{ resonator: string }> }) {
  const { resonator: slug } = await params
  const resonatorData = await getResonatorBySlug(slug)

  if (!resonatorData) {
    return <div>Resonator not found</div>
  }

  return (
    <div className="min-h-screen">
      <Profile resonator={resonatorData} />
    </div>
  );
}