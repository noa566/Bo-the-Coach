"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "fade";

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  threshold?: number;
  /** Kept for backwards-compat with previous API. Now always renders a div. */
  as?: string;
};

const HIDDEN: Record<Variant, string> = {
  up: "opacity-0 translate-y-6",
  left: "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
  scale: "opacity-0 scale-95",
  fade: "opacity-0",
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`will-change-transform transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
