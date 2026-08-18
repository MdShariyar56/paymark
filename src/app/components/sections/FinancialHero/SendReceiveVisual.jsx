"use client";

function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-red-400" fill="none">
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 9v6M9 12h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlassMoneyCard({ label }) {
  return (
    <div className="relative z-10 flex w-[108px] flex-col items-center rounded-2xl border border-white/10 bg-neutral-900/70 px-3 py-4 shadow-lg backdrop-blur-md sm:w-[120px]">
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15 ring-1 ring-red-500/25">
        <MoneyIcon />
      </div>
      <span className="text-xs font-semibold text-white">$118,94</span>
      <span className="mt-0.5 text-[10px] text-neutral-500">{label}</span>
    </div>
  );
}

export default function SendReceiveVisual() {
  return (
    <div className="relative flex min-h-[220px] items-center justify-center py-6 sm:min-h-[260px] sm:py-8">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-950/40 via-neutral-950 to-black" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative flex items-center gap-0 sm:gap-1">
        <div className="-rotate-6 transition-transform duration-300 hover:rotate-0">
          <GlassMoneyCard label="Sent Money" />
        </div>

        <div className="relative mx-1 flex w-16 flex-col items-center sm:mx-2 sm:w-20">
          <div className="h-px w-full border-t border-dashed border-white/25" />
          <div className="absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-neutral-800 text-[11px] text-white shadow-md">
            ✓
          </div>
        </div>

        <div className="rotate-6 transition-transform duration-300 hover:rotate-0">
          <GlassMoneyCard label="Receive Money" />
        </div>
      </div>
    </div>
  );
}
