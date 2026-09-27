"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { useAuth } from "@/components/providers/AuthProvider";
import type { SoftwareProduct } from "@/lib/catalog";
import { ONE_COPY } from "@/lib/copy";
import { EXTERNAL, ROUTES } from "@/lib/site";

export function SoftwareProductView({ product }: { product: SoftwareProduct }) {
  const { user, signedIn } = useAuth();
  const isOne = product.slug === "one";
  const hasProduct = isOne ? Boolean(user?.hasOne) : Boolean(user?.hasTwo);

  return (
    <>
      <section className="page-wrap page-hero">
        <p className="meta">Product</p>
        <h1 className="display mt-3 text-[48px] md:text-[72px]">{product.name}</h1>
        <p className="mt-3 max-w-2xl text-[20px] font-medium tracking-[-0.03em] md:text-[24px]">
          {isOne ? ONE_COPY.headline : product.blurb}
        </p>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted md:text-[18px]">
          {isOne ? ONE_COPY.blurb : product.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={product.appUrl} filled external>
            {isOne ? ONE_COPY.openCta.label : `Open ${product.name}`}
          </ButtonLink>
          {isOne ? (
            <ButtonLink href={ONE_COPY.plansCta.href}>
              {ONE_COPY.plansCta.label}
            </ButtonLink>
          ) : null}
        </div>
        {signedIn && !hasProduct ? (
          <p className="mt-4 text-[13px] text-muted">
            Signed in without an {product.name} product.
          </p>
        ) : null}
        <div className="card relative mt-12 aspect-[16/9] overflow-hidden md:mt-14 md:aspect-[21/9]">
          <div className="h-full w-full bg-gradient-to-br from-[#dbeafe] via-[#f2f2f7] to-[#e8e8ed]" />
        </div>
      </section>

      <div className="page-wrap page-stack">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {product.capabilities.map((item) => (
            <div key={item.title} className="card card-pad">
              <h2 className="text-[22px] font-medium tracking-[-0.03em]">
                {item.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {isOne ? (
          <section id="plans" className="card card-pad scroll-mt-24">
            <p className="meta">Plans</p>
            <h2 className="heading mt-3 text-[28px] md:text-[36px]">
              View plans for One
            </h2>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">
              See current plans in One, or manage billing in your Warix Account.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={EXTERNAL.oneApp} filled external>
                Open One
              </ButtonLink>
              <ButtonLink href={EXTERNAL.accountHome} external>
                Warix Account
              </ButtonLink>
            </div>
          </section>
        ) : null}

        <section className="card card-pad flex flex-wrap items-center justify-between gap-4">
          <h2 className="heading text-[28px] md:text-[36px]">
            {isOne ? ONE_COPY.headline : `Meet ${product.name}.`}
          </h2>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={product.appUrl} filled external>
              Open {product.name}
            </ButtonLink>
            <ButtonLink href={ROUTES.software}>All products</ButtonLink>
          </div>
        </section>
      </div>
    </>
  );
}
