import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteBlock from "@/components/QuoteBlock";
import { getPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Le coaching ?",
  description:
    "Le coaching, un processus de changement au service de vos objectifs personnels ou professionnels.",
};

export default async function LeCoachingPage() {
  const c = await getPageContent("leCoaching");

  return (
    <>
      <PageHeader
        eyebrow={c.header.eyebrow}
        title={c.header.title}
        subtitle={c.header.subtitle}
      />

      <section className="py-20">
        <div className="container-prose">
          <span className="eyebrow">{c.whatIs.eyebrow}</span>
          <p className="body-text mt-4">{c.whatIs.text}</p>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-sand-200">
        <div className="container-prose">
          <div className="text-center mb-12">
            <span className="eyebrow">{c.domains.eyebrow}</span>
            <h2 className="h-section mt-3 text-balance">{c.domains.title}</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-5">
            {c.domains.items.map((d, i) => (
              <li
                key={i}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-6 transition-all hover:border-bo/40 hover:shadow-md"
              >
                <span className="font-serif text-xs text-bo-dark">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-lg font-medium mt-2 mb-2">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft italic">
                  {d.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose">
          <span className="eyebrow">{c.deontology.eyebrow}</span>
          <h2 className="h-sub mt-4 text-balance">{c.deontology.headline}</h2>
          <p className="body-text mt-6">{c.deontology.paragraph}</p>
        </div>
      </section>

      <section className="py-20 bg-accent-100/40">
        <div className="container-prose">
          <span className="eyebrow">{c.process.eyebrow}</span>
          <h2 className="h-section mt-4 text-balance">{c.process.title}</h2>

          <ol className="mt-12 relative space-y-10">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-accent-200 hidden md:block" />

            {c.process.steps.map((step, i) => {
              const stepColors = [
                "bg-bo text-white",
                "bg-joy-500 text-bo-dark",
                "bg-sage-600 text-white",
              ];
              return (
                <li
                  key={i}
                  className="grid md:grid-cols-[40px_1fr] gap-4 md:gap-8"
                >
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center ${
                        stepColors[i % stepColors.length]
                      }`}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                    <p className="body-text">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose">
          <QuoteBlock
            variant="centered"
            quote={c.quote.text}
            author={c.quote.author}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">{c.cta.title}</h2>
          <p className="lead mt-5">{c.cta.lead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              {c.cta.primaryButton}
            </Link>
            <Link href="/tarifs" className="btn-secondary">
              {c.cta.secondaryButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
