"use client";

import Link from "next/link";
import { AccountMenu } from "./AccountMenu";
import { MobileNav } from "./MobileNav";
import { NavMenuProvider, NavPanel, NavTriggers, useNavMenu } from "./NavMenus";
import { Wordmark } from "./Wordmark";
import { EXTERNAL } from "@/lib/site";

export function Header() {
  return (
    <NavMenuProvider>
      <HeaderShell />
    </NavMenuProvider>
  );
}

function HeaderShell() {
  const { hideSoon, cancelClose, open, close } = useNavMenu();

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 hidden bg-black/10 md:block"
          onClick={close}
        />
      ) : null}

      <header
        className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl"
        onMouseLeave={hideSoon}
        onMouseEnter={cancelClose}
      >
        <div className="page-wrap flex h-14 items-center justify-between md:grid md:h-16 md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            onClick={close}
            className="justify-self-start"
            aria-label="Warix home"
          >
            <Wordmark />
          </Link>
          <NavTriggers className="hidden md:flex" />
          <div className="flex items-center justify-end gap-3 justify-self-end md:gap-4">
            <div className="hidden md:block">
              <AccountMenu />
            </div>
            <span
              aria-hidden
              className="hidden h-5 w-px bg-border md:block"
            />
            <a
              href={EXTERNAL.oneApp}
              className="hidden h-8 items-center rounded-full bg-accent px-4 text-[13px] font-medium tracking-[-0.015em] text-white transition-opacity hover:opacity-85 md:inline-flex"
            >
              Try One
            </a>
            <MobileNav />
          </div>
        </div>
        <NavPanel />
      </header>
    </>
  );
}
