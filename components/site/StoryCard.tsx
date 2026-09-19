import Link from "next/link";
import type { StoryCard as StoryCardData } from "@/lib/stories";
import { Cover } from "./Cover";

export function StoryCard({
  story,
  size = "grid",
}: {
  story: StoryCardData;
  size?: "feature" | "stack" | "grid" | "carousel";
}) {
  const mediaClass =
    size === "feature"
      ? "aspect-[16/10] md:aspect-[16/8] md:min-h-[520px]"
      : size === "carousel"
        ? "aspect-[16/10] md:min-h-[420px]"
        : size === "stack"
          ? "aspect-[16/10]"
          : "aspect-[4/3]";

  const titleClass =
    size === "feature" || size === "carousel"
      ? "mt-4 text-[22px] font-medium tracking-[-0.035em] md:mt-5 md:text-[34px]"
      : size === "stack"
        ? "mt-4 text-[20px] font-medium tracking-[-0.03em] md:text-[22px]"
        : "mt-4 text-[18px] font-medium tracking-[-0.03em] md:text-[20px]";

  return (
    <Link href={story.href} className="group block">
      <Cover tone={story.tone} label={story.title} className={mediaClass} />
      <h3 className={titleClass}>{story.title}</h3>
      <p className="mt-2 text-[13px] text-foreground/45">{story.meta}</p>
    </Link>
  );
}
