import { Container } from "@/components/ui/container";

const LOGOS = [
  "Northwind",
  "Cabana Health",
  "Fernbridge",
  "Loop Freight",
  "Redline Labs",
  "Marrow",
  "Everstack",
  "Quietroom",
  "Basalt",
  "Harborview",
];

export function TrustedBy() {
  const marquee = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-line py-12">
      <Container>
        <p className="mb-8 text-center text-[12px] font-medium uppercase tracking-[0.16em] text-muted-2">
          Powering operations for 1,200+ growing companies
        </p>
      </Container>
      <div className="mask-fade-x relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16">
          {marquee.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 select-none font-display text-[22px] italic text-paper/35 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
