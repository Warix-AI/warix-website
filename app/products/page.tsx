import type { Metadata } from "next";
import { InterfacePreview } from "@/components/one/InterfacePreview";
import { TextLink } from "@/components/ui/TextLink";
import { PRODUCTS } from "@/lib/content";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Products by Warix. One is our flagship AI product.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <p className="text-[14px] text-foreground/45">Products</p>
        <h1 className="display mt-4 text-[48px] md:text-[72px] lg:text-[84px]">
          Products by Warix
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Warix builds products over time. Each one has its own identity while
          remaining part of the same company.
        </p>
      </section>

      <section className="page-wrap pb-24 md:pb-32">
        {PRODUCTS.map((product) => (
          <article
            key={product.slug}
            className="border-t border-border py-14 md:grid md:grid-cols-12 md:gap-10 md:py-20"
          >
            <div className="md:col-span-5">
              <p className="text-[13px] text-foreground/45">By Warix</p>
              <h2 className="subhead mt-2 text-[40px] md:text-[52px]">
                {product.name}
              </h2>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted md:text-[18px]">
                {product.blurb}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <TextLink href={product.href}>
                  Learn about {product.name}
                </TextLink>
                {product.tryHref ? (
                  <a
                    href={product.tryHref}
                    className="text-[15px] text-foreground/70 transition-colors hover:text-foreground"
                  >
                    Try {product.name}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="mt-10 md:col-span-7 md:mt-0">
              {product.slug === "one" ? (
                <InterfacePreview className="min-h-[280px] md:min-h-[400px]" />
              ) : (
                <div className="aspect-[16/10] rounded-[4px] border border-border bg-paper" />
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="max-w-xl text-[16px] leading-relaxed text-muted">
          Future Warix products will appear here alongside One — without
          changing how the company website is organized.
        </p>
        <div className="mt-8">
          <TextLink href={ROUTES.research}>Explore research</TextLink>
        </div>
      </section>
    </>
  );
}
