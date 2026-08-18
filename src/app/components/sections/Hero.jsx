"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import PaymentCard from "../ui/PaymentCard";

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
            <PaymentCard
              name="EDWARD COLLINS"
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
              variant="front"
            />
          </div>
        </div>

        {/* desktop stack */}
        <div className="hidden sm:block">

          <div className="absolute left-1/2 top-1/2 w-[60%] -translate-x-[110%] -translate-y-1/2 rotate-[-8deg]">
            <PaymentCard
              name="ROBERT PART"
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              variant="back"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 w-[60%] translate-x-[10%] -translate-y-1/2 rotate-[8deg]">
            <PaymentCard
              name="MARIA GOMEZ"
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              variant="back"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 w-[65%] -translate-x-1/2 -translate-y-1/2 z-30">
            <PaymentCard
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