type Props = {
  quote: string;
  author: string;
  variant?: "default" | "centered";
};

export default function QuoteBlock({
  quote,
  author,
  variant = "default",
}: Props) {
  if (variant === "centered") {
    return (
      <figure className="my-12 text-center">
        <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-accent-600 text-balance max-w-3xl mx-auto">
          « {quote} »
        </blockquote>
        <figcaption className="mt-4 text-sm text-accent-500 italic">
          {author}
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="quote-block">
      <blockquote className="font-serif text-base italic leading-relaxed">
        « {quote} »
      </blockquote>
      <figcaption className="quote-author">{author}</figcaption>
    </figure>
  );
}
