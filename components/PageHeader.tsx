type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative bg-gradient-to-b from-sand-100 to-sand-50 border-b border-sand-200">
      <div className="container-prose py-20 md:py-28 text-center animate-fade-in-up">
        {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
        <h1 className="h-display mt-3 text-balance">{title}</h1>
        {subtitle && (
          <p className="lead mt-6 max-w-2xl mx-auto text-balance">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
