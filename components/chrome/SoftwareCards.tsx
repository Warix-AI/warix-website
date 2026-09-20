import Image from "next/image";
import Link from "next/link";
import { Cover } from "@/components/site/Cover";
import { cn } from "@/lib/cn";
import { SOFTWARE_PRODUCTS, type SoftwareProduct } from "@/lib/software";

export function SoftwareCards({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:h-[210px] md:grid-cols-2 md:gap-4",
        className,
      )}
    >
      {SOFTWARE_PRODUCTS.map((product) => (
        <SoftwareProductCard
          key={product.name}
          product={product}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

function SoftwareProductCard({
  product,
  onNavigate,
}: {
  product: SoftwareProduct;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={product.href}
      onClick={onNavigate}
      className="relative block h-[140px] overflow-hidden rounded-[16px] md:h-full"
    >
      {product.image ? (
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <Cover
          tone={product.tone}
          label=""
          className="absolute inset-0 h-full rounded-[16px]"
        />
      )}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 px-4 pb-4 pt-10",
          product.onDark
            ? "bg-gradient-to-t from-black/55 to-transparent text-white"
            : "text-black",
        )}
      >
        <p className="text-[20px] font-medium tracking-[-0.03em]">{product.name}</p>
        <p
          className={cn(
            "mt-1 max-w-[28rem] text-[13px] leading-snug",
            product.onDark ? "text-white/80" : "text-black/60",
          )}
        >
          {product.blurb}
        </p>
      </div>
    </Link>
  );
}
