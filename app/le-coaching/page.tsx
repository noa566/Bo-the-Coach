import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Le coaching ?",
  description:
    "Le coaching, un processus de changement au service de vos objectifs personnels ou professionnels.",
};

const domaines = [
  {
    title: "Exprimer ses besoins et ses demandes",
    text: "Quand le « JE » me gêne (et que le « TU » tue).",
  },
  {
    title: "Traverser un changement",
    text: "Quand la vie nous propose ou nous impose des choix (famille, travail, retraite…).",
  },
  {
    title: "Se remettre en mouvement",
    text: "Quand le corps et l'esprit demandent un nouvel équilibre.",
  },
  {
    title: "La puissance du collectif",
    text: "Quand l'intelligence du groupe dépasse la somme des individualités.",
  },
  {
    title: "Jouer avec nos lumières et nos ombres",
    text: "Quand notre petit ange collabore avec le diablotin.",
  },
];

export default function LeCoachingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Le coaching ?"
        title="Le coaching…"
        subtitle="Un processus de changement au service de vos objectifs, personnels ou professionnels."
      />

      {/* C'est quoi ? */}
      <section className="py-20">
        <div className="container-prose">
          <span className="eyebrow">C'est quoi ?</span>
          <p className="body-text mt-4">
            Un espace pour prendre du recul, réfléchir autrement, clarifier vos
            priorités, faire des choix alignés et donner vie à vos intentions.
          </p>
        </div>
      </section>

      {/* Mes domaines de prédilection */}
      <section className="py-16 bg-white border-y border-sand-200">
        <div className="container-prose">
          <div className="text-center mb-12">
            <span className="eyebrow">Mes domaines de prédilection</span>
            <h2 className="h-section mt-3 text-balance">
              Ce que nous pouvons explorer ensemble
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-5">
            {domaines.map((d, i) => (
              <li
                key={d.title}
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

      {/* Déontologie */}
      <section className="py-20">
        <div className="container-prose">
          <span className="eyebrow">Déontologie</span>
          <h2 className="h-sub mt-4 text-balance">
            La déontologie est au cœur de l'action du coach : confidentialité
            et respect des personnes guident notre accompagnement.
          </h2>
          <p className="body-text mt-6">
            Le coach questionne, écoute, relance : je n'apporte pas les
            réponses, je vous accompagne pour faire émerger les vôtres. Ni
            thérapeute, ni conseiller, je suis un partenaire engagé à vos
            côtés : vous donnez la direction, et nous explorons ensemble les
            chemins qui mènent à vos objectifs pour passer à l'action.
          </p>
        </div>
      </section>

      {/* Comment ça se déroule ? */}
      <section className="py-20 bg-accent-100/40">
        <div className="container-prose">
          <span className="eyebrow">Comment ça se déroule ?</span>
          <h2 className="h-section mt-4 text-balance">Un cheminement clair</h2>

          <ol className="mt-12 relative space-y-10">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-accent-200 hidden md:block" />

            <li className="grid md:grid-cols-[40px_1fr] gap-4 md:gap-8">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-medium flex items-center justify-center">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">
                  La séance « fondation »
                </h3>
                <p className="body-text">
                  Nous commençons par une séance{" "}
                  <strong>gratuite et sans engagement</strong> pour faire
                  connaissance, vous présenter plus en détail ce qu'est le
                  coaching, clarifier vos attentes et répondre à vos questions.
                </p>
              </div>
            </li>

            <li className="grid md:grid-cols-[40px_1fr] gap-4 md:gap-8">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-medium flex items-center justify-center">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">L'accord écrit</h3>
                <p className="body-text">
                  Si nous décidons de poursuivre, un accord écrit précise notre
                  collaboration : objectifs, modalités et engagements
                  réciproques.
                </p>
              </div>
            </li>

            <li className="grid md:grid-cols-[40px_1fr] gap-4 md:gap-8">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-medium flex items-center justify-center">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Les séances</h3>
                <p className="body-text">
                  Le processus se déroule généralement sur{" "}
                  <strong>6 à 10 séances d'une heure</strong>, espacées d'une à
                  deux semaines. Les séances ont lieu en présentiel dans un
                  lieu calme, une pièce, un parc, ou si nécessaire en
                  visioconférence.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20">
        <div className="container-prose">
          <QuoteBlock
            variant="centered"
            quote="Le secret du changement est de concentrer toute votre énergie, non pas à lutter contre le passé, mais à construire l'avenir"
            author="Socrate"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">
            Curieux de tester une séance ?
          </h2>
          <p className="lead mt-5">
            La séance fondation est offerte. C'est l'occasion idéale pour
            commencer.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Réserver ma séance fondation
            </Link>
            <Link href="/tarifs" className="btn-secondary">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
