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
import { ROUTES } from "@/lib/site";

export type MenuId = "research" | "products" | "company";

export const NAV_ORDER: MenuId[] = ["research", "products", "company"];

interface MenuLink {
  label: string;
  href: string;
}

export interface NavMenu {
  id: MenuId;
  label: string;
  href: string;
  primaryTitle: string;
  primary: MenuLink[];
  secondaryTitle?: string;
  secondary?: MenuLink[];
}

export const NAV_MENUS: Record<MenuId, NavMenu> = {
  research: {
    id: "research",
    label: "Research",
    href: ROUTES.research,
    primaryTitle: "Research",
    primary: [
      { label: "Overview", href: ROUTES.research },
      { label: "Agents", href: `${ROUTES.research}#agents` },
      { label: "Interfaces", href: `${ROUTES.research}#interfaces` },
      { label: "Connected systems", href: `${ROUTES.research}#connected` },
      { label: "Applied AI", href: `${ROUTES.research}#applied` },
    ],
  },
  products: {
    id: "products",
    label: "Products",
    href: ROUTES.products,
    primaryTitle: "Products",
    primary: [
      { label: "All products", href: ROUTES.products },
      { label: "One", href: ROUTES.one },
    ],
  },
  company: {
    id: "company",
    label: "Company",
    href: ROUTES.company,
    primaryTitle: "Company",
    primary: [
      { label: "About Warix", href: ROUTES.company },
      { label: "Philosophy", href: `${ROUTES.company}#philosophy` },
      { label: "Story", href: `${ROUTES.company}#story` },
      { label: "Careers", href: `${ROUTES.company}#careers` },
      { label: "Contact", href: `${ROUTES.company}#contact` },
    ],
  },
};

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
      className={cn("flex items-center justify-center gap-8", className)}
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
              "text-[14px] tracking-[-0.01em] transition-colors",
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

  return (
    <div
      className="absolute inset-x-0 top-full z-50 hidden border-b border-border bg-background md:block"
      onMouseEnter={cancelClose}
      onMouseLeave={hideSoon}
    >
      <div className="page-wrap flex flex-wrap gap-x-24 gap-y-10 pb-14 pt-8">
        <div className="min-w-[16rem]">
          <p className="mb-5 text-[13px] text-foreground/45">
            {menu.primaryTitle}
          </p>
          <ul className="space-y-2">
            {menu.primary.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-0.5 text-[28px] font-medium leading-tight tracking-[-0.04em] text-foreground transition-opacity hover:opacity-55"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
