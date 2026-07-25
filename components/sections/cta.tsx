import Reveal from "@/components/reveal";

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative min-h-[88vh] flex flex-col items-center justify-center py-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 w-full text-center">
        <Reveal>
          <span className="eyebrow">Start a Project</span>
          <h2 className="display text-[clamp(36px,7vw,104px)] mt-6 max-w-[16ch] mx-auto">
            Let&apos;s design your{" "}
            <span className="italic-accent text-[var(--accent)]">next</span>{" "}
            space.
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 max-w-[52ch] mx-auto text-[15px] leading-relaxed text-[var(--muted)]">
            From conceptualizing to constructing, we&apos;re ready to design your
            architectural dream — a client-centric approach that empowers ideas,
            eases concerns and delivers craftsmanship we&apos;ll all be proud of.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:admin@skylinedesigngroups.com"
              className="rounded-full bg-[var(--fg)] text-[var(--bg)] px-8 py-4 text-[12px] tracking-[0.14em] uppercase hover:bg-[var(--accent)] transition-colors"
            >
              admin@skylinedesigngroups.com
            </a>
            <a
              href="tel:+19034071820"
              className="rounded-full border border-[var(--line)] px-8 py-4 text-[12px] tracking-[0.14em] uppercase hover:bg-black/[0.04] transition-colors"
            >
              (903) 407-1820
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
