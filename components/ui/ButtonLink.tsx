import Link from "next/link";
import { cn } from "@/lib/cn";

export function ButtonLink({
  href,
  children,
  filled = false,
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  filled?: boolean;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "inline-flex h-10 items-center justify-center rounded-full px-5 text-[14px] font-medium tracking-[-0.015em] transition-opacity hover:opacity-85",
    filled
      ? "bg-accent text-white"
      : "border border-border bg-card text-foreground",
    className,
  );

  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
