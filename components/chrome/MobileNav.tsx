"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EXTERNAL } from "@/lib/site";
import { useAuth } from "@/components/providers/AuthProvider";
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
    <div className="relative z-[60] md:hidden">
      <button
        type="button"
        aria-label={sheet ? "Close menu" : "Open menu"}
        aria-expanded={sheet}
        onClick={toggleSheet}
        className="relative z-[61] inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
      >
        {sheet ? <CloseIcon /> : <MenuIcon />}
      </button>

      {sheet ? (
        <div className="fixed inset-x-0 top-14 bottom-0 z-50 overflow-y-auto bg-background">
          <nav aria-label="Primary" className="page-wrap pb-16 pt-8">
            {view ? (
              <MenuPane
                id={view}
                onBack={() => setView(null)}
                onNavigate={close}
              />
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
  const { signedIn, signOut, user } = useAuth();

  return (
    <div>
      <ul className="space-y-1">
        {NAV_ORDER.map((id) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => onOpen(id)}
              className="block w-full py-1 text-left text-[36px] font-medium leading-[1.1] tracking-[-0.045em] text-foreground"
            >
              {NAV_MENUS[id].label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <a
          href={EXTERNAL.oneApp}
          onClick={onNavigate}
          className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-[15px] font-medium text-white"
        >
          Try One
        </a>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="mb-4 text-[13px] text-muted">Log in</p>
        {signedIn ? (
          <ul className="space-y-3 text-[18px]">
            <li className="text-muted">{user?.email}</li>
            <li>
              <a href={EXTERNAL.accountHome} onClick={onNavigate}>
                Account
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  signOut();
                  onNavigate();
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        ) : (
          <ul className="space-y-3 text-[18px]">
            <li>
              <a href={EXTERNAL.accountHome} onClick={onNavigate}>
                Warix Account
              </a>
            </li>
            <li>
              <a href={EXTERNAL.oneApp} onClick={onNavigate}>
                One
              </a>
            </li>
          </ul>
        )}
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
        className="mb-10 inline-flex items-center gap-2 text-[15px] text-muted"
      >
        ← Menu
      </button>
      <p className="mb-4 text-[13px] text-muted">{menu.label}</p>
      <ul className="space-y-3">
        {menu.products.map((product) => (
          <li key={product.href}>
            <Link
              href={product.href}
              onClick={onNavigate}
              className="card block p-5"
            >
              <span className="block text-[28px] font-medium tracking-[-0.04em]">
                {product.label}
              </span>
              {product.meta ? (
                <span className="mt-1 block text-[14px] text-muted">
                  {product.meta}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
