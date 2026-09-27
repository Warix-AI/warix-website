"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { BagProvider } from "./BagProvider";
import { CheckoutProvider } from "./CheckoutProvider";
import { SearchProvider } from "./SearchProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <BagProvider>
        <CheckoutProvider>
          <SearchProvider>{children}</SearchProvider>
        </CheckoutProvider>
      </BagProvider>
    </AuthProvider>
  );
}
