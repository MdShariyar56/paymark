"use client";

import { useState } from "react";
import Swal from "sweetalert2";

/* Contactless Icon */
function ContactlessIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 8.5a8 8 0 0 1 0 7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.8 5.8a12 12 0 0 1 0 12.4" stroke="currentColor" strokeWidth="1.7" opacity="0.75" />
      <path d="M12.6 3a16 16 0 0 1 0 18" stroke="currentColor" strokeWidth="1.7" opacity="0.45" />
    </svg>
  );
}

/* CARD */
function Card({ name, image, variant = "front" }) {
  const isFront = variant === "front";

  return (
    <div
      className={`relative aspect-[1.72/1] w-full overflow-hidden rounded-[28px] border transition-transform duration-300 hover:scale-[1.02] ${
        isFront
          ? "z-20 border-white/15 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]"
          : "border-white/10"
      }`}
    >
      {/* image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />

      {/* overlay (unchanged dark premium look) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/80" />

      {/* chip */}
      <div className="absolute left-[10%] top-1/2 flex -translate-y-1/2 items-center gap-3">
        <div className="h-8 w-11 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 shadow-md" />
        <ContactlessIcon className="h-6 w-6 text-white/80 rotate-90" />
      </div>

      {/* brand */}
      <div className="absolute right-[8%] top-[10%] text-white font-bold tracking-widest text-sm opacity-80">
        PAYMARK
      </div>

      {/* name */}
      <div className="absolute bottom-[12%] left-[10%] text-white text-[15px] font-medium tracking-wide">
        {name}
      </div>
    </div>
  );
}

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email) {
    Swal.fire({
      title: "Oops!",
      text: "Please enter your email",
      icon: "warning",
    });
    return;
  }

  Swal.fire({
    title: "Success!",
    text: "Code sent successfully",
    icon: "success",
  });

  setEmail("");
};

  return (
    <section className="relative overflow-hidden bg-[#070707] px-4 sm:px-6 pb-24 sm:pb-32 pt-20 sm:pt-28 text-center">

      {/* YOUR ORIGINAL COLOR GLOW (kept same) */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-pink-500/20 blur-[120px]" />

      {/* content */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center">

        <h1 className="text-[1.9rem] sm:text-[2.75rem] md:text-[3.5rem] font-semibold leading-tight tracking-tight text-white">
          Smart Solutions Built for
          <br />
          the Future of Finance
        </h1>

        <p className="mt-5 sm:mt-6 max-w-lg text-[13px] sm:text-[15px] leading-relaxed text-white/55">
          Track the growth and engagement of your newsletter detailed analytics your reach.
        </p>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-9 flex w-full max-w-md items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur-sm transition-colors duration-300 focus-within:border-white/20"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="w-full bg-transparent px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-white/90 rounded-l-2xl placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            Send Code
          </button>
        </form>
      </div>

      {/* cards */}
      <div className="relative mx-auto mt-16 sm:mt-24 h-[260px] sm:h-[320px] max-w-4xl">

        {/* mobile single card */}
        <div className="sm:hidden flex justify-center">
          <div className="w-[85%]">
            <Card
              name="EDWARD COLLINS"
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
              variant="front"
            />
          </div>
        </div>

        {/* desktop stack */}
        <div className="hidden sm:block">

          <div className="absolute left-1/2 top-1/2 w-[60%] -translate-x-[110%] -translate-y-1/2 rotate-[-8deg]">
            <Card
              name="ROBERT PART"
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              variant="back"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 w-[60%] translate-x-[10%] -translate-y-1/2 rotate-[8deg]">
            <Card
              name="MARIA GOMEZ"
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              variant="back"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 w-[65%] -translate-x-1/2 -translate-y-1/2 z-30">
            <Card
              name="EDWARD COLLINS"
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
              variant="front"
            />
          </div>

        </div>
      </div>
    </section>
  );
}