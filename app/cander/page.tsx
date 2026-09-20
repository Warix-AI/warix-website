import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cander",
  description: "Cander is a Warix software product.",
};

export default function CanderPage() {
  return (
    <section className="page-wrap pt-20 pb-24 md:pt-28 md:pb-32">
      <p className="text-[14px] text-foreground/45">Software</p>
      <h1 className="display mt-4 text-[56px] md:text-[80px] lg:text-[96px]">
        Cander
      </h1>
      <p className="mt-6 max-w-2xl text-[20px] leading-relaxed text-foreground/60 md:text-[22px]">
        A Warix software product.
      </p>
    </section>
  );
}
