import type { Metadata } from "next";
import { TextLink } from "@/components/ui/TextLink";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Warix researches and develops AI products, software, and intelligent systems.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <p className="text-[14px] text-foreground/45">Company</p>
        <h1 className="display mt-4 text-[56px] md:text-[80px] lg:text-[96px]">
          About Warix
        </h1>
        <p className="mt-6 max-w-2xl text-[20px] leading-relaxed text-foreground/60 md:text-[22px]">
          Warix is a technology company that researches, develops, and releases
          intelligent software and AI products over time.
        </p>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">What we build</p>
        <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
          Research, technology, and products.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
          We work on agents, interfaces, connected systems, and applied AI —
          then ship products like One. The company is larger than any single
          product.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink href={ROUTES.research}>Research</TextLink>
          <TextLink href={ROUTES.products}>Products</TextLink>
          <TextLink href={ROUTES.one}>One</TextLink>
        </div>
      </section>

      <section
        id="philosophy"
        className="page-wrap section-space scroll-mt-20 border-t border-border"
      >
        <p className="meta">Philosophy</p>
        <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
          Technology should become easier to use as it becomes more capable.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
          We build simple interfaces on top of increasingly capable systems.
          People should not have to manage more complexity just because the
          underlying intelligence is growing.
        </p>
      </section>

      <section
        id="story"
        className="page-wrap section-space scroll-mt-20 border-t border-border"
      >
        <p className="meta">Story</p>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Warix started with a clear separation: the company builds the
          technology, and products like One carry their own names. That
          structure lets us ship focused experiences without collapsing the
          whole company into a single app.
        </p>
      </section>

      <section
        id="careers"
        className="page-wrap section-space scroll-mt-20 border-t border-border"
      >
        <p className="meta">Careers</p>
        <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
          Building with care.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
          Roles and openings will be listed here as the team grows.
        </p>
      </section>

      <section
        id="contact"
        className="page-wrap section-space scroll-mt-20 border-t border-border"
      >
        <p className="meta">Contact</p>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          For press, partnerships, and general inquiries, reach out when contact
          channels are published. Until then, start with{" "}
          <a
            href={ROUTES.oneApp}
            className="text-foreground underline-offset-4 hover:underline"
          >
            One
          </a>
          .
        </p>
      </section>
    </>
  );
}
