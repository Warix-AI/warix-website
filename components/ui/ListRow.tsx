import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ListCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("card divide-y divide-border/80", className)}>
      {children}
    </ul>
  );
}

export function ListRow({
  href,
  external,
  icon,
  title,
  subtitle,
  trailing,
  onClick,
  className,
}: {
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const content = (
    <>
      {icon ? (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block text-[16px] font-medium tracking-[-0.02em] text-foreground">
          {title}
        </span>
        {subtitle ? (
          <span className="mt-0.5 block text-[13px] text-muted">{subtitle}</span>
        ) : null}
      </span>
      {trailing ?? (
        <Chevron className="shrink-0 text-faint" />
      )}
    </>
  );

  const classes = cn(
    "flex w-full items-center gap-3.5 px-4 py-3.5 text-left transition-colors hover:bg-row-hover",
    className,
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <li>
          <a href={href} className={classes} onClick={onClick}>
            {content}
          </a>
        </li>
      );
    }
    return (
      <li>
        <Link href={href} className={classes} onClick={onClick}>
          {content}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button type="button" className={classes} onClick={onClick}>
        {content}
      </button>
    </li>
  );
}

export function ColorIcon({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return (
    <span
      className="flex h-8 w-8 items-center justify-center rounded-[8px] text-white"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M1 1.5L6.5 7L1 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
