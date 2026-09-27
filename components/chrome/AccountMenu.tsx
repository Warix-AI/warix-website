"use client";

import { useEffect, useRef, useState } from "react";
import { EXTERNAL } from "@/lib/site";
import { useAuth } from "@/components/providers/AuthProvider";
import { cn } from "@/lib/cn";

export function AccountMenu() {
  const { signedIn, user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!signedIn) {
    return (
      <div ref={rootRef} className="relative">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "text-[13px] tracking-[-0.01em] transition-colors",
            open
              ? "text-foreground"
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          Log in
        </button>
        {open ? (
          <div
            role="menu"
            className="absolute right-0 top-full z-50 mt-3 min-w-[12.5rem] overflow-hidden rounded-[16px] border border-border bg-card py-1 shadow-[0_8px_30px_rgb(0_0_0_/0.08)]"
          >
            <a
              href={EXTERNAL.accountHome}
              role="menuitem"
              className="flex items-center justify-between gap-6 px-4 py-3 text-[14px] font-medium tracking-[-0.02em] text-foreground transition-colors hover:bg-row-hover"
              onClick={() => setOpen(false)}
            >
              Warix Account
              <Chevron />
            </a>
            <a
              href={EXTERNAL.oneApp}
              role="menuitem"
              className="flex items-center justify-between gap-6 px-4 py-3 text-[14px] font-medium tracking-[-0.02em] text-foreground transition-colors hover:bg-row-hover"
              onClick={() => setOpen(false)}
            >
              One
              <Chevron />
            </a>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c7c7cc] text-[12px] font-semibold text-white"
        aria-label="Account menu"
      >
        {(user?.name ?? "A").slice(0, 1)}
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-3 min-w-[12.5rem] overflow-hidden rounded-[16px] border border-border bg-card py-1 shadow-[0_8px_30px_rgb(0_0_0_/0.08)]"
        >
          <p className="border-b border-border px-4 py-3 text-[12px] text-muted">
            {user?.email}
          </p>
          <a
            href={EXTERNAL.accountHome}
            role="menuitem"
            className="block px-4 py-3 text-[14px] font-medium hover:bg-row-hover"
          >
            Account
          </a>
          <a
            href={EXTERNAL.accountOrders}
            role="menuitem"
            className="block px-4 py-3 text-[14px] font-medium hover:bg-row-hover"
          >
            Orders
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              signOut();
              setOpen(false);
            }}
            className="block w-full px-4 py-3 text-left text-[14px] font-medium hover:bg-row-hover"
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Chevron() {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      aria-hidden
      className="text-faint"
    >
      <path
        d="M1 1l4.5 5L1 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
