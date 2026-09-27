"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function SiteFooter() {
  const pathname = usePathname();
  if (
    pathname?.endsWith("/configure") ||
    pathname === "/checkout" ||
    pathname === "/account/handoff"
  ) {
    return null;
  }
  return <Footer />;
}
