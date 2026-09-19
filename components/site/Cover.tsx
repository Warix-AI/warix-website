import { cn } from "@/lib/cn";
import type { CoverTone } from "@/lib/stories";

const TONES: Record<CoverTone, string> = {
  night: "bg-[#111111]",
  paper: "bg-[#eceae4]",
  sand: "bg-[#c9c4ba]",
  ink: "bg-[#1c1c1b]",
  mist: "bg-[#2a2a28]",
  grain: "bg-[#d8d3c8]",
};

export function Cover({
  tone,
  label,
  className,
}: {
  tone: CoverTone;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[16px]",
        TONES[tone],
        className,
      )}
    >
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <Shape tone={tone} />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

function Shape({ tone }: { tone: CoverTone }) {
  if (tone === "night") {
    return (
      <>
        <circle cx="180" cy="140" r="1.4" fill="#f4f3ef" opacity="0.55" />
        <circle cx="320" cy="90" r="1.2" fill="#f4f3ef" opacity="0.4" />
        <circle cx="510" cy="160" r="1.6" fill="#f4f3ef" opacity="0.5" />
        <circle cx="640" cy="110" r="1.1" fill="#f4f3ef" opacity="0.35" />
        <circle cx="430" cy="240" r="1.3" fill="#f4f3ef" opacity="0.45" />
        <circle cx="260" cy="300" r="1.1" fill="#f4f3ef" opacity="0.3" />
        <circle cx="700" cy="280" r="1.4" fill="#f4f3ef" opacity="0.4" />
        <path
          d="M120 360c80-40 160-40 240 0s160 40 240 0"
          fill="none"
          stroke="#f4f3ef"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
      </>
    );
  }

  if (tone === "paper") {
    return (
      <>
        <rect x="80" y="70" width="180" height="360" fill="#dedbd3" />
        <rect x="300" y="140" width="420" height="220" fill="#f7f6f2" />
      </>
    );
  }

  if (tone === "sand") {
    return <rect x="220" y="160" width="360" height="180" fill="#f4f3ef" />;
  }

  if (tone === "grain") {
    return <rect x="140" y="90" width="520" height="320" fill="#eeeae2" />;
  }

  return (
    <>
      <rect x="260" y="120" width="280" height="260" fill="#2f2f2c" />
      <rect x="310" y="170" width="180" height="160" fill="#3a3a36" />
    </>
  );
}
