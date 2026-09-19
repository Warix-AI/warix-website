"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { MobileNav } from "./MobileNav";
import { NavMenuProvider, NavPanel, NavTriggers, useNavMenu } from "./NavMenus";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavMenuProvider>
      <HeaderShell scrolled={scrolled} />
    </NavMenuProvider>
  );
}

function HeaderShell({ scrolled }: { scrolled: boolean }) {
  const { hideSoon, cancelClose } = useNavMenu();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-background/95 backdrop-blur-[2px]",
        scrolled && "border-b border-border",
      )}
      onMouseLeave={hideSoon}
      onMouseEnter={cancelClose}
    >
      <div className="page-wrap flex h-14 items-center justify-between md:h-16">
        <Link href="/" className="text-foreground" aria-label="Warix home">
          <Wordmark className="text-[16px] font-medium tracking-[-0.03em]" />
        </Link>
        <div className="hidden flex-1 justify-center md:flex">
          <NavTriggers />
        </div>
        <MobileNav />
      </div>
      <NavPanel />
    </header>
  );
}
