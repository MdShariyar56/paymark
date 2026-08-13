"use client";

import { useState, useEffect, useCallback } from "react";
import { ShoppingCart, Sparkle, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll lock (Next.js safe)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close drawer on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Shadow / shrink effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "border-transparent shadow-none"
      }`}
      style={{
        background:
          "linear-gradient(115deg, #e9c9c4 0%, #d3a8a6 12%, #9c6b74 28%, #5f3a48 45%, #2c1620 62%, #0d0709 80%, #050304 100%)",
        backgroundSize: "140% 140%",
      }}
    >
      <nav
        className={`mx-auto flex max-w-8xl items-center justify-between px-5 transition-all duration-500 ease-out sm:px-8 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Sparkle
            className="h-5 w-5 fill-black text-black transition-transform duration-500 group-hover:rotate-45"
            strokeWidth={0}
          />
          <span className="text-[17px] font-bold tracking-wide text-black">
            PAYMARK
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-[14.5px] font-medium text-white/85 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 md:flex">
          <button
            aria-label="Cart"
            className="relative text-white/85 transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <ShoppingCart className="h-[19px] w-[19px]" />
          </button>

          <a
            href="#login"
            className="text-white/85 transition-colors duration-300 hover:text-white"
          >
            Login
          </a>

          <a
            href="#open-account"
            className="rounded-full bg-white px-5 py-2.5 font-semibold text-black shadow-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"
          >
            Open Account
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="text-white transition-transform duration-300 hover:scale-110 md:hidden"
        >
          <Menu />
        </button>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* overlay */}
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col bg-[#0d0709] p-5 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={close}
            aria-label="Close menu"
            className="mb-6 self-end text-white transition-transform duration-300 hover:scale-110 hover:rotate-90"
          >
            <X />
          </button>

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={close}
                className="rounded-lg p-3 text-white/90 transition-all duration-300 ease-out hover:translate-x-1 hover:bg-white/10"
                style={{
                  transitionDelay: isOpen ? `${i * 60 + 100}ms` : "0ms",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(12px)",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#login"
              onClick={close}
              className="p-3 text-white/90 transition-all duration-300 hover:translate-x-1"
              style={{
                transitionDelay: isOpen ? "340ms" : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(12px)",
              }}
            >
              Login
            </a>

            <a
              href="#open-account"
              onClick={close}
              className="mt-2 rounded-full bg-white p-3 text-center font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                transitionDelay: isOpen ? "400ms" : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(8px)",
              }}
            >
              Open Account
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}