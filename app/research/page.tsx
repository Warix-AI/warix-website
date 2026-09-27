import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RESEARCH_COPY } from "@/lib/copy";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description: RESEARCH_COPY.headline,
};

export default function ResearchPage() {
  return (
    <>
      <section className="page-wrap page-hero">
        <p className="meta">{RESEARCH_COPY.title}</p>
        <h1 className="display mt-3 max-w-4xl text-[42px] md:text-[64px]">
          {RESEARCH_COPY.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[19px]">
          {RESEARCH_COPY.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={ROUTES.softwareOne} filled>
            Meet One
          </ButtonLink>
          <ButtonLink href={ROUTES.company}>About Warix</ButtonLink>
        </div>
      </section>

      <div className="page-wrap page-stack">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_COPY.areas.map((area) => (
            <div key={area} className="card card-pad">
              <h2 className="text-[20px] font-medium tracking-[-0.03em]">
                {area}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
