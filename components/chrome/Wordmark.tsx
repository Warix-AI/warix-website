import Image from "next/image";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/warix-wordmark.png"
      alt="Warix"
      width={64}
      height={20}
      priority
      className={cn("h-[12px] w-auto md:h-[13px]", className)}
    />
  );
}
