import Reveal from "@/components/reveal";

const projects = [
  {
    title: "The Cultural Center",
    tag: "Public · BIM Coordination",
    year: "2025",
    grad: "linear-gradient(135deg,#d8c6a8,#a98f68)",
  },
  {
    title: "Interior Drafting Suite",
    tag: "Commercial · AutoCAD",
    year: "2024",
    grad: "linear-gradient(135deg,#c7b79c,#8a7053)",
  },
  {
    title: "The Float House",
    tag: "Residential · Visualization",
    year: "2024",
    grad: "linear-gradient(135deg,#cbb7a0,#9d8060)",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <span className="eyebrow">Selected Design Work</span>
            <h2 className="display text-[clamp(30px,5vw,64px)] mt-4">
              From blueprint to{" "}
              <span className="italic-accent text-[var(--accent)]">
                beautiful living
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-[42ch] text-[14px] leading-relaxed text-[var(--muted)]">
              A seamless journey from technical planning to finished interior —
              showing how precise architectural drawings transform into warm,
              modern and beautifully functional spaces.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a href="#" className="group block">
                <div
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--line)]"
                  style={{ background: p.grad }}
                >
                  <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(0deg,transparent_23px,rgba(255,255,255,.6)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,.6)_24px)] [background-size:24px_24px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-white/40 text-6xl transition-transform duration-700 group-hover:scale-110">
                      0{i + 1}
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 text-[11px] tracking-[0.14em] uppercase text-white/70">
                    {p.year}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/45 to-transparent">
                    <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-white/90 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      View full design work ↗
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <p className="text-[12px] tracking-[0.12em] uppercase text-[var(--muted)] mt-1">
                    {p.tag}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
