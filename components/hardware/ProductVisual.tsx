import { cn } from "@/lib/cn";

export function ProductVisual({
  label,
  className,
}: {
  id?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[4px] bg-[#c9c4ba]",
        className,
      )}
    >
      <div className="absolute inset-0">
        <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden>
          <rect x="220" y="160" width="360" height="180" fill="#f4f3ef" />
        </svg>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}
