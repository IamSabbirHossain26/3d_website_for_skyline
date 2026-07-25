import Reveal from "@/components/reveal";

const stats = [
  ["98%", "Design Accuracy"],
  ["75+", "Happy Clients"],
  ["40+", "Projects Completed"],
  ["120+", "Interior Concepts"],
];

export default function Stats() {
  return (
    <section className="py-24 md:py-32 bg-[var(--fg)] text-[var(--bg)]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <Reveal className="mb-14 text-center">
          <span className="eyebrow">Crafted in Numbers</span>
          <p className="mt-4 max-w-[54ch] mx-auto text-[15px] leading-relaxed text-[var(--bg)]/65">
            A clear look at the results behind our design process — from
            completed projects and detailed blueprints to realistic
            visualizations and satisfied clients.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map(([n, label], i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="text-center md:text-left">
                <div className="font-serif text-[clamp(44px,6vw,84px)] leading-none text-[var(--accent-soft)]">
                  {n}
                </div>
                <div className="mt-3 text-[12px] tracking-[0.14em] uppercase text-[var(--bg)]/60">
                  {label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
