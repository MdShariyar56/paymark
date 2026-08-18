"use client";

import { useRef, useState } from "react";
import FeatureCard from "./FeatureCard";
import SendReceiveVisual from "./SendReceiveVisual";
import OrganizePaymentVisual from "./OrganizePaymentVisual";
import UnlockCardsVisual from "./UnlockCardsVisual";

function SectionHeader() {
  return (
    <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Streamline Financial{" "}
        <span className="text-neutral-400">Zero Hassle.</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:mt-6 sm:text-base md:text-lg">
        We respond quickly, tackle what matters, and are dedicated to your
        success.
      </p>
    </div>
  );
}

function CardText({ title, description, centered = false }) {
  return (
    <div className={centered ? "mt-6 text-center" : "mt-6"}>
      <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}

export default function FinancialHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)`,
        }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#f97316" strokeOpacity="0.18" strokeWidth="1">
            <path d="M0 200 H300 L350 250 H700" />
            <path d="M1440 150 H1100 L1050 200 H800" />
            <path d="M0 600 H400 L450 650 H900" />
            <path d="M1440 700 H1000 L950 650 H600" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <FeatureCard className="min-h-[420px] justify-between sm:min-h-[440px]">
            <SendReceiveVisual />
            <CardText
              title="Send & Receive Payments Seamlessly"
              description="Set auto-transfer rules and send free USD wires."
            />
          </FeatureCard>

          <FeatureCard className="min-h-[420px] justify-between sm:min-h-[440px]">
            <OrganizePaymentVisual />
            <CardText
              title="Organize Your Payment"
              description="Immediately group your transactions to make it easy."
            />
          </FeatureCard>

          <FeatureCard className="md:col-span-2">
            <UnlockCardsVisual />
            <CardText
              centered
              title="Unlock Cards Earlier with Low Deposit Minimums"
              description="Unlock credit cards earlier with industry-low deposit minimums"
            />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
