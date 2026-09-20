import Image from "next/image";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/warix-wordmark.png"
      alt="Warix"
      width={448}
      height={129}
      priority
      className={cn("h-[15px] w-auto", className)}
    />
  );
}
