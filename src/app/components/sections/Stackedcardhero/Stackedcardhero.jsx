"use client"
import React, { useState } from "react";

// প্রতিটা কার্ডের ডেটা — নিচেরটা উপরে আসলে টেক্সট আর ছবি পাল্টে যাবে
const cards = [
  {
    id: 1,
    title: "View Weekly\nTransaction Dynamics",
    desc: "Get a clear snapshot of how your transactions trend each week, helping you spot patterns, track growth, and make smarter financial decisions.",
    image: "https://picsum.photos/id/1005/900/700",
    stat: { label: "Your balance", value: "$15,437" },
    bars: [30, 70, 45, 55, 90, 60, 40],
  },
  {
    id: 2,
    title: "Freeze Your Card\nIn One Tap",
    desc: "Lost your card or spotted odd activity? Freeze it instantly from the app and unfreeze the moment things are sorted out.",
    image: "https://picsum.photos/id/1011/900/700",
    stat: { label: "Card status", value: "Frozen" },
    bars: [20, 20, 20, 20, 20, 20, 20],
  },
  {
    id: 3,
    title: "Grow Savings\nOn Autopilot",
    desc: "Set a goal, choose a pace, and let round-ups and scheduled transfers do the work while you focus on what matters.",
    image: "https://picsum.photos/id/1027/900/700",
    stat: { label: "Savings goal", value: "$8,120" },
    bars: [40, 50, 65, 60, 75, 85, 95],
  },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function StackedCardHero() {
  // order[0] সবসময় সবার সামনে থাকা কার্ডের index
  const [order, setOrder] = useState([0, 1, 2]);
  const [leaving, setLeaving] = useState(false);

  const handleNext = () => {
    if (leaving) return;
    setLeaving(true);
    // সামনের কার্ডটা উপরে উঠে হালকা হয়ে যাবে, তারপর স্ট্যাকের সবার পেছনে চলে যাবে
    setTimeout(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setLeaving(false);
    }, 600);
  };

  // মাউস কার্ডের উপর গেলেই স্মুথলি পরের কার্ড চলে আসবে
  const handleHover = () => {
    if (leaving) return;
    handleNext();
  };

  return (
    <section className="w-full bg-[#070707] py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl md:text-5xl font-semibold text-white tracking-tight">
          Bank complete confidence
        </h1>
        <p className="mt-4 text-neutral-400 text-base leading-relaxed max-w-xl mx-auto">
          Enjoy high-yield accounts, unlimited 2% cashback cards for pro
          customers, and flexible working capital to power your business.
        </p>
      </div>

      <div className="relative mt-26 mx-auto max-w-4xl h-[520px] [perspective:1400px]">
        {order.map((cardIndex, stackPos) => {
          const card = cards[cardIndex];
          const isFront = stackPos === 0;
          const isExiting = isFront && leaving;

          // পেছনের কার্ডগুলো একটু বড় করে বেশি উপরে সরানো হয়েছে, যাতে পিছনে কী আছে স্পষ্ট বোঝা যায়
          const restStyle = {
            transform: `translateY(${-stackPos * 46}px) scale(${
              1 - stackPos * 0.03
            })`,
            zIndex: 10 - stackPos,
            opacity: stackPos === 0 ? 1 : 0.85 - stackPos * 0.12,
          };

          const exitStyle = {
            transform: "translateY(-140px) scale(0.96)",
            opacity: 0,
            zIndex: 10,
          };

          return (
            <div
              key={card.id}
              onMouseEnter={isFront ? handleHover : undefined}
              className="absolute inset-0 rounded-[28px] border border-white/10 bg-neutral-900 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={isExiting ? exitStyle : restStyle}
            >
              {stackPos !== 0 ? (
                // পেছনের কার্ড — এখানেও আসল ছবি দেখা যাবে, শুধু হালকা ওভারলে দেওয়া থাকবে
                <div className="relative w-full h-full">
                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              ) : (
                <div className="grid md:grid-cols-2 h-full">
                  {/* বাম পাশ — লেখা */}
                  <div className="relative flex flex-col justify-center px-10 md:px-14 py-12 bg-gradient-to-br from-neutral-800/60 via-neutral-900 to-neutral-900">
                    <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <h2 className="relative text-3xl md:text-4xl font-semibold text-white leading-tight whitespace-pre-line">
                      {card.title}
                    </h2>
                    <p className="relative mt-5 text-neutral-400 text-sm leading-relaxed max-w-sm">
                      {card.desc}
                    </p>
                    <button
                      onClick={handleNext}
                      className="relative mt-8 w-fit rounded-full bg-white text-black text-sm font-medium px-6 py-2.5 hover:bg-neutral-200 active:scale-95 transition"
                    >
                      Learn more
                    </button>
                  </div>

                  {/* ডান পাশ — ছবি + ফ্লোটিং স্ট্যাট কার্ড */}
                  <div className="relative hidden md:block">
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6 w-44 rounded-2xl bg-neutral-950/90 border border-white/10 backdrop-blur px-4 py-3">
                      <p className="text-[11px] text-neutral-400">
                        {card.stat.label}
                      </p>
                      <p className="text-lg font-semibold text-white mt-0.5">
                        {card.stat.value}
                      </p>
                      <div className="flex items-end gap-1.5 mt-3 h-10">
                        {card.bars.map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              background:
                                i === 1 || i === 4
                                  ? "linear-gradient(180deg,#fb923c,#ef4444)"
                                  : "rgba(255,255,255,0.15)",
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1.5">
                        {DAYS.map((d) => (
                          <span key={d} className="text-[8px] text-neutral-500">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* নিচে ছোট ইন্ডিকেটর — কোন কার্ডে আছি বোঝাতে */}
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === order[0] ? "w-6 bg-white" : "w-1.5 bg-white/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}