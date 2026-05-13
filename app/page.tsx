import { generatePageMetadata } from "@/lib/seo.config";

export const revalidate = 3600;
import HomePageContent from "@/components/HomePageContent";
import { PhysicianJsonLd, MedicalBusinessJsonLd } from "@/components/seo/JsonLd";
import { db } from "@/lib/db";

export const metadata = generatePageMetadata({});

export default async function CardWithForm() {
  let achievements: any[] = [];
  let services: any[] = [];

  try {
    achievements = await db.achievement.findMany({
      where: { isFeatured: true },
      orderBy: { featuredOrder: "asc" },
      take: 6,
    });
  } catch {
    achievements = [];
  }

  try {
    services = await db.services.findMany();
  } catch {
    services = [];
  }

  const featuredAchievements = achievements.map((a) => ({
    id: a.id,
    title: a.title,
    slug: a.slug,
    category: a.category,
    date: a.date.toISOString(),
    imageUrl: a.imageUrl,
  }));

  return (
    <>
      <PhysicianJsonLd />
      <MedicalBusinessJsonLd />
      <HomePageContent featuredAchievements={featuredAchievements} services={services} />
    </>
  );
}
