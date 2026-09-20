import { FeaturedPair } from "@/components/site/FeaturedPair";
import { HeroComposer } from "@/components/site/HeroComposer";
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
      <section className="page-wrap flex min-h-[68svh] flex-col items-center justify-center pb-16 pt-20 text-center md:min-h-[76svh] md:pb-24 md:pt-28">
        <h1 className="display text-[32px] md:text-[40px] lg:text-[44px]">
          What can I help with?
        </h1>
        <HeroComposer />
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {HERO_PILLS.map((pill) => (
            <span
              key={pill.label}
              className={pill.compact ? undefined : "hidden md:inline-flex"}
            >
              <PillLink href={pill.href}>{pill.label}</PillLink>
            </span>
          ))}
        </div>
      </section>

      <FeaturedPair primary={FEATURED_PRIMARY} />

      <StoryCarousel
        heading="Software"
        action={{ label: "View One", href: ROUTES.one }}
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
