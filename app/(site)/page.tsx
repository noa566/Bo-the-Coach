import Image from "next/image";
import Link from "next/link";
import { getHomeContent } from "@/lib/content";

export const dynamic = "force-dynamic";

const SERVICE_ICONS = [
  (
    <svg
      key="personal"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-bo-dark"
    >
      <path
        d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg
      key="team"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-accent-600"
    >
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 2-4.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  (
    <svg
      key="training"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="text-sage-700"
    >
      <path
        d="M3 7l9-4 9 4-9 4-9-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M21 7v6M7 9v5c0 1.5 2.2 3 5 3s5-1.5 5-3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

const SERVICE_LINKS = ["/coaching", "/coaching", "/formation"];
const SERVICE_BUBBLE_CLASSES = [
  "bg-bo/15 group-hover:bg-bo/25",
  "bg-accent-100 group-hover:bg-accent-200",
  "bg-sage-100 group-hover:bg-sage-200",
];

const STAT_COLORS = ["text-bo-dark", "text-accent-600", "text-sage-700"];

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-24 pt-24 overflow-hidden bg-gradient-to-b from-sand-100 via-sand-50 to-sand-50">
        <div className="container-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-10 md:py-16">
          <div className="animate-fade-in-up">
            <span className="eyebrow mb-5">{content.hero.eyebrow}</span>
            <h1 className="h-display mt-4 text-balance">
              {content.hero.titleStart}{" "}
              <span className="text-accent-500 italic">
                {content.hero.titleAccent}
              </span>
              {content.hero.titleEnd}
            </h1>
            <p className="lead mt-5 max-w-xl text-balance">
              {content.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                {content.hero.ctaPrimary}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10m-4-4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="/le-coaching" className="btn-secondary">
                {content.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {content.hero.stats.map((stat, idx) => (
                <div key={idx}>
                  <dt
                    className={`font-serif text-3xl ${
                      STAT_COLORS[idx % STAT_COLORS.length]
                    }`}
                  >
                    {stat.value}
                  </dt>
                  <dd className="text-xs text-ink-muted mt-1">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 bg-accent-100/40 rounded-[3rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-sand-200">
              <Image
                src="/illustrations/hero.png"
                alt="Illustration d'un chemin vers le soleil levant"
                width={1200}
                height={800}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION / PHILOSOPHIE */}
      <section className="py-14 md:py-20">
        <div className="container-prose text-center">
          <span className="eyebrow">{content.philosophy.eyebrow}</span>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed mt-5 text-balance text-ink">
            {content.philosophy.quote}
          </p>
          <p className="text-sm text-ink-muted mt-4 italic">
            {content.philosophy.author}
          </p>
        </div>
      </section>

      {/* 3 PRESTATIONS */}
      <section className="py-14 md:py-20 bg-white border-y border-sand-200">
        <div className="container-full">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="eyebrow">{content.services.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">
              {content.services.title}
            </h2>
            <p className="body-text mt-4">{content.services.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {content.services.items.map((item, idx) => (
              <Link
                key={idx}
                href={SERVICE_LINKS[idx] ?? "/coaching"}
                className="card group block"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-colors ${SERVICE_BUBBLE_CLASSES[idx]}`}
                >
                  {SERVICE_ICONS[idx]}
                </div>
                <h3 className="h-sub mb-3">{item.title}</h3>
                <p className="body-text mb-5">{item.description}</p>
                <span className="btn-ghost">
                  {item.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10m-4-4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="py-14 md:py-20">
        <div className="container-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-bo/10 rounded-[2.5rem] blur-2xl" />
            <Image
              src="/illustrations/coaching.png"
              alt="Illustration d'une conversation de coaching"
              width={800}
              height={800}
              className="relative rounded-[2rem] w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">{content.approach.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">
              {content.approach.title}
            </h2>
            <p className="body-text mt-5">{content.approach.paragraph1}</p>
            <p className="body-text mt-3">{content.approach.paragraph2}</p>
            <div className="mt-8">
              <Link href="/coach" className="btn-secondary">
                {content.approach.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="py-12 md:py-16 bg-accent-100/40">
        <div className="container-prose text-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            className="mx-auto text-accent-400 mb-4"
            fill="currentColor"
          >
            <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
          </svg>
          <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed text-accent-700 text-balance">
            {content.citation.quote}
          </blockquote>
          <p className="mt-4 text-accent-600 italic">
            {content.citation.author}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="container-prose">
          <div className="rounded-[2rem] bg-gradient-to-br from-bo to-bo-dark px-8 md:px-14 py-12 md:py-16 text-center text-sand-50 shadow-xl">
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-balance">
              {content.finalCta.title}
            </h2>
            <p className="mt-4 text-sand-50/90 max-w-xl mx-auto text-balance">
              {content.finalCta.description}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-8 py-4 text-sm font-medium text-bo-dark transition-all hover:bg-white hover:-translate-y-0.5 shadow-md"
              >
                {content.finalCta.button}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10m-4-4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
