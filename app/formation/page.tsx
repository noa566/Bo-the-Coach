import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Formation",
  description:
    "Formations sur mesure pour faire évoluer les pratiques, réaliser le potentiel et renforcer la dynamique d'équipe.",
};

const expertises = [
  {
    title: "Coopération et intelligence collective",
    text: "Vision, valeurs et objectifs communs",
  },
  {
    title: "Communication",
    text: "Qualité d'écoute, expression des besoins et ressentis, régulation des tensions",
  },
  {
    title: "Compétences psychosociales",
    text: "Gestion des émotions, pensée critique et créative, prise de décision",
  },
];

const applications = [
  {
    title: "Posture professionnelle et relationnelle",
    text: "Développer son assise et sa crédibilité, renforcer sa légitimité, trouver l'équilibre entre affirmation et coopération.",
  },
  {
    title: "Transmission et accompagnement",
    text: "Structurer ses messages, faciliter l'apprentissage, encourager l'autonomie et la responsabilisation.",
  },
  {
    title: "Dynamique d'équipe",
    text: "Créer un cadre clair, renforcer la confiance mutuelle, fluidifier la collaboration et soutenir l'engagement collectif.",
  },
  {
    title: "Organisation et efficacité",
    text: "Clarifier les responsabilités, prioriser efficacement, ajuster les modes de travail pour gagner en cohérence.",
  },
  {
    title: "Développement et adaptation professionnelle",
    text: "Mobiliser ses ressources, faire face aux changements, consolider sa capacité d'évolution.",
  },
];

export default function FormationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formation"
        title="Formation"
        subtitle="Faire évoluer les pratiques — Réaliser le potentiel — Renforcer la dynamique"
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container-prose">
          <p className="body-text">
            Vous souhaitez monter en compétences avec votre équipe ou
            développer un savoir-faire spécifique ? Je propose des formations
            pour progresser avec sens, engagement et efficacité, dans un cadre
            professionnel ou associatif. Mes interventions sont conçues pour
            répondre à vos besoins en tenant compte de vos réalités de terrain
            (de la 1/2 journée à plusieurs jours), toujours avec une approche
            participative et ancrée dans l'expérience.
          </p>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="py-16 bg-white border-y border-sand-200">
        <div className="container-full">
          <div className="text-center mb-12">
            <span className="eyebrow">Mes domaines d'expertise</span>
            <h2 className="h-section mt-3 text-balance">
              Trois piliers pour vos formations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {expertises.map((e, i) => (
              <div
                key={e.title}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-8 hover:border-bo/40 hover:shadow-md transition-all"
              >
                <div className="font-serif text-3xl text-accent-500 mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">
                  {e.title}
                </h3>
                <p className="body-text text-[15px]">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications possibles */}
      <section className="py-20">
        <div className="container-full grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">Applications possibles</span>
            <h2 className="h-section mt-4 text-balance">
              Des formations adaptées à vos enjeux
            </h2>
            <p className="body-text mt-6">
              Chaque intervention est conçue sur mesure, après un échange
              approfondi pour comprendre vos attentes, votre contexte et les
              résultats visés.
            </p>
            <div className="relative mt-10 hidden lg:block">
              <Image
                src="/illustrations/growth.png"
                alt="Illustration d'un arbre en croissance"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto shadow-md"
              />
            </div>
          </div>

          <ul className="space-y-5">
            {applications.map((a, i) => (
              <li
                key={a.title}
                className="rounded-2xl border border-sand-200 bg-white p-6 md:p-7 hover:border-bo/40 hover:shadow-md transition-all"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-xl text-bo-dark shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-medium mb-2">
                      {a.title}
                    </h3>
                    <p className="body-text text-[15px]">{a.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-accent-100/40">
        <div className="container-prose">
          <QuoteBlock
            variant="centered"
            quote="Apprendre c'est vouloir progresser, c'est être animé d'une passion, d'une soif intense de découverte"
            author="Jiddu Krishnamurti"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">
            Vous avez un projet de formation ?
          </h2>
          <p className="lead mt-5">
            Parlons-en ensemble pour construire une intervention sur mesure.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Demander un devis
            </Link>
            <Link href="/tarifs" className="btn-secondary">
              Tarifs formation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
