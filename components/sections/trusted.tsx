import Reveal from "@/components/reveal";

const industries = [
  "Construction",
  "Engineering",
  "Architecture",
  "Interior Design",
  "Development",
  "Real Estate",
];

export default function Trusted() {
  return (
    <section className="py-14 border-y border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <Reveal className="text-center mb-8">
          <span className="eyebrow">Inspired by Leading Design Standards</span>
          <p className="mt-3 text-[14px] text-[var(--muted)] max-w-[52ch] mx-auto">
            Trusted by companies across construction, engineering, architecture
            and interior design industries.
          </p>
        </Reveal>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track">
          {[...industries, ...industries, ...industries].map((it, i) => (
            <span
              key={i}
              className="mx-8 font-serif text-2xl md:text-3xl text-[var(--fg)]/45 whitespace-nowrap"
            >
              {it}
              <span className="text-[var(--accent)] ml-8">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
