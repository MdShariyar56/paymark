"use client";

const TINT_OVERLAY = {
  default: "from-black/20 via-black/40 to-black/80",
  red: "from-red-900/40 via-black/45 to-black/85",
  gold: "from-amber-700/35 via-black/45 to-black/85",
};

export function ContactlessIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 8.5a8 8 0 0 1 0 7" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8.8 5.8a12 12 0 0 1 0 12.4"
        stroke="currentColor"
        strokeWidth="1.7"
        opacity="0.75"
      />
      <path
        d="M12.6 3a16 16 0 0 1 0 18"
        stroke="currentColor"
        strokeWidth="1.7"
        opacity="0.45"
      />
    </svg>
  );
}

export default function PaymentCard({
  name,
  image,
  variant = "front",
  tint = "default",
  className = "",
}) {
  const isFront = variant === "front";

  return (
    <div
      className={`relative aspect-[1.72/1] w-full overflow-hidden rounded-[28px] border transition-transform duration-300 hover:scale-[1.02] ${
        isFront
          ? "z-20 border-white/15 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]"
          : "border-white/10"
      } ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${TINT_OVERLAY[tint] ?? TINT_OVERLAY.default}`}
      />

      <div className="absolute left-[10%] top-1/2 flex -translate-y-1/2 items-center gap-3">
        <div className="h-8 w-11 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-md" />
        <ContactlessIcon className="h-6 w-6 rotate-90 text-white/80" />
      </div>

      <div className="absolute right-[8%] top-[10%] text-sm font-bold tracking-widest text-white opacity-80">
        PAYMARK
      </div>

      <div className="absolute bottom-[12%] left-[10%] text-[15px] font-medium tracking-wide text-white">
        {name}
      </div>
    </div>
  );
}
