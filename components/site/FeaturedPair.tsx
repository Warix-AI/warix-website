import type { StoryCard as StoryCardData } from "@/lib/stories";
import { StoryCard } from "./StoryCard";

export function FeaturedPair({ primary }: { primary: StoryCardData }) {
  return (
    <section className="page-wrap pb-8 md:pb-16">
      <StoryCard story={primary} size="feature" />
    </section>
  );
}
