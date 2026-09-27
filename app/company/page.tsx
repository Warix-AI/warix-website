import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { COMPANY_COPY } from "@/lib/copy";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description: COMPANY_COPY.headline,
};

export default function CompanyPage() {
  return (
    <>
      <section className="page-wrap page-hero">
        <p className="meta">{COMPANY_COPY.title}</p>
        <h1 className="display mt-3 max-w-4xl text-[42px] md:text-[64px]">
          {COMPANY_COPY.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[19px]">
          {COMPANY_COPY.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={ROUTES.research}>Explore Research</ButtonLink>
          <ButtonLink href={ROUTES.softwareOne} filled>
            Meet One
          </ButtonLink>
        </div>
      </section>

      <div className="page-wrap page-stack">
        <section id="news" className="card card-pad scroll-mt-24">
          <p className="meta">News</p>
          <h2 className="heading mt-3 text-[28px] md:text-[36px]">Updates</h2>
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-[13px] text-muted">2026 · Product</p>
            <p className="mt-2 text-[18px] font-medium tracking-[-0.03em]">
              Introducing One — one place to work with AI
            </p>
          </div>
        </section>

        <section id="careers" className="card card-pad scroll-mt-24">
          <p className="meta">Careers</p>
          <h2 className="heading mt-3 text-[28px] md:text-[36px]">
            Building with care.
          </h2>
          <p className="mt-3 text-[16px] text-muted">
            Roles will be listed here as the team grows.
          </p>
        </section>

        <section id="contact" className="card card-pad scroll-mt-24">
          <p className="meta">Contact</p>
          <p className="mt-3 text-[16px] text-muted">
            For press and partnerships, channels will be published here. For
            product help, visit{" "}
            <Link
              href={ROUTES.support}
              className="text-accent underline-offset-4 hover:underline"
            >
              Support
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
