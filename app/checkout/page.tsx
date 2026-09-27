"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useAuth } from "@/components/providers/AuthProvider";
import { useBag } from "@/components/providers/BagProvider";
import { useCheckout } from "@/components/providers/CheckoutProvider";
import { formatUsd } from "@/lib/catalog";
import type { PlacedOrder } from "@/lib/mock/types";
import { ROUTES } from "@/lib/site";

const fieldClass =
  "w-full rounded-[8px] border border-border bg-background px-3.5 py-3 text-[15px] outline-none focus:border-foreground";

export default function CheckoutPage() {
  const router = useRouter();
  const { signedIn, user } = useAuth();
  const { items, subtotal, clear } = useBag();
  const { setLastOrder, checkoutError, setCheckoutError } = useCheckout();
  const [guest, setGuest] = useState(false);
  const [contact, setContact] = useState("");
  const [line1, setLine1] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");

  useEffect(() => {
    if (user) {
      setContact(user.email);
      setLine1(user.shipping.line1);
      setCity(user.shipping.city);
      setRegion(user.shipping.region);
      setPostal(user.shipping.postal);
    }
  }, [user]);

  if (items.length === 0) {
    return (
      <section className="page-wrap py-20">
        <h1 className="display text-[40px]">Checkout</h1>
        <p className="mt-4 text-muted">Your bag is empty.</p>
        <div className="mt-8">
          <ButtonLink href={ROUTES.hardware} filled>
            Continue shopping
          </ButtonLink>
        </div>
      </section>
    );
  }

  function placeOrder() {
    if (!signedIn && !guest) {
      setCheckoutError("Sign in with Warix Account or continue as guest.");
      return;
    }
    if (!contact || !line1 || !city || !region || !postal) {
      setCheckoutError("Please complete contact and shipping details.");
      return;
    }
    if (checkoutError === "Payment could not be authorized.") {
      return;
    }

    const order: PlacedOrder = {
      id: `W-${10480 + Math.floor(Math.random() * 40)}`,
      items,
      total: subtotal,
      shipping: {
        name: user?.shipping.name ?? contact,
        line1,
        city,
        region,
        postal,
        country: "United States",
      },
      paymentSummary: signedIn
        ? `${user?.payment.brand} ···· ${user?.payment.last4}`
        : "Card ending ···· 4242",
      estimatedDelivery: "Arrives in 3–5 business days",
      createdAt: new Date().toISOString(),
      guest: !signedIn,
    };

    setLastOrder(order);
    setCheckoutError(null);
    clear();
    router.push(ROUTES.orderConfirmation);
  }

  return (
    <section className="page-wrap py-12 md:py-20">
      <h1 className="display text-[40px] md:text-[52px]">Checkout</h1>

      {!signedIn && !guest ? (
        <div className="mt-10 max-w-xl rounded-[8px] border border-border p-6">
          <h2 className="text-[22px] font-medium tracking-[-0.03em]">
            Sign in with Warix Account
          </h2>
          <p className="mt-2 text-[15px] text-muted">
            Use the same account across warix.co, one.warix.co, and
            account.warix.co. Your bag will be preserved.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href={`${ROUTES.handoff}?intent=sign-in&returnTo=${encodeURIComponent(ROUTES.checkout)}`}
              filled
            >
              Sign in with Warix Account
            </ButtonLink>
            <button
              type="button"
              onClick={() => setGuest(true)}
              className="inline-flex h-10 items-center rounded-full border border-border px-5 text-[14px]"
            >
              Continue as guest
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            {signedIn ? (
              <div className="rounded-[8px] border border-border p-5 text-[14px] text-muted">
                Signed in as {user?.email}. Purchases attach to this Warix
                Account.
              </div>
            ) : (
              <div className="rounded-[8px] border border-border p-5 text-[14px] text-muted">
                Guest checkout. You can create a Warix Account later to manage
                orders.
              </div>
            )}

            <Fieldset title="Contact">
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email"
                className={fieldClass}
              />
            </Fieldset>

            <Fieldset title="Shipping">
              <input
                value={line1}
                onChange={(e) => setLine1(e.target.value)}
                placeholder="Address"
                className={fieldClass}
              />
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className={fieldClass}
                />
                <input
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="State"
                  className={fieldClass}
                />
                <input
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  placeholder="ZIP"
                  className={fieldClass}
                />
              </div>
            </Fieldset>

            <Fieldset title="Payment">
              <p className="text-[15px] text-muted">
                {signedIn
                  ? `${user?.payment.brand} ending in ${user?.payment.last4}`
                  : "Mock card · Visa ending in 4242"}
              </p>
            </Fieldset>

            {checkoutError ? (
              <p className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
                {checkoutError}
              </p>
            ) : null}

            <button
              type="button"
              onClick={placeOrder}
              className="inline-flex h-11 items-center rounded-full bg-foreground px-8 text-[15px] text-background hover:opacity-80"
            >
              Place order
            </button>
          </div>

          <aside className="h-fit rounded-[8px] border border-border p-6">
            <h2 className="text-[16px] font-medium">Order summary</h2>
            <ul className="mt-4 space-y-3 text-[14px]">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between gap-4">
                  <span>
                    {item.quantity} × {item.name}
                  </span>
                  <span>{formatUsd(item.unitPrice * item.quantity)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between border-t border-border pt-4 text-[16px] font-medium">
              <span>Total</span>
              <span>{formatUsd(subtotal)}</span>
            </div>
            <Link
              href={ROUTES.bag}
              className="mt-4 block text-[14px] text-foreground/55 hover:text-foreground"
            >
              Edit bag
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}

function Fieldset({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-[15px] font-medium">{title}</legend>
      {children}
    </fieldset>
  );
}
