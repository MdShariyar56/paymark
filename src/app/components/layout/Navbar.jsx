"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Sparkle, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/10"
      style={{
        background:
          "linear-gradient(115deg, #e9c9c4 0%, #d3a8a6 12%, #9c6b74 28%, #5f3a48 45%, #2c1620 62%, #0d0709 80%, #050304 100%)",
      }}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <Sparkle className="h-5 w-5 fill-black text-black" strokeWidth={0} />
          <span className="text-[17px] font-bold tracking-wide text-black">
            PAYMARK
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[14.5px] font-medium text-white/85 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <button aria-label="View cart" className="text-white/85 transition-colors duration-200 hover:text-white">
            <ShoppingCart className="h-[19px] w-[19px]" strokeWidth={1.8} />
          </button>

          <a
            href="#login"
            className="text-[14.5px] font-medium text-white/85 transition-colors duration-200 hover:text-white"
          >
            Login
          </a>

          <a
            href="#open-account"
            className="rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-black transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Open Account
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
        >
          {isOpen ? <X className="h-[22px] w-[22px]" /> : <Menu className="h-[22px] w-[22px]" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "#0d0709" }}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-medium text-white/90 hover:bg-white/5 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <div className="my-2 h-px bg-white/10" />

          <a
            href="#login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 rounded-lg px-3 py-3 text-[15px] font-medium text-white/90 hover:bg-white/5 transition-colors duration-200"
          >
            <ShoppingCart className="h-4 w-4" /> Login
          </a>

          <a
            href="#open-account"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-black transition-transform duration-200 active:scale-[0.98]"
          >
            Open Account
          </a>
        </div>
      </div>
    </header>
  );
}