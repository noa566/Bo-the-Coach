/**
 * Dégradés circulaires flottants placés en arrière-plan d'une page.
 * Le parent doit être `relative` (et idéalement `overflow-x-clip`).
 * Les halos se répartissent sur toute la hauteur via des `top` en %, donc
 * s'adaptent automatiquement aux pages longues ou courtes.
 */
export default function PageHalos() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Bo (terracotta) — gauche, haut */}
      <div className="absolute top-[3%] -left-24 h-72 w-72 rounded-full bg-bo/20 halo animate-float-slow" />
      {/* Accent (violet) — droite, haut */}
      <div className="absolute top-[14%] -right-28 h-80 w-80 rounded-full bg-accent-200/45 halo animate-float" />
      {/* Joy (doré) — centre haut */}
      <div className="absolute top-[26%] left-1/3 h-44 w-44 rounded-full bg-joy-200/55 halo animate-pulse-soft" />
      {/* Sage (vert) — gauche, milieu */}
      <div className="absolute top-[42%] -left-20 h-72 w-72 rounded-full bg-sage-200/45 halo animate-float-slow" />
      {/* Bo — droite, milieu */}
      <div className="absolute top-[54%] -right-24 h-64 w-64 rounded-full bg-bo/15 halo animate-float" />
      {/* Joy — centre bas */}
      <div className="absolute top-[68%] right-1/4 h-52 w-52 rounded-full bg-joy-200/50 halo animate-pulse-soft" />
      {/* Accent — gauche, bas */}
      <div className="absolute top-[82%] -left-28 h-80 w-80 rounded-full bg-accent-200/40 halo animate-float-slow" />
      {/* Bo — droite, bas */}
      <div className="absolute top-[94%] -right-20 h-64 w-64 rounded-full bg-bo/20 halo animate-float" />
    </div>
  );
}
