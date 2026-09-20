import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function InterfacePreview({ className }: { className?: string }) {
  return (
    <Chrome className={cn("min-h-[280px] md:min-h-[360px]", className)}>
      <div className="flex h-full min-h-[inherit]">
        <aside className="hidden w-[28%] border-r border-black/8 p-5 md:block">
          <OneMark />
          <ul className="mt-6 space-y-3 text-[13px] text-black/55">
            <li>Chat</li>
            <li>Files</li>
            <li>Apps</li>
            <li>Automations</li>
          </ul>
        </aside>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="md:hidden">
            <OneMark />
          </div>
          <div className="mt-auto space-y-4 pt-10">
            <p className="max-w-sm text-[14px] leading-relaxed text-black/70 md:text-[15px]">
              One is the software platform — chat, files, connected apps, and the
              work around you.
            </p>
            <div className="h-10 rounded-[8px] bg-white/70 px-3 text-[13px] leading-10 text-black/35">
              Message One
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function Chrome({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[8px] bg-[#eceae4] text-[#161616]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function OneMark() {
  return (
    <span className="text-[11px] font-medium tracking-[-0.02em] text-black/50">
      One
    </span>
  );
}
