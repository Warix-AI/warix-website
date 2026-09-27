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
import {
  NAV_MENUS,
  NAV_ORDER,
  type MenuId,
} from "@/lib/nav";

export type { MenuId, MenuProduct, NavMenu } from "@/lib/nav";
export { NAV_MENUS, NAV_ORDER };

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
  if (!value) throw new Error("Nav menu is missing a provider");
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
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
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

  useEffect(() => {
    if (!open) return;
    function onScroll() {
      setOpen(null);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!sheet) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  return (
    <NavMenuContext.Provider
      value={{ open, sheet, show, hideSoon, cancelClose, close, toggleSheet }}
    >
      {children}
    </NavMenuContext.Provider>
  );
}

export function NavTriggers({ className }: { className?: string }) {
  const { open, show } = useNavMenu();

  return (
    <nav
      className={cn("flex items-center justify-center gap-5 lg:gap-7", className)}
      aria-label="Primary"
    >
      {NAV_ORDER.map((id) => {
        const menu = NAV_MENUS[id];
        const active = open === id;
        return (
          <Link
            key={id}
            href={menu.href}
            onMouseEnter={() => show(id)}
            className={cn(
              "text-[13px] tracking-[-0.01em] transition-colors",
              active
                ? "text-foreground"
                : "text-foreground/55 hover:text-foreground",
            )}
          >
            {menu.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function NavPanel() {
  const { open, cancelClose, hideSoon, close } = useNavMenu();

  if (!open) return null;
  const menu = NAV_MENUS[open];
  const count = menu.products.length;

  return (
    <div
      className="absolute inset-x-0 top-full z-50 hidden border-b border-border/70 bg-background/95 backdrop-blur-xl md:block"
      onMouseEnter={cancelClose}
      onMouseLeave={hideSoon}
    >
      <div className="page-wrap px-[30px] py-[30px]">
        <ul
          className={cn(
            "grid h-[240px] gap-3",
            count <= 1 ? "grid-cols-1" : count === 2 ? "grid-cols-2" : "grid-cols-3",
          )}
        >
          {menu.products.map((product) => (
            <li key={product.href}>
              <Link
                href={product.href}
                onClick={close}
                className="card group relative flex h-full flex-col justify-end overflow-hidden bg-card p-6 transition-opacity hover:opacity-90"
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/[0.04] to-transparent" />
                <span className="relative">
                  <span className="block text-[28px] font-medium tracking-[-0.04em]">
                    {product.label}
                  </span>
                  {product.meta ? (
                    <span className="mt-1 block text-[13px] text-muted">
                      {product.meta}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
