import Reveal from "@/components/reveal";

const testimonials = [
  {
    quote:
      "Skyline Design Group delivered accurate AutoCAD drawings quickly and professionally. The communication was clear from start to finish.",
    name: "Michael Anderson",
    role: "Homeowner",
  },
  {
    quote:
      "Their drafting quality is excellent. They converted our sketches into clean, detailed CAD files exactly as required.",
    name: "Sarah Williams",
    role: "Interior Designer",
  },
  {
    quote:
      "Reliable, responsive and detail-oriented. We've used their drafting support on multiple commercial projects.",
    name: "David Miller",
    role: "Project Manager",
  },
  {
    quote:
      "A smooth experience with fast revisions and professional documentation. Highly recommended for architectural drafting.",
    name: "Emily Johnson",
    role: "Architect",
  },
];

export default function Clients() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <Reveal className="mb-14 max-w-[46ch]">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="display text-[clamp(28px,4.5vw,56px)] mt-4">
            What clients say about our{" "}
            <span className="italic-accent text-[var(--accent)]">
              design support
            </span>
            .
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 100}>
              <figure className="h-full rounded-2xl bg-[var(--card)] border border-[var(--line)] p-8 md:p-10">
                <div className="font-serif text-4xl text-[var(--accent)] leading-none">
                  &ldquo;
                </div>
                <blockquote className="mt-2 font-serif text-[19px] md:text-[22px] leading-[1.4]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)] font-serif text-lg">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[14px] font-medium">
                      {t.name}
                    </span>
                    <span className="block text-[12px] tracking-[0.12em] uppercase text-[var(--muted)]">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
