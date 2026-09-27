"use client";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useBag } from "@/components/providers/BagProvider";
import { useCheckout } from "@/components/providers/CheckoutProvider";

export function DevStatePanel() {
  const [open, setOpen] = useState(false);
  const { signedIn, signIn, signOut, setHasProduct } = useAuth();
  const { clear, addItem, items } = useBag();
  const { setCheckoutError } = useCheckout();

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 left-4 z-[70]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-border bg-background px-3 py-1.5 text-[12px] text-foreground/70 shadow-sm"
      >
        Mock states
      </button>
      {open ? (
        <div className="mt-2 w-64 space-y-2 rounded-[10px] border border-border bg-background p-3 text-[12px] shadow-lg">
          <p className="text-foreground/45">Auth</p>
          <button type="button" className="block" onClick={() => signIn()}>
            Logged in
          </button>
          <button type="button" className="block" onClick={() => signOut()}>
            Logged out
          </button>
          <button
            type="button"
            className="block"
            onClick={() => signIn({ hasOne: false, hasTwo: false })}
          >
            Signed in, no software products
          </button>
          <button
            type="button"
            className="block"
            onClick={() => setHasProduct("one", true)}
          >
            Has One account
          </button>
          <p className="pt-2 text-foreground/45">Bag</p>
          <button type="button" className="block" onClick={() => clear()}>
            Empty bag
          </button>
          <button
            type="button"
            className="block"
            onClick={() =>
              addItem({
                productSlug: "one",
                series: "H1",
                name: "One",
                image: "/hardware/sunglasses.png",
                quantity: 1,
                unitPrice: 420,
                selection: { finish: "silver" },
                selectionLabels: { Finish: "Silver" },
              })
            }
          >
            Bag with H1
          </button>
          <p className="pt-2 text-foreground/45">Checkout</p>
          <button
            type="button"
            className="block"
            onClick={() => setCheckoutError("Payment could not be authorized.")}
          >
            Checkout error
          </button>
          <button
            type="button"
            className="block"
            onClick={() => setCheckoutError(null)}
          >
            Clear checkout error
          </button>
          <p className="pt-2 text-foreground/40">
            {signedIn ? "Signed in" : "Signed out"} · {items.length} bag lines
          </p>
        </div>
      ) : null}
    </div>
  );
}
