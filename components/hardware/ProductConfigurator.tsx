"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import {
  defaultConfiguration,
  formatUsd,
  selectedTotal,
  type HardwareCategory,
  type HardwareProduct,
} from "@/lib/hardware";
import { ProductPhoto } from "./ProductPhoto";

export function ProductConfigurator({
  category,
  product,
}: {
  category: HardwareCategory;
  product: HardwareProduct;
}) {
  const [selected, setSelected] = useState(() => defaultConfiguration(product));
  const [ordered, setOrdered] = useState(false);

  const total = useMemo(
    () => selectedTotal(product, selected),
    [product, selected],
  );

  const summary = product.configure.map((group) => {
    const option = group.options.find((item) => item.id === selected[group.id]);
    return {
      group: group.name,
      option: option?.name ?? "",
      price: option?.price ?? 0,
    };
  });

  const activeSwatch =
    product.configure
      .map((group) =>
        group.options.find((item) => item.id === selected[group.id]),
      )
      .find((option) => option?.swatch)?.swatch ?? "#ffffff";

  if (ordered) {
    return (
      <section className="page-wrap py-20 md:py-28">
        <p className="meta">Order</p>
        <h1 className="display mt-4 text-[40px] md:text-[56px]">Reserved</h1>
        <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-muted">
          {product.name} is in development. Your configuration is held. We will
          write when it is ready to produce.
        </p>
        <dl className="mt-10 max-w-md divide-y divide-border">
          {summary.map((row) => (
            <div
              key={row.group}
              className="flex items-baseline justify-between gap-6 py-3"
            >
              <dt className="text-[14px] text-muted">{row.group}</dt>
              <dd className="text-[15px]">{row.option}</dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-6 py-3">
            <dt className="text-[14px] text-muted">Total</dt>
            <dd className="text-[15px]">{formatUsd(total)}</dd>
          </div>
        </dl>
      </section>
    );
  }

  return (
    <section className="md:grid md:h-[calc(100svh-4rem)] md:grid-cols-[minmax(0,1.15fr)_minmax(22rem,28rem)] md:overflow-hidden">
      <div className="relative aspect-[4/3] bg-white md:aspect-auto md:h-full">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${activeSwatch}14` }}
        />
        <ProductPhoto
          src={product.image}
          label={product.name}
          className="absolute inset-0 bg-transparent"
        />
      </div>

      <div className="border-t border-border px-5 py-10 md:h-full md:overflow-y-auto md:border-l md:border-t-0 md:px-8 md:py-12 lg:px-10">
        <p className="text-[13px] uppercase tracking-[0.08em] text-foreground/45">
          {category.name}
        </p>
        <h1 className="display mt-3 text-[36px] md:text-[44px]">{product.name}</h1>
        <p className="mt-2 text-[20px] font-medium tracking-[-0.03em]">
          {formatUsd(total)}
        </p>
        <p className="mt-2 text-[14px] text-muted">{product.availabilityLabel}</p>

        <div className="mt-10 space-y-10">
          {product.configure.map((group) => (
            <fieldset key={group.id}>
              <legend className="text-[15px] font-medium tracking-[-0.02em]">
                {group.name}
              </legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.options.map((option) => {
                  const active = selected[group.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setSelected((current) => ({
                          ...current,
                          [group.id]: option.id,
                        }))
                      }
                      className={cn(
                        "inline-flex min-w-16 items-center gap-2 rounded-full border px-3.5 py-2 text-[14px] tracking-[-0.015em] transition-colors",
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-white/15 text-foreground hover:border-white/35",
                      )}
                    >
                      {option.swatch ? (
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: option.swatch }}
                        />
                      ) : null}
                      {option.name}
                      {option.price ? (
                        <span className={active ? "opacity-70" : "text-foreground/45"}>
                          +{formatUsd(option.price)}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-[13px] text-foreground/45">Your {product.name}</p>
          <ul className="mt-3 space-y-1 text-[15px] text-muted">
            {summary.map((row) => (
              <li key={row.group}>
                {row.group}: {row.option}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[22px] font-medium tracking-[-0.03em]">
            {formatUsd(total)}
          </p>
          <button
            type="button"
            onClick={() => setOrdered(true)}
            className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground text-[15px] tracking-[-0.015em] text-background transition-opacity hover:opacity-80"
          >
            Order
          </button>
          <p className="mt-3 text-[13px] leading-relaxed text-faint">
            A reservation. {product.name} is not produced yet. No payment is
            taken here.
          </p>
        </div>
      </div>
    </section>
  );
}
