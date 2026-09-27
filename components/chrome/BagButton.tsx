"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/site";
import { useBag } from "@/components/providers/BagProvider";

export function BagButton() {
  const { count } = useBag();

  return (
    <Link
      href={ROUTES.bag}
      className="relative inline-flex h-8 items-center text-[13px] text-foreground/70 transition-colors hover:text-foreground"
      aria-label={count ? `Bag, ${count} items` : "Bag"}
    >
      Bag
      {count > 0 ? (
        <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[11px] text-background">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
