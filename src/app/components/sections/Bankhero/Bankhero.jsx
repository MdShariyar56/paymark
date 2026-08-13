"use client"

import React, { useEffect, useRef, useState } from "react";

function CircuitLines({ mouse }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
      viewBox="0 0 1200 700"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      style={{
        transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px)`,
      }}
    >
      <g stroke="#f97316" strokeOpacity="0.18" strokeWidth="1.5">
        <path d="M0 120 H160 L200 160 H420" />
        <path d="M0 260 H90 L130 300 H300 L340 340" />
        <path d="M1200 100 H1040 L1000 140 H820" />
        <path d="M1200 240 H1080 L1040 280 H880 L840 320" />
        <path d="M1200 460 H1050 L1010 500 H860" />
        <path d="M0 480 H140 L180 520 H360" />
      </g>
      <g fill="#fb923c">
        {[
          [420, 160],
          [340, 340],
          [820, 140],
          [840, 320],
          [860, 500],
          [360, 520],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            className="animate-pulse-dot"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return value;
}

function TiltWrap({ children, className }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(600px) rotateX(${-py * 10}deg) rotateY(${
        px * 10
      }deg) scale(1.03)`,
    });
  };
  const onLeave = () => setStyle({ transform: "" });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function GlassCard({ className, children }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:border-orange-400/30 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

function TransactionCard() {
  const [on, setOn] = useState(true);
  return (
    <TiltWrap className="w-64 animate-float-slow">
      <GlassCard className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-neutral-500">From Alex Mendo</p>
            <p className="text-xs text-neutral-300 mt-0.5">Today, 10:14</p>
          </div>
          <button
            onClick={() => setOn((v) => !v)}
            className="w-8 h-4 rounded-full relative transition-colors"
            style={{ backgroundColor: on ? "#f97316" : "#404040" }}
            aria-label="Toggle transaction"
          >
            <span
              className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all duration-300"
              style={{ left: on ? "18px" : "2px" }}
            />
          </button>
        </div>
        <div className="h-px bg-white/10 my-3" />
        <div>
          <p className="text-[10px] text-neutral-500">To Leona Santos</p>
          <p className="text-xs text-neutral-300 mt-0.5">Today, 10:40</p>
        </div>
      </GlassCard>
    </TiltWrap>
  );
}

function InvestmentCard() {
  const value = useCountUp(521);
  const pathRef = useRef(null);
  const [dash, setDash] = useState(400);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setDash(len);
    }
  }, []);

  return (
    <TiltWrap className="w-72 animate-float">
      <GlassCard className="p-5">
        <p className="text-2xl font-semibold text-white tabular-nums">
          ${value}K
        </p>
        <p className="text-[11px] text-neutral-500 mt-0.5">
          Your investment is growing
        </p>

        <svg viewBox="0 0 240 70" className="w-full h-16 mt-3">
          <path
            ref={pathRef}
            d="M0 50 C 20 30, 40 55, 60 35 S 100 15, 120 30 S 160 55, 180 25 S 220 10, 240 20"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray={dash}
            strokeDashoffset={dash}
            className="animate-draw-line"
          />
          <path
            d="M0 40 C 25 45, 45 20, 65 30 S 110 45, 130 35 S 170 15, 190 30 S 225 40, 240 35"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.6"
          />
        </svg>

        <div className="flex items-center gap-3 mt-2 flex-wrap">
          <Legend color="#ef4444" label="Education" value="+45%" />
          <Legend color="#f59e0b" label="Health" value="+67%" />
          <Legend color="#9ca3af" label="Grocery" value="+0%" />
        </div>
      </GlassCard>
    </TiltWrap>
  );
}

function Legend({ color, label, value }) {
  return (
    <div className="flex items-center gap-1">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-[9px] text-neutral-500">{label}</span>
      <span className="text-[9px] text-neutral-300">{value}</span>
    </div>
  );
}

function RewardCard() {
  return (
    <TiltWrap className="w-52 animate-float-slow">
      <GlassCard className="p-4">
        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#ef4444"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-lg font-semibold text-white mt-3">$128.12</p>
        <p className="text-[10px] text-neutral-500 mt-0.5">
          Payment for international purchase
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[10px] text-neutral-500">Reward columns</span>
          <span className="text-[10px] text-neutral-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-dot" />
            Live
          </span>
        </div>
        <div className="h-1 rounded-full bg-white/10 mt-1.5 overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full animate-fill-bar" />
        </div>
      </GlassCard>
    </TiltWrap>
  );
}

function ExchangeCard() {
  return (
    <TiltWrap className="w-64 animate-float">
      <GlassCard className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-neutral-500">Sent</p>
            <p className="text-sm text-neutral-200 mt-0.5">€9,561</p>
          </div>
          <span className="text-[10px] text-neutral-500">EUR</span>
        </div>
        <div className="h-px bg-white/10 my-3" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-neutral-500">Receive</p>
            <p className="text-sm text-neutral-200 mt-0.5">€9,561</p>
          </div>
          <span className="text-[10px] text-neutral-500">EUR</span>
        </div>
      </GlassCard>
    </TiltWrap>
  );
}

export default function BankHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative w-full min-h-[720px] bg-black overflow-hidden flex items-center justify-center px-6 py-20"
    >
      <CircuitLines mouse={mouse} />

      <div
        className={`relative z-10 max-w-xl text-center transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          Who says a banking platform
          <br />
          can't blow mind?
        </h1>
        <p className="mt-5 text-neutral-400 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          We care a lot. And you'll feel it in everything we do. With Rho,
          feel seen and taken care of across every step of the startup
          journey (not just your finances).
        </p>
        <button className="mt-7 rounded-full bg-white text-black text-sm font-medium px-6 py-2.5 hover:bg-neutral-200 active:scale-95 transition">
          Send code
        </button>
      </div>

      <div
        className={`absolute top-16 left-6 md:left-16 z-10 -rotate-2 transition-all duration-700 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
        style={{ transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)` }}
      >
        <TransactionCard />
      </div>
      <div
        className={`absolute bottom-14 left-4 md:left-14 z-10 rotate-1 transition-all duration-700 delay-150 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
        style={{ transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)` }}
      >
        <InvestmentCard />
      </div>
      <div
        className={`absolute top-14 right-6 md:right-16 z-10 rotate-2 transition-all duration-700 delay-300 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{ transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)` }}
      >
        <RewardCard />
      </div>
      <div
        className={`absolute bottom-16 right-4 md:right-12 z-10 -rotate-1 transition-all duration-700 delay-500 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{ transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)` }}
      >
        <ExchangeCard />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fillBar {
          0% { width: 10%; }
          50% { width: 55%; }
          100% { width: 10%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 7.5s ease-in-out infinite; }
        .animate-pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
        .animate-draw-line { animation: drawLine 1.8s ease-out 0.3s forwards; }
        .animate-fill-bar { animation: fillBar 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}