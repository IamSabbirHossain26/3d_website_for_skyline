"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What files do I need to start?",
    a: "You can start by sharing any available drawings, sketches, PDFs, measurements, reference images, or project requirements — whatever you have is enough for us to scope the work.",
  },
  {
    q: "Can you convert a PDF or hand sketch into AutoCAD?",
    a: "Yes. Converting PDFs, scans and hand sketches into clean, layered and dimensioned AutoCAD files is one of our core services.",
  },
  {
    q: "Do you provide revisions?",
    a: "Absolutely. Revisions are part of the process — we refine each drawing set until it accurately reflects your requirements.",
  },
  {
    q: "What file formats do you deliver?",
    a: "We typically deliver DWG, DXF and PDF, and can provide Revit (RVT/IFC) models where BIM coordination is involved.",
  },
  {
    q: "Do you work on residential and commercial projects?",
    a: "Yes — from single residences and multi-family communities to commercial and public projects across our supported markets.",
  },
  {
    q: "How long does a typical drafting project take?",
    a: "It depends on scope, but most drafting packages move quickly thanks to our production workflow, with a first turnaround usually within a few business days.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[var(--bg-soft)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <div className="text-center mb-14">
          <span className="eyebrow">Support</span>
          <h2 className="display text-[clamp(30px,5vw,60px)] mt-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-xl md:text-2xl">{f.q}</span>
                  <span
                    className={`shrink-0 text-2xl text-[var(--accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-56" : "max-h-0"
                  }`}
                >
                  <p className="pb-6 max-w-[64ch] text-[15px] leading-relaxed text-[var(--muted)]">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
