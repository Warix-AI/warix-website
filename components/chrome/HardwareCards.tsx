import Image from "next/image";
import Link from "next/link";
import { HARDWARE_PRODUCTS, formatUsd } from "@/lib/catalog";
import { cn } from "@/lib/cn";

export function HardwareCards({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-3 md:grid-cols-2", className)}>
      {HARDWARE_PRODUCTS.map((product) => (
        <Link
          key={product.slug}
          href={product.href}
          onClick={onNavigate}
          className="rounded-[8px] border border-border p-4 transition-colors hover:bg-paper"
        >
          <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-[4px] bg-paper">
            <Image
              src={product.image}
              alt=""
              fill
              className="object-contain p-4"
              sizes="300px"
            />
          </div>
          <p className="text-[12px] text-foreground/45">{product.series}</p>
          <p className="mt-1 text-[20px] font-medium tracking-[-0.03em]">
            {product.name}
          </p>
          <p className="mt-1 text-[13px] text-muted">
            {product.availability === "available"
              ? `From ${formatUsd(product.price)}`
              : "Coming soon"}
          </p>
        </Link>
      ))}
    </div>
  );
}
