type Props = {
  /** Kept for backwards compatibility with stored Firestore content but no longer rendered. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 to-sand-50 border-b border-sand-200">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-20 h-72 w-72 rounded-full bg-bo/25 halo animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent-200/50 halo animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/3 h-44 w-44 rounded-full bg-joy-200/60 halo animate-pulse-soft"
      />
      <div className="relative container-prose py-12 md:py-16 text-center animate-fade-in-up">
        <h1 className="h-display text-balance">{title}</h1>
        {subtitle && (
          <p className="lead mt-4 max-w-2xl mx-auto text-balance">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
