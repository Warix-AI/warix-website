import type { Metadata } from "next";
import { InterfacePreview } from "@/components/lora/InterfacePreview";
import { TextLink } from "@/components/ui/TextLink";
import {
  LORA_CONNECTED,
  LORA_INTELLIGENCE,
  LORA_INTERFACES,
} from "@/lib/lora";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lora",
  description:
    "Lora is the software platform developed by Warix. One platform, many interfaces — on computers, phones, and Warix hardware.",
};

export default function LoraPage() {
  return (
    <>
      <section className="page-wrap pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="meta">Software</p>
        <h1 className="display mt-5 text-[52px] md:text-[72px] lg:text-[80px]">
          Lora
        </h1>
        <p className="mt-6 max-w-2xl text-[22px] leading-relaxed text-muted md:text-[24px]">
          The software platform behind Warix. Not a chatbot, not an app, not an
          operating system brand — the entire software layer.
        </p>
        <div className="mt-12">
          <InterfacePreview id="desktop" className="min-h-[340px] md:min-h-[460px]" />
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">One platform</p>
        <h2 className="heading mt-5 max-w-4xl text-[40px] md:text-[52px]">
          Lora is all Warix software.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          Agents, infrastructure, APIs, device software, identity, permissions,
          interfaces, and orchestration all belong to Lora. The customer-facing
          agent is also called Lora. It is one way in.
        </p>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Different interfaces</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          The interface changes. The software does not.
        </h2>
        <div className="mt-14 space-y-16">
          {LORA_INTERFACES.map((item) => (
            <article
              key={item.id}
              className="grid items-end gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <InterfacePreview
                  id={item.id}
                  className={item.id === "phone" ? "md:max-w-sm" : undefined}
                />
              </div>
              <div className="lg:col-span-5">
                <h3 className="subhead text-[28px] md:text-[32px]">{item.name}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted md:text-[18px]">
                  {item.context}
                </p>
                <p className="mt-5 text-[13px] text-faint">
                  {item.surfaces.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Intelligence</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          Intelligence is part of the platform.
        </h2>
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {LORA_INTELLIGENCE.map((item) => (
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
          {LORA_CONNECTED.map((item) => (
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
          Lora adapts to the machine it inhabits.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          A robot and a motorcycle can require completely different software.
          Both are still Lora. The implementation follows the hardware. The
          platform and the name stay.
        </p>
        <div className="mt-8">
          <TextLink href={ROUTES.hardware}>Explore hardware</TextLink>
        </div>
      </section>

      <section className="page-wrap section-space border-t border-border">
        <p className="meta">Standalone software</p>
        <h2 className="heading mt-5 max-w-3xl text-[40px] md:text-[52px]">
          Lora does not require Warix hardware.
        </h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted md:text-[20px]">
          On a computer or a phone, Lora is software on its own — chat, voice,
          files, connected apps, and automation. Hardware extends the platform.
          It does not define it.
        </p>
      </section>
    </>
  );
}
