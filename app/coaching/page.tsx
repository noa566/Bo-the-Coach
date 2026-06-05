import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Coaching personnel et d'équipe",
  description:
    "Coaching personnel et d'équipe à Genève : développer vos compétences, clarifier le sens de votre vie, combiner performance et équilibre, accompagner votre équipe.",
};

type Orientation = {
  number: string;
  title: string;
  subtitle: string;
  quote: { text: string; author: string };
  items: { strong: string; text: string }[];
};

const orientations: Orientation[] = [
  {
    number: "01",
    title: "Développez vos compétences",
    subtitle: "Passer de « je voudrais pouvoir faire » à « je le fais »",
    quote: {
      text: "Tu me dis, j'oublie. Tu m'enseignes, je m'en souviens. Tu m'impliques, j'apprends.",
      author: "Benjamin Franklin",
    },
    items: [
      {
        strong: "Communiquer",
        text: "exprimer son intention, développer son écoute, renforcer la confiance mutuelle",
      },
      {
        strong: "S'affirmer",
        text: "oser dire qui on est et ce qu'on pense, prendre du recul, exprimer ses besoins",
      },
      {
        strong: "Prioriser",
        text: "organiser votre temps, faire des choix, concilier engagement et équilibre",
      },
      {
        strong: "Gérer des projets et coopérer",
        text: "donner un cap, clarifier les objectifs et les rôles, mobiliser les énergies",
      },
      {
        strong: "S'adapter au changement",
        text: "traverser les transitions avec souplesse, s'ajuster, rester agile et aligné",
      },
    ],
  },
  {
    number: "02",
    title: "Clarifiez le sens de votre vie",
    subtitle: "Abandonner le pilote automatique et reprendre le volant",
    quote: {
      text: "La question n'est pas de savoir si « la vie a un sens », mais comment pourrais-je donner un sens à ma propre vie.",
      author: "Tenzin Gyatso, XIVème Dalaï Lama",
    },
    items: [
      {
        strong: "Se comprendre",
        text: "identifier vos valeurs, clarifier vos besoins et vos ressources, aborder ses pensées limitantes",
      },
      {
        strong: "S'accepter",
        text: "reconnaître et accueillir ses émotions pour en faire des alliées",
      },
      {
        strong: "Se (re)construire",
        text: "prendre sa place, s'affranchir du regard des autres, renforcer sa confiance",
      },
      {
        strong: "Redonner du sens",
        text: "à son travail ou à ses projets, définir ses priorités, retrouver du mouvement et de l'envie",
      },
      {
        strong: "Changer de cap",
        text: "faire des choix alignés, aborder le changement avec sérénité et motivation",
      },
    ],
  },
  {
    number: "03",
    title: "Combinez performance et équilibre",
    subtitle: "Donner le meilleur de soi-même sans s'épuiser",
    quote: {
      text: "Certains veulent que ça arrive, d'autres aimeraient que ça arrive et quelques-uns font en sorte que ça arrive",
      author: "Michael Jordan",
    },
    items: [
      {
        strong: "S'organiser et gérer le temps",
        text: "poser les bonnes priorités, faire des choix et gagner en efficacité",
      },
      {
        strong: "Définir ses objectifs",
        text: "clarifier où vous allez, pourquoi vous y allez… et comment y aller !",
      },
      {
        strong: "S'engager avec motivation",
        text: "garder le cap sur la durée même quand les obstacles surviennent",
      },
      {
        strong: "Gérer le stress",
        text: "faire face à l'imprévu, apprendre à rester centré·e, se ressourcer et mobiliser son énergie",
      },
      {
        strong: "Leadership",
        text: "asseoir votre posture, affiner votre impact, co-construire, embarquer votre équipe sans vous oublier",
      },
    ],
  },
  {
    number: "04",
    title: "Accompagnez votre équipe",
    subtitle: "Renforcer la dynamique collective et la coopération",
    quote: {
      text: "Le travail d'équipe… c'est le carburant qui permet aux gens ordinaires d'atteindre des résultats hors du commun",
      author: "Andrew Carnegie",
    },
    items: [
      {
        strong: "Communication et relations internes",
        text: "mieux se comprendre, réguler les tensions, retrouver du lien",
      },
      {
        strong: "Vision et alignement",
        text: "s'accorder sur une direction, des valeurs communes, un cap motivant",
      },
      {
        strong: "Rôles et responsabilités",
        text: "clarifier les attentes, renforcer la confiance, fluidifier les délégations",
      },
      {
        strong: "Fonctionnement collectif",
        text: "ajuster les modes de décision, revisiter les réunions, gagner en agilité",
      },
      {
        strong: "Transitions et changements",
        text: "traverser une réorganisation, accueillir de nouveaux membres, construire une nouvelle dynamique",
      },
    ],
  },
];

export default function CoachingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coaching personnel et d'équipe"
        title="Quel coaching ?"
        subtitle="Je vous propose plusieurs orientations pour répondre à vos objectifs. Vous déterminez la direction au début du processus selon vos besoins, qui se combinent souvent lors de l'accompagnement."
      />

      <section className="py-20 md:py-24">
        <div className="container-full">
          <p className="lead text-center max-w-3xl mx-auto">
            Voici quelques exemples concrets de thèmes que nous pouvons aborder
            ensemble.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {orientations.map((o) => (
              <article
                key={o.title}
                className="rounded-3xl bg-white border border-sand-200 p-8 md:p-10 transition-all hover:shadow-lg hover:border-bo/30 flex flex-col"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-serif text-3xl text-bo-dark">
                    {o.number}
                  </span>
                  <div className="h-px flex-1 bg-sand-200" />
                </div>
                <h2 className="font-serif text-2xl md:text-[26px] font-medium mt-2 mb-2 leading-snug">
                  {o.title}
                </h2>
                <p className="text-sm uppercase tracking-wider text-bo-dark/80 mb-6">
                  {o.subtitle}
                </p>

                <figure className="quote-block mb-7">
                  <blockquote className="font-serif text-base italic leading-relaxed">
                    « {o.quote.text} »
                  </blockquote>
                  <figcaption className="quote-author">
                    {o.quote.author}
                  </figcaption>
                </figure>

                <ul className="space-y-3 mt-auto">
                  {o.items.map((it) => (
                    <li
                      key={it.strong}
                      className="text-[15px] leading-relaxed text-ink-soft"
                    >
                      <strong className="text-ink font-medium">
                        {it.strong} :{" "}
                      </strong>
                      {it.text}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-100/40">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">
            Quelle orientation résonne avec vous ?
          </h2>
          <p className="lead mt-5 text-balance">
            Discutons-en lors d'une séance fondation, offerte et sans
            engagement.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
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
