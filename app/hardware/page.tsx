import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HARDWARE_PRODUCTS, formatUsd } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Hardware",
  description: "Hardware products by Warix — H1, H2, and future H-series products.",
};

export default function HardwareFamilyPage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-12 md:pt-28 md:pb-16">
        <p className="text-[14px] text-foreground/45">Hardware</p>
        <h1 className="display mt-4 text-[48px] md:text-[72px]">
          Hardware by Warix
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
          Discover and buy Warix hardware on warix.co. Orders attach to your
          Warix Account. Device management lives at account.warix.co.
        </p>
      </section>

      <section className="page-wrap pb-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          {HARDWARE_PRODUCTS.map((product) => (
            <article key={product.slug}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-border bg-paper">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-contain p-12"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <p className="mt-6 text-[13px] text-foreground/45">{product.series}</p>
              <h2 className="subhead mt-1 text-[32px] md:text-[40px]">
                {product.name}
              </h2>
              <p className="mt-3 text-[16px] text-muted">{product.blurb}</p>
              <p className="mt-3 text-[16px]">
                {product.availability === "available"
                  ? `From ${formatUsd(product.price)}`
                  : "Currently unavailable"}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={product.href}>Learn more</ButtonLink>
                {product.availability === "available" ? (
                  <ButtonLink href={product.configureHref} filled>
                    Buy
                  </ButtonLink>
                ) : (
                  <span className="inline-flex h-10 items-center text-[14px] text-foreground/40">
                    Notify me later
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
