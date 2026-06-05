import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-24 pt-24 overflow-hidden bg-gradient-to-b from-sand-100 via-sand-50 to-sand-50">
        <div className="container-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
          <div className="animate-fade-in-up">
            <span className="eyebrow mb-5">Coaching mental · Genève</span>
            <h1 className="h-display mt-4 text-balance">
              Révéler votre <span className="text-accent-500 italic">potentiel</span>,
              un pas à la fois.
            </h1>
            <p className="lead mt-6 max-w-xl text-balance">
              Coaching personnel, coaching d'équipe et formations pour vous
              accompagner dans vos transitions, clarifier vos priorités et
              construire l'avenir qui vous ressemble.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Séance découverte gratuite
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
                Découvrir le coaching
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="font-serif text-3xl text-bo-dark">10+</dt>
                <dd className="text-xs text-ink-muted mt-1">
                  Années d'expérience
                </dd>
              </div>
              <div>
                <dt className="font-serif text-3xl text-bo-dark">FSEA</dt>
                <dd className="text-xs text-ink-muted mt-1">
                  Formateur certifié
                </dd>
              </div>
              <div>
                <dt className="font-serif text-3xl text-bo-dark">PNL</dt>
                <dd className="text-xs text-ink-muted mt-1">Praticien</dd>
              </div>
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
      <section className="py-20 md:py-28">
        <div className="container-prose text-center">
          <span className="eyebrow">Ma conviction</span>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed mt-6 text-balance text-ink">
            « Nous avons toutes et tous les capacités pour révéler notre
            potentiel, et vivre aligné avec nos aspirations profondes. »
          </p>
          <p className="text-sm text-ink-muted mt-4 italic">
            Boris Lazzarotto
          </p>
        </div>
      </section>

      {/* 3 PRESTATIONS */}
      <section className="py-20 md:py-24 bg-white border-y border-sand-200">
        <div className="container-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Mes accompagnements</span>
            <h2 className="h-section mt-4 text-balance">
              Trois espaces pour cheminer
            </h2>
            <p className="body-text mt-5">
              Chaque proposition s'adapte à vos besoins, à votre rythme et à
              votre contexte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Link href="/coaching" className="card group block">
              <div className="w-12 h-12 rounded-full bg-bo/15 flex items-center justify-center mb-6 group-hover:bg-bo/25 transition-colors">
                <svg
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
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="h-sub mb-3">Coaching personnel</h3>
              <p className="body-text mb-6">
                Un espace pour clarifier vos priorités, vous (re)connecter à
                vos ressources et passer à l'action avec sérénité.
              </p>
              <span className="btn-ghost">
                Explorer
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

            <Link href="/coaching" className="card group block">
              <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mb-6 group-hover:bg-accent-200 transition-colors">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent-600"
                >
                  <circle
                    cx="9"
                    cy="8"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="17"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 2-4.5 4.5-4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="h-sub mb-3">Coaching d'équipe</h3>
              <p className="body-text mb-6">
                Renforcer la dynamique collective, fluidifier la communication
                et accompagner les transitions de votre équipe.
              </p>
              <span className="btn-ghost">
                Explorer
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

            <Link href="/formation" className="card group block">
              <div className="w-12 h-12 rounded-full bg-bo/15 flex items-center justify-center mb-6 group-hover:bg-bo/25 transition-colors">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-bo-dark"
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
              </div>
              <h3 className="h-sub mb-3">Formation</h3>
              <p className="body-text mb-6">
                Des interventions sur mesure pour faire évoluer les pratiques,
                réaliser le potentiel et renforcer la dynamique.
              </p>
              <span className="btn-ghost">
                Explorer
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
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="py-20 md:py-28">
        <div className="container-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            <span className="eyebrow">Mon approche</span>
            <h2 className="h-section mt-4 text-balance">
              Un partenaire engagé à vos côtés
            </h2>
            <p className="body-text mt-6">
              Le coach questionne, écoute, relance. Je n'apporte pas les
              réponses, je vous accompagne pour faire émerger les vôtres. Ni
              thérapeute, ni conseiller, je suis un partenaire engagé à vos
              côtés : vous donnez la direction, et nous explorons ensemble les
              chemins qui mènent à vos objectifs pour passer à l'action.
            </p>
            <p className="body-text mt-4">
              La déontologie est au cœur de mon accompagnement :
              confidentialité et respect des personnes guident chaque échange.
            </p>
            <div className="mt-10">
              <Link href="/coach" className="btn-secondary">
                Découvrir mon parcours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="py-20 md:py-24 bg-accent-100/40">
        <div className="container-prose text-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="mx-auto text-accent-400 mb-6"
            fill="currentColor"
          >
            <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
          </svg>
          <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed text-accent-700 text-balance">
            Le secret du changement est de concentrer toute votre énergie, non
            pas à lutter contre le passé, mais à construire l'avenir.
          </blockquote>
          <p className="mt-6 text-accent-600 italic">Socrate</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="rounded-[2rem] bg-gradient-to-br from-bo to-bo-dark px-8 md:px-14 py-16 md:py-20 text-center text-sand-50 shadow-xl">
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-balance">
              Prêt à faire le premier pas ?
            </h2>
            <p className="mt-5 text-sand-50/90 max-w-xl mx-auto text-balance">
              La séance « fondation » est gratuite et sans engagement. C'est
              l'occasion de faire connaissance, de clarifier vos attentes et de
              répondre à vos questions.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-8 py-4 text-sm font-medium text-bo-dark transition-all hover:bg-white hover:-translate-y-0.5 shadow-md"
              >
                Réserver ma séance découverte
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
