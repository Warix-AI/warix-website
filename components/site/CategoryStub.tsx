import Link from "next/link";
import { ROUTES } from "@/lib/site";

export function CategoryStub({
  title,
  blurb,
  items,
}: {
  title: string;
  blurb: string;
  items: { label: string; href: string; meta?: string }[];
}) {
  return (
    <section className="page-wrap py-16 md:py-24">
      <p className="meta">Explore</p>
      <h1 className="display mt-4 text-[40px] md:text-[56px]">{title}</h1>
      <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
        {blurb}
      </p>
      <ul className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block transition-opacity hover:opacity-60"
            >
              <span className="text-[28px] font-medium tracking-[-0.04em]">
                {item.label}
              </span>
              {item.meta ? (
                <span className="mt-1 block text-[14px] text-foreground/45">
                  {item.meta}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-16 text-[14px] text-foreground/45">
        Placeholder category for nav exploration.{" "}
        <Link href={ROUTES.home} className="text-foreground underline-offset-4 hover:underline">
          Back home
        </Link>
      </p>
    </section>
  );
}
