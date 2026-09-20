import type { Metadata } from "next";
import { ProductPhoto } from "@/components/hardware/ProductPhoto";
import { PillLink } from "@/components/site/PillLink";
import {
  formatUsd,
  hardwareCategories,
  hardwareDesignHref,
  hardwareHref,
} from "@/lib/hardware";

export const metadata: Metadata = {
  title: "Hardware",
  description:
    "Warix hardware is fashion — garments and objects designed as physical products. Each is powered by One.",
};

export default function HardwarePage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <p className="text-[14px] text-foreground/45">Hardware</p>
        <h1 className="display mt-4 text-[56px] md:text-[80px] lg:text-[96px]">
          Hardware
        </h1>
        <p className="mt-6 max-w-2xl text-[20px] leading-relaxed text-foreground/60 md:text-[22px]">
          Fashion, built by Warix. Products keep their own names. The software
          throughout is One.
        </p>
      </section>

      {hardwareCategories.map((category) => (
        <section
          key={category.slug}
          className="page-wrap section-space border-t border-border"
        >
          <p className="meta">{category.name}</p>
          <h2 className="heading mt-4 max-w-3xl text-[36px] md:text-[48px]">
            {category.statement}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
            {category.description}
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {category.products.map((product) => (
              <article key={product.slug}>
                <ProductPhoto
                  src={product.image}
                  label={product.name}
                  className="relative aspect-[4/3] rounded-[16px]"
                />
                <h3 className="subhead mt-5 text-[28px] md:text-[32px]">
                  {product.name}
                </h3>
                <p className="mt-2 text-[16px] text-muted">
                  {formatUsd(product.price)}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {product.statement}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <PillLink
                    href={hardwareDesignHref(category.slug, product.slug)}
                    filled
                  >
                    Order Now
                  </PillLink>
                  <PillLink href={hardwareHref(category.slug, product.slug)}>
                    Learn
                  </PillLink>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
