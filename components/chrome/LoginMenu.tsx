"use client";

import { useEffect, useRef, useState } from "react";
import { LOGIN_TARGETS } from "@/lib/software";
import { useNavMenu } from "./NavMenus";

export function LoginMenu() {
  const { open, close } = useNavMenu();
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(false);
      setPinned(false);
    }
  }, [open]);

  useEffect(() => {
    if (!pinned) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setVisible(false);
        setPinned(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setVisible(false);
        setPinned(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [pinned]);

  return (
    <div
      ref={rootRef}
      className="relative hidden md:block"
      onMouseEnter={() => {
        close();
        setVisible(true);
      }}
      onMouseLeave={() => {
        if (!pinned) setVisible(false);
      }}
    >
      <button
        type="button"
        aria-expanded={visible}
        aria-haspopup="menu"
        onClick={() => {
          close();
          setPinned(true);
          setVisible(true);
        }}
        className="inline-flex h-9 items-center rounded-full bg-foreground px-3.5 text-[14px] tracking-[-0.015em] text-background transition-opacity hover:opacity-80"
      >
        Log in
      </button>

      {visible ? (
        <div className="absolute right-0 top-full z-50 pt-2">
          <div
            role="menu"
            className="min-w-[11rem] rounded-2xl border border-white/10 bg-background py-2"
          >
            {LOGIN_TARGETS.map((target) => (
              <a
                key={target.name}
                href={target.href}
                role="menuitem"
                className="block px-4 py-2 text-[15px] text-foreground/80 transition-colors hover:text-foreground"
              >
                {target.name}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
