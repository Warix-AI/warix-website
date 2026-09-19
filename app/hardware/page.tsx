import type { Metadata } from "next";
import { ProductVisual } from "@/components/hardware/ProductVisual";
import { TextLink } from "@/components/ui/TextLink";
import { hardwareCategories } from "@/lib/hardware";

export const metadata: Metadata = {
  title: "Hardware",
  description:
    "Warix hardware is fashion — garments and objects designed as physical products. Each is powered by Lora.",
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
          throughout is Lora.
        </p>
      </section>

      {hardwareCategories.map((category) => (
        <section
          key={category.slug}
          className="page-wrap section-space border-t border-border"
        >
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="meta">{category.name}</p>
              <h2 className="heading mt-4 text-[36px] md:text-[48px]">
                {category.statement}
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
                {category.description}
              </p>
            </div>
            <ProductVisual
              id={category.slug}
              label={category.name}
              className="aspect-[16/10] lg:col-span-7"
            />
          </div>

          {category.products.length ? (
            <div className="mt-16 space-y-16">
              {category.products.map((product) => (
                <article
                  key={product.slug}
                  className="grid items-end gap-8 lg:grid-cols-12"
                >
                  <ProductVisual
                    id={product.slug}
                    label={product.name}
                    className="aspect-[16/10] lg:col-span-8"
                  />
                  <div className="lg:col-span-4">
                    <p className="text-[13px] text-faint">
                      {product.availabilityLabel}
                    </p>
                    <h3 className="subhead mt-2 text-[28px] md:text-[32px]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-muted">
                      {product.statement}
                    </p>
                    <div className="mt-5">
                      <TextLink href={`/hardware/${category.slug}/${product.slug}`}>
                        View {product.name}
                      </TextLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-[16px] text-faint">
              Products in this category will appear here.
            </p>
          )}
        </section>
      ))}
    </>
  );
}
