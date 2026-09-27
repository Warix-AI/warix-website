"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { PlacedOrder } from "@/lib/mock/types";

const STORAGE_KEY = "warix.lastOrder";

interface CheckoutContextValue {
  lastOrder: PlacedOrder | null;
  setLastOrder: (order: PlacedOrder | null) => void;
  checkoutError: string | null;
  setCheckoutError: (message: string | null) => void;
}

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [lastOrder, setLastOrder] = useState<PlacedOrder | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLastOrder(JSON.parse(raw) as PlacedOrder);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (lastOrder) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lastOrder));
    }
  }, [lastOrder]);

  const value = useMemo(
    () => ({ lastOrder, setLastOrder, checkoutError, setCheckoutError }),
    [lastOrder, checkoutError],
  );

  return (
    <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout requires CheckoutProvider");
  return ctx;
}
