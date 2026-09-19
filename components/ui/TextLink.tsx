import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-[16px] tracking-[-0.02em] text-foreground transition-opacity hover:opacity-55",
        className,
      )}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
