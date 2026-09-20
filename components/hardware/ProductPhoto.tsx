import Image from "next/image";
import { cn } from "@/lib/cn";

export function ProductPhoto({
  src,
  label,
  cover = false,
  className,
  priority = false,
}: {
  src: string;
  label: string;
  cover?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        !cover && "bg-white",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={cover ? "object-cover" : "object-contain p-8 md:p-14"}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
