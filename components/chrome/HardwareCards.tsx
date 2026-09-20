import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { HARDWARE_MENU_PRODUCTS } from "@/lib/hardware";

export function HardwareCards({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:h-[210px] md:grid-cols-3 md:gap-4",
        className,
      )}
    >
      {HARDWARE_MENU_PRODUCTS.map((product) => (
        <Link
          key={product.name}
          href={product.href}
          onClick={onNavigate}
          className="relative block h-[200px] overflow-hidden rounded-[16px] bg-white md:h-full"
        >
          <div className="absolute inset-0 bottom-10">
            <Image
              src={product.image}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className={cn(
                "object-contain",
                product.name === "Sunglasses"
                  ? "scale-[1.45]"
                  : product.name === "Puffer"
                    ? "scale-[1.12]"
                    : "scale-[1.32]",
              )}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent px-4 pb-4 pt-8 text-black">
            <p className="text-[20px] font-medium tracking-[-0.03em]">
              {product.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
