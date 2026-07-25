export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-between pt-28 md:pt-32 pb-8"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-10">
        <p className="eyebrow reveal in">
          Architecture · Drafting · BIM Coordination
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-10">
        <h1 className="display text-[clamp(40px,8.5vw,132px)] max-w-[13ch]">
          <span className="block reveal in">Future-facing</span>
          <span
            className="block reveal in"
            style={{ transitionDelay: "110ms" }}
          >
            spaces for{" "}
            <span className="italic-accent text-[var(--accent)]">creative</span>
          </span>
          <span
            className="block reveal in"
            style={{ transitionDelay: "220ms" }}
          >
            living.
          </span>
        </h1>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-7">
        <p
          className="reveal in max-w-[46ch] text-[15px] leading-relaxed text-[var(--muted)]"
          style={{ transitionDelay: "320ms" }}
        >
          Thoughtfully designed spaces for creative, considerate humans —
          blending modern functionality, inspiring aesthetics and future-ready
          living.
        </p>

        <div
          className="reveal in flex flex-wrap items-center gap-3"
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="#contact"
            className="rounded-full bg-[var(--fg)] text-[var(--bg)] px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-[var(--accent)] transition-colors"
          >
            Get Started
          </a>
          <a
            href="#work"
            className="rounded-full border border-[var(--line)] px-7 py-3.5 text-[12px] tracking-[0.14em] uppercase hover:bg-black/[0.04] transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-10 mt-8 flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-[var(--muted)]">
        <span>New York · Los Angeles · Copenhagen</span>
        <span className="hidden sm:flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
