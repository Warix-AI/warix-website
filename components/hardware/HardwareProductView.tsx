import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { HardwareProduct } from "@/lib/catalog";
import { formatUsd } from "@/lib/catalog";
import { ROUTES } from "@/lib/site";

export function HardwareProductView({
  product,
}: {
  product: HardwareProduct;
}) {
  const available = product.availability === "available";

  return (
    <>
      <section className="page-wrap grid gap-10 pt-16 pb-16 md:grid-cols-2 md:gap-14 md:pt-24 md:pb-24">
        <div className="relative aspect-square overflow-hidden rounded-[4px] border border-border bg-paper">
          <Image
            src={product.image}
            alt=""
            fill
            priority
            className="object-contain p-12"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[13px] text-foreground/45">{product.series}</p>
          <h1 className="display mt-3 text-[48px] md:text-[64px]">
            {product.name}
          </h1>
          <p className="mt-4 text-[18px] leading-relaxed text-muted">
            {product.description}
          </p>
          <p className="mt-6 text-[22px] font-medium tracking-[-0.03em]">
            {available ? `From ${formatUsd(product.price)}` : "Coming soon"}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {available ? (
              <ButtonLink href={product.configureHref} filled>
                Buy
              </ButtonLink>
            ) : (
              <span className="inline-flex h-10 items-center rounded-full border border-border px-5 text-[14px] text-foreground/40">
                Currently unavailable
              </span>
            )}
            <ButtonLink href={ROUTES.support}>Support</ButtonLink>
          </div>
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Features</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {product.features.map((feature) => (
            <div key={feature.title}>
              <h2 className="text-[22px] font-medium tracking-[-0.03em]">
                {feature.title}
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Specifications</p>
        <dl className="mt-10 max-w-xl space-y-4">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between gap-6 border-t border-border pt-4 text-[15px]"
            >
              <dt className="text-foreground/45">{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="meta">What&apos;s included</p>
            <ul className="mt-6 space-y-3 text-[16px] text-muted">
              {product.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta">Compatibility</p>
            <ul className="mt-6 space-y-3 text-[16px] text-muted">
              {product.compatibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">FAQ</p>
        <div className="mt-10 space-y-8">
          {product.faqs.map((faq) => (
            <div key={faq.q} className="border-t border-border pt-6">
              <h3 className="text-[20px] font-medium tracking-[-0.03em]">
                {faq.q}
              </h3>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
