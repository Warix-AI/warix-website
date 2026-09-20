"use client";

import Link from "next/link";
import { LoginMenu } from "./LoginMenu";
import { MobileNav } from "./MobileNav";
import { NavMenuProvider, NavPanel, NavTriggers, useNavMenu } from "./NavMenus";
import { Wordmark } from "./Wordmark";

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
          className="fixed inset-0 z-40 hidden bg-black/25 backdrop-blur-sm md:block"
          onClick={close}
        />
      ) : null}

      <header
        className="sticky top-0 z-50 bg-background"
        onMouseLeave={hideSoon}
        onMouseEnter={cancelClose}
      >
        <div className="page-wrap flex h-14 items-center justify-between md:grid md:h-16 md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            onClick={close}
            className="justify-self-start text-foreground"
            aria-label="Warix home"
          >
            <Wordmark />
          </Link>
          <NavTriggers className="hidden md:flex" />
          <div className="flex items-center justify-end gap-3 justify-self-end">
            <LoginMenu />
            <MobileNav />
          </div>
        </div>
        <NavPanel />
      </header>
    </>
  );
}
