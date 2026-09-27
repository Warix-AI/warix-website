"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useBag } from "@/components/providers/BagProvider";
import { formatUsd } from "@/lib/catalog";
import { ROUTES } from "@/lib/site";

export default function BagPage() {
  const { items, subtotal, removeItem, setQuantity } = useBag();

  return (
    <section className="page-wrap py-16 md:py-24">
      <h1 className="display text-[40px] md:text-[56px]">Bag</h1>

      {items.length === 0 ? (
        <div className="mt-12 max-w-lg">
          <p className="text-[17px] text-muted">Your bag is empty.</p>
          <div className="mt-8">
            <ButtonLink href={ROUTES.hardware} filled>
              Continue shopping
            </ButtonLink>
          </div>
        </div>
      ) : (
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
          <ul className="space-y-8">
            {items.map((item) => (
              <li
                key={item.id}
                className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[120px_1fr_auto]"
              >
                <div className="relative aspect-square overflow-hidden rounded-[4px] border border-border bg-paper">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-contain p-4"
                    sizes="120px"
                  />
                </div>
                <div>
                  <p className="text-[13px] text-foreground/45">{item.series}</p>
                  <h2 className="mt-1 text-[20px] font-medium tracking-[-0.03em]">
                    {item.name}
                  </h2>
                  <ul className="mt-3 space-y-1 text-[14px] text-muted">
                    {Object.entries(item.selectionLabels).map(([label, value]) => (
                      <li key={label}>
                        {label}: {value}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center rounded-full border border-border">
                      <button
                        type="button"
                        className="h-9 w-9"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-[14px]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="h-9 w-9"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-[14px] text-foreground/50 hover:text-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-[16px] font-medium">
                  {formatUsd(item.unitPrice * item.quantity)}
                </p>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-[8px] border border-border p-6">
            <div className="flex items-center justify-between text-[16px]">
              <span>Estimated total</span>
              <span className="font-medium">{formatUsd(subtotal)}</span>
            </div>
            <p className="mt-2 text-[13px] text-foreground/45">
              Tax and shipping calculated at checkout.
            </p>
            <div className="mt-6">
              <ButtonLink href={ROUTES.checkout} filled className="w-full justify-center">
                Checkout
              </ButtonLink>
            </div>
            <Link
              href={ROUTES.hardware}
              className="mt-4 block text-center text-[14px] text-foreground/55 hover:text-foreground"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
