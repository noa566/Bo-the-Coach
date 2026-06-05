import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Votre coach et formateur — Boris Lazzarotto",
  description:
    "Boris Lazzarotto, coach professionnel certifié, formateur d'adultes (FSEA), praticien PNL et accompagnant à Genève.",
};

const formations = [
  "Coaching professionnel (certification 2026)",
  "Coaching d'équipe",
  "Formateur d'adultes (certificat FSEA)",
  "Praticien PNL",
  "Parcours de cadre à l'État de Genève : gestion d'équipes et de projets, conception & animation de formations, communication, gestion de conflits, motivation, priorités…",
  "Expert-coach J+S et coordinateur de sport OFSPO",
];

export default function CoachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Votre coach et formateur"
        title="Boris Lazzarotto"
        subtitle="« Citoyen du monde », passionné par la rencontre, la transmission et la transformation."
      />

      <section className="py-20 md:py-24">
        <div className="container-full grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          <div className="relative lg:sticky lg:top-32">
            {/* Portrait placeholder — replace with a real photo of Boris */}
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-accent-100 via-sand-100 to-bo/30 shadow-xl border border-sand-200 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="mx-auto w-28 h-28 rounded-full bg-white/60 flex items-center justify-center mb-4 backdrop-blur-sm">
                  <span className="font-serif text-4xl text-bo-dark">BL</span>
                </div>
                <p className="text-xs text-ink-muted italic">
                  Remplacer par la photo de Boris
                  <br />
                  (public/boris.jpg)
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="body-text">
              Fruit d'un papa vénitien et d'une maman de Haute-Savoie, né et
              vivant à Genève, je préfère me présenter comme{" "}
              <em>« citoyen du monde »</em>.
            </p>
            <p className="body-text">
              Mon parcours professionnel m'a enrichi d'expériences dans la
              finance, le travail social, et la formation dans le domaine
              sportif avec un focus sur la prévention et les compétences
              sociales.
            </p>
            <p className="body-text">
              Mon parcours de vie m'a constamment guidé à la rencontre de
              l'autre, source intarissable d'échanges et d'apprentissages.
              Fasciné par notre diversité et notre richesse, cela m'a
              naturellement conduit vers la formation d'adultes et le coaching
              professionnel.
            </p>
            <p className="body-text">
              Accompagner les personnes sur le chemin de l'apprentissage et de
              l'autonomie me passionne. Ressentir chez chacun·e la joie d'un
              nouveau pas en avant vers plus d'équilibre me donne de l'énergie.
              Goûter à la puissance de la transformation me ressource. Moi qui
              adore le vélo, c'est comme une montée fluide en tandem, où chaque
              coup de pédale alimente notre ampoule intérieure qui éclaire la
              route.
            </p>
          </div>
        </div>
      </section>

      {/* Conviction / Engagement */}
      <section className="py-20 bg-white border-y border-sand-200">
        <div className="container-prose grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">Ma conviction</span>
            <p className="font-serif text-xl md:text-2xl leading-snug mt-4 text-balance">
              Nous avons toutes et tous les capacités pour révéler notre
              potentiel, et vivre aligné avec nos aspirations profondes.
            </p>
          </div>
          <div>
            <span className="eyebrow">Mon engagement</span>
            <p className="font-serif text-xl md:text-2xl leading-snug mt-4 text-balance">
              Œuvrer pour que nous puissions offrir au monde la meilleure
              version de nous-même… et à nous-même aussi !
            </p>
          </div>
        </div>
      </section>

      {/* Inspiration quote */}
      <section className="py-20">
        <div className="container-prose">
          <div className="text-center">
            <span className="eyebrow">Mon inspiration</span>
            <QuoteBlock
              variant="centered"
              quote="La vie est un défi à relever, un bonheur à découvrir, une aventure à tenter"
              author="Mère Teresa"
            />
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-20 md:py-24 bg-accent-100/40">
        <div className="container-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">Mes formations</span>
            <h2 className="h-section mt-4 text-balance">
              Un parcours certifié et complet
            </h2>
            <ul className="mt-8 space-y-4">
              {formations.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                  <span className="body-text">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/illustrations/team.png"
              alt="Illustration d'un groupe en formation"
              width={800}
              height={800}
              className="rounded-[2rem] w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-prose text-center">
          <h2 className="h-section text-balance">
            Envie d'échanger autour d'un projet ?
          </h2>
          <p className="lead mt-5">
            La première séance est offerte, sans engagement.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
