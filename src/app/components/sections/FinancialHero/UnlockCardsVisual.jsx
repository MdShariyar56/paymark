"use client";

import PaymentCard from "../../ui/PaymentCard";

function CircuitBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      viewBox="0 0 1200 320"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#f97316" strokeOpacity="0.2" strokeWidth="1">
        <path d="M0 80 H200 L260 120 H520" />
        <path d="M1200 60 H980 L920 100 H680" />
        <path d="M0 240 H180 L240 200 H480" />
        <path d="M1200 260 H1000 L940 220 H700" />
      </g>
      <g fill="#fb923c">
        <circle cx="260" cy="120" r="2.5" className="animate-pulse" />
        <circle cx="920" cy="100" r="2.5" className="animate-pulse" />
        <circle cx="240" cy="200" r="2.5" className="animate-pulse" />
      </g>
    </svg>
  );
}

export default function UnlockCardsVisual() {
  return (
    <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl py-8 sm:min-h-[280px] sm:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />
      <CircuitBackground />

      <div className="relative mx-auto w-full max-w-lg px-4">
        <div className="relative h-[140px] sm:h-[170px]">
          <div className="absolute left-[2%] top-1/2 w-[52%] -translate-y-1/2 -rotate-[10deg] sm:left-[4%]">
            <PaymentCard
              name="JANE ANGLE"
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              tint="red"
              variant="back"
            />
          </div>
          <div className="absolute right-[2%] top-1/2 z-10 w-[52%] -translate-y-1/2 rotate-[10deg] sm:right-[4%]">
            <PaymentCard
              name="EDWARD COLLINS"
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
              tint="gold"
              variant="front"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
