import type { Metadata } from "next";
import { TextLink } from "@/components/ui/TextLink";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Warix is a technology company that designs and builds software and hardware as one system.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <p className="text-[14px] text-foreground/45">Company</p>
        <h1 className="display mt-4 text-[56px] md:text-[80px] lg:text-[96px]">About</h1>
        <p className="mt-6 max-w-2xl text-[20px] leading-relaxed text-foreground/60 md:text-[22px]">
          Warix is a technology company. We design and build software and
          hardware as one system. Lora is the software. Hardware is the physical
          work.
        </p>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">What we build</p>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="subhead text-[28px] md:text-[32px]">Software — Lora</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Lora is the entire software platform: agents, infrastructure,
              APIs, device software, identity, interfaces, and the systems that
              connect them. It can exist on its own, or throughout Warix
              hardware.
            </p>
          </div>
          <div>
            <h2 className="subhead text-[28px] md:text-[32px]">Hardware</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Fashion, and the physical products that follow. Each has its own
              name. None of them invent a second software brand.
            </p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="page-wrap section-space scroll-mt-20 border-t border-border">
        <p className="meta">Philosophy</p>
        <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
          Build intelligence into the physical world — without fragmenting the
          software.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
          Interfaces should change with context. A garment is not a computer.
          The underlying platform should remain connected: identity, memory,
          services, and control.
        </p>
      </section>

      <section id="story" className="page-wrap section-space scroll-mt-20 border-t border-border">
        <p className="meta">Story</p>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Warix began as a technology company that refused to split software and
          hardware into unrelated catalogs. The work is to design both, and to
          keep the software layer coherent as the physical portfolio grows.
        </p>
      </section>

      <section id="team" className="page-wrap section-space scroll-mt-20 border-t border-border">
        <p className="meta">Team</p>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          A small company building the software platform and the machines it
          lives in. Names and roles will be added here as the team is public.
        </p>
      </section>

      <section id="technology" className="page-wrap section-space scroll-mt-20 border-t border-border">
        <p className="meta">Technology</p>
        <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
          Research and development sit inside the company, not in the navigation.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
          Lora includes the hidden work: models, orchestration, device software,
          permissions, and the implementations that change from one machine to
          the next. Hardware development is industrial design, engineering, and
          the long path from prototype to product.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink href={ROUTES.lora}>Explore Lora</TextLink>
          <TextLink href={ROUTES.hardware}>Explore hardware</TextLink>
        </div>
      </section>
    </>
  );
}
