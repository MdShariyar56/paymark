"use client";

const TAGS = [
  { label: "Income", className: "left-[8%] top-[18%]" },
  { label: "Emergency", className: "left-[6%] top-[48%]" },
  { label: "Insurance", className: "right-[8%] top-[22%]" },
  { label: "Charity", className: "right-[14%] bottom-[22%]" },
];

function TagPill({ label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 px-3.5 py-2 text-xs text-white shadow-md backdrop-blur-md">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500/20 text-[9px] text-orange-400">
        ✓
      </span>
      {label}
    </div>
  );
}

function PosTerminalSilhouette() {
  return (
    <svg
      viewBox="0 0 120 160"
      className="h-36 w-28 text-neutral-700/40 sm:h-44 sm:w-32"
      fill="currentColor"
    >
      <rect x="20" y="10" width="80" height="100" rx="8" opacity="0.5" />
      <rect x="30" y="22" width="60" height="36" rx="4" opacity="0.35" />
      <rect x="35" y="115" width="50" height="8" rx="4" opacity="0.4" />
      <rect x="45" y="128" width="30" height="22" rx="3" opacity="0.3" />
    </svg>
  );
}

export default function OrganizePaymentVisual() {
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-2xl py-6 sm:min-h-[260px] sm:py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/25 blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <PosTerminalSilhouette />
      </div>

      {TAGS.map((tag) => (
        <div key={tag.label} className={`absolute ${tag.className}`}>
          <TagPill label={tag.label} />
        </div>
      ))}
    </div>
  );
}
