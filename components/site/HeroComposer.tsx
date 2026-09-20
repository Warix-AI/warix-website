"use client";

import { useEffect, useState } from "react";
import { HERO_PROMPTS } from "@/lib/stories";
import { ROUTES } from "@/lib/site";

export function HeroComposer() {
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPromptIndex((index) => (index + 1) % HERO_PROMPTS.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <form action={ROUTES.oneApp} method="get" className="mt-7 w-full max-w-[640px]">
      <label className="sr-only" htmlFor="one-composer">
        Message One
      </label>
      <div className="flex min-h-14 items-center rounded-[28px] bg-[#2f2f2f] px-5 py-4 md:min-h-16">
        <input
          id="one-composer"
          type="text"
          name="q"
          placeholder={HERO_PROMPTS[promptIndex]}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-[16px] text-foreground outline-none placeholder:text-foreground/35"
        />
        <button
          type="submit"
          aria-label="Send to One"
          className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-foreground/80 transition-opacity hover:opacity-80"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M7 11.5V2.5M7 2.5 3 6.5M7 2.5l4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
