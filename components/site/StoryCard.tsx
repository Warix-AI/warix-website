import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
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
      {story.image ? (
        <div
          className={cn(
            "relative overflow-hidden rounded-[16px]",
            mediaClass,
          )}
        >
          <Image
            src={story.image}
            alt=""
            fill
            sizes={
              size === "feature" ? "100vw" : "(min-width: 768px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority={size === "feature"}
          />
          <span className="sr-only">{story.title}</span>
        </div>
      ) : (
        <Cover tone={story.tone} label={story.title} className={mediaClass} />
      )}
      <h3 className={titleClass}>{story.title}</h3>
      <p className="mt-2 text-[13px] text-foreground/45">{story.meta}</p>
    </Link>
  );
}
