import Link from "next/link";
import type { StoryCard as StoryCardData } from "@/lib/stories";
import { StoryCard } from "./StoryCard";

export function StoryCarousel({
  heading,
  action,
  stories,
}: {
  heading: string;
  action?: { label: string; href: string };
  stories: StoryCardData[];
}) {
  return (
    <section className="min-w-0 py-10 md:py-20">
      <div className="page-wrap flex items-end justify-between gap-6">
        <h2 className="text-[22px] font-medium tracking-[-0.03em] md:text-[24px]">
          {heading}
        </h2>
        {action ? (
          <Link
            href={action.href}
            className="shrink-0 text-[14px] text-foreground/55 transition-opacity hover:text-foreground"
          >
            {action.label}
          </Link>
        ) : null}
      </div>
      <div className="carousel-rail mt-6 flex min-w-0 flex-row flex-nowrap snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 md:mt-8 md:gap-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {stories.map((story) => (
          <div
            key={story.title}
            className="w-[72vw] shrink-0 snap-start md:w-[62vw] lg:w-[58vw]"
          >
            <StoryCard story={story} size="carousel" />
          </div>
        ))}
      </div>
    </section>
  );
}
