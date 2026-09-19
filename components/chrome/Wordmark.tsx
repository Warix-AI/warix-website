import Image from "next/image";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/warix-logo.png"
      alt="Warix"
      width={543}
      height={134}
      priority
      className={cn("h-[15px] w-auto", className)}
    />
  );
}
