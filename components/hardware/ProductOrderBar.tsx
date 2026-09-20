import { PillLink } from "@/components/site/PillLink";
import {
  formatUsd,
  hardwareDesignHref,
  type HardwareCategory,
  type HardwareProduct,
} from "@/lib/hardware";

export function ProductOrderBar({
  category,
  product,
}: {
  category: HardwareCategory;
  product: HardwareProduct;
}) {
  return (
    <section className="border-t border-border">
      <div className="page-wrap flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:py-12">
        <div>
          <p className="text-[13px] text-foreground/45">{product.name}</p>
          <p className="mt-1 text-[22px] font-medium tracking-[-0.03em]">
            {formatUsd(product.price)}
          </p>
          <p className="mt-1 text-[14px] text-muted">{product.availabilityLabel}</p>
        </div>
        <PillLink href={hardwareDesignHref(category.slug, product.slug)} filled>
          Order Now
        </PillLink>
      </div>
    </section>
  );
}
