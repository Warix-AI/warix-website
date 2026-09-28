import Image from "next/image";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/warix-icon.png"
      alt="Warix"
      width={28}
      height={28}
      priority
      className={cn("h-7 w-7 md:h-8 md:w-8", className)}
    />
  );
}
