"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { ROUTES } from "@/lib/site";

function HandoffInner() {
  const router = useRouter();
  const params = useSearchParams();
  const { signIn } = useAuth();
  const intent = params.get("intent") ?? "sign-in";
  const returnTo = params.get("returnTo") || ROUTES.home;
  const [phase, setPhase] = useState(0);

  const messages =
    intent === "account"
      ? ["Opening your account…", "Connecting to account.warix.co…", "Almost there…"]
      : [
          "Signing in…",
          "Connecting to account.warix.co…",
          "Returning to Warix…",
        ];

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase(1), 700),
      window.setTimeout(() => setPhase(2), 1400),
      window.setTimeout(() => {
        if (intent === "sign-in" || intent === "checkout") {
          signIn();
          router.replace(returnTo.startsWith("/") ? returnTo : ROUTES.home);
        } else if (intent === "account") {
          window.location.href = "https://account.warix.co";
        } else {
          router.replace(returnTo.startsWith("/") ? returnTo : ROUTES.home);
        }
      }, 2200),
    ];
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [intent, returnTo, router, signIn]);

  return (
    <section className="page-wrap flex min-h-[70svh] flex-col items-center justify-center text-center">
      <p className="text-[13px] text-foreground/45">Warix Account</p>
      <h1 className="mt-4 text-[28px] font-medium tracking-[-0.04em] md:text-[36px]">
        {messages[phase] ?? messages[0]}
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-muted">
        This is a mock handoff. Your destination will be preserved when you
        return to warix.co.
      </p>
    </section>
  );
}

export default function HandoffPage() {
  return (
    <Suspense
      fallback={
        <section className="page-wrap flex min-h-[70svh] items-center justify-center">
          Signing in…
        </section>
      }
    >
      <HandoffInner />
    </Suspense>
  );
}
