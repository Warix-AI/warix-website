"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SOFTWARE_PRODUCTS } from "@/lib/catalog";
import { ROUTES } from "@/lib/site";
import { useSearch } from "@/components/providers/SearchProvider";

const SUPPORT = [
  { label: "Software support", href: `${ROUTES.support}#software` },
  { label: "Account & billing", href: `${ROUTES.support}#account` },
];

const COMPANY = [
  { label: "About Warix", href: ROUTES.company },
  { label: "Research", href: ROUTES.research },
  { label: "Careers", href: ROUTES.companyCareers },
];

export function SearchOverlay() {
  const { open, setOpen } = useSearch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const software = SOFTWARE_PRODUCTS.filter((p) => p.slug === "one")
      .filter(
        (p) =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.series.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q),
      )
      .map((p) => ({
        group: "Software",
        label: `${p.name} (${p.series})`,
        href: p.href,
      }));
    const support = SUPPORT.filter(
      (item) => !q || item.label.toLowerCase().includes(q),
    ).map((item) => ({ group: "Support", ...item }));
    const company = COMPANY.filter(
      (item) => !q || item.label.toLowerCase().includes(q),
    ).map((item) => ({ group: "Company", ...item }));
    return [...software, ...support, ...company];
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/20 p-4 backdrop-blur-sm md:p-10">
      <div className="mx-auto max-w-2xl rounded-[12px] border border-border bg-background shadow-lg">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search One, research, support"
            className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-foreground/35"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-[13px] text-foreground/55"
          >
            Close
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto py-2">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-[14px] text-foreground/45">
              No public results.
            </li>
          ) : (
            results.map((item) => (
              <li key={`${item.group}-${item.label}`}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-4 px-4 py-3 hover:bg-paper"
                >
                  <span className="text-[15px]">{item.label}</span>
                  <span className="text-[12px] text-foreground/40">
                    {item.group}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
