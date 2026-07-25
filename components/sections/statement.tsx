import Reveal from "@/components/reveal";

const caps = [
  {
    n: "01",
    title: "BIM Infrastructure",
    body: "Reliable digital modeling support for complex residential and commercial projects.",
  },
  {
    n: "02",
    title: "Technical Drafting",
    body: "Detailed drawing packages created for clarity, coordination and permit submission.",
  },
  {
    n: "03",
    title: "Development Efficiency",
    body: "Planning-focused support that helps improve density, usability and project value.",
  },
];

export default function Statement() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-soft)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="display text-[clamp(30px,4.6vw,60px)] mt-4 leading-[1.05]">
              Smarter documentation, stronger{" "}
              <span className="italic-accent text-[var(--accent)]">
                development outcomes
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:pt-4">
            <p className="text-[15px] leading-relaxed text-[var(--muted)]">
              Skyline Design Group supports developers, architects and builders
              with high-capacity BIM modeling, technical drafting and
              permit-ready drawing packages. Our process is built to improve
              coordination, reduce design friction and support capital-efficient
              project delivery.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {caps.map((c, i) => (
            <Reveal key={c.n} delay={i * 90}>
              <div className="h-full rounded-2xl bg-[var(--card)] border border-[var(--line)] p-8 hover:-translate-y-1 transition-transform duration-500">
                <span className="font-serif text-3xl text-[var(--accent)]">
                  {c.n}
                </span>
                <h3 className="font-serif text-2xl mt-6">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
