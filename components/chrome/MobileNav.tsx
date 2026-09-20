"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LOGIN_TARGETS } from "@/lib/software";
import { HardwareCards } from "./HardwareCards";
import { SoftwareCards } from "./SoftwareCards";
import {
  NAV_MENUS,
  NAV_ORDER,
  useNavMenu,
  type MenuId,
} from "./NavMenus";

export function MobileNav() {
  const { sheet, toggleSheet, close } = useNavMenu();
  const [view, setView] = useState<MenuId | null>(null);

  useEffect(() => {
    if (!sheet) setView(null);
  }, [sheet]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={sheet ? "Close menu" : "Open menu"}
        aria-expanded={sheet}
        onClick={toggleSheet}
        className="inline-flex h-10 w-10 items-center justify-end text-foreground"
      >
        <PanelIcon />
      </button>

      {sheet ? (
        <div className="fixed inset-x-0 top-14 bottom-0 z-50 overflow-y-auto bg-background">
          <nav aria-label="Primary" className="page-wrap pb-16 pt-8">
            {view ? (
              <MenuPane id={view} onBack={() => setView(null)} onNavigate={close} />
            ) : (
              <RootPane onOpen={setView} onNavigate={close} />
            )}
          </nav>
        </div>
      ) : null}
    </div>
  );
}

function RootPane({
  onOpen,
  onNavigate,
}: {
  onOpen: (id: MenuId) => void;
  onNavigate: () => void;
}) {
  return (
    <div>
      <ul className="space-y-1">
        {NAV_ORDER.map((id) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onOpen(id)}
              className="block w-full py-1 text-left text-[40px] font-medium leading-[1.1] tracking-[-0.045em] text-foreground"
            >
              {NAV_MENUS[id].label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-white/15 pt-8">
        <p className="mb-4 text-[13px] text-foreground/45">Log in</p>
        <ul className="space-y-1">
          {LOGIN_TARGETS.map((target) => (
            <li key={target.name}>
              <a
                href={target.href}
                onClick={onNavigate}
                className="inline-flex items-center gap-2 py-1 text-[40px] font-medium leading-[1.1] tracking-[-0.045em] text-foreground"
              >
                {target.name}
                <ExternalArrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MenuPane({
  id,
  onBack,
  onNavigate,
}: {
  id: MenuId;
  onBack: () => void;
  onNavigate: () => void;
}) {
  const menu = NAV_MENUS[id];

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-10 inline-flex items-center gap-2 text-[15px] text-foreground/55"
      >
        <BackArrow />
        Home
      </button>

      <p className="mb-4 text-[13px] text-foreground/45">{menu.label}</p>

      {menu.id === "software" ? (
        <SoftwareCards onNavigate={onNavigate} />
      ) : menu.id === "hardware" ? (
        <HardwareCards onNavigate={onNavigate} />
      ) : (
        <ul className="space-y-1">
          {menu.primary.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block py-1 text-[40px] font-medium leading-[1.1] tracking-[-0.045em] text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {menu.secondary?.length ? (
        <div className="mt-12">
          <p className="mb-4 text-[13px] text-foreground/45">
            {menu.secondaryTitle}
          </p>
          <ul className="space-y-2">
            {menu.secondary.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block py-0.5 text-[15px] text-foreground/70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function PanelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect
        x="2.75"
        y="3.25"
        width="12.5"
        height="11.5"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M7.25 3.25v11.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10.25 3.5 5.75 8l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M5 13 13 5M7.5 5H13v5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
