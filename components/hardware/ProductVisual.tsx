import { cn } from "@/lib/cn";

const TONES: Record<string, string> = {
  robots: "bg-[#1c1c1b]",
  vehicles: "bg-[#2a2622]",
  jewelry: "bg-[#d8cfc3]",
  wearables: "bg-[#3d3a36]",
  fashion: "bg-[#c9c4ba]",
  aera: "bg-[#1c1c1b]",
  vela: "bg-[#2a2622]",
  nara: "bg-[#d8cfc3]",
  sol: "bg-[#3d3a36]",
};

export function ProductVisual({
  id,
  label,
  className,
}: {
  id: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[4px]",
        TONES[id] ?? "bg-[#2a2a28]",
        className,
      )}
    >
      <div className="absolute inset-0">
        <Shape id={id} />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

function Shape({ id }: { id: string }) {
  if (id === "robots" || id === "aera") {
    return (
      <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden>
        <rect x="340" y="90" width="120" height="160" rx="8" fill="#eceae4" />
        <rect x="365" y="250" width="70" height="140" fill="#cfcbc3" />
        <rect x="250" y="140" width="90" height="18" fill="#eceae4" />
        <rect x="460" y="140" width="90" height="18" fill="#eceae4" />
      </svg>
    );
  }

  if (id === "vehicles" || id === "vela") {
    return (
      <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden>
        <circle cx="250" cy="330" r="70" fill="none" stroke="#eceae4" strokeWidth="10" />
        <circle cx="540" cy="330" r="70" fill="none" stroke="#eceae4" strokeWidth="10" />
        <path
          d="M210 250h140l80-70h150l70 70"
          fill="none"
          stroke="#eceae4"
          strokeWidth="10"
        />
        <path d="M390 180v70" stroke="#eceae4" strokeWidth="10" />
      </svg>
    );
  }

  if (id === "jewelry" || id === "nara") {
    return (
      <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden>
        <circle cx="400" cy="250" r="86" fill="none" stroke="#2a2622" strokeWidth="10" />
        <circle cx="400" cy="250" r="28" fill="#2a2622" />
      </svg>
    );
  }

  if (id === "wearables" || id === "sol") {
    return (
      <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden>
        <rect x="330" y="130" width="140" height="180" rx="36" fill="#eceae4" />
        <rect x="372" y="80" width="56" height="50" fill="#cfcbc3" />
        <rect x="372" y="310" width="56" height="70" fill="#cfcbc3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden>
      <rect x="220" y="160" width="360" height="180" fill="#f4f3ef" />
    </svg>
  );
}
