import Link from "next/link";

export interface StoryRow {
  meta: string;
  title: string;
  body: string;
  href: string;
}

export function StoryList({
  heading,
  rows,
  action,
}: {
  heading: string;
  rows: StoryRow[];
  action?: { label: string; href: string };
}) {
  return (
    <section className="page-wrap py-16 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-[22px] font-medium tracking-[-0.03em] md:text-[24px]">
          {heading}
        </h2>
        {action ? (
          <Link
            href={action.href}
            className="text-[14px] text-foreground/55 transition-opacity hover:text-foreground"
          >
            {action.label}
          </Link>
        ) : null}
      </div>
      <ul className="mt-8">
        {rows.map((row) => (
          <li key={row.href + row.title} className="border-t border-white/10">
            <Link
              href={row.href}
              className="grid gap-3 py-7 md:grid-cols-[10rem_1fr] md:gap-16"
            >
              <p className="pt-1 text-[13px] text-foreground/45">{row.meta}</p>
              <div>
                <p className="text-[22px] font-medium tracking-[-0.03em] md:text-[26px]">
                  {row.title}
                </p>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-foreground/50">
                  {row.body}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
