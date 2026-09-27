import Link from "next/link";
import { SOFTWARE_PRODUCTS } from "@/lib/catalog";
import { cn } from "@/lib/cn";

export function SoftwareCards({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-3 md:grid-cols-2", className)}>
      {SOFTWARE_PRODUCTS.map((product) => (
        <Link
          key={product.slug}
          href={product.href}
          onClick={onNavigate}
          className="rounded-[8px] border border-border p-5 transition-colors hover:bg-paper"
        >
          <p className="text-[12px] text-foreground/45">{product.series}</p>
          <p className="mt-1 text-[22px] font-medium tracking-[-0.03em]">
            {product.name}
          </p>
          <p className="mt-2 text-[13px] text-muted">{product.blurb}</p>
        </Link>
      ))}
    </div>
  );
}
