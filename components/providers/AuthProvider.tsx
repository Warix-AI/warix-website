"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MockUser } from "@/lib/mock/types";

const STORAGE_KEY = "warix.auth";

const DEFAULT_USER: MockUser = {
  name: "Alex Rivera",
  email: "alex@example.com",
  hasOne: true,
  hasTwo: false,
  shipping: {
    name: "Alex Rivera",
    line1: "120 Market Street",
    city: "San Francisco",
    region: "CA",
    postal: "94105",
    country: "United States",
  },
  payment: {
    brand: "Visa",
    last4: "4242",
  },
};

interface AuthContextValue {
  user: MockUser | null;
  signedIn: boolean;
  signIn: (user?: Partial<MockUser>) => void;
  signOut: () => void;
  setHasProduct: (product: "one" | "two", value: boolean) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as MockUser);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else window.localStorage.removeItem(STORAGE_KEY);
  }, [user, ready]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      signedIn: Boolean(user),
      signIn(partial) {
        setUser({ ...DEFAULT_USER, ...partial });
      },
      signOut() {
        setUser(null);
      },
      setHasProduct(product, next) {
        setUser((current) => {
          if (!current) return current;
          return product === "one"
            ? { ...current, hasOne: next }
            : { ...current, hasTwo: next };
        });
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth requires AuthProvider");
  return ctx;
}
