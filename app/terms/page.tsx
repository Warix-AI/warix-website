import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <section className="page-wrap py-20 md:py-28">
      <p className="meta">Legal</p>
      <h1 className="display mt-5 text-[44px] md:text-[56px]">Terms</h1>
      <div className="mt-10 max-w-2xl space-y-6 text-[17px] leading-relaxed text-muted">
        <p>
          The content on warix.co is provided by Warix for information. It is
          not an offer to sell hardware or software through this site.
        </p>
        <p>
          Names, product descriptions, and images may describe work in
          development. Availability is not implied unless stated.
        </p>
        <p>
          Warix, Lora, and individual hardware product names are used to
          describe the company’s software and hardware. Terms for specific
          products will accompany those products.
        </p>
      </div>
    </section>
  );
}
