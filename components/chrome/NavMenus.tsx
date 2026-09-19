"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { hardwareCategories } from "@/lib/hardware";
import { ROUTES } from "@/lib/site";

type MenuId = "software" | "hardware";

interface NavMenuContextValue {
  open: MenuId | null;
  sheet: boolean;
  show: (id: MenuId) => void;
  hideSoon: () => void;
  cancelClose: () => void;
  close: () => void;
  toggleSheet: () => void;
}

const NavMenuContext = createContext<NavMenuContextValue | null>(null);

export function useNavMenu() {
  const value = useContext(NavMenuContext);
  if (!value) {
    throw new Error("Nav menu is missing a provider");
  }
  return value;
}

export function NavMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<MenuId | null>(null);
  const [sheet, setSheet] = useState(false);
  const closeTimer = useRef<number | null>(null);

  function cancelClose() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function show(id: MenuId) {
    cancelClose();
    setSheet(false);
    setOpen(id);
  }

  function close() {
    cancelClose();
    setOpen(null);
    setSheet(false);
  }

  function toggleSheet() {
    cancelClose();
    setOpen(null);
    setSheet((value) => !value);
  }

  function hideSoon() {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(null);
        setSheet(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <NavMenuContext.Provider
      value={{ open, sheet, show, hideSoon, cancelClose, close, toggleSheet }}
    >
      {children}
    </NavMenuContext.Provider>
  );
}

export function NavTriggers({ className }: { className?: string }) {
  const { open, show, close } = useNavMenu();

  return (
    <nav className={cn("flex items-center gap-8", className)} aria-label="Primary">
      <button
        type="button"
        onMouseEnter={() => show("software")}
        onFocus={() => show("software")}
        onClick={() => (open === "software" ? close() : show("software"))}
        className={cn(
          "text-[15px] tracking-[-0.015em] transition-opacity",
          open === "software" ? "text-foreground" : "text-foreground/70 hover:text-foreground",
        )}
      >
        Software
      </button>
      <button
        type="button"
        onMouseEnter={() => show("hardware")}
        onFocus={() => show("hardware")}
        onClick={() => (open === "hardware" ? close() : show("hardware"))}
        className={cn(
          "text-[15px] tracking-[-0.015em] transition-opacity",
          open === "hardware" ? "text-foreground" : "text-foreground/70 hover:text-foreground",
        )}
      >
        Hardware
      </button>
      <Link
        href={ROUTES.company}
        onMouseEnter={close}
        className="text-[15px] tracking-[-0.015em] text-foreground/70 transition-opacity hover:text-foreground"
      >
        Company
      </Link>
    </nav>
  );
}

export function NavPanel() {
  const { open, cancelClose, hideSoon, close } = useNavMenu();

  if (!open) return null;

  return (
    <>
      <div
        className="absolute inset-x-0 top-full z-50 hidden bg-background md:block"
        onMouseEnter={cancelClose}
        onMouseLeave={hideSoon}
      >
        <div className="page-wrap pb-12 pt-6">
          {open === "software" ? (
            <div className="max-w-md">
              <Link href={ROUTES.lora} onClick={close} className="group block">
                <p className="text-[28px] font-medium leading-none tracking-[-0.04em] text-foreground">
                  Lora
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-muted">
                  The software platform behind Warix.
                </p>
              </Link>
            </div>
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {hardwareCategories.map((category) => (
                <div key={category.slug}>
                  <Link
                    href={`/hardware/${category.slug}`}
                    onClick={close}
                    className="text-[13px] uppercase tracking-[0.04em] text-muted transition-opacity hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                  {category.products.length ? (
                    <ul className="mt-3 space-y-1.5">
                      {category.products.map((product) => (
                        <li key={product.slug}>
                          <Link
                            href={`/hardware/${category.slug}/${product.slug}`}
                            onClick={close}
                            className="text-[22px] font-medium tracking-[-0.035em] text-foreground/80 transition-opacity hover:text-foreground"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-[14px] text-faint">Forthcoming</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu"
        className="fixed inset-x-0 bottom-0 top-14 z-40 hidden bg-foreground/10 md:top-16 md:block"
        onClick={close}
      />
    </>
  );
}
