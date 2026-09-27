import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ONE_COPY, PRODUCTS_COPY } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Products",
  description: PRODUCTS_COPY.headline,
};

export default function SoftwarePage() {
  return (
    <>
      <section className="page-wrap page-hero">
        <p className="meta">{PRODUCTS_COPY.title}</p>
        <h1 className="display mt-3 max-w-4xl text-[42px] md:text-[64px]">
          {PRODUCTS_COPY.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[19px]">
          {PRODUCTS_COPY.body}
        </p>
      </section>

      <div className="page-wrap page-stack">
        <article className="card card-pad md:grid md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-5">
            <h2 className="subhead text-[36px] md:text-[48px]">{ONE_COPY.name}</h2>
            <p className="mt-2 text-[18px] font-medium tracking-[-0.03em]">
              {ONE_COPY.headline}
            </p>
            <p className="mt-3 max-w-md text-[16px] leading-relaxed text-muted">
              {ONE_COPY.blurb}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={ONE_COPY.learnCta.href}>
                {ONE_COPY.learnCta.label}
              </ButtonLink>
              <ButtonLink href={ONE_COPY.openCta.href} filled external>
                {ONE_COPY.openCta.label}
              </ButtonLink>
            </div>
          </div>
          <div className="mt-8 aspect-[16/10] overflow-hidden rounded-[16px] bg-background md:col-span-7 md:mt-0">
            <div className="h-full w-full bg-gradient-to-br from-[#dbeafe] via-[#f2f2f7] to-[#e8e8ed]" />
          </div>
        </article>
      </div>
    </>
  );
}
