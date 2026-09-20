import { PillLink } from "@/components/site/PillLink";
import {
  formatUsd,
  hardwareDesignHref,
  type HardwareCategory,
  type HardwareProduct,
} from "@/lib/hardware";
import { ProductPhoto } from "./ProductPhoto";

export function ProductHero({
  category,
  product,
}: {
  category: HardwareCategory;
  product: HardwareProduct;
}) {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col md:min-h-[calc(100svh-4rem)]">
      <ProductPhoto
        src={product.heroImage}
        label={product.name}
        cover={product.heroCover}
        priority
        className="absolute inset-0"
      />
      <div
        className={
          product.heroCover
            ? "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
            : "absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black to-transparent"
        }
      />

      <div className="relative mt-auto page-wrap pb-10 pt-32 text-center md:pb-14">
        <p className="text-[13px] uppercase tracking-[0.08em] text-white/55">
          {category.name}
        </p>
        <h1 className="display mt-3 text-[48px] text-white md:text-[72px]">
          {product.name}
        </h1>
        <p className="mt-3 text-[17px] text-white/70 md:text-[19px]">
          {formatUsd(product.price)}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[16px] leading-relaxed text-white/70 md:text-[18px]">
          {product.statement}
        </p>

        <dl className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-4">
          {product.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[11px] uppercase tracking-[0.06em] text-white/45">
                {stat.label}
              </dt>
              <dd className="mt-1 text-[20px] font-medium tracking-[-0.03em] text-white md:text-[26px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PillLink
            href={hardwareDesignHref(category.slug, product.slug)}
            filled
          >
            Order Now
          </PillLink>
          <PillLink href="#explore">Learn</PillLink>
        </div>
      </div>
    </section>
  );
}
