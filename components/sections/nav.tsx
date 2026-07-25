"use client";

import { useEffect, useState } from "react";

const links = [
  ["Work", "#work"],
  ["Process", "#process"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-500 ${
        scrolled
          ? "py-3.5 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--line)]"
          : "py-6"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Skyline<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[12px] tracking-[0.16em] uppercase text-[var(--muted)]">
          {links.map(([l, href]) => (
            <a
              key={l}
              href={href}
              className="hover:text-[var(--fg)] transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--fg)] text-[var(--bg)] px-5 py-2.5 text-[11px] tracking-[0.16em] uppercase hover:bg-[var(--accent)] transition-colors"
          >
            Get Started <span aria-hidden>↗</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`h-px w-6 bg-[var(--fg)] transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-[var(--fg)] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-[var(--fg)] transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-[1240px] px-5 py-5 flex flex-col gap-4 text-sm tracking-[0.12em] uppercase">
          {links.map(([l, href]) => (
            <a
              key={l}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[var(--muted)]"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-[var(--accent)]"
          >
            Get Started ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
