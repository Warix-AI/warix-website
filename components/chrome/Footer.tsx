import Link from "next/link";
import type { ReactNode } from "react";
import { EXTERNAL, ROUTES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="page-wrap pb-16 pt-8">
      <div className="card card-pad">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Software">
            <li>
              <Link href={ROUTES.softwareOne}>One</Link>
            </li>
          </FooterCol>

          <FooterCol title="Account">
            <li>
              <a href={EXTERNAL.accountHome}>Warix Account</a>
            </li>
            <li>
              <a href={EXTERNAL.oneApp}>One</a>
            </li>
          </FooterCol>

          <FooterCol title="Support">
            <li>
              <Link href={`${ROUTES.support}#software`}>Software Support</Link>
            </li>
            <li>
              <Link href={`${ROUTES.support}#account`}>Account Support</Link>
            </li>
          </FooterCol>

          <FooterCol title="Company">
            <li>
              <Link href={ROUTES.company}>About</Link>
            </li>
            <li>
              <Link href={ROUTES.research}>Research</Link>
            </li>
            <li>
              <Link href={ROUTES.companyNews}>News</Link>
            </li>
            <li>
              <Link href={ROUTES.companyCareers}>Careers</Link>
            </li>
            <li>
              <Link href={ROUTES.privacy}>Privacy</Link>
            </li>
            <li>
              <Link href={ROUTES.terms}>Terms</Link>
            </li>
          </FooterCol>
        </div>

        <p className="mt-12 text-[13px] text-muted">
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
      <p className="text-[13px] text-muted">{title}</p>
      <ul className="mt-4 space-y-2 text-[14px] text-foreground/70 [&_a]:transition-opacity hover:[&_a]:opacity-70">
        {children}
      </ul>
    </div>
  );
}
