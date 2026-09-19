import Link from "next/link";
import type { ReactNode } from "react";
import { hardwareCategories } from "@/lib/hardware";
import { ROUTES } from "@/lib/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-wrap py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Wordmark className="text-[15px] font-medium tracking-[0.08em] uppercase" />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:col-span-8">
            <FooterCol title="Software">
              <li>
                <Link href={ROUTES.lora} className="hover:text-foreground">
                  Lora
                </Link>
              </li>
            </FooterCol>

            <FooterCol title="Hardware">
              {hardwareCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/hardware/${category.slug}`}
                    className="hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </FooterCol>

            <FooterCol title="Company">
              <li>
                <Link href={ROUTES.company} className="hover:text-foreground">
                  About Warix
                </Link>
              </li>
            </FooterCol>

            <FooterCol title="Legal">
              <li>
                <Link href={ROUTES.privacy} className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href={ROUTES.terms} className="hover:text-foreground">
                  Terms
                </Link>
              </li>
            </FooterCol>
          </div>
        </div>

        <p className="mt-16 text-[13px] text-faint">
          © {new Date().getFullYear()} Warix. Software and hardware, built together.
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
      <p className="meta">{title}</p>
      <ul className="mt-4 space-y-2 text-[15px] text-muted">{children}</ul>
    </div>
  );
}
