import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <section className="page-wrap py-20 md:py-28">
      <p className="meta">Legal</p>
      <h1 className="display mt-5 text-[44px] md:text-[56px]">Privacy</h1>
      <div className="mt-10 max-w-2xl space-y-6 text-[17px] leading-relaxed text-muted">
        <p>
          This website is a company presence for Warix. It is not an account
          product. We do not ask you to create a login to read these pages.
        </p>
        <p>
          If this site collects standard technical logs through hosting — such
          as IP address, browser, or request time — they are used to operate
          and protect the site.
        </p>
        <p>
          Product-specific privacy terms for One or Warix hardware will be
          published with those products.
        </p>
      </div>
    </section>
  );
}
