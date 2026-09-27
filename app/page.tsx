import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  COMPANY_COPY,
  HOME_COPY,
  ONE_COPY,
  PRODUCTS_COPY,
  RESEARCH_COPY,
} from "@/lib/copy";
import { ROUTES } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="page-wrap page-hero">
        <h1 className="display max-w-4xl text-[42px] md:text-[64px] lg:text-[72px]">
          {HOME_COPY.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[19px]">
          {HOME_COPY.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={HOME_COPY.primaryCta.href}>
            {HOME_COPY.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={HOME_COPY.secondaryCta.href} filled>
            {HOME_COPY.secondaryCta.label}
          </ButtonLink>
        </div>
        <div className="card relative mt-12 aspect-[16/9] overflow-hidden md:mt-14 md:aspect-[21/9]">
          <Image
            src="/hero-field.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 1504px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <div className="page-wrap page-stack">
        <section className="card card-pad">
          <p className="meta">{RESEARCH_COPY.title}</p>
          <h2 className="heading mt-3 max-w-3xl text-[32px] md:text-[44px]">
            {RESEARCH_COPY.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted md:text-[17px]">
            {RESEARCH_COPY.body}
          </p>
          <div className="mt-7">
            <ButtonLink href={RESEARCH_COPY.cta.href} filled>
              {RESEARCH_COPY.cta.label}
            </ButtonLink>
          </div>
        </section>

        <section className="card card-pad">
          <p className="meta">{PRODUCTS_COPY.title}</p>
          <h2 className="heading mt-3 max-w-3xl text-[32px] md:text-[44px]">
            {PRODUCTS_COPY.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted md:text-[17px]">
            {PRODUCTS_COPY.body}
          </p>

          <div className="mt-8 rounded-[16px] bg-background p-6 md:p-8">
            <h3 className="subhead text-[28px] md:text-[36px]">{ONE_COPY.name}</h3>
            <p className="mt-2 text-[17px] font-medium tracking-[-0.03em]">
              {ONE_COPY.headline}
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted md:text-[16px]">
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
        </section>

        <section className="card card-pad">
          <p className="meta">{COMPANY_COPY.title}</p>
          <h2 className="heading mt-3 max-w-3xl text-[32px] md:text-[44px]">
            {COMPANY_COPY.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted md:text-[17px]">
            {COMPANY_COPY.body}
          </p>
          <div className="mt-7">
            <ButtonLink href={ROUTES.company}>{COMPANY_COPY.cta.label}</ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}
