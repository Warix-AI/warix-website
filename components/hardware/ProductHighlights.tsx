import type { HardwareProduct } from "@/lib/hardware";
import { ProductPhoto } from "./ProductPhoto";

export function ProductHighlights({ product }: { product: HardwareProduct }) {
  return (
    <section id="explore" className="scroll-mt-16">
      {product.highlights.map((highlight) => (
        <article key={highlight.title} className="border-t border-border">
          <ProductPhoto
            src={highlight.image}
            label={highlight.title}
            cover={highlight.cover}
            className="relative aspect-[16/10] w-full md:aspect-[16/7] md:min-h-[460px]"
          />
          <div className="page-wrap py-12 text-center md:py-16">
            <h2 className="heading text-[32px] md:text-[44px]">{highlight.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-muted md:text-[19px]">
              {highlight.body}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
