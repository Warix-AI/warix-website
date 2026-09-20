import { FeaturedPair } from "@/components/site/FeaturedPair";
import { PillLink } from "@/components/site/PillLink";
import { StartBanner } from "@/components/site/StartBanner";
import { StoryCarousel } from "@/components/site/StoryCarousel";
import {
  COMPANY_STORIES,
  FEATURED_PRIMARY,
  HARDWARE_STORIES,
  HERO_PILLS,
  SOFTWARE_STORIES,
} from "@/lib/stories";
import { ROUTES } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="page-wrap flex min-h-[58svh] flex-col items-center justify-center pb-16 pt-10 text-center md:min-h-[62svh]">
        <h1 className="display max-w-4xl text-[42px] md:text-[64px] lg:text-[72px]">
          We design best-in-class software and hardware.
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {HERO_PILLS.map((pill) => (
            <PillLink key={pill.label} href={pill.href}>
              {pill.label}
            </PillLink>
          ))}
        </div>
      </section>

      <FeaturedPair primary={FEATURED_PRIMARY} />

      <StoryCarousel
        heading="Software"
        action={{ label: "View Lora", href: ROUTES.lora }}
        stories={SOFTWARE_STORIES}
      />

      <StoryCarousel
        heading="Hardware"
        action={{ label: "View all", href: ROUTES.hardware }}
        stories={HARDWARE_STORIES}
      />

      <StoryCarousel
        heading="Company"
        action={{ label: "About Warix", href: ROUTES.company }}
        stories={COMPANY_STORIES}
      />

      <StartBanner />
    </>
  );
}
