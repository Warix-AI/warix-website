import Link from "next/link";
import type { ReactNode } from "react";
import { hardwareCategories } from "@/lib/hardware";
import { ROUTES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="page-wrap py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <FooterCol title="Software">
            <li>
              <Link href={ROUTES.lora}>Lora</Link>
            </li>
            <li>
              <Link href={ROUTES.loraApp}>Talk with Lora</Link>
            </li>
          </FooterCol>

          <FooterCol title="Hardware">
            <li>
              <Link href={ROUTES.hardware}>Overview</Link>
            </li>
            {hardwareCategories.map((category) => (
              <li key={category.slug}>
                <Link href={`/hardware/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            <li>
              <Link href={ROUTES.company}>About Warix</Link>
            </li>
            <li>
              <Link href={`${ROUTES.company}#philosophy`}>Philosophy</Link>
            </li>
            <li>
              <Link href={`${ROUTES.company}#story`}>Story</Link>
            </li>
            <li>
              <Link href={`${ROUTES.company}#team`}>Team</Link>
            </li>
            <li>
              <Link href={`${ROUTES.company}#technology`}>Technology</Link>
            </li>
          </FooterCol>

          <FooterCol title="More">
            <li>
              <Link href={ROUTES.lora}>Software</Link>
            </li>
            <li>
              <Link href={ROUTES.hardware}>Hardware</Link>
            </li>
            <li>
              <Link href={ROUTES.company}>Company</Link>
            </li>
          </FooterCol>

          <FooterCol title="Terms & Policies">
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
