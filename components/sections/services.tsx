import Reveal from "@/components/reveal";

const steps = [
  {
    n: "01",
    title: "Project Scope Review",
    body: "We review project requirements, layout goals, site data and production needs to define a clear drafting direction.",
  },
  {
    n: "02",
    title: "Technical Drafting",
    body: "Using AutoCAD, we create precise technical drawings and organized documentation for developers, contractors and design firms.",
  },
  {
    n: "03",
    title: "BIM Coordination",
    body: "With Autodesk Revit, we support Building Information Modeling workflows to improve coordination, structure and project clarity.",
  },
  {
    n: "04",
    title: "Multi-Family Layout Planning",
    body: "We assist with density-focused layouts for triplexes, fourplexes and build-to-rent residential communities.",
  },
  {
    n: "05",
    title: "Permit-Ready Packages",
    body: "We prepare complete technical drawing packages designed to support faster review, approval and construction planning.",
  },
  {
    n: "06",
    title: "Pre-Construction Visualization",
    body: "We help teams understand the project direction before construction through detailed drafting and visual planning support.",
  },
];

const tools = ["AutoCAD", "Autodesk Revit", "BIM Coordination", "Permit Packages"];
const around = ["Technical Precision", "Rapid Turnaround", "Capital Efficiency"];

export default function Services() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <Reveal className="mb-8">
          <span className="eyebrow">Workflow</span>
          <h2 className="display text-[clamp(30px,5vw,64px)] mt-4 max-w-[16ch]">
            Inside the design process.
          </h2>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-[var(--muted)]">
            A streamlined production workflow built to transform project
            requirements into accurate, coordinated and permit-ready drawing
            packages.
          </p>
        </Reveal>

        {/* Tool + value chips */}
        <Reveal className="mb-14 flex flex-wrap gap-2.5" delay={100}>
          <>
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-[12px] tracking-[0.08em]"
              >
                {t}
              </span>
            ))}
            {around.map((t) => (
              <span
                key={t}
                className="rounded-full bg-[var(--accent)]/12 text-[var(--accent)] px-4 py-2 text-[12px] tracking-[0.08em]"
              >
                {t}
              </span>
            ))}
          </>
        </Reveal>

        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--line)]">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 80}>
              <div className="group h-full p-8 md:p-10 border-b border-r border-[var(--line)] hover:bg-[var(--card)] transition-colors">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl text-[var(--accent)]">
                    {s.n}
                  </span>
                  <span className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </div>
                <h3 className="font-serif text-2xl mt-8">{s.title}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-[var(--muted)]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8" delay={120}>
          <p className="text-[12px] leading-relaxed text-[var(--muted)]/80 max-w-[70ch]">
            Skyline Design Group operates as a B2B drafting and production
            support partner and does not provide independent architectural or
            licensed engineering services.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
