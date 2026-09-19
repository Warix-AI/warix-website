import Link from "next/link";
import type { StoryCard as StoryCardData } from "@/lib/stories";
import { StoryCard } from "./StoryCard";

export function CardGrid({
  heading,
  action,
  stories,
}: {
  heading: string;
  action?: { label: string; href: string };
  stories: StoryCardData[];
}) {
  return (
    <section className="page-wrap py-14 md:py-20">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-[22px] font-medium tracking-[-0.03em] md:text-[24px]">
          {heading}
        </h2>
        {action ? (
          <Link
            href={action.href}
            className="text-[14px] text-foreground/55 transition-opacity hover:text-foreground"
          >
            {action.label}
          </Link>
        ) : null}
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </section>
  );
}
