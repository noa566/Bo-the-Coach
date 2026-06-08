import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Ce qu'ils en disent : témoignages de personnes accompagnées par Boris Lazzarotto en coaching et en formation.",
};

const testimonials = [
  {
    text: "Grâce à son écoute sincère et sa présence humaine, j'ai pu me sentir en confiance dès la première séance. Il m'a aidé à prendre conscience de mes blocages intérieurs. Ses questions m'ont permis d'ouvrir une vraie réflexion sur moi-même. Aujourd'hui, je me sens mieux outillé pour avancer avec clarté.",
    author: "A.D.",
  },
  {
    text: "J'ai vraiment pris plaisir à suivre le processus de coaching avec Boris. Bienveillant, chaleureux et attentif, il sait écouter et comprendre les besoins du coaché, tout en proposant des outils à la fois pertinents et inspirants. Son approche crée un cadre où l'on se sent en confiance, encouragé à avancer et à clarifier ses projets.",
    author: "T.A.",
  },
  {
    text: "Nous avons fait appel à Boris pour une formation d'une demi-journée destinée à nos moniteurs de cours, et nous en avons été ravis. Sa pédagogie, la variété des supports et la qualité générale de la formation ont été particulièrement appréciées. La communication a également été facile : nous avons échangé en amont sur nos attentes et le thème principal, puis nous sommes restés en contact tout au long de la préparation. Toujours très disponible, Boris a montré une réelle motivation dès la présentation de notre projet. Les exercices et exemples proposés étaient variés, interactifs et adaptés, ce que les participants ont beaucoup apprécié. Grâce à la diversité des supports et à la participation active de nos moniteurs, tous sont repartis enrichis de cette expérience avec de nouvelles clés pour leurs cours. Merci pour ta motivation et ton implication.",
    author: "C.J. — Club sportif",
    long: true,
  },
  {
    text: "J'ai suivi un accompagnement de 6 séances, et cette expérience a été extrêmement bénéfique pour moi. Dès le début, Boris a su instaurer un cadre bienveillant, dans lequel je me suis senti écouté, respecté et en confiance. Son approche, à la fois professionnelle et humaine, m'a permis de prendre du recul sur ma situation, de clarifier mes priorités, et d'identifier les leviers d'action possibles. Grâce à nos échanges, j'ai notamment appris à dire non, à me détacher de ce qui ne m'appartient pas, et à pratiquer davantage le lâcher-prise — des compétences essentielles que j'applique désormais au quotidien. Boris m'a aidé à mieux comprendre certains schémas, à gagner en sérénité, et à avancer avec plus de clarté. Je recommande vivement son accompagnement à toute personne en recherche de changement, d'équilibre ou de développement personnel.",
    author: "A.Z.",
    long: true,
  },
  {
    text: "J'ai apprécié la franchise et la transparence de nos échanges. Ils m'ont fait comprendre que si le chemin paraît parfois compliqué, l'important est de rester en mouvement, même quand la pente semble raide : des petits pas, en valorisant mes réussites. Merci pour les outils que tu m'as aidé à comprendre et mettre en pratique (exprimer mon besoin clairement avec l'approche de la communication non-violente). Merci de m'avoir accompagnée et m'avoir montré que je possède des ressources parmi lesquelles je peux puiser des forces pour avancer et construire mon futur.",
    author: "D.F.",
  },
];

export default function TemoignagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Témoignages"
        title="Témoignages"
        subtitle="Ce sont eux qui en parlent le mieux."
      />

      <section className="py-20 md:py-24">
        <div className="container-full">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className={`rounded-3xl border border-sand-200 bg-white p-8 md:p-10 hover:shadow-lg hover:border-bo/30 transition-all relative ${
                  t.long ? "md:col-span-2" : ""
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="absolute top-6 right-6 text-bo/30"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
                </svg>

                <blockquote className="body-text italic pr-10">
                  « {t.text} »
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-sand-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-bo to-accent-400 flex items-center justify-center text-white text-sm font-medium">
                    {t.author
                      .split(" ")[0]
                      .replace(/[.,]/g, "")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <span className="font-medium text-ink">{t.author}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-100/40">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">
            Envie de vivre votre propre cheminement ?
          </h2>
          <p className="lead mt-5">
            La première étape est une séance fondation, gratuite et sans
            engagement.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Réserver ma séance fondation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
