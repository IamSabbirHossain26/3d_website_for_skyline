const cols = [
  {
    title: "Services",
    items: ["AutoCAD Drafting", "Architecture Planning", "Renovation + Restoration"],
  },
  {
    title: "Company",
    items: ["Operational Scope", "Projects", "Portfolio", "Blog", "Legal Notice"],
  },
  {
    title: "Locations",
    items: ["New York", "Los Angeles", "Copenhagen"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-soft)] border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-2xl">
              Skyline<span className="text-[var(--accent)]">.</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-[var(--muted)]">
              Architecture &amp; spatial design services — future-facing spaces
              for creative living. A B2B drafting and production support partner.
            </p>
            <div className="mt-6 text-[14px] text-[var(--muted)]">
              <a
                href="mailto:admin@skylinedesigngroups.com"
                className="hover:text-[var(--fg)] transition-colors"
              >
                admin@skylinedesigngroups.com
              </a>
              <br />
              <a
                href="tel:+19034071820"
                className="hover:text-[var(--fg)] transition-colors"
              >
                (903) 407-1820
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] mb-5">
                {c.title}
              </div>
              <ul className="space-y-3 text-[14px]">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.14em] uppercase text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Skyline Design Group</span>
          <span>Architecture &amp; Spatial Design Services</span>
        </div>
      </div>
    </footer>
  );
}
