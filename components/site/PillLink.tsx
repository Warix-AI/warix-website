import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

function isExternal(href: string) {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function PillLink({
  href,
  children,
  filled = false,
}: {
  href: string;
  children: ReactNode;
  filled?: boolean;
}) {
  const className = cn(
    "inline-flex h-9 items-center rounded-full px-3.5 text-[14px] tracking-[-0.015em] transition-opacity hover:opacity-80",
    filled ? "bg-foreground text-background" : "bg-white/8 text-foreground",
  );

  if (isExternal(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
