import type { Metadata } from "next";
import { InterfacePreview } from "@/components/one/InterfacePreview";
import { TextLink } from "@/components/ui/TextLink";
import { ONE_CONCEPTS } from "@/lib/content";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "One",
  description:
    "One by Warix — personal AI built around conversation, voice, memory, and continuity.",
};

export default function OnePage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <p className="text-[14px] text-foreground/45">One by Warix</p>
        <h1 className="display mt-4 text-[64px] md:text-[88px] lg:text-[104px]">
          One
        </h1>
        <p className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-foreground/85 md:text-[36px]">
          Your AI. One conversation.
        </p>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          One creates a continuous AI experience rather than making users manage
          disconnected chats, tools, and interfaces.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <a
            href={ROUTES.oneApp}
            className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-[14px] tracking-[-0.015em] text-background transition-opacity hover:opacity-80"
          >
            Try One
          </a>
          <TextLink href={ROUTES.products}>All products</TextLink>
        </div>
        <div className="mt-14">
          <InterfacePreview className="min-h-[340px] md:min-h-[460px]" />
        </div>
      </section>

      {ONE_CONCEPTS.map((concept) => (
        <section
          key={concept.title}
          className="page-wrap section-space border-t border-border"
        >
          <p className="meta">{concept.title}</p>
          <h2 className="heading mt-5 max-w-3xl text-[36px] md:text-[48px]">
            {concept.body}
          </h2>
        </section>
      ))}

      <section className="page-wrap section-space border-t border-border text-center">
        <h2 className="heading text-[40px] md:text-[56px]">Meet One.</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a
            href={ROUTES.oneApp}
            className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-[14px] tracking-[-0.015em] text-background transition-opacity hover:opacity-80"
          >
            Try One
          </a>
          <TextLink href={ROUTES.company}>Learn more</TextLink>
        </div>
      </section>
    </>
  );
}
