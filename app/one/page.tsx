import type { Metadata } from "next";
import { InterfacePreview } from "@/components/one/InterfacePreview";
import { TextLink } from "@/components/ui/TextLink";
import { ONE_CONNECTED, ONE_INTELLIGENCE } from "@/lib/one";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "One",
  description:
    "One is the software platform developed by Warix. One platform for software and Warix hardware.",
};

export default function OnePage() {
  return (
    <>
      <section className="page-wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <p className="text-[14px] text-foreground/45">Software</p>
        <h1 className="display mt-4 text-[56px] md:text-[80px] lg:text-[96px]">
          One
        </h1>
        <p className="mt-6 max-w-2xl text-[20px] leading-relaxed text-foreground/60 md:text-[22px]">
          The software platform behind Warix. Not a chatbot, not an app, not an
          operating system brand — the entire software layer.
        </p>
        <div className="mt-12">
          <InterfacePreview className="min-h-[340px] md:min-h-[460px]" />
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">One platform</p>
        <h2 className="heading mt-5 max-w-4xl text-[40px] md:text-[52px]">
          One is all Warix software.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Agents, infrastructure, APIs, device software, identity, permissions,
          interfaces, and orchestration all belong to One. The customer-facing
          agent is also called One. It is one way in.
        </p>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Intelligence</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          Intelligence is part of the platform.
        </h2>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {ONE_INTELLIGENCE.map((item) => (
            <div key={item.title}>
              <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Connected systems</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          Apps, APIs, hardware, and cloud are not separate products.
        </h2>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {ONE_CONNECTED.map((item) => (
            <div key={item.title} className="border-t border-border pt-6">
              <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-[16px] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Hardware integration</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          One adapts to the machine it inhabits.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Fashion can require its own implementation. It is still One. The
          software follows the hardware. The platform and the name stay.
        </p>
        <div className="mt-8">
          <TextLink href={ROUTES.hardware}>Explore hardware</TextLink>
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Standalone software</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          One does not require Warix hardware.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          On its own, One is software — chat, voice, files, connected apps, and
          automation. Hardware extends the platform. It does not define it.
        </p>
      </section>
    </>
  );
}
