import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { LoraInterfaceId } from "@/lib/lora";

export function InterfacePreview({
  id,
  className,
}: {
  id: LoraInterfaceId;
  className?: string;
}) {
  switch (id) {
    case "desktop":
      return <DesktopInterface className={className} />;
    case "phone":
      return <PhoneInterface className={className} />;
    case "vehicle":
      return <VehicleInterface className={className} />;
    case "robot":
      return <RobotInterface className={className} />;
    case "wearable":
      return <WearableInterface className={className} />;
  }
}

function Chrome({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[8px]",
        tone === "light" ? "bg-[#eceae4] text-[#161616]" : "bg-[#141414] text-[#f3f2ee]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function LoraMark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={cn(
        "text-[11px] font-medium tracking-[-0.02em]",
        light ? "text-white/70" : "text-black/50",
      )}
    >
      Lora
    </span>
  );
}

function DesktopInterface({ className }: { className?: string }) {
  return (
    <Chrome className={cn("min-h-[280px] md:min-h-[360px]", className)}>
      <div className="flex h-full min-h-[inherit]">
        <aside className="hidden w-[28%] border-r border-black/8 p-5 md:block">
          <LoraMark />
          <ul className="mt-6 space-y-3 text-[13px] text-black/55">
            <li>Chat</li>
            <li>Files</li>
            <li>Apps</li>
            <li>Automations</li>
            <li>Devices</li>
          </ul>
        </aside>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="md:hidden">
            <LoraMark />
          </div>
          <div className="mt-auto space-y-4 pt-10">
            <p className="max-w-sm text-[14px] leading-relaxed text-black/70 md:text-[15px]">
              The same platform on a desk — chat, files, connected apps, and the devices around you.
            </p>
            <div className="h-10 rounded-[8px] bg-white/70 px-3 text-[13px] leading-10 text-black/35">
              Message Lora
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function PhoneInterface({ className }: { className?: string }) {
  return (
    <Chrome className={cn("min-h-[280px] md:min-h-[360px]", className)}>
      <div className="flex h-full min-h-[inherit] flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-black/40">Today</span>
          <LoraMark />
        </div>
        <div className="mt-8 space-y-3">
          <div className="max-w-[85%] rounded-[8px] bg-white/65 px-3 py-2 text-[13px] leading-relaxed text-black/70">
            Status on Vela is clear. Arrive in 18 minutes.
          </div>
          <div className="ml-auto max-w-[80%] rounded-[8px] bg-[#161616] px-3 py-2 text-[13px] leading-relaxed text-[#f3f2ee]">
            Notify me when I’m two minutes out.
          </div>
        </div>
        <div className="mt-auto h-10 rounded-[8px] bg-white/70 px-3 text-[13px] leading-10 text-black/35">
          Message Lora
        </div>
      </div>
    </Chrome>
  );
}

function VehicleInterface({ className }: { className?: string }) {
  return (
    <Chrome tone="dark" className={cn("min-h-[280px] md:min-h-[360px]", className)}>
      <div className="flex h-full min-h-[inherit] flex-col p-5 md:p-6">
        <div className="flex items-center justify-between">
          <LoraMark light />
          <span className="text-[11px] uppercase tracking-[0.08em] text-white/35">Vela</span>
        </div>
        <div className="mt-10 flex flex-1 items-end justify-between gap-6">
          <div>
            <p className="text-[40px] font-medium leading-none tracking-[-0.05em] md:text-[52px]">
              18
              <span className="ml-1 text-[16px] font-normal tracking-normal text-white/45">
                min
              </span>
            </p>
            <p className="mt-3 text-[14px] text-white/55">Canyon Road · clear</p>
          </div>
          <div className="hidden text-right text-[13px] text-white/40 md:block">
            <p>Battery 84%</p>
            <p className="mt-1">Cabin quiet</p>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function RobotInterface({ className }: { className?: string }) {
  return (
    <Chrome tone="dark" className={cn("min-h-[280px] md:min-h-[360px]", className)}>
      <div className="grid h-full min-h-[inherit] md:grid-cols-5">
        <div className="relative bg-[#2a2a28] md:col-span-3">
          <div className="absolute inset-6 rounded-[4px] border border-white/10">
            <div className="absolute left-3 top-3 text-[11px] uppercase tracking-[0.08em] text-white/40">
              Camera
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border border-white/20" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 md:col-span-2">
          <LoraMark light />
          <p className="mt-6 text-[13px] uppercase tracking-[0.08em] text-white/35">Tasks</p>
          <ul className="mt-3 space-y-2 text-[14px] text-white/70">
            <li>Inspect north bay</li>
            <li>Return to dock</li>
            <li className="text-white/35">Hold</li>
          </ul>
        </div>
      </div>
    </Chrome>
  );
}

function WearableInterface({ className }: { className?: string }) {
  return (
    <Chrome className={cn("min-h-[280px] md:min-h-[360px]", className)}>
      <div className="flex h-full min-h-[inherit] flex-col items-center justify-center p-6">
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[#161616] text-[#f3f2ee] md:h-44 md:w-44">
          <LoraMark light />
          <p className="mt-3 text-[13px] text-white/60">Nara</p>
          <p className="mt-1 text-[15px] tracking-[-0.02em]">Home in 12 min</p>
        </div>
      </div>
    </Chrome>
  );
}
