"use client";

import { ROUTES } from "@/lib/site";
import { useNavMenu } from "./NavMenus";

export function LoginMenu() {
  const { close } = useNavMenu();

  return (
    <a
      href={ROUTES.oneApp}
      onClick={close}
      className="hidden h-9 items-center rounded-full bg-foreground px-3.5 text-[14px] tracking-[-0.015em] text-background transition-opacity hover:opacity-80 md:inline-flex"
    >
      Try One
    </a>
  );
}
