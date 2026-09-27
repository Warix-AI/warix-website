"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { BagLine } from "@/lib/mock/types";

const STORAGE_KEY = "warix.bag";

interface BagContextValue {
  items: BagLine[];
  count: number;
  subtotal: number;
  addItem: (item: Omit<BagLine, "id">) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
}

const BagContext = createContext<BagContextValue | null>(null);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as BagLine[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<BagContextValue>(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );
    const count = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items,
      count,
      subtotal,
      addItem(item) {
        setItems((current) => [
          ...current,
          { ...item, id: `${item.productSlug}-${Date.now()}-${Math.random()}` },
        ]);
      },
      removeItem(id) {
        setItems((current) => current.filter((item) => item.id !== id));
      },
      setQuantity(id, quantity) {
        setItems((current) =>
          current
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(1, Math.min(10, quantity)) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        );
      },
      clear() {
        setItems([]);
      },
    };
  }, [items]);

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const ctx = useContext(BagContext);
  if (!ctx) throw new Error("useBag requires BagProvider");
  return ctx;
}
