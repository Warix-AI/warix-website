"use client";

import Link from "next/link";
import { useEffect } from "react";
import { hardwareCategories } from "@/lib/hardware";
import { ROUTES } from "@/lib/site";
import { useNavMenu } from "./NavMenus";

export function MobileNav() {
  const { sheet, toggleSheet, close } = useNavMenu();

  useEffect(() => {
    if (!sheet) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [sheet]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={sheet ? "Close menu" : "Open menu"}
        aria-expanded={sheet}
        onClick={toggleSheet}
        className="inline-flex h-10 w-10 items-center justify-center text-foreground"
      >
        <HamburgerIcon open={sheet} />
      </button>

      {sheet ? (
        <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t border-border bg-background">
          <nav aria-label="Primary" className="px-4 py-8">
            <div className="space-y-8">
              <div>
                <p className="meta">Software</p>
                <Link
                  href={ROUTES.lora}
                  onClick={close}
                  className="mt-3 block text-[32px] font-medium tracking-[-0.04em]"
                >
                  Lora
                </Link>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">
                  The software platform behind Warix.
                </p>
              </div>

              <div>
                <p className="meta">Hardware</p>
                <ul className="mt-4 space-y-5">
                  {hardwareCategories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/hardware/${category.slug}`}
                        onClick={close}
                        className="text-[15px] text-muted"
                      >
                        {category.name}
                      </Link>
                      {category.products.length ? (
                        <ul className="mt-2 space-y-1">
                          {category.products.map((product) => (
                            <li key={product.slug}>
                              <Link
                                href={`/hardware/${category.slug}/${product.slug}`}
                                onClick={close}
                                className="text-[26px] font-medium tracking-[-0.035em]"
                              >
                                {product.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-[14px] text-faint">Forthcoming</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="meta">Company</p>
                <Link
                  href={ROUTES.company}
                  onClick={close}
                  className="mt-3 block text-[26px] font-medium tracking-[-0.035em]"
                >
                  About Warix
                </Link>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d={open ? "M3.5 3.5 12.5 12.5" : "M2.5 5h11"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d={open ? "M12.5 3.5 3.5 12.5" : "M2.5 11h11"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
