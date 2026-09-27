import { SOFTWARE_PRODUCTS } from "./catalog";
import { ROUTES } from "./site";

export type MenuId = "research" | "software";

export const NAV_ORDER: MenuId[] = ["research", "software"];

export interface MenuProduct {
  label: string;
  href: string;
  image?: string;
  meta?: string;
  /** Product cutouts sit on paper; lifestyle shots fill the card. */
  fit?: "contain" | "cover";
}

export interface NavMenu {
  id: MenuId;
  label: string;
  href: string;
  products: MenuProduct[];
}

export const NAV_MENUS: Record<MenuId, NavMenu> = {
  research: {
    id: "research",
    label: "Research",
    href: ROUTES.research,
    products: [
      {
        label: "Research",
        href: ROUTES.research,
        meta: "Warix",
      },
    ],
  },
  software: {
    id: "software",
    label: "Software",
    href: ROUTES.software,
    products: SOFTWARE_PRODUCTS.filter((p) => p.slug === "one").map((p) => ({
      label: p.name,
      href: p.href,
      meta: "Product",
    })),
  },
};
