"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useCheckout } from "@/components/providers/CheckoutProvider";
import { formatUsd } from "@/lib/catalog";
import { EXTERNAL, ROUTES } from "@/lib/site";

export default function OrderConfirmationPage() {
  const { lastOrder } = useCheckout();

  if (!lastOrder) {
    return (
      <section className="page-wrap py-20">
        <h1 className="display text-[40px]">No recent order</h1>
        <div className="mt-8">
          <ButtonLink href={ROUTES.hardware} filled>
            Continue shopping
          </ButtonLink>
        </div>
      </section>
    );
  }

  return (
    <section className="page-wrap py-16 md:py-24">
      <p className="meta">Confirmation</p>
      <h1 className="display mt-4 text-[40px] md:text-[56px]">
        Thank you for your order.
      </h1>
      <p className="mt-4 text-[17px] text-muted">
        Order {lastOrder.id}
        {lastOrder.guest ? " · Guest checkout" : " · Attached to your Warix Account"}
      </p>

      <div className="mt-12 max-w-2xl space-y-8 border-t border-border pt-8">
        <div>
          <h2 className="text-[15px] font-medium">Products</h2>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            {lastOrder.items.map((item) => (
              <li key={item.id}>
                {item.quantity} × {item.name} ({item.series}) —{" "}
                {formatUsd(item.unitPrice * item.quantity)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[15px] font-medium">Shipping</h2>
          <p className="mt-2 text-[15px] text-muted">
            {lastOrder.shipping.name}
            <br />
            {lastOrder.shipping.line1}
            <br />
            {lastOrder.shipping.city}, {lastOrder.shipping.region}{" "}
            {lastOrder.shipping.postal}
          </p>
          <p className="mt-2 text-[14px] text-foreground/50">
            {lastOrder.estimatedDelivery}
          </p>
        </div>
        <div>
          <h2 className="text-[15px] font-medium">Payment</h2>
          <p className="mt-2 text-[15px] text-muted">
            {lastOrder.paymentSummary}
          </p>
          <p className="mt-2 text-[18px] font-medium">
            Total {formatUsd(lastOrder.total)}
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <ButtonLink href={EXTERNAL.accountOrders} filled external>
          View Order
        </ButtonLink>
        <ButtonLink href={ROUTES.hardware}>Continue Shopping</ButtonLink>
      </div>
      <p className="mt-6 max-w-xl text-[13px] text-foreground/45">
        Long-term order and device management happens at account.warix.co — not
        on the marketing site.
      </p>
      <p className="mt-2 text-[13px]">
        <Link href={ROUTES.support} className="text-foreground/55 hover:text-foreground">
          Need help?
        </Link>
      </p>
    </section>
  );
}
