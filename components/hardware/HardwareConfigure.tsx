"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  type HardwareProduct,
  defaultHardwareSelection,
  formatUsd,
  selectedHardwareTotal,
} from "@/lib/catalog";
import { ROUTES } from "@/lib/site";
import { useBag } from "@/components/providers/BagProvider";

export function HardwareConfigure({ product }: { product: HardwareProduct }) {
  const router = useRouter();
  const { addItem } = useBag();
  const [selection, setSelection] = useState(() =>
    defaultHardwareSelection(product),
  );
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(
    () => selectedHardwareTotal(product, selection, quantity),
    [product, selection, quantity],
  );

  const unavailable = product.availability !== "available";

  function addToBag() {
    const selectionLabels = Object.fromEntries(
      product.configure.map((group) => {
        const option = group.options.find((o) => o.id === selection[group.id]);
        return [group.name, option?.name ?? ""];
      }),
    );
    const unitPrice = selectedHardwareTotal(product, selection, 1);
    addItem({
      productSlug: product.slug,
      series: product.series,
      name: product.name,
      image: product.image,
      quantity,
      unitPrice,
      selection,
      selectionLabels,
    });
    router.push(ROUTES.bag);
  }

  return (
    <div className="page-wrap grid min-h-[calc(100svh-4rem)] gap-10 py-10 md:grid-cols-2 md:gap-14 md:py-0">
      <div className="relative min-h-[320px] overflow-hidden rounded-[4px] border border-border bg-paper md:min-h-[calc(100svh-4rem)] md:rounded-none md:border-0 md:border-r">
        <Image
          src={product.image}
          alt=""
          fill
          className="object-contain p-12"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-col py-2 md:py-16">
        <p className="text-[13px] text-foreground/45">{product.series}</p>
        <h1 className="subhead mt-2 text-[36px] md:text-[44px]">{product.name}</h1>
        <p className="mt-2 text-[18px]">{formatUsd(total)}</p>

        {unavailable ? (
          <p className="mt-10 text-[16px] text-muted">
            This product is currently unavailable.
          </p>
        ) : (
          <div className="mt-10 space-y-10">
            {product.configure.map((group) => (
              <fieldset key={group.id}>
                <legend className="text-[15px] font-medium">{group.name}</legend>
                {group.help ? (
                  <p className="mt-1 text-[13px] text-foreground/45">
                    {group.help}
                  </p>
                ) : null}
                <div className="mt-4 space-y-2">
                  {group.options.map((option) => {
                    const selected = selection[group.id] === option.id;
                    return (
                      <label
                        key={option.id}
                        className={`flex cursor-pointer items-center justify-between gap-4 rounded-[8px] border px-4 py-3 ${
                          selected
                            ? "border-foreground"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <input
                            type="radio"
                            className="sr-only"
                            name={group.id}
                            checked={selected}
                            onChange={() =>
                              setSelection((current) => ({
                                ...current,
                                [group.id]: option.id,
                              }))
                            }
                          />
                          {option.swatch ? (
                            <span
                              className="h-4 w-4 rounded-full border border-border"
                              style={{ background: option.swatch }}
                            />
                          ) : null}
                          <span className="text-[15px]">{option.name}</span>
                        </span>
                        <span className="text-[14px] text-foreground/50">
                          {option.price === 0
                            ? "Included"
                            : `+${formatUsd(option.price)}`}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}

            <div>
              <p className="text-[15px] font-medium">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-full border border-border">
                <button
                  type="button"
                  className="h-10 w-10"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="w-10 text-center text-[15px]">{quantity}</span>
                <button
                  type="button"
                  className="h-10 w-10"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-auto pt-12">
          <button
            type="button"
            disabled={unavailable}
            onClick={addToBag}
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground text-[15px] text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-30 md:w-auto md:px-8"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
