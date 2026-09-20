import type { Metadata } from "next";
import { TextLink } from "@/components/ui/TextLink";
import { RESEARCH_AREAS, RESEARCH_TOPICS } from "@/lib/content";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Warix researches how intelligent systems should work with people.",
};

const AREA_IDS = ["agents", "interfaces", "connected", "applied"] as const;

export default function ResearchPage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <p className="text-[14px] text-foreground/45">Research</p>
        <h1 className="display mt-4 max-w-4xl text-[40px] md:text-[64px] lg:text-[72px]">
          Researching how intelligent systems should work with people.
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Warix is more than a product studio. We study agents, interfaces,
          memory, tool use, and applied AI — then turn that work into products
          people can use.
        </p>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Areas of work</p>
        <div className="mt-10">
          {RESEARCH_AREAS.map((area, index) => (
            <div
              key={area.title}
              id={AREA_IDS[index]}
              className="scroll-mt-24 border-t border-border py-10 md:grid md:grid-cols-12 md:gap-8 md:py-12"
            >
              <h2 className="subhead text-[28px] md:col-span-4 md:text-[32px]">
                {area.title}
              </h2>
              <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted md:col-span-8 md:mt-1 md:text-[18px]">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Topics</p>
        <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
          What we study
        </h2>
        <ul className="mt-12 columns-1 gap-x-16 sm:columns-2">
          {RESEARCH_TOPICS.map((topic) => (
            <li
              key={topic}
              className="mb-4 break-inside-avoid border-t border-border pt-4 text-[18px] tracking-[-0.02em] text-foreground/80"
            >
              {topic}
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-xl text-[16px] leading-relaxed text-muted">
          Individual research posts and projects will appear here as they are
          published.
        </p>
        <div className="mt-8">
          <TextLink href={ROUTES.products}>View products</TextLink>
        </div>
      </section>
    </>
  );
}
