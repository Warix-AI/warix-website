import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-wrap page-hero">
        <p className="meta">Legal</p>
        <h1 className="display mt-3 text-[42px] md:text-[56px]">Privacy</h1>
      </section>
      <div className="page-wrap page-stack">
        <div className="card card-pad max-w-3xl space-y-4 text-[16px] leading-relaxed text-muted">
          <p>
            This website is a company presence for Warix. We do not ask you to
            create a login to read these pages.
          </p>
          <p>
            Standard technical logs from hosting may be used to operate and
            protect the site.
          </p>
          <p>
            Product-specific privacy terms for One will be published with that
            product.
          </p>
        </div>
      </div>
    </>
  );
}
