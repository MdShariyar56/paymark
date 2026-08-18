"use client";

import { useRef, useState } from "react";

export default function FeatureCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 p-6 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)] sm:p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(249, 115, 22, 0.35), transparent 60%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-[1px] rounded-3xl bg-neutral-950/90" />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
