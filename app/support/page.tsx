import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ONE_COPY } from "@/lib/copy";
import { EXTERNAL, ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for Warix software and account.",
};

export default function SupportPage() {
  return (
    <>
      <section className="page-wrap page-hero">
        <p className="meta">Support</p>
        <h1 className="display mt-3 text-[42px] md:text-[64px]">
          How can we help?
        </h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[19px]">
          Start with a product. Account and billing live in Warix Account.
        </p>
      </section>

      <div className="page-wrap page-stack">
        <section id="software" className="card card-pad scroll-mt-24">
          <p className="meta">Software</p>
          <h2 className="heading mt-3 text-[28px] md:text-[36px]">
            {ONE_COPY.name}
          </h2>
          <p className="mt-3 text-[16px] text-muted">{ONE_COPY.blurb}</p>
          <div className="mt-7">
            <ButtonLink href={ROUTES.softwareOne}>Learn about One</ButtonLink>
          </div>
        </section>

        <section id="account" className="card card-pad scroll-mt-24">
          <p className="meta">Account & Billing</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <a
              href={EXTERNAL.accountHome}
              className="rounded-[16px] bg-background p-5 transition-opacity hover:opacity-80"
            >
              <h3 className="text-[17px] font-medium">Warix Account</h3>
              <p className="mt-1 text-[14px] text-muted">Identity and profile</p>
            </a>
            <a
              href={EXTERNAL.accountHome}
              className="rounded-[16px] bg-background p-5 transition-opacity hover:opacity-80"
            >
              <h3 className="text-[17px] font-medium">Payments</h3>
              <p className="mt-1 text-[14px] text-muted">Methods and invoices</p>
            </a>
            <a
              href={EXTERNAL.accountOrders}
              className="rounded-[16px] bg-background p-5 transition-opacity hover:opacity-80"
            >
              <h3 className="text-[17px] font-medium">Orders</h3>
              <p className="mt-1 text-[14px] text-muted">History and status</p>
            </a>
          </div>
        </section>

        <div>
          <ButtonLink href={ROUTES.home}>Back to warix.co</ButtonLink>
        </div>
      </div>
    </>
  );
}
