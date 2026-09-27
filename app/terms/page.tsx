import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-wrap page-hero">
        <p className="meta">Legal</p>
        <h1 className="display mt-3 text-[42px] md:text-[56px]">Terms</h1>
      </section>
      <div className="page-wrap page-stack">
        <div className="card card-pad max-w-3xl space-y-4 text-[16px] leading-relaxed text-muted">
          <p>
            Content on warix.co is provided for information. It is not an offer
            to sell software through this site.
          </p>
          <p>
            Names and descriptions may refer to work in development.
            Availability is not implied unless stated.
          </p>
          <p>
            Product-specific terms for One will accompany that product.
          </p>
        </div>
      </div>
    </>
  );
}
