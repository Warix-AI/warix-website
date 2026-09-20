import Link from "next/link";
import type { ReactNode } from "react";
import { ROUTES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-wrap py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Warix">
            <li>
              <Link href={ROUTES.research}>Research</Link>
            </li>
            <li>
              <Link href={ROUTES.products}>Products</Link>
            </li>
            <li>
              <Link href={ROUTES.company}>Company</Link>
            </li>
          </FooterCol>

          <FooterCol title="Products">
            <li>
              <Link href={ROUTES.one}>One</Link>
            </li>
          </FooterCol>

          <FooterCol title="Resources">
            <li>
              <Link href={ROUTES.news}>News</Link>
            </li>
            <li>
              <Link href={ROUTES.docs}>Documentation</Link>
            </li>
          </FooterCol>

          <FooterCol title="Legal">
            <li>
              <Link href={ROUTES.privacy}>Privacy</Link>
            </li>
            <li>
              <Link href={ROUTES.terms}>Terms</Link>
            </li>
          </FooterCol>
        </div>

        <p className="mt-16 text-[13px] text-foreground/35">
          © {new Date().getFullYear()} Warix
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[13px] text-foreground/45">{title}</p>
      <ul className="mt-4 space-y-2 text-[14px] text-foreground/70 [&_a]:transition-opacity hover:[&_a]:opacity-70">
        {children}
      </ul>
    </div>
  );
}
